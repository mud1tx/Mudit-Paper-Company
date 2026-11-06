"use client";

import { useEffect } from "react";

// Fades in every .reveal element the first time it scrolls into view. The
// hidden starting state lives in globals.css and only applies when JavaScript
// is on, so content is never stuck invisible.
export function useReveal() {
  useEffect(() => {
    const timers: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger elements that appear together, e.g. a row of cards
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            observer.unobserve(entry.target);
            timers.push(
              window.setTimeout(
                () => entry.target.classList.add("visible"),
                i * 55,
              ),
            );
          });
      },
      { threshold: 0.08 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);
}
