"use client";

import { useEffect } from "react";

// Next.js <Link> does nothing when the URL already ends in the same hash, so
// a second click on "Contact" (/#contact) would not scroll back to the form.
// This scrolls to the section in that case. It renders nothing.
export default function HashScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Leave new-tab and modified clicks to the browser
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const link = (e.target as Element | null)?.closest?.("a[href*='#']");
      if (!(link instanceof HTMLAnchorElement)) return;

      const url = new URL(link.href);
      if (
        !url.hash ||
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        url.hash !== location.hash
      ) {
        return;
      }

      const target = document.getElementById(
        decodeURIComponent(url.hash.slice(1)),
      );
      if (!target) return;

      // Wait a frame so the mobile menu can close and release its scroll lock.
      // Smooth scrolling and the header offset come from globals.css.
      requestAnimationFrame(() => target.scrollIntoView());
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
