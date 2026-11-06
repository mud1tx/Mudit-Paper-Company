import { COMPANY } from "@/lib/config";
import { formatPhone, whatsappUrl } from "@/lib/format";
import styles from "./TopBar.module.css";

function LinkedInIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.054 23.25a.75.75 0 00.916.919l5.487-1.494A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 01-5.073-1.389l-.361-.214-3.757 1.023 1.001-3.649-.236-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className={styles.contactIcon}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className={styles.contactIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2.5"
      />
      <path d="m3 7 7.94 5.56a1.85 1.85 0 0 0 2.12 0L21 7" />
    </svg>
  );
}

const SOCIALS = [
  {
    href: COMPANY.social.linkedin,
    label: "Follow us on LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: COMPANY.social.instagram,
    label: "Follow us on Instagram",
    Icon: InstagramIcon,
  },
  {
    href: whatsappUrl(COMPANY.whatsapp),
    label: "Chat with us on WhatsApp",
    Icon: WhatsAppIcon,
  },
] as const;

export default function TopBar() {
  return (
    <div
      className={styles.bar}
      role="region"
      aria-label="Company contact information"
    >
      <div className={styles.inner}>
        {/* Left — social icons (hidden on smaller screens) */}
        <ul
          className={styles.socials}
          aria-label="Social media"
        >
          {SOCIALS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>

        {/* Right — phone numbers and email */}
        <ul
          className={styles.contacts}
          aria-label="Contact details"
        >
          {COMPANY.phones.map((num, index) => (
            <li
              key={num}
              className={index > 0 ? styles.secondPhone : undefined}
            >
              <a
                href={`tel:${num}`}
                className={styles.item}
                aria-label={`Call ${formatPhone(num)}`}
              >
                <PhoneIcon />
                <span>{formatPhone(num)}</span>
              </a>
            </li>
          ))}
          <li className={styles.emailItem}>
            <a
              href={`mailto:${COMPANY.email}`}
              className={styles.item}
            >
              <MailIcon />
              <span>{COMPANY.email}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
