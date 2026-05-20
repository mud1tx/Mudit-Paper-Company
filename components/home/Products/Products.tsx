import Link from "next/link";
import styles from "./Products.module.css";

// ── Real products matching your actual business ───────────────────────────────
const PRODUCTS = [
  {
    slug: "greaseproof-paper",
    tag: "Bestseller",
    name: "OGR Greaseproof Paper",
    emoji: "🧈",
    bg: "pi1",
    desc: "Premium food-contact paper engineered to resist oils, fats, and moisture. FSSAI certified for direct food contact.",
    specs: ["30–50 GSM", "Roll & Sheet", "Custom Width", "FSSAI Safe"],
  },
  {
    slug: "glassine-paper",
    tag: "Premium",
    name: "Glassine Paper",
    emoji: "✨",
    bg: "pi2",
    desc: "Smooth, glossy, translucent paper. Available in 1S and 2S smooth variants for confectionery and pharma packaging.",
    specs: ["25–60 GSM", "1S & 2S Smooth"],
  },
  {
    slug: "printed-food-paper",
    tag: "Custom",
    name: "Printed Food Grade Paper",
    emoji: "🖨️",
    bg: "pi3",
    desc: "Custom printed greaseproof and glassine paper. Single to multi-colour designs on any GSM.",
    specs: ["Any GSM", "Multi Colour"],
  },
  {
    slug: "ladoo-katori-muffin-cup-liner",
    tag: "Food Service",
    name: "Ladoo Katori & Cup Liner",
    emoji: "🧁",
    bg: "pi4",
    desc: "Food-grade paper cup liners for ladoos, muffins, and sweets. Available in 65–100mm sizes, plain to printed.",
    specs: ["65–100mm", "Plain to Printed"],
  },
] as const;

const BG_MAP: Record<string, string> = {
  pi1: "linear-gradient(135deg, #f5edd8, #c9a84c)",
  pi2: "linear-gradient(135deg, #e8f0e8, #7aaa8a)",
  pi3: "linear-gradient(135deg, #fceee8, #d4845a)",
  pi4: "linear-gradient(135deg, #ede8f5, #7c6fa0)",
};

export default function Products() {
  return (
    <section
      className={styles.products}
      id="products"
      aria-labelledby="products-title"
    >
      <div className={`${styles.header} reveal`}>
        <div>
          <div className="sectionLabel">Our Range</div>
          <h2
            id="products-title"
            className="sectionTitle"
          >
            Food Grade Paper Products
          </h2>
        </div>
        <Link
          href="/#contact"
          className={styles.btnSecondary}
        >
          Request Catalogue
        </Link>
      </div>

      <ul
        className={styles.grid}
        role="list"
      >
        {PRODUCTS.map((p) => (
          <li
            key={p.slug}
            className={`${styles.card}  reveal`}
          >
            <Link
              href={`/products/${p.slug}`}
              className={styles.cardLink}
              aria-label={`View ${p.name} details`}
            >
              <div
                className={styles.imgWrap}
                style={{ background: BG_MAP[p.bg] }}
              >
                <div
                  className={styles.emoji}
                  role="img"
                  aria-label={p.name}
                >
                  {p.emoji}
                </div>
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
                <div
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  View Details →
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
