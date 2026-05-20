import Link from "next/link";
import styles from "./Footer.module.css";
import { COMPANY as COMPANY_CONFIG, BASE_URL } from "@/lib/config";
import { PRODUCTS_LIST } from "@/data/product";

// ── Company nav links ─────────────────────────────────────────────────────────
const COMPANY_LINKS = [
  { href: "/#about", label: "About Us" },
  { href: "/#industries", label: "Industries" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

const SOCIALS = [
  { href: COMPANY_CONFIG.social[0], label: "📷", title: "Instagram" },
  { href: COMPANY_CONFIG.social[1], label: "f", title: "Facebook" },
  { href: "#", label: "in", title: "LinkedIn" },
  { href: "#", label: "📱", title: "WhatsApp" },
];

const currentYear = new Date().getFullYear(); // ← auto-updates every year

export default function Fat() {
  return (
    <footer
      className={styles.footer}
      aria-label="Site footer"
    >
      <div className={styles.grid}>
        {/* Brand */}
        <div>
          <Link
            href="/"
            className={styles.logo}
            aria-label="Mudit Paper Company Home"
          >
            MUDIT
            <br />
            <span>PAPER</span> COMPANY
          </Link>
          <p className={styles.desc}>
            Trusted supplier of certified food-grade paper products. Serving
            India&apos;s food industry with quality &amp; integrity since 2009.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map(({ href, label, title }) => (
              <a
                key={title}
                href={href}
                className={styles.socialBtn}
                title={title}
                aria-label={`Follow Mudit Paper Company on ${title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Products — auto-generated from data */}
        <nav aria-label="Products">
          <div className={styles.colTitle}>Products</div>
          <ul className={styles.links}>
            {PRODUCTS_LIST.map(({ slug, label }) => (
              <li key={slug}>
                <Link href={`/products/${slug}`}>
                  {" "}
                  {/* ← real product URLs */}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <div className={styles.colTitle}>Company</div>
          <ul className={styles.links}>
            {COMPANY_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <address className={styles.contactCol}>
          <div className={styles.colTitle}>Contact</div>
          <ul className={styles.links}>
            <li>
              <a
                href={`https://maps.google.com/?q=Kanpur,Uttar+Pradesh,India`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {COMPANY_CONFIG.address}
              </a>
            </li>
            <li>
              <a href={`tel:${COMPANY_CONFIG.phone}`}>{COMPANY_CONFIG.phone}</a>
            </li>
            <li>
              <a href={`mailto:${COMPANY_CONFIG.email}`}>
                {COMPANY_CONFIG.email}
              </a>
            </li>
            <li>Mon–Sat, 9AM–6PM</li>
          </ul>
        </address>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          © {currentYear} Mudit Paper Company. All rights reserved.{" "}
          {/* ← auto year */}
        </div>
        <div className={styles.legal}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
