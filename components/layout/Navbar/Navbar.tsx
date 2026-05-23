"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme, ThemeMode } from "@/hooks/useTheme";
import styles from "./Navbar.module.css";
import { PRODUCTS_LIST } from "@/data/product";
import Image from "next/image";

const PRODUCTS = PRODUCTS_LIST.map(({ slug, label, icon }) => ({
  href: `/products/${slug}`,
  label,
  icon,
}));

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#industries", label: "Industries" },
  { href: "/blogs", label: "Blogs" },
];

const THEME_BTNS: { mode: ThemeMode; icon: string; title: string }[] = [
  { mode: "light", icon: "☀️", title: "Light mode" },
  { mode: "dark", icon: "🌙", title: "Dark mode" },
  { mode: "system", icon: "💻", title: "System pref" },
];

function ThemePill({
  mode,
  onSelect,
}: {
  mode: ThemeMode;
  onSelect: (m: ThemeMode) => void;
}) {
  return (
    <div
      className={styles.themePill}
      title="Switch theme"
    >
      {THEME_BTNS.map(({ mode: m, icon, title }) => (
        <button
          key={m}
          className={`${styles.ttBtn} ${mode === m ? styles.ttBtnActive : ""}`}
          onClick={() => onSelect(m)}
          title={title}
          aria-label={title}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const { mode, applyTheme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className={styles.skipLink}
      >
        Skip to main content
      </a>
      <nav
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={styles.logoLink}
          aria-label="Mudit Paper Company Home"
        >
          <Image
            src="/images/logoCrop.png"
            alt="Mudit Paper Company"
            width={160}
            height={50}
            className={styles.logo}
            priority
          />
        </Link>

        <ul
          className={styles.links}
          role="list"
        >
          {/* Products dropdown */}
          <li className={styles.dropItem}>
            <Link
              href="/#products"
              className={`${styles.link} ${styles.dropTrigger}`}
              aria-haspopup="true"
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

            <div
              className={styles.dropdown}
              role="menu"
            >
              <div
                className={styles.dropArrow}
                aria-hidden="true"
              />
              {PRODUCTS.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={styles.dropLink}
                  role="menuitem"
                >
                  <span
                    className={styles.dropIcon}
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <span>{label}</span>
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
              ))}
            </div>
          </li>

          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={styles.link}
              >
                {label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/#contact"
              className={`${styles.link} ${styles.linkCta}`}
            >
              Get a Quote
            </Link>
          </li>
          <li>
            <ThemePill
              mode={mode}
              onSelect={applyTheme}
            />
          </li>
        </ul>

        {/* Mobile right */}
        <div className={styles.mobileRight}>
          <ThemePill
            mode={mode}
            onSelect={applyTheme}
          />
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
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
        <div
          id="mobile-menu"
          className={styles.mobileMenu}
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <button
            className={styles.mobileClose}
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ✕
          </button>

          {/* Mobile products accordion */}
          <div>
            <button
              className={`${styles.mobileLink} ${styles.mobileLinkBtn}`}
              onClick={() => setMobileDropOpen((o) => !o)}
              aria-expanded={mobileDropOpen}
              aria-controls="mobile-products"
            >
              Products
              <svg
                className={`${styles.chevron} ${mobileDropOpen ? styles.chevronOpen : ""}`}
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

            {mobileDropOpen && (
              <div
                id="mobile-products"
                className={styles.mobileSubLinks}
              >
                {PRODUCTS.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={styles.mobileSubLink}
                    onClick={closeMenu}
                  >
                    <span aria-hidden="true">{icon}</span>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className={styles.mobileLink}
            onClick={closeMenu}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  );
}
