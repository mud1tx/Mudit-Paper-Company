import Link from "next/link";
import styles from "./not-found.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
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
    </div>
  );
}
