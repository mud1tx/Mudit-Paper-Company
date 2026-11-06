import styles from "./Marquee.module.css";

const ITEMS = [
  "Food Grade Paper",
  "Greaseproof Paper",
  "One Side OGR Paper",
  "Glassine Paper",
  "MG Poster Paper",
  "Bleached Kraft Paper",
  "Ladoo Katori Liner",
  "OGR Paper",
  "Butter Paper",
] as const;

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <ul
          className={styles.list}
          aria-label="Paper we supply"
        >
          {ITEMS.map((item) => (
            <li
              key={item}
              className={styles.item}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Identical copy for a seamless loop, hidden from assistive tech */}
        <ul
          className={`${styles.list} ${styles.copy}`}
          aria-hidden="true"
        >
          {ITEMS.map((item) => (
            <li
              key={item}
              className={styles.item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
