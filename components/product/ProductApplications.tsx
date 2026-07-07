import Image from "next/image";
import styles from "./product.module.css";
import { Application } from "@/types/product";

interface Props {
  readonly items: readonly Application[];
  readonly label?: string;
  readonly title?: string;
}

export default function ProductApplications({
  items,
  label = "Use Cases",
  title = "Where It's Used",
}: Props) {
  return (
    <section
      aria-labelledby="applications-title"
      className={styles.applications}
    >
      <div className={`${styles.sectionInner} reveal`}>
        <div className={styles.sectionLabel}>{label}</div>
        <h2
          id="applications-title"
          className={styles.sectionTitle}
        >
          {title}
        </h2>
        <ul
          className={styles.appGrid}
          role="list"
        >
          {items.map(({ label, image }) => (
            <li
              key={label}
              className={`${styles.appCard} reveal`}
            >
              <div className={styles.appImgWrap}>
                <Image
                  src={image}
                  alt={`${label} — food grade paper use case by Mudit Paper Company`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.appImg}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.appLabel}>{label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
