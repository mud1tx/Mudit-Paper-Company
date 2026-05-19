import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";

interface Props {
  name: string;
  tagline: string;
  description: string;
  image: string;
  breadcrumb: string;
  tag?: string;
}

export default function ProductHero({
  name,
  tagline,
  description,
  image,
  breadcrumb,
  tag = "Food Grade · FSSAI Certified",
}: Props) {
  return (
    <section className={styles.hero}>
      {/* IMAGE — left */}
      <div className={styles.heroVisual}>
        <div className={styles.illustrationWrap}>
          <Image
            src={image}
            alt={name}
            width={600}
            height={350}
            className={styles.productImg}
            priority
          />
        </div>
      </div>

      {/* CONTENT — right */}
      <div className={styles.heroContent}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#products">Products</Link>
          <span>/</span>
          <span>{breadcrumb}</span>
        </div>
        <div className={styles.heroTag}>{tag}</div>
        <h1 className={styles.heroTitle}>{name}</h1>
        <p className={styles.heroTagline}>{tagline}</p>
        <p className={styles.heroDesc}>{description}</p>
        <div className={styles.heroActions}>
          <Link
            href="#contact"
            className={styles.btnPrimary}
          >
            Request a Sample
          </Link>
          <Link
            href="#contact"
            className={styles.btnSecondary}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
