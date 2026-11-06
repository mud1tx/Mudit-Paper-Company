"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

const SCROLL_THRESHOLD = 400;

// The only part of the floating buttons that needs JavaScript: it appears
// after the visitor scrolls down and scrolls back to the top.
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      // No behavior given, so it follows globals.css: smooth, or instant
      // when the visitor prefers reduced motion
      onClick={() => window.scrollTo({ top: 0 })}
      // visibility: hidden also removes it from the tab order and from
      // screen readers while it is not shown
      className={`${styles.btn} ${styles.top} ${visible ? styles.topVisible : ""}`}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
