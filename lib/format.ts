// Shows "+916392935042" as "+91 63929 35042". Keep the raw value for tel: links.
export function formatPhone(num: string): string {
  const digits = num.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return num;
}

// wa.me expects the number as digits only, with no "+" or spaces
export function whatsappUrl(num: string): string {
  return `https://wa.me/${num.replace(/\D/g, "")}`;
}

// "18:00" → "6:00 PM"
function to12Hour(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${suffix}`;
}

// Shows COMPANY.hours as "Mon–Sat, 10:00 AM – 6:00 PM IST".
// Assumes the open days are consecutive, as they are today.
export function formatHours(hours: {
  readonly days: readonly string[];
  readonly opens: string;
  readonly closes: string;
}): string {
  const first = hours.days[0].slice(0, 3);
  const last = hours.days[hours.days.length - 1].slice(0, 3);
  return `${first}–${last}, ${to12Hour(hours.opens)} – ${to12Hour(hours.closes)} IST`;
}

// Google Maps search link that works on every device and opens the app on phones
export function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// "2026-10-28" → "October 28, 2026". UTC so the day never shifts by timezone.
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
