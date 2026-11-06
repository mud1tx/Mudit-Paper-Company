import styles from "./Testimonials.module.css";

type Testimonial = {
  readonly quote: string;
  readonly name: string;
  readonly role: string;
};

const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "We source Glassine paper for our business and value the consistency of the material and the clarity in communication. Mudit Paper Company has been professional to work with.",
    name: "Ramesh Agarwal",
    role: "Owner, Agarwal Paper Trader, Lucknow",
  },
  {
    quote:
      "The team understood our greaseproof paper requirements and helped us identify suitable options for our packaging needs. The overall coordination was smooth and straightforward.",
    name: "Sunil Mittal",
    role: "Partner, FMCG Business, Kanpur",
  },
  {
    quote:
      "What we appreciate is the responsive communication and attention to our paper specifications. It makes discussing requirements and coordinating orders much easier.",
    name: "Priya Sharma",
    role: "Owner, Food Packaging Business, Agra",
  },
];

export default function Testimonials() {
  return (
    <section
      className={styles.section}
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <header className={`${styles.header} reveal`}>
        <p className={styles.label}>Client Feedback</p>
        <h2
          id="testimonials-title"
          className={styles.title}
        >
          What Our Clients Say
        </h2>
      </header>

      <ul className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <li
            key={t.name}
            className={`${styles.item} reveal`}
          >
            <figure className={styles.card}>
              <span
                className={styles.mark}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className={styles.quote}>
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className={styles.author}>
                <span
                  className={styles.avatar}
                  aria-hidden="true"
                >
                  {t.name.charAt(0).toUpperCase()}
                </span>
                <span>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
