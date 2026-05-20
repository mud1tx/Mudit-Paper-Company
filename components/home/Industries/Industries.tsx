import styles from "./Industries.module.css";

const INDUSTRIES = [
  { icon: "🥐", name: "Bakeries & Patisseries" },
  { icon: "🍔", name: "QSR & Restaurants" },
  { icon: "🏭", name: "Food Processing" },
  { icon: "🍬", name: "Sweet Shops & Confectionery" },
  { icon: "🛒", name: "FMCG & Retail Brands" },
  { icon: "🥩", name: "Butcher & Deli Shops" },
] as const;

export default function Industries() {
  return (
    <section
      className={styles.section}
      id="industries"
      aria-labelledby="industries-title"
    >
      <div className={`${styles.header} reveal`}>
        <div className="sectionLabel">Sectors We Serve</div>
        <h2
          id="industries-title"
          className="sectionTitle"
        >
          Industries We Supply To
        </h2>
      </div>

      <ul
        className={styles.grid}
        role="list"
        aria-label="Industries served by Mudit Paper Company"
      >
        {INDUSTRIES.map(({ icon, name }) => (
          <li
            key={name}
            className={`${styles.item} reveal`}
          >
            <span
              className={styles.icon}
              role="img"
              aria-label={name}
            >
              {icon}
            </span>
            <span className={styles.name}>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
