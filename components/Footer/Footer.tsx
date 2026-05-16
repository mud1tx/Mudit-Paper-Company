import Link from "next/link";
import styles from "./Footer.module.css";

const PRODUCTS = [
  "Natural Kraft Paper",
  "Greaseproof Paper",
  "Butter / Wax Paper",
  "Parchment Paper",
  "Tissue Paper",
  "Custom Orders",
];

const COMPANY = [
  { href: "#about", label: "About Us" },
  { href: "#certifications", label: "Certifications" },
  { href: "#industries", label: "Industries" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const CONTACT_INFO = [
  "Kanpur, U.P., India",
  "+91 98XXX XXXXX",
  "info@muditpapercompany.com",
  "Mon–Sat, 9AM–6PM",
];

const SOCIALS = [
  { href: "#", label: "in", title: "LinkedIn" },
  { href: "#", label: "📱", title: "WhatsApp" },
  { href: "#", label: "📷", title: "Instagram" },
  { href: "#", label: "f", title: "Facebook" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div>
          <div className={styles.logo}>
            MUDIT
            <br />
            <span>PAPER</span> COMPANY
          </div>
          <p className={styles.desc}>
            Trusted supplier of certified food-grade paper products. Serving
            India&apos;s food industry with quality &amp; integrity since 2009.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map(({ href, label, title }) => (
              <Link
                key={title}
                href={href}
                className={styles.socialBtn}
                title={title}
                aria-label={title}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <div className={styles.colTitle}>Products</div>
          <ul className={styles.links}>
            {PRODUCTS.map((p) => (
              <li key={p}>
                <Link href="#">{p}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className={styles.colTitle}>Company</div>
          <ul className={styles.links}>
            {COMPANY.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className={styles.colTitle}>Contact</div>
          <ul className={styles.links}>
            {CONTACT_INFO.map((info) => (
              <li key={info}>
                <Link href="#">{info}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2025 Mudit Paper Company. All rights reserved.
        </div>
        <div className={styles.legal}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
