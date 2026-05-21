import styles from "./product.module.css";
import { Feature } from "@/types/product";

interface Props {
  readonly items: readonly Feature[];
  readonly label?: string;
  readonly title?: string;
}

export default function ProductFeatures({
  items,
  label = "Why Choose Us",
  title = "Features That Set Us Apart",
}: Props) {
  return (
    <section
      className={styles.features}
      aria-labelledby="features-title"
    >
      <div className={`${styles.sectionInner} reveal`}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2
          id="features-title"
          className={styles.sectionTitle}
        >
          {title}
        </h2>
        <div className={styles.featGrid}>
          {items.map(({ title, desc, icon }) => (
            <div
              key={title}
              className={`${styles.featCard} reveal`}
            >
              <div
                className={styles.featIcon}
                role="img"
                aria-label={title}
              >
                {icon}
              </div>
              <h3 className={styles.featTitle}>{title}</h3>
              <p className={styles.featDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
