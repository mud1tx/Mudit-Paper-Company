import Image from "next/image";
import styles from "./About.module.css";

const PILLARS = [
  {
    icon: "🌿",
    title: "Eco-Conscious",
    text: "Sustainably sourced, recyclable & biodegradable options",
  },
  {
    icon: "🔬",
    title: "Lab Tested",
    text: "Every batch tested for food-safe compliance",
  },
  {
    icon: "🚚",
    title: "Pan-India Supply",
    text: "Reliable delivery across all major cities",
  },
  {
    icon: "🤝",
    title: "Custom Orders",
    text: "Bespoke sizes, weights & branding available",
  },
] as const;

export default function About() {
  return (
    <section
      className={styles.about}
      id="about"
      aria-labelledby="about-title"
    >
      {/* Visual */}
      <div className={`${styles.visual} reveal`}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/about.webp"
            alt="Mudit Paper Company — Food Grade Paper Products Kanpur"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.aboutImg}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={styles.badge}
          aria-label="15 plus years of excellence"
        >
          <div
            className={styles.bigNum}
            aria-hidden="true"
          >
            15+
          </div>
          <p>Years of Excellence</p>
        </div>
      </div>

      {/* Content */}
      <div className={`${styles.content} reveal`}>
        <div className="sectionLabel">Who We Are</div>
        <h2
          id="about-title"
          className="sectionTitle"
          style={{ marginBottom: "20px" }}
        >
          Trusted Partner for Food-Safe Paper Solutions
        </h2>
        <p className={styles.text}>
          Mudit Paper Company has been a cornerstone supplier of food-grade
          paper products for over a decade. Based in Kanpur, we serve bakeries,
          QSR chains, food processors, sweet shops, and large FMCG manufacturers
          across North India and beyond.
        </p>
        <p className={styles.text}>
          Every product we trade meets strict food safety standards — because
          when paper touches food, there&apos;s no room for compromise. We
          source only from mills with certified, verified food-contact
          compliance.
        </p>

        <div className={styles.pillars}>
          {PILLARS.map(({ icon, title, text }) => (
            <div
              key={title}
              className={styles.pillar}
            >
              <div
                className={styles.pillarIcon}
                role="img"
                aria-label={title}
              >
                {icon}
              </div>
              <h3 className={styles.pillarTitle}>{title}</h3>
              <p className={styles.pillarText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
