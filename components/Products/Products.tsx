import Link from "next/link";
import styles from "./Products.module.css";

const PRODUCTS = [
  {
    tag: "Bestseller",
    name: "Natural Kraft Paper",
    emoji: "🧇",
    bg: "pi1",
    desc: "100% food-safe kraft paper for wrapping sandwiches, bakery items, meats, and fresh produce. Bleached and unbleached variants.",
    specs: ["25–90 GSM", "Roll & Sheet", "Custom Width", "FSSAI Safe"],
    featured: true,
  },
  {
    tag: "Bakery",
    name: "Greaseproof Paper",
    emoji: "🥐",
    bg: "pi2",
    desc: "Superior grease resistance for high-fat foods. Ideal for pastries, fried items, and deli wrapping.",
    specs: ["30–50 GSM", "Moisture Resistant"],
    featured: false,
  },
  {
    tag: "Confectionery",
    name: "Butter / Wax Paper",
    emoji: "🍫",
    bg: "pi3",
    desc: "Smooth, non-stick surface for chocolates, sweets, and mithai packaging.",
    specs: ["25–40 GSM", "Food Contact Safe"],
    featured: false,
  },
  {
    tag: "Packaging",
    name: "Parchment Paper",
    emoji: "🫙",
    bg: "pi4",
    desc: "Heat-stable silicone-coated paper for baking, roasting, and food service.",
    specs: ["30–60 GSM", "Up to 230°C"],
    featured: false,
  },
  {
    tag: "Food Service",
    name: "Tissue & Napkin Paper",
    emoji: "🍱",
    bg: "pi5",
    desc: "Soft, food-safe tissue papers for restaurants, takeaway, and FMCG packaging.",
    specs: ["15–25 GSM", "Embossed Options"],
    featured: false,
  },
];

const BG_MAP: Record<string, string> = {
  pi1: "linear-gradient(135deg,#f5edd8,#e0c87a)",
  pi2: "linear-gradient(135deg,#e8f4ee,#b8dfc6)",
  pi3: "linear-gradient(135deg,#f0ece0,#d4c99a)",
  pi4: "linear-gradient(135deg,#e5f0ea,#9ac4ad)",
  pi5: "linear-gradient(135deg,#faf5e8,#e8d490)",
};

export default function Products() {
  return (
    <section
      className={styles.products}
      id="products"
    >
      <div className={`${styles.header} reveal`}>
        <div>
          <div className="sectionLabel">Our Range</div>
          <h2 className="sectionTitle">Food Grade Paper Products</h2>
        </div>
        <Link
          href="#contact"
          className={styles.btnSecondary}
        >
          Request Catalogue
        </Link>
      </div>

      <div className={styles.grid}>
        {PRODUCTS.map((p) => (
          <div
            key={p.name}
            className={`${styles.card} ${p.featured ? styles.cardFeatured : ""} reveal`}
          >
            <div
              className={styles.imgWrap}
              style={{ background: BG_MAP[p.bg] }}
            >
              <div className={styles.emoji}>{p.emoji}</div>
            </div>
            <div className={styles.content}>
              <span className={styles.tag}>{p.tag}</span>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.specs}>
                {p.specs.map((s) => (
                  <span
                    key={s}
                    className={styles.chip}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className={styles.arrow}>View Details →</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
