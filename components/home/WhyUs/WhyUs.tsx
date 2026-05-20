import styles from "./WhyUs.module.css";

const REASONS = [
  {
    num: "01",
    icon: "🏆",
    title: "Certified Quality",
    text: "All products FSSAI compliant and sourced from ISO-certified mills. We never compromise on food contact safety.",
  },
  {
    num: "02",
    icon: "📦",
    title: "Bulk & Custom Orders",
    text: "From small quantities for local bakeries to large-volume orders for FMCG companies — we accommodate all.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Fast Turnaround",
    text: "Well-stocked inventory means quick dispatch. Urgent requirements handled with priority shipping.",
  },
  {
    num: "04",
    icon: "💬",
    title: "Dedicated Support",
    text: "Our team guides you from product selection to final delivery. Samples available before commitment.",
  },
] as const;

export default function WhyUs() {
  return (
    <section
      className={styles.section}
      id="why"
      aria-labelledby="whyus-title"
    >
      <div
        className={styles.grid__bg}
        aria-hidden="true"
      />

      <div className="reveal">
        <div className={styles.label}>Why Choose Us</div>
        <h2
          id="whyus-title"
          className={styles.title}
        >
          Four Reasons Businesses Choose Mudit Paper
        </h2>
      </div>

      <ul
        className={styles.grid}
        role="list"
      >
        {REASONS.map(({ num, icon, title, text }) => (
          <li
            key={num}
            className={`${styles.card} reveal`}
          >
            <div
              className={styles.num}
              aria-hidden="true"
            >
              {num}
            </div>
            <div
              className={styles.icon}
              role="img"
              aria-label={title}
            >
              {icon}
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
