import Link from "next/link";
import Image from "next/image";
import styles from "./Products.module.css";
import { PRODUCTS, PRODUCTS_LIST } from "@/data/product";

// Same order as the navbar; all content comes from data/product.ts
const CARDS = PRODUCTS_LIST.map(({ slug }) => ({ slug, ...PRODUCTS[slug] }));


function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Products() {
  return (
    <section
      className={styles.products}
      id="products"
      aria-labelledby="products-title"
    >
      <div className={`${styles.header} reveal`}>
        <div>
          <span className={styles.sectionLabel}>Our Range</span>
          <h2
            id="products-title"
            className={styles.sectionTitle}
          >
            Food Grade Paper Products
          </h2>
        </div>
        <Link
          href="/#contact"
          className={styles.btnSecondary}
        >
          Request Catalogue
        </Link>
      </div>

      <ul className={styles.grid}>
        {CARDS.map((p) => (
          <li
            key={p.slug}
            className={`${styles.card} reveal`}
          >
            <div className={styles.imgWrap}>
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="(max-width: 500px) 100vw, (max-width: 1024px) 50vw, 400px"
                className={styles.img}
              />
              <span className={styles.tag}>{p.card.tag}</span>
            </div>

            <div className={styles.content}>
              {/* The link is on the product name, so its anchor text is the
                  name alone. A pseudo-element stretches it over the card,
                  so the whole card is still clickable. */}
              <h3 className={styles.name}>
                <Link
                  href={`/products/${p.slug}`}
                  className={styles.cardLink}
                >
                  {p.name}
                </Link>
              </h3>
              <p className={styles.desc}>{p.card.summary}</p>

              <ul
                className={styles.specs}
                aria-label={`${p.name} specifications`}
              >
                {p.card.specs.map((s) => (
                  <li
                    key={s}
                    className={styles.spec}
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <div
                className={styles.footer}
                aria-hidden="true"
              >
                <span className={styles.cta}>View details</span>
                <span className={styles.arrowBtn}>
                  <ArrowIcon />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
