import Image from "next/image";
import styles from "./About.module.css";
import { COMPANY } from "@/lib/config";

type IconProps = { className?: string };

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

function LayersIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      {...svgProps}
    >
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  );
}

function ClipboardCheckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      {...svgProps}
    >
      <rect
        x="6"
        y="4"
        width="12"
        height="17"
        rx="2"
      />
      <path d="M9 4V3h6v1" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  );
}

function TruckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      {...svgProps}
    >
      <path d="M2 6h11v10H2z" />
      <path d="M13 10h4l3 3v3h-7" />
      <circle
        cx="6"
        cy="18"
        r="2"
      />
      <circle
        cx="17"
        cy="18"
        r="2"
      />
    </svg>
  );
}

function SlidersIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      {...svgProps}
    >
      <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0" />
      <circle
        cx="16"
        cy="6"
        r="2"
      />
      <circle
        cx="8"
        cy="12"
        r="2"
      />
      <circle
        cx="18"
        cy="18"
        r="2"
      />
    </svg>
  );
}

const PILLARS = [
  {
    key: "specialty",
    title: "Specialty Paper Range",
    text: "greaseproof (OGR) paper, One side OGR paper, MG poster paper, bleached kraft and glassine grades for packaging and converting applications.",
    Icon: LayersIcon,
  },
  {
    key: "quality",
    title: "Quality-Focused Sourcing",
    text: "Paper sourced against specified GSM, grade and customer requirements.",
    Icon: ClipboardCheckIcon,
  },
  {
    key: "supply",
    title: "Pan-India Supply",
    text: "Serving paper converters, packaging manufacturers and industrial buyers across India.",
    Icon: TruckIcon,
  },
  {
    key: "custom",
    title: "Flexible Specifications",
    text: "Available in a range of GSMs and sheet sizes to suit your specific requirements.",
    Icon: SlidersIcon,
  },
] as const;

export default function About() {
  const yearsInBusiness = Math.max(
    0,
    new Date().getFullYear() - COMPANY.foundedYear,
  );

  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-title"
    >
      <div className={styles.visual}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/about.webp"
            alt="Printed food grade paper sheets, sweet boxes and ladoos in paper cup liners"
            fill
            sizes="(max-width: 1280px) 45vw, 600px"
            className={styles.aboutImg}
          />
          <div
            className={styles.pattern}
            aria-hidden="true"
          />
        </div>

        <div className={styles.badge}>
          <span className={styles.bigNum}>{yearsInBusiness}+</span>
          <p>Years of experience</p>
        </div>
      </div>

      <div>
        <span className={styles.sectionLabel}>About Us</span>
        <h2
          id="about-title"
          className={styles.sectionTitle}
        >
          Trusted Partner for Paper Solutions
        </h2>
        <p className={styles.text}>
          {COMPANY.name} specializes in sourcing and supplying quality specialty
          papers to packaging manufacturers, paper converters, and businesses
          across India.
        </p>
        <p className={styles.text}>
          Our product range includes greaseproof (OGR) paper, One Side OGR
          paper, MG poster paper, bleached kraft paper and glassine paper
          serving diverse industrial and packaging applications. We focus on
          dependable sourcing, consistent quality, and responsive service to
          help our customers meet their business requirements.
        </p>
        <p className={styles.text}>
          <strong>
            Our commitment is simple: quality materials, reliable supply, and
            lasting business relationships.
          </strong>
        </p>

        <ul className={styles.pillars}>
          {PILLARS.map(({ key, title, text, Icon }) => (
            <li
              key={key}
              className={styles.pillar}
            >
              <span className={styles.pillarIcon}>
                <Icon />
              </span>
              <h3 className={styles.pillarTitle}>{title}</h3>
              <p className={styles.pillarText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
