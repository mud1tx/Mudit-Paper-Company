import styles from "./product.module.css";
import { KeyValue } from "../../types/product";

interface Props {
  items: KeyValue[];
  label?: string;
  title?: string;
}

export default function ProductKeyValues({
  items,
  label = "Specifications",
  title = "Product at a Glance",
}: Props) {
  return (
    <section className={styles.keyValues}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.kvGrid}>
          {items.map(({ label, value, icon }) => (
            <div
              key={label}
              className={styles.kvCard}
            >
              <div className={styles.kvIcon}>{icon}</div>
              <div className={styles.kvLabel}>{label}</div>
              <div className={styles.kvValue}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
