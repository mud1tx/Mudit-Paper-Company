import styles from "./Marquee.module.css";

const ITEMS = [
  "Food Grade Paper",
  "Greaseproof Paper",
  "Glassine Paper",
  "Printed Food Paper",
  "Ladoo Katori Liner",
  "FSSAI Certified",
  "Made in India",
  "Eco-Friendly",
] as const;

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className={styles.wrapper}
      aria-hidden="true"
      role="presentation"
    >
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={styles.item}
          >
            {item} <span className={styles.sep}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
