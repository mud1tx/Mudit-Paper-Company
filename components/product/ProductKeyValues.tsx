import styles from "./product.module.css";
import { KeyValue } from "@/types/product";

interface Props {
  readonly items: readonly KeyValue[];
  readonly label?: string;
  readonly title?: string;
}

export default function ProductKeyValues({
  items,
  label = "Specifications",
  title = "Product at a Glance",
}: Props) {
  return (
    <section
      className={styles.keyValues}
      aria-labelledby="keyvalues-title"
    >
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2
          id="keyvalues-title"
          className={styles.sectionTitle}
        >
          {title}
        </h2>

        {/* dl = definition list — semantically correct for key-value pairs */}
        <dl className={styles.kvGrid}>
          {items.map(({ label, value, icon }) => (
            <div
              key={label}
              className={styles.kvCard}
            >
              <div
                className={styles.kvIcon}
                role="img"
                aria-label={label}
              >
                {icon}
              </div>
              <dt className={styles.kvLabel}>{label}</dt>
              <dd className={styles.kvValue}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
