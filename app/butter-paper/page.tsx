import Link from "next/link";
import TopBar from "@/components/layout/TopBar/TopBar";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ProductFaq from "@/components/product/ProductFaq";
import ProductCTA from "@/components/product/ProductCTA";
import BackToTop from "@/components/ui/BackToTop";
import RevealInit from "@/components/RevealInit";
import { PRODUCTS } from "@/data/product";
import { COMPANY } from "@/lib/config";
import {
  PAGE_UPDATED,
  faqJsonLd,
  pageMetadata,
  subPageJsonLd,
} from "@/lib/seo";
import type { FaqItem, Product } from "@/types/product";
import styles from "@/components/product/product.module.css";

const PATH = "/butter-paper";
// A guide, not a sales page: we supply glassine and greaseproof, not the coated
// paper also sold as "butter paper", so the title must not promise butter paper
const SEO_TITLE = "What Is Butter Paper? Glassine vs Greaseproof Paper";
const TITLE = "What Is Butter Paper?";
const DESCRIPTION =
  "Butter paper is a trade name, not one grade. It can mean glassine, greaseproof (OGR) or coated paper. Compare glassine and greaseproof GSM, finish and uses.";

export const metadata = pageMetadata({
  title: SEO_TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const GLASSINE = PRODUCTS["glassine-paper"];
const GREASEPROOF = PRODUCTS["greaseproof-ogr-paper"];

// Read from the product data, so this page can never disagree with it
const gsm = (product: Product) =>
  product.variants[0].specs.find((s) => s.label === "GSM Range")?.value ?? "";
const uses = (product: Product) => product.variants[0].applications.join(", ");

const ROWS = [
  {
    label: "GSM range",
    glassine: gsm(GLASSINE),
    greaseproof: gsm(GREASEPROOF),
  },
  {
    label: "Appearance",
    glassine: "Smooth, glossy and translucent",
    greaseproof: "White",
  },
  {
    label: "Chosen for",
    glassine: "Air, grease and moisture barrier, with a see-through finish",
    greaseproof: "Oil and grease resistance, kit value 3–7",
  },
  {
    label: "Grade or format",
    glassine: "Two-Sided Smooth (2S)",
    greaseproof: "Sheets cut to your required size",
  },
  {
    label: "Typical uses",
    glassine: uses(GLASSINE),
    greaseproof: uses(GREASEPROOF),
  },
] as const;

const FAQS: readonly FaqItem[] = [
  {
    question: "What is butter paper?",
    answer:
      "Butter paper is a trade name, not one exact paper grade. Depending on the buyer or seller, it can mean glassine paper, greaseproof (OGR) paper or a separate coated paper, so confirm the GSM, coating and intended use before ordering.",
  },
  {
    question: "Do you supply coated butter paper?",
    answer: `No. ${COMPANY.name} supplies glassine paper and greaseproof (OGR) paper, not coated paper sold as butter paper. If you are not sure which paper you need, tell us your use and we will say whether one of ours suits it.`,
  },
  {
    question: "Which should I choose, glassine or greaseproof?",
    answer:
      "Choose glassine when you want a smooth, translucent finish, such as chocolate, gift or pharmaceutical packaging. Choose greaseproof when oil and grease resistance matters most, such as burger wrapping and tray liners.",
  },
  {
    question: "Do you supply glassine and greaseproof paper across India?",
    answer: `Yes. ${COMPANY.name} is based in ${COMPANY.city}, ${COMPANY.state}, and supplies bulk orders to businesses across India. Share your use, GSM, size and quantity, and we will suggest the right paper.`,
  },
];

export default function ButterPaperPage() {
  const page = subPageJsonLd({
    name: SEO_TITLE,
    description: DESCRIPTION,
    path: PATH,
    dateModified: PAGE_UPDATED.butterPaper,
    crumbs: [
      { name: "Home", path: "/" },
      { name: TITLE, path: PATH },
    ],
  });
  const structuredData = {
    ...page,
    "@graph": [...page["@graph"], faqJsonLd(FAQS, PATH)],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          // Escape "<" so data can never close the script tag early
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <TopBar />
      <Navbar />
      <RevealInit />
      <main id="main-content">
        <section
          className={styles.guide}
          aria-labelledby="guide-title"
        >
          <div className={styles.guideInner}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumb}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-current="page">{TITLE}</li>
              </ol>
            </nav>

            <h1
              id="guide-title"
              className={styles.guideTitle}
            >
              {TITLE}
            </h1>
            <p className={styles.guideLead}>
              Butter paper is a trade name, not one exact paper grade. Depending
              on the buyer or seller, it can mean glassine paper, greaseproof
              (OGR) paper or a separate coated paper, so confirm the GSM,
              coating and intended use before ordering. {COMPANY.name} supplies
              glassine and greaseproof paper in bulk across India, but not
              coated butter paper.
            </p>

            <h2 className={styles.faqTitle}>Glassine vs greaseproof paper</h2>

            <div className={styles.guideTableWrap}>
              <table className={styles.guideTable}>
                <caption className={styles.srOnly}>
                  Glassine paper compared with greaseproof paper
                </caption>
                <thead>
                  <tr>
                    <td />
                    <th scope="col">Glassine paper</th>
                    <th scope="col">Greaseproof (OGR) paper</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(({ label, glassine, greaseproof }) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{glassine}</td>
                      <td>{greaseproof}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.heroActions}>
              <Link
                href="/products/glassine-paper"
                className={styles.btnPrimary}
              >
                View glassine paper
              </Link>
              <Link
                href="/products/greaseproof-ogr-paper"
                className={styles.btnSecondary}
              >
                View greaseproof paper
              </Link>
            </div>
          </div>
        </section>

        <ProductFaq items={FAQS} />
        <ProductCTA productName="Glassine or Greaseproof Paper" />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
