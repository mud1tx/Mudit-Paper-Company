import Link from "next/link";
import styles from "./Industries.module.css";

const SEGMENTS = [
  {
    name: "Paper Converters",
    desc: "Paper grades suited to wrapping, lining, bag making and other converting applications.",
  },
  {
    name: "Food Packaging Manufacturers",
    desc: "Suitable paper grades for food wrapping and lining, based on the intended application.",
  },
  {
    name: "Paper Dealers & Distributors",
    desc: "A range of paper grades and GSM options to support diverse customer requirements.",
  },
] as const;

export default function Industries() {
  return (
    <section
      className={styles.section}
      id="industries"
      aria-labelledby="industries-title"
    >
      <div className={styles.inner}>
        <div className={`${styles.intro} reveal`}>
          <span className={styles.sectionLabel}>Who We Serve</span>
          <h2
            id="industries-title"
            className={styles.sectionTitle}
          >
            Serving Businesses Across the Paper Industry
          </h2>
          <p className={styles.lead}>
            We supply plain specialty paper sheets for a range of converting,
            packaging and distribution requirements.
          </p>
          <Link
            href="/#contact"
            className={styles.btn}
          >
            Discuss Your Requirements
          </Link>
        </div>

        <ul className={styles.list}>
          {SEGMENTS.map((s, i) => (
            <li
              key={s.name}
              className={`${styles.row} reveal`}
            >
              <span
                className={styles.index}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
              <span
                className={styles.arrow}
                aria-hidden="true"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  focusable="false"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
