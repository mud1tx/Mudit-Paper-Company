import Link from "next/link";
import { quoteHref } from "@/lib/contact";
import styles from "./product.module.css";
import { COMPANY } from "@/lib/config";
import { formatPhone } from "@/lib/format";

interface Props {
  readonly productName: string;
  /** Pre-selects this product on the enquiry form */
  readonly slug?: string;
}

// Closing quote banner. id="contact" is the target of the page's own
// "#contact" links.
export default function ProductCTA({ productName, slug }: Props) {
  return (
    <section
      className={styles.cta}
      id="contact"
      aria-labelledby="cta-title"
    >
      <div className={`${styles.ctaBox} reveal`}>
        <div>
          <h2
            id="cta-title"
            className={styles.ctaTitle}
          >
            Need {productName} in bulk?
          </h2>
          <p className={styles.ctaDesc}>
            Share your size, GSM and quantity. We reply with a quote within 24
            hours, and samples are available.
          </p>
        </div>

        <div className={styles.ctaActions}>
          <Link
            href={quoteHref(slug)}
            className={styles.btnPrimary}
          >
            Get a quote
          </Link>
          <a
            href={`tel:${COMPANY.phone}`}
            className={styles.ctaCall}
          >
            or call {formatPhone(COMPANY.phone)}
          </a>
        </div>
      </div>
    </section>
  );
}
