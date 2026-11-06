import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { COMPANY } from "@/lib/config";
import { PRODUCTS_LIST } from "@/data/product";
import { formatHours, formatPhone, mapsUrl, whatsappUrl } from "@/lib/format";

const COMPANY_LINKS = [
  { href: "/#about", label: "About us" },
  { href: "/#industries", label: "Industries" },
  { href: "/#contact", label: "Contact" },
  { href: "/#faq", label: "FAQs" },
  { href: "/butter-paper", label: "Butter paper guide" },
  { href: "/blogs", label: "Blogs" },
] as const;

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  focusable: false,
};

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.9 1.4 1.4 0 000-2.9z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg {...iconProps}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 0C5.37 0 0 5.37 0 12c0 2.13.56 4.13 1.53 5.86L.05 23.25a.75.75 0 00.92.92l5.49-1.49A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 22a9.96 9.96 0 01-5.07-1.39l-.36-.21-3.76 1.02 1-3.65-.24-.37A9.96 9.96 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    href: COMPANY.social.instagram,
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: COMPANY.social.facebook,
    Icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: COMPANY.social.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "WhatsApp",
    href: whatsappUrl(COMPANY.whatsapp),
    Icon: WhatsAppIcon,
  },
] as const;

const MARKETPLACES = [
  {
    label: "IndiaMART",
    href: COMPANY.marketplaces.indiamart,
    // WebP: the original SVG was 387 KB of traced paths
    src: "/icons/indiamart.webp",
  },
  {
    label: "JustDial",
    href: COMPANY.marketplaces.justdial,
    src: "/icons/justdial.svg",
  },
  {
    label: "TradeIndia",
    href: COMPANY.marketplaces.tradeindia,
    src: "/icons/tradeindia.svg",
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link
            href="/"
            className={styles.logoLink}
          >
            <Image
              src="/logo.webp"
              alt={`${COMPANY.name} home`}
              width={157}
              height={75}
              className={styles.logo}
            />
          </Link>
          <p className={styles.desc}>
            Specialty paper solutions for businesses across India, with a focus
            on greaseproof (OGR), one side OGR, glassine, MG poster paper and
            bleached kraft.
          </p>

          <ul
            className={styles.socials}
            aria-label="Social media"
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.socialLink}
                  aria-label={`${COMPANY.name} on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <nav aria-labelledby="footer-products">
          <h2
            id="footer-products"
            className={styles.heading}
          >
            Products
          </h2>
          <ul className={styles.links}>
            {PRODUCTS_LIST.map(({ slug, label }) => (
              <li key={slug}>
                <Link href={`/products/${slug}`}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-labelledby="footer-company">
          <h2
            id="footer-company"
            className={styles.heading}
          >
            Company
          </h2>
          <ul className={styles.links}>
            {COMPANY_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact: same details and hours as the structured data.
            A div, not <section>: globals.css pads every <section>. */}
        <div>
          <h2
            id="footer-contact"
            className={styles.heading}
          >
            Contact
          </h2>
          <address className={styles.address}>
            <ul className={styles.contact}>
              <li>
                <a
                  href={mapsUrl(`${COMPANY.name}, ${COMPANY.city}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {COMPANY.address}
                </a>
              </li>
              {COMPANY.phones.map((num) => (
                <li key={num}>
                  <a href={`tel:${num}`}>{formatPhone(num)}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li className={styles.muted}>{formatHours(COMPANY.hours)}</li>
            </ul>
          </address>
        </div>
      </div>

      {/* Marketplaces */}
      <div className={styles.marketplaces}>
        <p
          id="footer-marketplaces"
          className={styles.marketLabel}
        >
          Also find us on
        </p>
        <ul
          className={styles.marketList}
          aria-labelledby="footer-marketplaces"
        >
          {MARKETPLACES.map(({ label, href, src }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.marketTile}
              >
                <Image
                  src={src}
                  alt={`${COMPANY.name} on ${label}`}
                  width={52}
                  height={28}
                  className={styles.marketImg}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {year} {COMPANY.name}. All rights reserved.
        </p>
        <nav
          className={styles.legal}
          aria-label="Legal"
        >
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </nav>
      </div>
    </footer>
  );
}
