import styles from "./product.module.css";
import { Feature } from "../../types/product";

interface Props {
  items: Feature[];
  label?: string;
  title?: string;
}

export default function ProductFeatures({
  items,
  label = "Why Choose Us",
  title = "Features That Set Us Apart",
}: Props) {
  return (
    <section className={styles.features}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.featGrid}>
          {items.map(({ title, desc, icon }) => (
            <div
              key={title}
              className={styles.featCard}
            >
              <div className={styles.featIcon}>{icon}</div>
              <div className={styles.featTitle}>{title}</div>
              <div className={styles.featDesc}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
