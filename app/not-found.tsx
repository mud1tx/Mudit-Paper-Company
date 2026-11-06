import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar/TopBar";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { PRODUCTS_LIST } from "@/data/product";
import { COMPANY } from "@/lib/config";
import { formatPhone, whatsappUrl } from "@/lib/format";
import styles from "./not-found.module.css";
import BackToTop from "@/components/ui/BackToTop";

// Next.js sends a 404 status for this page. The robots setting overrides the
// layout's "index, follow" so the page never shows up in Google, while the
// product links on it are still followed.
export const metadata: Metadata = {
  title: "Page Not Found",
  description: `This page could not be found. Browse our food-grade paper products or contact ${COMPANY.name}.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main
        id="main-content"
        className={styles.main}
      >
        <div className={styles.inner}>
          <p
            className={styles.code}
            aria-hidden="true"
          >
            404
          </p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.desc}>
            The page you are looking for may have moved or no longer exists. Try
            one of our products below, or return to our home page.
          </p>

          <div className={styles.actions}>
            <Link
              href="/"
              className={styles.primary}
            >
              Back to home
            </Link>
            <Link
              href="/#contact"
              className={styles.secondary}
            >
              Request a quote
            </Link>
          </div>

          {/* Links to every product, so a visitor (or crawler) arriving from
              an old or mistyped URL can still reach the pages that matter */}
          <nav
            aria-labelledby="nf-products"
            className={styles.nav}
          >
            <h2
              id="nf-products"
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

          <p className={styles.help}>
            Need help finding something? Call{" "}
            <a href={`tel:${COMPANY.phone}`}>{formatPhone(COMPANY.phone)}</a> or{" "}
            <a
              href={whatsappUrl(COMPANY.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              message us on WhatsApp
            </a>
            .
          </p>
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
