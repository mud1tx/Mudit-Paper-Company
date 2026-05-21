import styles from "./product.module.css";
import { COMPANY } from "@/lib/config";

interface Props {
  readonly productName: string;
  readonly title?: string;
  readonly desc?: string;
}

export default function ProductCTA({
  productName,
  title,
  desc = "Request a free sample or get a bulk quote. We respond within 24 hours.",
}: Props) {
  return (
    <section
      className={styles.cta}
      id="contact"
      aria-labelledby="cta-title"
    >
      <div className={`${styles.ctaInner} reveal`}>
        <div className={styles.ctaTag}>Get Started</div>
        <h2
          id="cta-title"
          className={styles.ctaTitle}
        >
          {title ?? `Interested in ${productName}?`}
        </h2>
        <p className={styles.ctaDesc}>{desc}</p>
        <div className={styles.ctaActions}>
          <a
            href={`tel:${COMPANY.phone}`}
            className={styles.btnPrimary}
            aria-label={`Call Mudit Paper Company about ${productName}`}
          >
            📞 Call Us Now
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className={styles.btnSecondary}
            aria-label={`Email Mudit Paper Company about ${productName}`}
          >
            ✉️ Send Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
