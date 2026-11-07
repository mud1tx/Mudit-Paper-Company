import Image from "next/image";
import Link from "next/link";
import { quoteHref } from "@/lib/contact";
import type { ReactNode } from "react";
import styles from "./product.module.css";
import type { ProductVariant } from "@/types/product";

interface Props {
  /** Pre-selects this product on the enquiry form */
  readonly slug: string;
  readonly variants: readonly ProductVariant[];
  /** Product-specific background; falls back to the shared one */
  readonly background?: string;
}

// Soft paper-stack background (20 KB, made for this site)
const DEFAULT_BACKGROUND = "/images/spec-bg.webp";

// One row of the card: heading on the left, content on the right
function Row({
  title,
  children,
}: {
  readonly title: string;
  readonly children: ReactNode;
}) {
  return (
    <div className={styles.variantRow}>
      <h3 className={styles.variantSub}>
        <span
          className={styles.variantSubIcon}
          aria-hidden="true"
        />
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

// One card per variant over the product photo: specification table,
// applications and special features, then a quote button. Everything is
// plain, visible HTML (a real <table> and lists), which search engines read
// as product facts.
export default function ProductVariants({
  slug,
  variants,
  background = DEFAULT_BACKGROUND,
}: Props) {
  if (variants.length === 0) return null;
  // Number the cards only when there is more than one ("1.", "2.", …)
  const numbered = variants.length > 1;

  return (
    <section
      className={styles.variants}
      aria-label="Specifications"
    >
      <div className={styles.variantsInner}>
        {variants.map((variant, i) => {
          const titleId = `variant-${i + 1}`;
          return (
            <article
              key={variant.name}
              className={styles.variantPanel}
              aria-labelledby={titleId}
            >
              {/* Decorative background */}
              <Image
                src={background}
                alt=""
                fill
                sizes="(max-width: 1100px) 100vw, 1040px"
                className={styles.variantPanelImg}
              />

              <div className={`${styles.variantCard} reveal`}>
                <h2
                  id={titleId}
                  className={styles.variantTitle}
                >
                  {numbered && <span>{i + 1}.</span>}
                  {variant.name}
                </h2>

                <Row title="Specifications">
                  <table className={styles.specTable}>
                    <caption className={styles.srOnly}>
                      {variant.name} specifications
                    </caption>
                    <tbody>
                      {variant.specs.map(({ label, value }) => (
                        <tr key={label}>
                          <th scope="row">{label}</th>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Row>

                {variant.applications.length > 0 && (
                  <Row title="Applications">
                    <ul className={styles.variantList}>
                      {variant.applications.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Row>
                )}

                {variant.features.length > 0 && (
                  <Row title="Special features">
                    <ul className={styles.variantList}>
                      {variant.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Row>
                )}

                <Link
                  href={quoteHref(slug)}
                  className={styles.quoteBtn}
                >
                  Get a quote
                  <span
                    className={styles.quoteBtnIcon}
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      focusable="false"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
