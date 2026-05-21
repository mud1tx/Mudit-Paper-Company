import Image from "next/image";
import styles from "./product.module.css";

interface Props {
  readonly images: readonly string[];
  readonly productName: string;
  readonly label?: string;
  readonly title?: string;
}

export default function ProductGallery({
  images,
  productName,
  label = "Designs",
  title = "Available Designs",
}: Props) {
  if (!images || images.length === 0) return null;

  return (
    <section
      className={styles.gallery}
      aria-labelledby="gallery-title"
    >
      <div className={`${styles.sectionInner} reveal`}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2
          id="gallery-title"
          className={styles.sectionTitle}
        >
          {title}
        </h2>
        <div
          className={styles.galleryGrid}
          role="list"
          aria-label={`${productName} design gallery`}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className={`${styles.galleryItem} reveal`}
              role="listitem"
            >
              <Image
                src={src}
                alt={`${productName} Design ${i + 1}`}
                width={400}
                height={400}
                className={styles.galleryImg}
                loading={i === 0 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
