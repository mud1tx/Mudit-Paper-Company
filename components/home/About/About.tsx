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
          <div
            className={styles.pattern}
            aria-hidden="true"
          />
          <svg
            width="160"
            height="160"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "relative", zIndex: 2 }}
            aria-hidden="true"
          >
            <rect
              x="40"
              y="20"
              width="120"
              height="160"
              rx="6"
              fill="rgba(201,168,76,0.12)"
              stroke="rgba(201,168,76,0.35)"
              strokeWidth="1.5"
            />
            <rect
              x="55"
              y="38"
              width="90"
              height="124"
              rx="4"
              fill="rgba(26,74,46,0.07)"
              stroke="rgba(26,74,46,0.18)"
              strokeWidth="1"
            />
            <line
              x1="70"
              y1="58"
              x2="130"
              y2="58"
              stroke="rgba(26,74,46,0.28)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="70"
              y1="74"
              x2="130"
              y2="74"
              stroke="rgba(26,74,46,0.18)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="70"
              y1="90"
              x2="110"
              y2="90"
              stroke="rgba(26,74,46,0.18)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="130"
              r="22"
              fill="rgba(26,74,46,0.1)"
              stroke="rgba(26,74,46,0.28)"
              strokeWidth="1.5"
            />
            <path
              d="M90 130 L98 138 L112 122"
              stroke="#1a4a2e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
