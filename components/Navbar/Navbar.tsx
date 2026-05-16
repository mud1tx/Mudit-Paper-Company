"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme, ThemeMode } from "@/hooks/useTheme";
import styles from "./Navbar.module.css";

const PRODUCTS = [
  {
    href: "/products/greaseproof-paper",
    label: "Greaseproof Paper",
    icon: "🧈",
  },
  { href: "/products/glassine-paper", label: "Glassine Paper", icon: "✨" },
  { href: "/products/coated-paper", label: "Coated Paper", icon: "📄" },
  {
    href: "/products/printed-greaseproof",
    label: "Printed Greaseproof",
    icon: "🖨️",
  },
  {
    href: "/products/ladoo-katori-muffin-cup-liner",
    label: "Ladoo Katori / Muffin Cup Liner",
    icon: "🧁",
  },
];

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "#industries", label: "Industries" },
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
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.logo}>
          MUDIT
          <br />
          <span>PAPER</span> CO.
        </div>

        <ul className={styles.links}>
          {/* Products dropdown — pure CSS hover, no JS gap issue */}
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
              <div className={styles.dropArrow} />
              {PRODUCTS.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={styles.dropLink}
                >
                  <span className={styles.dropIcon}>{icon}</span>
                  <span>{label}</span>
                  <svg
                    className={styles.dropChevron}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
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
              href="#contact"
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

        <div className={styles.mobileRight}>
          <ThemePill
            mode={mode}
            onSelect={applyTheme}
          />
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? styles.hamOpen : ""} />
            <span className={menuOpen ? styles.hamOpen : ""} />
            <span className={menuOpen ? styles.hamOpen : ""} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.mobileClose}
            onClick={closeMenu}
          >
            ✕
          </button>
          <div>
            <button
              className={`${styles.mobileLink} ${styles.mobileLinkBtn}`}
              onClick={() => setMobileDropOpen((o) => !o)}
            >
              Products
              <svg
                className={`${styles.chevron} ${mobileDropOpen ? styles.chevronOpen : ""}`}
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
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
              <div className={styles.mobileSubLinks}>
                {PRODUCTS.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={styles.mobileSubLink}
                    onClick={closeMenu}
                  >
                    <span>{icon}</span> {label}
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
            href="#contact"
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