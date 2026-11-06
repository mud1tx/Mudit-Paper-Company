import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import { PRODUCTS, PRODUCTS_LIST } from "@/data/product";

interface Props {
  /** The product on this page, left out of the list */
  readonly currentSlug: string;
}

// Links every product page to the others, so search engines can reach and
// relate them all. Built from PRODUCTS_LIST, so a new product joins by itself.
export default function ProductRelated({ currentSlug }: Props) {
  const others = PRODUCTS_LIST.filter(({ slug }) => slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <section
      className={styles.related}
      aria-labelledby="related-title"
    >
      <div className={styles.relatedInner}>
        <h2
          id="related-title"
          className={styles.faqTitle}
        >
          Other papers we supply
        </h2>
        <ul className={styles.relatedGrid}>
          {others.map(({ slug }) => {
            const { name, image, imageAlt, card } = PRODUCTS[slug];
            return (
              <li
                key={slug}
                className={styles.relatedCard}
              >
                <div className={styles.relatedFrame}>
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 340px"
                    className={styles.relatedImg}
                  />
                </div>
                <h3 className={styles.relatedName}>
                  {/* Stretched over the whole card with ::after */}
                  <Link href={`/products/${slug}`}>{name}</Link>
                </h3>
                <p className={styles.relatedText}>{card.summary}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
