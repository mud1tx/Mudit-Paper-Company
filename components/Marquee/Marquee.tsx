import styles from "./Marquee.module.css";

const ITEMS = [
  "Food Grade Paper",
  "Kraft Paper",
  "Greaseproof Paper",
  "Butter Paper",
  "Parchment Paper",
  "Tissue Paper",
  "FSSAI Certified",
  "Eco-Friendly",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.wrapper}>
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
