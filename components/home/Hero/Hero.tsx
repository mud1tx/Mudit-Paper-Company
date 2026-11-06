import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import styles from "./Hero.module.css";
import { COMPANY } from "@/lib/config";

// Exported for the image sitemap
export const HERO_SLIDES = [
  {
    src: "/images/hero/slide-1.webp",
    alt: "Curled sheets of white food grade greaseproof paper",
  },
  {
    src: "/images/hero/slide-2.webp",
    alt: "Almond muffins baked in white paper cup liners",
  },
  {
    src: "/images/hero/slide-3.webp",
    alt: "Curved sheets of red coloured paper",
  },
] as const;

const yearsInBusiness = Math.max(
  0,
  new Date().getFullYear() - COMPANY.foundedYear,
);

const STATS = [
  { num: "500", label: "Clients Served" },
  { num: String(yearsInBusiness), label: "Years Experience" },
  { num: "5", label: "Paper Products" },
] as const;

// Server component: the text, h1 and links are plain HTML with no client
// JavaScript. Only the slideshow around them (HeroCarousel) runs in the browser.
export default function Hero() {
  return (
    <HeroCarousel slides={HERO_SLIDES}>
      <div className={styles.content}>
        <p className={styles.badge}>Paper Wholesaler in India</p>

        <h1 className={styles.h1}>
          Premium Paper,
          <br />
          <em className={styles.em}>Pure Quality</em> Guaranteed
        </h1>

        <p className={styles.desc}>
          Your trusted partner for quality paper solutions across India.
        </p>

        <div className={styles.actions}>
          <Link
            href="/#products"
            className={styles.btnPrimary}
          >
            Explore Products
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/#contact"
            className={styles.btnSecondary}
          >
            Request a Sample
          </Link>
        </div>

        <ul className={styles.stats}>
          {STATS.map(({ num, label }) => (
            <li key={label}>
              <strong className={styles.statNum}>
                {num}
                <span>+</span>
              </strong>
              <span className={styles.statLabel}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </HeroCarousel>
  );
}
