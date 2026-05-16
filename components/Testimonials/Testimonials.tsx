import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    text: "Mudit Paper Company has been our go-to supplier for kraft wrapping paper for over 3 years. Quality never wavers, and delivery is always on time. Highly dependable.",
    name: "Ramesh Agarwal",
    role: "Owner, Agarwal Bakeries, Lucknow",
    initial: "R",
    av: "av1",
  },
  {
    text: "As an FMCG company, we can't afford quality lapses. Mudit Paper's FSSAI-certified products meet our compliance needs perfectly. Their team is knowledgeable and responsive.",
    name: "Priya Sharma",
    role: "Procurement Head, NatureFresh Foods",
    initial: "P",
    av: "av2",
  },
  {
    text: "We switched to Mudit Paper for greaseproof paper needs and the difference was immediate. Our packaging looks premium and our sweets stay fresh longer. Excellent product.",
    name: "Sunil Mittal",
    role: "Partner, Mittal Sweets, Kanpur",
    initial: "S",
    av: "av3",
  },
];

export default function Testimonials() {
  return (
    <section
      className={styles.section}
      id="testimonials"
    >
      <div className={`${styles.header} reveal`}>
        <div className={styles.label}>Testimonials</div>
        <h2 className={styles.title}>What Our Clients Say</h2>
      </div>
      <div className={styles.grid}>
        {REVIEWS.map(({ text, name, role, initial, av }) => (
          <div
            key={name}
            className={`${styles.card} reveal`}
          >
            <span className={styles.quote}>&ldquo;</span>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.text}>{text}</p>
            <div className={styles.author}>
              <div className={`${styles.avatar} ${styles[av]}`}>{initial}</div>
              <div>
                <div className={styles.name}>{name}</div>
                <div className={styles.role}>{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
