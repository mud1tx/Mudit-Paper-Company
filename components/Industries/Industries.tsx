import styles from "./Industries.module.css";

const INDUSTRIES = [
  { icon: "🥐", name: "Bakeries & Patisseries" },
  { icon: "🍔", name: "QSR & Restaurants" },
  { icon: "🏭", name: "Food Processing" },
  { icon: "🍬", name: "Sweet Shops & Confectionery" },
  { icon: "🛒", name: "FMCG & Retail Brands" },
  { icon: "🥩", name: "Butcher & Deli Shops" },
];

export default function Industries() {
  return (
    <section
      className={styles.section}
      id="industries"
    >
      <div className={`${styles.header} reveal`}>
        <div className="sectionLabel">Sectors We Serve</div>
        <h2 className="sectionTitle">Industries We Supply To</h2>
      </div>
      <div className={styles.grid}>
        {INDUSTRIES.map(({ icon, name }) => (
          <div
            key={name}
            className={`${styles.item} reveal`}
          >
            <span className={styles.icon}>{icon}</span>
            <div className={styles.name}>{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
