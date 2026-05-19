import styles from "./product.module.css";
import { Application } from "../../types/product";

interface Props {
  items: Application[];
  label?: string;
  title?: string;
}

export default function ProductApplications({
  items,
  label = "Use Cases",
  title = "Where It's Used",
}: Props) {
  return (
    <section className={styles.applications}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.appGrid}>
          {items.map(({ label, icon }) => (
            <div
              key={label}
              className={styles.appCard}
            >
              <span className={styles.appIcon}>{icon}</span>
              <span className={styles.appLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
