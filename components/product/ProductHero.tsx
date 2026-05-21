import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";

interface Props {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly image: string;
  readonly breadcrumb: string;
  readonly tag?: string;
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
    <section
      className={styles.hero}
      aria-labelledby="product-title"
    >
      {/* Image — left side */}
      <div className={styles.heroVisual}>
        <div className={styles.illustrationWrap}>
          <Image
            src={image}
            alt={`${name} — Food Grade Paper by Mudit Paper Company`}
            width={600}
            height={350}
            className={styles.productImg}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className={`${styles.heroContent} reveal`}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumb}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">
              <span>/</span>
            </li>
            <li>
              <Link href="/#products">Products</Link>
            </li>
            <li aria-hidden="true">
              <span>/</span>
            </li>
            <li aria-current="page">
              <span>{breadcrumb}</span>
            </li>
          </ol>
        </nav>

        <div className={styles.heroTag}>{tag}</div>

        <h1
          id="product-title"
          className={styles.heroTitle}
        >
          {name}
        </h1>

        <p className={styles.heroTagline}>{tagline}</p>
        <p className={styles.heroDesc}>{description}</p>

        <div className={styles.heroActions}>
          <Link
            href="#contact"
            className={styles.btnPrimary}
            aria-label={`Request a sample of ${name}`}
          >
            Request a Sample
          </Link>
          <Link
            href="#contact"
            className={styles.btnSecondary}
            aria-label={`Get a quote for ${name}`}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
