// "use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      id="home"
    >
      <div
        className={styles.bgCircle}
        aria-hidden
      />
      <div
        className={styles.bgLines}
        aria-hidden
      />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>Food Grade Certified Paper Trader</div>

        <h1 className={styles.h1}>
          Premium Paper,
          <br />
          <em className={styles.em}>Pure Quality</em>
          <br />
          Guaranteed
        </h1>

        <p className={styles.desc}>
          Mudit Paper Company supplies certified food-grade paper products to
          bakeries, restaurants, food processors, and FMCG brands across India.
          Quality you can trust, delivered with care.
        </p>

        <div className={styles.actions}>
          <Link
            href="#products"
            className={styles.btnPrimary}
          >
            Explore Products
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
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
            href="#contact"
            className={styles.btnSecondary}
          >
            Request a Sample
          </Link>
        </div>

        <div className={styles.stats}>
          {[
            { num: "500", sup: "+", label: "Clients Served" },
            { num: "15", sup: "+", label: "Years Experience" },
            { num: "100", sup: "%", label: "Food Grade" },
          ].map(({ num, sup, label }) => (
            <div
              key={label}
              className={styles.statItem}
            >
              <div className={styles.statNum}>
                {num}
                <span>{sup}</span>
              </div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div
        className={styles.visual}
        aria-hidden
      >
        <div className={styles.cardStack}>
          <div className={`${styles.card} ${styles.card1}`} />
          <div className={`${styles.card} ${styles.card2}`} />
          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.cardInner}>
              <p>Food Grade Certified</p>
              <span className={styles.certBadge}>FSSAI Approved</span>
            </div>
          </div>
          <div className={`${styles.floatTag} ${styles.tag1}`}>
            <span className={styles.dot} />
            Kraft Paper
          </div>
          <div className={`${styles.floatTag} ${styles.tag2}`}>
            <span className={styles.dot} />
            Greaseproof
          </div>
          <div className={`${styles.floatTag} ${styles.tag3}`}>
            <span className={styles.dot} />
            BPA Free
          </div>
        </div>
      </div>
    </section>
  );
}
