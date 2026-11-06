import { NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY, BASE_URL } from "@/lib/config";
import { contactSchema, type ContactData } from "@/lib/contact";

export const runtime = "nodejs";

// A real enquiry is a few KB at most; anything bigger is rejected unread
const MAX_BODY_BYTES = 16 * 1024;

// Best-effort spam limit: 5 enquiries per IP per 10 minutes. It is kept in
// memory, so each server instance counts separately, but it stops one script
// from flooding the inbox and using up the Resend quota.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Drop stale entries now and then so the map cannot grow forever
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_LIMIT;
}

function clientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

// Browsers send Origin on every POST. Reject requests from other websites;
// allow a missing header so unusual browsers are not locked out.
function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

let resend: Resend | null = null;

// Escape user input before it goes into HTML
const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function esc(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ESCAPE_MAP[c]);
}

function buildSubject(data: ContactData): string {
  const name = [data.firstName, data.lastName].filter(Boolean).join(" ");
  // Strip line breaks so input can't inject extra email headers
  return `New enquiry: ${data.product} from ${name}`.replace(/[\r\n]+/g, " ");
}

function buildText(data: ContactData): string {
  return [
    `New website enquiry`,
    ``,
    `Name: ${data.firstName} ${data.lastName ?? ""}`.trim(),
    `Email: ${data.email}`,
    `Phone: ${data.phone ? `+91 ${data.phone}` : "Not provided"}`,
    `Business type: ${data.businessType}`,
    `Product: ${data.product}`,
    ``,
    `Requirements:`,
    data.message || "Not provided",
    ``,
    `Sent from ${BASE_URL}`,
  ].join("\n");
}

function buildHtml(data: ContactData): string {
  const row = (label: string, value: string, shaded: boolean) => `
    <tr style="background:${shaded ? "#f4f4f0" : "#ffffff"};">
      <td style="padding:12px 16px; width:36%; font-size:12px; font-weight:600; color:#6e7088; text-transform:uppercase; letter-spacing:0.06em; border-bottom:1px solid #e6e6ea;">${label}</td>
      <td style="padding:12px 16px; font-size:14px; color:#231f20; border-bottom:1px solid #e6e6ea;">${value}</td>
    </tr>`;

  const name = esc([data.firstName, data.lastName].filter(Boolean).join(" "));
  const phoneCell = data.phone
    ? `<a href="tel:+91${esc(data.phone)}" style="color:#1f2370; font-weight:600; text-decoration:none;">+91 ${esc(data.phone)}</a>`
    : `<span style="color:#6e7088;">Not provided</span>`;
  const emailCell = `<a href="mailto:${esc(data.email)}" style="color:#1f2370; font-weight:600; text-decoration:none;">${esc(data.email)}</a>`;

  const messageBlock = data.message
    ? `
    <p style="margin:28px 0 8px; font-size:12px; font-weight:600; color:#6e7088; text-transform:uppercase; letter-spacing:0.08em;">Requirements</p>
    <div style="background:#f4f4f0; border-left:3px solid #ec2427; border-radius:0 6px 6px 0; padding:16px 20px; font-size:14px; line-height:1.7; color:#231f20;">
      ${esc(data.message).replace(/\n/g, "<br/>")}
    </div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New enquiry: ${esc(data.product)}</title>
</head>
<body style="margin:0; padding:0; background:#f4f4f0; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px; width:100%; background:#ffffff; border-radius:8px; overflow:hidden;">

          <tr>
            <td style="background:#1f2370; padding:26px 32px;">
              <p style="margin:0; font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#ffffff;">${esc(COMPANY.name)}</p>
              <p style="margin:6px 0 0; font-size:12px; color:rgba(255,255,255,0.7);">New website enquiry</p>
            </td>
          </tr>

          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 6px; font-size:22px; line-height:1.3; color:#1f2370;">${esc(data.product)}</h1>
              <p style="margin:0 0 24px; font-size:14px; color:#41435a;">Enquiry from ${name}</p>

              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e6e6ea; border-radius:6px; border-collapse:separate; overflow:hidden;">
                ${row("Name", name, false)}
                ${row("Email", emailCell, true)}
                ${row("Phone", phoneCell, false)}
                ${row("Business type", esc(data.businessType), true)}
                ${row("Product", esc(data.product), false)}
              </table>

              ${messageBlock}

              <table cellpadding="0" cellspacing="0" role="presentation" style="margin-top:28px;">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="mailto:${esc(data.email)}" style="display:inline-block; background:#1f2370; color:#ffffff; text-decoration:none; padding:12px 22px; border-radius:6px; font-size:14px; font-weight:600;">Reply to ${esc(data.firstName)}</a>
                  </td>
                  ${
                    data.phone
                      ? `<td>
                    <a href="tel:+91${esc(data.phone)}" style="display:inline-block; border:1.5px solid #1f2370; color:#1f2370; text-decoration:none; padding:10px 22px; border-radius:6px; font-size:14px; font-weight:600;">Call ${esc(data.firstName)}</a>
                  </td>`
                      : ""
                  }
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#f4f4f0; padding:18px 32px; font-size:12px; color:#6e7088;">
              Submitted through the contact form at <a href="${esc(BASE_URL)}" style="color:#1f2370;">${esc(BASE_URL)}</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (Number(req.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Request too large" }, { status: 413 });
  }

  if (isRateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: { "Retry-After": String(RATE_WINDOW_MS / 1000) },
      },
    );
  }

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const data = parsed.data;

  // Honeypot filled in: pretend success so bots don't learn they were caught
  if (data.website) {
    return NextResponse.json({ success: true });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  // Created once and reused across requests
  resend ??= new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        `${COMPANY.name} <onboarding@resend.dev>`,
      to: COMPANY.email,
      replyTo: data.email,
      subject: buildSubject(data),
      html: buildHtml(data),
      text: buildText(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
