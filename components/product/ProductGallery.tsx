import Image from "next/image";
import styles from "./product.module.css";

interface Props {
  images: string[];
  productName: string;
  label?: string;
  title?: string;
}

export default function ProductGallery({
  images,
  productName,
  label = "Designs",
  title = "Available Designs",
}: Props) {
  if (!images || images.length === 0) return null;

  return (
    <section className={styles.gallery}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.galleryGrid}>
          {images.map((src, i) => (
            <div
              key={i}
              className={styles.galleryItem}
            >
              <Image
                src={src}
                alt={`${productName} Design ${i + 1}`}
                width={400}
                height={400}
                className={styles.galleryImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
