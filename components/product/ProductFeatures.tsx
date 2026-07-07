"use client";

import { useState } from "react";
import styles from "./product.module.css";
import { Feature } from "@/types/product";

interface Props {
  readonly items: readonly Feature[];
  readonly label?: string;
  readonly title?: string;
}

export default function ProductFeatures({
  items,
  label = "Why Choose Us",
  title = "Features That Set Us Apart",
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFeature = (index: number) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      className={styles.features}
      aria-labelledby="features-title"
    >
      <div className={styles.sectionInner}>
        <header className={`${styles.featuresHeader} reveal`}>
          <div>
            <div className={styles.sectionLabel}>{label}</div>

            <h2
              id="features-title"
              className={styles.featuresTitle}
            >
              {title}
            </h2>
          </div>
        </header>

        <div className={`${styles.featureAccordion} reveal`}>
          {items.map(({ title, desc, icon }, index) => {
            const isActive = activeIndex === index;
            const contentId = `feature-content-${index}`;
            const buttonId = `feature-button-${index}`;

            return (
              <article
                key={title}
                className={`${styles.featureRow} ${
                  isActive ? styles.featureRowActive : ""
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  className={styles.featureTrigger}
                  onClick={() => toggleFeature(index)}
                  aria-expanded={isActive}
                  aria-controls={contentId}
                >
                  <span
                    className={styles.featureNumber}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={styles.featureIcon}
                    aria-hidden="true"
                  >
                    {icon}
                  </span>

                  <h3 className={styles.featureTitle}>{title}</h3>

                  <span
                    className={styles.featureToggle}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  id={contentId}
                  className={styles.featureContent}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className={styles.featureContentInner}>
                    <span
                      className={styles.featureContentLine}
                      aria-hidden="true"
                    />

                    <p className={styles.featureDesc}>{desc}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
