import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar/TopBar";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { formatDate } from "@/lib/format";
import { subPageJsonLd } from "@/lib/seo";
import type { LegalSection } from "@/types/legal";
import styles from "@/styles/legal.module.css";
import BackToTop from "../ui/BackToTop";

type LegalPageProps = {
  readonly title: string;
  readonly description: string;
  /** Path from the site root, e.g. "/terms-of-use" */
  readonly path: string;
  /** ISO date the wording last changed, from PAGE_UPDATED */
  readonly updated: string;
  readonly sections: readonly LegalSection[];
};

// Shared layout for the Privacy Policy and Terms of Use pages
export default function LegalPage({
  title,
  description,
  path,
  updated,
  sections,
}: LegalPageProps) {
  const structuredData = subPageJsonLd({
    name: title,
    description,
    path,
    dateModified: updated,
    crumbs: [
      { name: "Home", path: "/" },
      { name: title, path },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape "<" so data can never close the script tag early
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <TopBar />
      <Navbar />
      <main id="main-content">
        <header className={styles.banner}>
          <Image
            src="/images/legal-banner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.bannerImg}
          />
          <div
            className={styles.bannerShade}
            aria-hidden="true"
          />

          <div className={styles.bannerInner}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumb}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-current="page">{title}</li>
              </ol>
            </nav>

            <h1 className={styles.bannerTitle}>{title}</h1>

            <p className={styles.bannerMeta}>
              Last updated:{" "}
              <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
          </div>
        </header>

        <div className={styles.layout}>
          {/* Jump links: Google can show these as links in search results */}
          <nav
            className={styles.toc}
            aria-labelledby="toc-title"
          >
            <h2
              id="toc-title"
              className={styles.tocTitle}
            >
              Contents
            </h2>
            <ol className={styles.tocList}>
              {sections.map(({ id, title: sectionTitle }) => (
                <li key={id}>
                  <a href={`#${id}`}>{sectionTitle}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className={styles.content}>
            {sections.map(
              (
                { id, title: sectionTitle, paragraphs, list, details, closing },
                index,
              ) => (
                <section
                  key={id}
                  id={id}
                  className={styles.section}
                  aria-labelledby={`${id}-title`}
                >
                  <h2
                    id={`${id}-title`}
                    className={styles.sectionTitle}
                  >
                    {index + 1}. {sectionTitle}
                  </h2>

                  {paragraphs.map((p) => (
                    <p
                      key={p}
                      className={styles.text}
                    >
                      {p}
                    </p>
                  ))}

                  {list && (
                    <ul className={styles.list}>
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {details && (
                    <address className={styles.address}>
                      <dl className={styles.details}>
                        {details.map(({ label, value, href }) => (
                          <div key={label}>
                            <dt>{label}</dt>
                            <dd>{href ? <a href={href}>{value}</a> : value}</dd>
                          </div>
                        ))}
                      </dl>
                    </address>
                  )}

                  {closing && <p className={styles.text}>{closing}</p>}
                </section>
              ),
            )}

            <div className={styles.backTop}>
              <Link
                href="/"
                className={styles.backTopLink}
              >
                ← Back to home
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
