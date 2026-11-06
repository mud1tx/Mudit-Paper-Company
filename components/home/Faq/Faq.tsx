import Link from "next/link";
import styles from "./Faq.module.css";
import { HOME_FAQS } from "@/data/home-faq";
import { COMPANY } from "@/lib/config";
import { formatPhone, whatsappUrl } from "@/lib/format";

// Server component. Native <details> opens without JavaScript, and every
// answer stays in the HTML for search engines and AI assistants to read.
export default function Faq() {
  return (
    <section
      className={styles.section}
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className={`${styles.intro} reveal`}>
        <p className={styles.label}>FAQs</p>
        <h2
          id="faq-title"
          className={styles.title}
        >
          Frequently Asked Questions
        </h2>
        <p className={styles.lead}>
          Quick answers about our paper, delivery, samples and bulk orders.
        </p>

        <div className={styles.help}>
          <p className={styles.helpTitle}>Still have a question?</p>
          <p className={styles.helpText}>
            Talk to us directly and we will help you choose the right paper.
          </p>
          <div className={styles.helpLinks}>
            <a
              href={whatsappUrl(COMPANY.whatsapp)}
              className={styles.helpPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask on WhatsApp
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className={styles.helpSecondary}
            >
              Call {formatPhone(COMPANY.phone)}
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.list} reveal`}>
        {HOME_FAQS.map(({ question, answer, link }, i) => (
          <details
            key={question}
            className={styles.item}
            // Same name: opening one question closes the one before it
            name="home-faq"
            open={i === 0}
          >
            <summary className={styles.question}>
              <h3>{question}</h3>
              <span
                className={styles.icon}
                aria-hidden="true"
              />
            </summary>
            <p className={styles.answer}>
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
