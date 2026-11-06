import Link from "next/link";
import styles from "./product.module.css";
import type { FaqItem } from "@/types/product";

interface Props {
  readonly items: readonly FaqItem[];
  readonly title?: string;
}

// Native <details> needs no JavaScript, and the answers stay in the HTML for
// search engines and AI assistants to read
export default function ProductFaq({
  items,
  title = "Frequently asked questions",
}: Props) {
  if (items.length === 0) return null;

  return (
    <section
      className={styles.faq}
      aria-labelledby="faq-title"
    >
      <div className={styles.faqInner}>
        <h2
          id="faq-title"
          className={styles.faqTitle}
        >
          {title}
        </h2>
        {items.map(({ question, answer, link }, i) => (
          <details
            key={question}
            className={styles.faqItem}
            open={i === 0}
          >
            <summary>
              <h3>{question}</h3>
            </summary>
            <p>
              {answer}
              {link && (
                <>
                  {" "}
                  <Link href={link.href}>{link.label}</Link>.
                </>
              )}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
