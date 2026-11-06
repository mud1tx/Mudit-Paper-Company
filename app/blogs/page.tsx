import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar/TopBar";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { PRODUCTS_LIST } from "@/data/product";
import { COMPANY } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";
// Same centred layout as the 404 page
import styles from "@/app/not-found.module.css";

// Placeholder until the first posts are published. noindex keeps this
// near-empty page out of Google (thin pages count against a site); follow
// still lets Google reach the product pages linked below. When real posts go
// live: remove robots here and add /blogs to app/sitemap.ts.
export const metadata: Metadata = {
  ...pageMetadata({
    title: "Blog",
    description: `Guides and news on food-grade paper from ${COMPANY.name}. Coming soon.`,
    path: "/blogs",
  }),
  robots: { index: false, follow: true },
};

export default function BlogsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main
        id="main-content"
        className={styles.main}
      >
        <div className={styles.inner}>
          <h1 className={styles.title}>Blog coming soon</h1>
          <p className={styles.desc}>
            We are writing guides on choosing and using food-grade paper. Until
            then, explore our products or ask us anything directly.
          </p>

          <div className={styles.actions}>
            <Link
              href="/#products"
              className={styles.primary}
            >
              View products
            </Link>
            <Link
              href="/#contact"
              className={styles.secondary}
            >
              Ask a question
            </Link>
          </div>

          <nav
            aria-labelledby="blog-products"
            className={styles.nav}
          >
            <h2
              id="blog-products"
              className={styles.navTitle}
            >
              Our products
            </h2>
            <ul className={styles.links}>
              {PRODUCTS_LIST.map(({ slug, label }) => (
                <li key={slug}>
                  <Link
                    href={`/products/${slug}`}
                    className={styles.link}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
