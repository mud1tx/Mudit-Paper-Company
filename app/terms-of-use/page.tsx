import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { COMPANY, BASE_URL } from "@/lib/config";
import styles from "../../styles/legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${COMPANY.name}. Read our terms governing the use of our website and services, compliant with Indian law.`,
  alternates: { canonical: `${BASE_URL}/terms-of-use` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "January 1, 2026";

const SECTIONS = [
  {
    id: "acceptance",
    num: "01",
    title: "Acceptance of Terms",
    content: `By accessing or using the website at ${BASE_URL} ("Website"), you agree to be bound by these Terms of Use ("Terms"). These Terms constitute a legally binding agreement between you and ${COMPANY.name}, a business entity based in ${COMPANY.city}, ${COMPANY.state}, India.`,
    highlight: `If you do not agree to these Terms, please do not use our Website.`,
  },
  {
    id: "use-of-website",
    num: "02",
    title: "Use of Website",
    content: `You may use this Website for lawful business purposes only. By using this Website, you agree that you will not:`,
    list: [
      "Use the Website in any way that violates applicable Indian or international law",
      "Transmit any unsolicited or unauthorised advertising or promotional material",
      "Attempt to gain unauthorised access to any part of the Website",
      "Use automated tools to scrape, crawl, or extract data from the Website",
      "Impersonate any person or entity or misrepresent your affiliation",
      "Transmit any harmful, offensive, or malicious content",
      "Interfere with or disrupt the integrity or performance of the Website",
    ],
  },
  {
    id: "intellectual-property",
    num: "03",
    title: "Intellectual Property",
    content: `All content on this Website including text, graphics, logos, images, and product descriptions is the property of ${COMPANY.name} and is protected under the Copyright Act, 1957 and applicable Indian intellectual property laws. You may not:`,
    list: [
      "Copy, reproduce, or distribute any Content without prior written permission",
      "Use our brand name, logo, or trademarks without authorisation",
      "Create derivative works based on our Content",
      "Use our Content for commercial purposes without consent",
    ],
    extra: `You may share links to our Website and reference our products for legitimate business evaluation purposes.`,
  },
  {
    id: "product-information",
    num: "04",
    title: "Product Information",
    content: `All product information, specifications, GSM ranges, and pricing displayed on this Website are for informational purposes only and are subject to change without notice. ${COMPANY.name} makes reasonable efforts to ensure accuracy but does not guarantee that all product information is complete, accurate, or current.`,
    highlight: `Final specifications and pricing are confirmed at the time of order placement only.`,
  },
  {
    id: "enquiries-orders",
    num: "05",
    title: "Enquiries and Orders",
    content: `Submitting an enquiry form on this Website does not constitute a binding order or contract. A binding agreement is formed only when:`,
    list: [
      "We provide a written quotation or proforma invoice",
      "You confirm the order in writing (email or signed document)",
      "Advance payment or agreed credit terms are established",
      "We issue a written order confirmation",
    ],
  },
  {
    id: "disclaimer",
    num: "06",
    title: "Disclaimer of Warranties",
    content: `This Website and its Content are provided on an "as is" basis without any warranties of any kind. To the fullest extent permitted by Indian law, ${COMPANY.name} disclaims all warranties including:`,
    list: [
      "Warranties of merchantability or fitness for a particular purpose",
      "Warranties that the Website will be uninterrupted or error-free",
      "Warranties regarding the accuracy or completeness of information",
      "Warranties that the Website is free of viruses or harmful components",
    ],
  },
  {
    id: "limitation-liability",
    num: "07",
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, ${COMPANY.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Website.`,
    highlight: `Our total liability for any claim arising from use of this Website shall not exceed ₹1,000 or the amount paid to us in the preceding 3 months, whichever is lower.`,
  },
  {
    id: "third-party-links",
    num: "08",
    title: "Third-Party Links",
    content: `Our Website may contain links to third-party websites such as Google Maps, Instagram, and Facebook. These links are provided for convenience only. ${COMPANY.name} does not endorse or take responsibility for the content or privacy practices of any third-party website. Accessing third-party websites is at your own risk.`,
  },
  {
    id: "governing-law",
    num: "09",
    title: "Governing Law and Jurisdiction",
    content: `These Terms are governed by the laws of India, including the Information Technology Act, 2000. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in ${COMPANY.city}, ${COMPANY.state}, India.`,
  },
  {
    id: "changes",
    num: "10",
    title: "Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. Changes will be posted on this page with a revised "Last Updated" date. Your continued use of the Website after any changes constitutes your acceptance of the revised Terms.`,
  },
  {
    id: "contact",
    num: "11",
    title: "Contact Us",
    content: `For any questions regarding these Terms of Use:`,
    list: [
      `Company: ${COMPANY.name}`,
      `Email: ${COMPANY.email}`,
      `Phone: ${COMPANY.phone}`,
      `Address: ${COMPANY.address}`,
      `Business Hours: Monday to Saturday, 9:00 AM – 6:00 PM IST`,
    ],
  },
];

export default function TermsOfUse() {
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
                  <span>Terms of Use</span>
                </li>
              </ol>
            </nav>
            <div className={styles.heroBadge}>Legal Document · Indian Law</div>
            <h1 className={styles.heroTitle}>
              Terms of <span className={styles.heroTitleAccent}>Use</span>
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
              Please read these terms carefully before using our website. By
              accessing our website, you agree to be bound by these terms in
              accordance with Indian law.
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
              <a
                href="#main-content"
                className={styles.backTopLink}
              >
                ↑ Back to top
              </a>
              <Link
                href="/"
                className={styles.backTopLink}
              >
                ← Back to Home
              </Link>
              <Link
                href="/privacy-policy"
                className={styles.backTopLink}
              >
                Privacy Policy →
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
