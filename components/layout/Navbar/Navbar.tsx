"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { PRODUCTS_LIST } from "@/data/product";
import { COMPANY } from "@/lib/config";

const PRODUCTS = PRODUCTS_LIST.map(({ slug, label }) => ({
  href: `/products/${slug}`,
  label,
}));

const NAV_LINKS = [
  { href: "/#about", label: "About Us", cta: false },
  { href: "/blogs", label: "Blogs", cta: false },
  { href: "/#contact", label: "Contact Us", cta: true },
] as const;

// Must match the breakpoint in Navbar.module.css
const DESKTOP_QUERY = "(min-width: 1025px)";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, []);

  // Shadow on the navbar once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the screen grows to desktop size.
  // A media query listener fires once at the breakpoint, unlike resize,
  // which fires on every pixel of resizing.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeMenu]);

  // While the mobile menu is open: lock page scroll, move focus into the
  // menu, close on Escape, and return focus to the hamburger afterwards
  useEffect(() => {
    if (!menuOpen) return;
    const hamburger = hamburgerRef.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      hamburger?.focus();
    };
  }, [menuOpen, closeMenu]);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={styles.logoLink}
        >
          <Image
            src="/logo.webp"
            alt={`${COMPANY.name} home`}
            width={157}
            height={75}
            className={styles.logo}
            priority
          />
        </Link>

        {/* Desktop navigation. Always in the HTML, so search engines see
            every link on mobile too; CSS hides it below the breakpoint. */}
        <ul className={styles.links}>
          <li className={styles.dropItem}>
            <Link
              href="/#products"
              className={`${styles.link} ${styles.dropTrigger}`}
            >
              Products
              <svg
                className={styles.chevron}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <div className={styles.dropdown}>
              <ul className={styles.dropList}>
                {PRODUCTS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={styles.dropLink}
                      aria-current={current(href)}
                    >
                      <span className={styles.dropLabel}>{label}</span>
                      <svg
                        className={styles.dropChevron}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 7h8M7 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {NAV_LINKS.map(({ href, label, cta }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${cta ? styles.linkCta : ""}`}
                aria-current={current(href)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile: hamburger */}
        <div className={styles.mobileRight}>
          <button
            ref={hamburgerRef}
            type="button"
            className={styles.hamburger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              aria-hidden="true"
              className={menuOpen ? styles.hamOpen : ""}
            />
            <span
              aria-hidden="true"
              className={menuOpen ? styles.hamOpen : ""}
            />
            <span
              aria-hidden="true"
              className={menuOpen ? styles.hamOpen : ""}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className={styles.mobileMenu}
          aria-label="Mobile navigation"
        >
          <button
            ref={closeRef}
            type="button"
            className={styles.mobileClose}
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ✕
          </button>

          <div>
            <button
              type="button"
              className={`${styles.mobileLink} ${styles.mobileLinkBtn}`}
              onClick={() => setProductsOpen((o) => !o)}
              aria-expanded={productsOpen}
              aria-controls="mobile-products"
            >
              Products
              <svg
                className={`${styles.chevron} ${productsOpen ? styles.chevronOpen : ""}`}
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {productsOpen && (
              <ul
                id="mobile-products"
                className={styles.mobileSubLinks}
              >
                {PRODUCTS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={styles.mobileSubLink}
                      aria-current={current(href)}
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={styles.mobileLink}
              aria-current={current(href)}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
