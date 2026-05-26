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
] as const;

export default function Testimonials() {
  return (
    <section
      className={styles.section}
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className={`${styles.header} reveal`}>
        <div className={styles.label}>Testimonials</div>
        <h2
          id="testimonials-title"
          className={styles.title}
        >
          What Our Clients Say
        </h2>
      </div>

      {/* Semantic list of reviews */}
      <ul
        className={styles.grid}
        role="list"
      >
        {REVIEWS.map(({ text, name, role, initial, av }) => (
          <li
            key={name}
            className={`${styles.card} reveal`}
            itemScope
            itemType="https://schema.org/Review"
          >
            <span
              className={styles.quote}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
            >
              <meta
                itemProp="ratingValue"
                content="5"
              />
              <meta
                itemProp="bestRating"
                content="5"
              />
            </div>
            <div
              className={styles.stars}
              role="img"
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </div>

            {/* Review text */}
            <blockquote
              className={styles.text}
              itemProp="reviewBody"
            >
              {text}
            </blockquote>

            {/* Reviewer */}
            <div
              className={styles.author}
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div
                className={`${styles.avatar} ${styles[av]}`}
                aria-hidden="true"
              >
                {initial}
              </div>
              <div>
                <div
                  className={styles.name}
                  itemProp="name"
                >
                  {name}
                </div>
                <div
                  className={styles.role}
                  itemProp="jobTitle"
                >
                  {role}
                </div>
              </div>
            </div>

            {/* Hidden microdata for the item being reviewed */}
            <div
              itemProp="itemReviewed"
              itemScope
              itemType="https://schema.org/LocalBusiness"
              style={{ display: "none" }}
            >
              <meta
                itemProp="name"
                content="Mudit Paper Company"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
