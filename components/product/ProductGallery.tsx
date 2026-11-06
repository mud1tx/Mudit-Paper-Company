import Image from "next/image";
import styles from "./product.module.css";
import type { GalleryImage } from "@/types/product";

interface Props {
  readonly images: readonly GalleryImage[];
}

// Photos of the product in use, each with a caption. Renders nothing when
// the product has no gallery images.
export default function ProductGallery({ images }: Props) {
  if (images.length === 0) return null;

  return (
    <section
      className={styles.gallery}
      aria-labelledby="gallery-title"
    >
      <div className={`${styles.galleryInner} reveal`}>
        <h2
          id="gallery-title"
          className={styles.galleryTitle}
        >
          Photo gallery
        </h2>
        <ul className={styles.galleryGrid}>
          {images.map(({ src, caption, alt }) => (
            <li
              key={src}
              className={styles.galleryItem}
            >
              <figure>
                <div className={styles.galleryFrame}>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 420px"
                    className={styles.galleryImg}
                  />
                </div>
                <figcaption className={styles.galleryCaption}>
                  {caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
