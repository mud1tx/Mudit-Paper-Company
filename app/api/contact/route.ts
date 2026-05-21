import { Resend } from "resend";
import { NextResponse } from "next/server";
import { COMPANY, BASE_URL } from "@/lib/config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      businessType,
      product,
      message,
    } = await req.json();

    await resend.emails.send({
      from: `${COMPANY.name} <onboarding@resend.dev>`,
      to: COMPANY.email,
      replyTo: email,
      subject: `🧾 New Enquiry — ${product} from ${firstName} ${lastName || ""}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Enquiry — ${COMPANY.name}</title>
</head>
<body style="margin:0; padding:0; background:#f5f0e8; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%;">

          <!-- ── HEADER ── -->
          <tr>
            <td style="background:#0f2d1c; padding: 32px 40px; border-radius: 8px 8px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-family:Georgia,serif; font-size:22px; font-weight:700; color:#f5f0e8; line-height:1.2;">
                      MUDIT<br/>
                      <span style="color:#c9a84c;">PAPER</span> COMPANY
                    </div>
                  </td>
                  <td align="right">
                    <div style="background:rgba(201,168,76,0.15); border:1px solid rgba(201,168,76,0.3); border-radius:100px; padding:6px 14px; display:inline-block;">
                      <span style="color:#c9a84c; font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase;">New Enquiry</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── GOLD DIVIDER ── -->
          <tr>
            <td style="background: linear-gradient(90deg, #c9a84c, #e0c070, #c9a84c); height:3px;"></td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="background:#ffffff; padding: 40px 40px 32px;">

              <!-- Greeting -->
              <p style="margin:0 0 8px; font-size:13px; color:#7a7a70; text-transform:uppercase; letter-spacing:0.08em; font-weight:600;">You have a new enquiry</p>
              <h1 style="margin:0 0 32px; font-family:Georgia,serif; font-size:26px; color:#1a1a18; font-weight:700; line-height:1.2;">
                ${firstName} ${lastName || ""} is interested in<br/>
                <span style="color:#1a4a2e;">${product}</span>
              </h1>

              <!-- ── CONTACT DETAILS ── -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding-bottom:6px;">
                    <p style="margin:0; font-size:11px; color:#7a7a70; text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Contact Details</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e4da; border-radius:6px; overflow:hidden; margin-bottom:28px;">
                <tr style="background:#f9f7f3;">
                  <td style="padding:12px 16px; width:35%; font-size:12px; font-weight:600; color:#7a7a70; text-transform:uppercase; letter-spacing:0.06em; border-bottom:1px solid #e8e4da;">Name</td>
                  <td style="padding:12px 16px; font-size:14px; color:#1a1a18; font-weight:500; border-bottom:1px solid #e8e4da;">${firstName} ${lastName || "—"}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-size:12px; font-weight:600; color:#7a7a70; text-transform:uppercase; letter-spacing:0.06em; border-bottom:1px solid #e8e4da;">Phone</td>
                  <td style="padding:12px 16px; font-size:14px; color:#1a1a18; font-weight:500; border-bottom:1px solid #e8e4da;">
                    ${
                      phone
                        ? `<a href="tel:+91${phone}" style="color:#1a4a2e; text-decoration:none; font-weight:600;">+91 ${phone}</a>`
                        : `<span style="color:#7a7a70;">Not provided</span>`
                    }
                  </td>
                </tr>
                <tr style="background:#f9f7f3;">
                  <td style="padding:12px 16px; font-size:12px; font-weight:600; color:#7a7a70; text-transform:uppercase; letter-spacing:0.06em; border-bottom:1px solid #e8e4da;">Email</td>
                  <td style="padding:12px 16px; font-size:14px; border-bottom:1px solid #e8e4da;">
                    <a href="mailto:${email}" style="color:#1a4a2e; text-decoration:none; font-weight:600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-size:12px; font-weight:600; color:#7a7a70; text-transform:uppercase; letter-spacing:0.06em; border-bottom:1px solid #e8e4da;">Business Type</td>
                  <td style="padding:12px 16px; font-size:14px; color:#1a1a18; font-weight:500; border-bottom:1px solid #e8e4da;">${businessType || "—"}</td>
                </tr>
                <tr style="background:#f9f7f3;">
                  <td style="padding:12px 16px; font-size:12px; font-weight:600; color:#7a7a70; text-transform:uppercase; letter-spacing:0.06em;">Product</td>
                  <td style="padding:12px 16px; border-radius:0 0 6px 0;">
                    <span style="background:#1a4a2e; color:#f5f0e8; font-size:12px; font-weight:600; padding:4px 12px; border-radius:100px;">${product}</span>
                  </td>
                </tr>
              </table>

              <!-- ── MESSAGE ── -->
              ${
                message
                  ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding-bottom:8px;">
                    <p style="margin:0; font-size:11px; color:#7a7a70; text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Message / Requirements</p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f9f7f3; border:1px solid #e8e4da; border-left:3px solid #c9a84c; border-radius:0 6px 6px 0; padding:16px 20px;">
                    <p style="margin:0; font-size:14px; color:#3d3d38; line-height:1.7; font-style:italic;">"${message}"</p>
                  </td>
                </tr>
              </table>
              `
                  : ""
              }

              <!-- ── CTA BUTTONS ── -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-top:8px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:12px;">
                          <a href="mailto:${email}"
                            style="display:inline-block; background:#1a4a2e; color:#f5f0e8; text-decoration:none; padding:12px 24px; border-radius:2px; font-size:13px; font-weight:600; letter-spacing:0.04em;">
                            ✉️ Reply to ${firstName}
                          </a>
                        </td>
                        <td>
                          <a href="tel:+91${phone || ""}"
                            style="display:inline-block; border:1.5px solid #1a4a2e; color:#1a4a2e; text-decoration:none; padding:11px 24px; border-radius:2px; font-size:13px; font-weight:600; letter-spacing:0.04em;">
                            📞 Call ${firstName}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── GOLD DIVIDER ── -->
          <tr>
            <td style="background: linear-gradient(90deg, #c9a84c, #e0c070, #c9a84c); height:2px;"></td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="background:#0f2d1c; padding:24px 40px; border-radius:0 0 8px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0; font-size:12px; color:rgba(245,240,232,0.5);">
                      Sent from
                      <a href="${BASE_URL}" style="color:#c9a84c; text-decoration:none;">${BASE_URL}</a>
                      contact form
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin:0; font-size:12px; color:rgba(245,240,232,0.5);">
                      ${COMPANY.name} · ${COMPANY.city}, India
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
