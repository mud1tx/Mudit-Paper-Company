import styles from "./product.module.css";

interface Props {
  productName: string;
  title?: string;
  desc?: string;
  phone?: string;
  email?: string;
}

export default function ProductCTA({
  productName,
  title,
  desc = "Request a free sample or get a bulk quote. We respond within 24 hours.",
  phone = "+919XXXXXXXXX",
  email = "info@muditpapercompany.com",
}: Props) {
  return (
    <section
      className={styles.cta}
      id="contact"
    >
      <div className={styles.ctaInner}>
        <div className={styles.ctaTag}>Get Started</div>
        <h2 className={styles.ctaTitle}>
          {title || `Interested in ${productName}?`}
        </h2>
        <p className={styles.ctaDesc}>{desc}</p>
        <div className={styles.ctaActions}>
          <a
            href={`tel:${phone}`}
            className={styles.btnPrimary}
          >
            📞 Call Us Now
          </a>
          <a
            href={`mailto:${email}`}
            className={styles.btnSecondary}
          >
            ✉️ Send Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
