import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import { COMPANY } from "@/lib/config";
import { whatsappUrl } from "@/lib/format";
import type { KeyValue } from "@/types/product";

interface Props {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly image: string;
  /** Describes what the photo actually shows */
  readonly imageAlt: string;
  readonly breadcrumb: string;
  readonly tag?: string;
  /** Short spec chips, e.g. "30–50 GSM" */
  readonly specs: readonly string[];
  /** Shown on the card over the photo; the first two are used */
  readonly highlights: readonly KeyValue[];
}

// Split hero: everything a buyer needs to decide (name, specs, how to order)
// on the left, the product photo on the right. A server component, so all of
// it is plain HTML that search engines read without running JavaScript.
export default function ProductHero({
  name,
  tagline,
  description,
  image,
  imageAlt,
  breadcrumb,
  tag = "Food Grade Paper",
  specs,
  highlights,
}: Props) {
  const whatsappHref = `${whatsappUrl(COMPANY.whatsapp)}?text=${encodeURIComponent(
    `Hi, I would like a quote for ${name}.`,
  )}`;
  const trust = [
    `Supplying since ${COMPANY.foundedYear}`,
    "Bulk orders",
    "Pan-India delivery",
  ];

  return (
    <section
      className={styles.hero}
      aria-labelledby="product-title"
    >
      <div className={styles.heroInner}>
        {/* Not revealed on scroll: the hero is the first thing on screen and
            must render immediately for LCP. Split into head and body so
            phones can show the photo between them (see .heroInner). */}
        <div className={styles.heroHead}>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#products">Products</Link>
              </li>
              <li aria-current="page">{breadcrumb}</li>
            </ol>
          </nav>

          <p className={styles.heroTag}>{tag}</p>

          <h1
            id="product-title"
            className={styles.heroTitle}
          >
            {name}
          </h1>
          <p className={styles.heroTagline}>{tagline}</p>
        </div>

        <div className={styles.heroBody}>
          <p className={styles.heroDesc}>{description}</p>

          {specs.length > 0 && (
            <ul
              className={styles.heroSpecs}
              aria-label="Key specifications"
            >
              {specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          )}

          <div className={styles.heroActions}>
            <Link
              href="/#contact"
              className={styles.btnPrimary}
            >
              Get a quote
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a
              href={whatsappHref}
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask on WhatsApp
            </a>
          </div>

          <ul className={styles.heroTrust}>
            {trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroFrame}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.heroImg}
            />
          </div>

          {highlights.length > 0 && (
            <dl className={styles.heroCard}>
              {highlights.slice(0, 2).map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
