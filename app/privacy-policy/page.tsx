import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { COMPANY, BASE_URL } from "@/lib/config";
import styles from "../../styles/legal.module.css";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy of ${COMPANY.name}. Learn how we collect, use, and protect your personal data in compliance with India's IT Act 2000 and Digital Personal Data Protection Act 2023.`,
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "January 1, 2026";

const SECTIONS = [
  {
    id: "introduction",
    num: "01",
    title: "Introduction",
    content: `${COMPANY.name} ("we", "us", or "our") is committed to protecting your personal data and privacy. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website at ${BASE_URL} or contact us for business enquiries.`,
    highlight: `This policy is compliant with India's Information Technology Act, 2000, the IT (Amendment) Act 2008, the IT (Reasonable Security Practices) Rules, 2011, and the Digital Personal Data Protection Act, 2023.`,
  },
  {
    id: "information-we-collect",
    num: "02",
    title: "Information We Collect",
    content: `We collect the following personal information only when you voluntarily submit it through our contact form:`,
    list: [
      "Full name (first and last name)",
      "Phone number (10-digit Indian mobile number)",
      "Email address",
      "Business type and name",
      "Product of interest",
      "Message or requirements",
    ],
    extra: `We do not collect sensitive personal data such as financial information, passwords, or biometric data. We do not use cookies for tracking or advertising.`,
  },
  {
    id: "how-we-use",
    num: "03",
    title: "How We Use Your Information",
    content: `We use the information you provide solely for the following purposes:`,
    list: [
      "To respond to your business enquiry or quote request",
      "To send product samples or catalogues as requested",
      "To communicate about your order or supply requirements",
      "To improve our products and services based on feedback",
    ],
    extra: `We do not sell, rent, trade, or share your personal information with third parties for commercial purposes.`,
  },
  {
    id: "data-storage",
    num: "04",
    title: "Data Storage and Security",
    content: `We implement reasonable security practices as required under the IT (Reasonable Security Practices) Rules, 2011:`,
    list: [
      "Secure encrypted email transmission via Resend (SOC 2 compliant)",
      "Access restricted to authorised personnel only",
      "No storage of personal data in unsecured databases",
      "Regular review of data handling practices",
    ],
    extra: `We retain your enquiry data for a maximum of 2 years, after which it is securely deleted.`,
  },
  {
    id: "third-parties",
    num: "05",
    title: "Third-Party Services",
    content: `We use the following third-party service solely for email delivery:`,
    list: [
      "Resend (resend.com) — Email delivery service. Your enquiry data is transmitted through Resend's secure servers only to deliver your message to us.",
      "Vercel (vercel.com) — Website hosting. May collect basic server logs including IP addresses as part of standard hosting operations.",
    ],
  },
  {
    id: "your-rights",
    num: "06",
    title: "Your Rights",
    content: `Under India's Digital Personal Data Protection Act, 2023, you have the following rights:`,
    list: [
      "Right to access — Request a copy of personal data we hold about you",
      "Right to correction — Request correction of inaccurate personal data",
      "Right to erasure — Request deletion of your personal data",
      "Right to grievance redressal — File a complaint with our Grievance Officer",
      "Right to withdraw consent — Withdraw consent for data processing at any time",
    ],
    extra: `To exercise any of these rights, contact us at ${COMPANY.email}. We will respond within 30 days.`,
  },
  {
    id: "grievance-officer",
    num: "07",
    title: "Grievance Officer",
    content: `As required under the Information Technology Act, 2000, we have designated a Grievance Officer:`,
    list: [
      `Name: Owner, ${COMPANY.name}`,
      `Email: ${COMPANY.email}`,
      `Phone: ${COMPANY.phone}`,
      `Address: ${COMPANY.address}`,
      `Response time: Within 30 days of complaint`,
    ],
  },
  {
    id: "childrens-privacy",
    num: "08",
    title: "Children's Privacy",
    content: `Our website is intended for business use only. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected data from a minor, please contact us immediately at ${COMPANY.email}.`,
  },
  {
    id: "changes",
    num: "09",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. The updated policy will be posted on this page with a revised "Last Updated" date. Continued use of our website after any changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "contact",
    num: "10",
    title: "Contact Us",
    content: `For any questions or concerns regarding this Privacy Policy:`,
    list: [
      `Company: ${COMPANY.name}`,
      `Email: ${COMPANY.email}`,
      `Phone: ${COMPANY.phone}`,
      `Address: ${COMPANY.address}`,
      `Business Hours: Monday to Saturday, 9:00 AM – 6:00 PM IST`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumb}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-hidden="true">
                  <span>/</span>
                </li>
                <li aria-current="page">
                  <span>Privacy Policy</span>
                </li>
              </ol>
            </nav>
            <div className={styles.heroBadge}>
              Legal Document · India IT Act 2000
            </div>
            <h1 className={styles.heroTitle}>
              Privacy <span className={styles.heroTitleAccent}>Policy</span>
            </h1>
            <div className={styles.heroMeta}>
              <span>
                Last updated: <time dateTime="2025-01-01">{LAST_UPDATED}</time>
              </span>
              <span
                className={styles.heroMetaDot}
                aria-hidden="true"
              />
              <span>{COMPANY.name}</span>
              <span
                className={styles.heroMetaDot}
                aria-hidden="true"
              />
              <span>Kanpur, India</span>
            </div>
            <p className={styles.heroDesc}>
              We are committed to protecting your privacy and handling your
              personal data with full transparency, in compliance with India's
              IT Act 2000 and Digital Personal Data Protection Act 2023.
            </p>
          </div>
        </section>

        {/* ── BODY ── */}
        <div className={styles.layout}>
          {/* Table of Contents */}
          <aside
            className={styles.toc}
            aria-label="Table of contents"
          >
            <div className={styles.tocHeader}>
              <div
                className={styles.tocLine}
                aria-hidden="true"
              />
              <div className={styles.tocTitle}>Contents</div>
            </div>
            <nav>
              <ol className={styles.tocList}>
                {SECTIONS.map(({ id, num, title }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={styles.tocLink}
                    >
                      <span
                        style={{
                          color: "var(--gold)",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                        }}
                      >
                        {num}
                      </span>
                      {title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Content */}
          <article className={styles.content}>
            {SECTIONS.map(
              ({ id, num, title, content, list, extra, highlight }) => (
                <section
                  key={id}
                  id={id}
                  className={styles.section}
                >
                  <div
                    className={styles.sectionNum}
                    aria-hidden="true"
                  >
                    {num}
                  </div>
                  <div className={styles.sectionTitleWrap}>
                    <div
                      className={styles.sectionTitleDot}
                      aria-hidden="true"
                    />
                    <h2 className={styles.sectionTitle}>
                      {num}. {title}
                    </h2>
                  </div>
                  <p className={styles.text}>{content}</p>
                  {list && (
                    <ul className={styles.list}>
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {highlight && (
                    <div className={styles.highlight}>
                      <p>{highlight}</p>
                    </div>
                  )}
                  {extra && <p className={styles.text}>{extra}</p>}
                </section>
              ),
            )}

            <div className={styles.backTop}>
              <Link
                href="/"
                className={styles.backTopLink}
              >
                ← Back to Home
              </Link>
              <Link
                href="/terms-of-use"
                className={styles.backTopLink}
              >
                Terms of Use →
              </Link>
            </div>
          </article>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
