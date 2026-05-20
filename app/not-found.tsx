import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Browse our food grade paper products or return to the Mudit Paper Company home page.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div
        id="main-content"
        className={styles.wrapper}
      >
        <div className={styles.card}>
          <div className={styles.code}>404</div>
          <div className={styles.divider} />
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.desc}>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className={styles.btn}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
