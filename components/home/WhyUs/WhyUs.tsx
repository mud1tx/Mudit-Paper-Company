import Image from "next/image";
import styles from "./WhyUs.module.css";
import { COMPANY } from "@/lib/config";

// Each column is about a third of the content width on desktop
const SIZES = "(max-width: 800px) 100vw, 420px";

export default function WhyUs() {
  return (
    <section
      className={styles.section}
      id="why"
      aria-labelledby="whyus-title"
    >
      <header className={`${styles.header} reveal`}>
        <p className={styles.label}>Why Choose Us</p>
        <h2
          id="whyus-title"
          className={styles.title}
        >
          Why Businesses Choose {COMPANY.shortName}
        </h2>
      </header>

      <div className={styles.mosaic}>
        {/* Left column: photo on top, text card below */}
        <div className={styles.column}>
          <div className={`${styles.photo} ${styles.photoLeft} reveal`}>
            <Image
              src="/images/why-us-1.webp"
              alt="White glassine sheets and a roll of brown kraft paper"
              fill
              sizes={SIZES}
              className={styles.img}
            />
          </div>

          <article className={`${styles.card} reveal`}>
            <h3 className={styles.cardTitle}>Specifications That Fit</h3>
            <p className={styles.cardText}>
              Paper options across 18–60 GSM, with available grades and sheet
              sizes tailored to your requirements.
            </p>
          </article>
        </div>

        {/* Centre tall photo with overlay text */}
        <figure className={`${styles.photo} ${styles.tileCenter} reveal`}>
          <Image
            src="/images/why-us-2.webp"
            alt="Translucent sheets of specialty paper in soft light"
            fill
            sizes={SIZES}
            className={styles.img}
          />
          <div
            className={styles.shade}
            aria-hidden="true"
          />
          <figcaption className={styles.overlay}>
            <h3 className={styles.overlayTitle}>Specialty Paper Expertise</h3>
            <p className={styles.overlayText}>
              Focused on greaseproof (OGR), One side OGR, MG poster paper,
              bleached kraft and glassine and for converting and packaging
              applications.
            </p>
          </figcaption>
        </figure>

        {/* Right column: text card on top, photo below */}
        <div className={styles.column}>
          {/* Heading comes first in the HTML so it introduces its text;
              CSS shows it below the text to keep the design */}
          <article className={`${styles.card} ${styles.cardReverse} reveal`}>
            <h3 className={styles.cardTitleLarge}>
              Reliable Sourcing and Support
            </h3>
            <p className={styles.cardLead}>
              Clear communication on product availability, quotations and order
              requirements—from enquiry to dispatch.
            </p>
          </article>

          <div className={`${styles.photo} ${styles.photoRight} reveal`}>
            <Image
              src="/images/why-us-3.webp"
              alt="Stacks of paper sheets on pallets in a warehouse"
              fill
              sizes={SIZES}
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
