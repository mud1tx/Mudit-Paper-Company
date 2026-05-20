import styles from "./product.module.css";
import { Application } from "@/types/product"; // ← use @ alias, not relative path

interface Props {
  readonly items: readonly Application[]; // ← readonly
  readonly label?: string;
  readonly title?: string;
}

export default function ProductApplications({
  items,
  label = "Use Cases",
  title = "Where It's Used",
}: Props) {
  return (
    <section
      aria-labelledby="applications-title"
      className={styles.applications}
    >
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2
          id="applications-title"
          className={styles.sectionTitle}
        >
          {title}
        </h2>
        <div className={styles.appGrid}>
          {items.map(({ label, icon }) => (
            <div
              key={label}
              className={styles.appCard}
            >
              <span
                className={styles.appIcon}
                role="img"
                aria-label={label}
              >
                {icon}
              </span>
              <span className={styles.appLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
