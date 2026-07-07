import Link from "next/link";
import styles from "./Hero.module.css";

const STATS = [
  { num: "500", sup: "+", label: "Clients Served" },
  { num: "15", sup: "+", label: "Years Experience" },
  { num: "100", sup: "%", label: "Food Grade" },
] as const;

export default function Hero() {
  return (
    <section
      className={styles.hero}
      id="home"
      aria-labelledby="hero-title"
    >
      <div
        className={styles.overlay}
        aria-hidden="true"
      />

      <div className={styles.content}>
        <p className={styles.badge}>Food-Grade Paper Wholesaler in Kanpur</p>

        <h1
          id="hero-title"
          className={styles.h1}
        >
          Premium Food-Grade Paper,
          <br />
          <em className={styles.em}>Pure Quality</em> Guaranteed
        </h1>

        <p className={styles.desc}>
          Mudit Paper Company supplies greaseproof paper, glassine paper,
          printed food paper, and ladoo katori cup liners to bakeries, sweet
          shops, restaurants, and FMCG brands across India — trusted quality,
          delivered in bulk.
        </p>

        <div className={styles.actions}>
          <Link
            href="/#products"
            className={styles.btnPrimary}
          >
            Explore Products
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/#contact"
            className={styles.btnSecondary}
          >
            Request a Sample
          </Link>
        </div>

        <ul
          className={styles.stats}
          aria-label="Company statistics"
        >
          {STATS.map(({ num, sup, label }) => (
            <li
              key={label}
              className={styles.statItem}
            >
              <div
                className={styles.statNum}
                aria-label={`${num}${sup} ${label}`}
              >
                {num}
                <span aria-hidden="true">{sup}</span>
              </div>
              <div className={styles.statLabel}>{label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
