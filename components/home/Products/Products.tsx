import Link from "next/link";
import Image from "next/image";
import styles from "./Products.module.css";

const PRODUCTS = [
  {
    slug: "greaseproof-paper",
    tag: "Bestseller",
    name: "OGR Greaseproof Paper",
    image: "/images/greaseproof-paper/hero.jpg",
    alt: "OGR Greaseproof Paper — Food Grade Paper by Mudit Paper Company",
    desc: "Premium food-contact paper engineered to resist oils, fats, and moisture. FSSAI certified for direct food contact.",
    specs: ["30–50 GSM", "Roll & Sheet", "Custom Width", "FSSAI Safe"],
  },
  {
    slug: "glassine-paper",
    tag: "Premium",
    name: "Glassine Paper",
    image: "/images/glassine-paper/hero.webp",
    alt: "Glassine Paper 1S and 2S Smooth — Food Grade Paper by Mudit Paper Company",
    desc: "Smooth, glossy, translucent paper. Available in 1S and 2S smooth variants for confectionery and pharma packaging.",
    specs: ["25–60 GSM", "1S & 2S Smooth"],
  },
  {
    slug: "printed-food-paper",
    tag: "Custom",
    name: "Printed Food Grade Paper",
    image: "/images/printed-food-paper/hero.jpg",
    alt: "Custom Printed Greaseproof and Glassine Paper — Mudit Paper Company",
    desc: "Custom printed greaseproof and glassine paper. Single to multi-colour designs on any GSM.",
    specs: ["Any GSM", "Multi Colour"],
  },
  {
    slug: "ladoo-katori-muffin-cup-liner",
    tag: "Food Service",
    name: "Ladoo Katori & Cup Liner",
    image: "/images/ladoo-katori/hero.jpg",
    alt: "Ladoo Katori and Muffin Cup Liner — Food Grade Paper by Mudit Paper Company",
    desc: "Food-grade paper cup liners for ladoos, muffins, and sweets. Available in 65–100mm sizes, plain to printed.",
    specs: ["65–100mm", "Plain to Printed"],
  },
] as const;

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
        {PRODUCTS.map((p, i) => (
          <li
            key={p.slug}
            className={`${styles.card} reveal`}
          >
            <Link
              href={`/products/${p.slug}`}
              className={styles.cardLink}
              aria-label={`View ${p.name} details`}
            >
              {/* Product image */}
              <div className={styles.imgWrap}>
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.img}
                  loading={i === 0 ? "eager" : "lazy"}
                  style={{ objectFit: "cover" }}
                />
                {/* Tag overlay on image */}
                <span
                  className={styles.tag}
                  aria-label={`Category: ${p.tag}`}
                >
                  {p.tag}
                </span>
              </div>

              {/* Card content */}
              <div className={styles.content}>
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
