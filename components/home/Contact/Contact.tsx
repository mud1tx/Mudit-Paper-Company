import styles from "./Contact.module.css";
import ContactFormLoader from "./ContactFormLoader";
import { COMPANY } from "@/lib/config";
import { formatHours, formatPhone, mapsUrl } from "@/lib/format";

// ── Icons ─────────────────────────────────────────────────────────────────────
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      {...iconProps}
    >
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle
        cx="12"
        cy="9.5"
        r="2.5"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      {...iconProps}
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      {...iconProps}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      {...iconProps}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
      />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
// Server component: the address, phone, email and hours are plain HTML and
// match the business structured data in the root layout. Only the form
// (ContactFormLoader) runs in the browser.
export default function Contact() {
  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-title"
    >
      {/* ── Info ── */}
      <div>
        <header className="reveal">
          <p className={styles.label}>Get in touch</p>
          <h2
            id="contact-title"
            className={styles.title}
          >
            Request a Quote or Sample
          </h2>
          <p className={styles.intro}>
            Whether you need a trial order or a regular supply, share your
            requirements and we will get back to you.
          </p>
        </header>

        <address className={`${styles.address} reveal`}>
          <ul className={styles.details}>
            <li className={styles.detail}>
              <span className={styles.detailIcon}>
                <PinIcon />
              </span>
              <div>
                <p className={styles.detailLabel}>Address</p>
                <a
                  href={mapsUrl(`${COMPANY.name}, ${COMPANY.city}`)}
                  className={styles.detailValue}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {COMPANY.address}
                </a>
              </div>
            </li>

            <li className={styles.detail}>
              <span className={styles.detailIcon}>
                <PhoneIcon />
              </span>
              <div>
                <p className={styles.detailLabel}>Phone</p>
                {COMPANY.phones.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num}`}
                    className={styles.detailValue}
                  >
                    {formatPhone(num)}
                  </a>
                ))}
              </div>
            </li>

            <li className={styles.detail}>
              <span className={styles.detailIcon}>
                <MailIcon />
              </span>
              <div>
                <p className={styles.detailLabel}>Email</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className={styles.detailValue}
                >
                  {COMPANY.email}
                </a>
              </div>
            </li>

            <li className={styles.detail}>
              <span className={styles.detailIcon}>
                <ClockIcon />
              </span>
              <div>
                <p className={styles.detailLabel}>Business hours</p>
                <p className={styles.detailText}>
                  {formatHours(COMPANY.hours)}
                </p>
              </div>
            </li>
          </ul>
        </address>
      </div>

      {/* ── Form ── */}
      <ContactFormLoader />
    </section>
  );
}
