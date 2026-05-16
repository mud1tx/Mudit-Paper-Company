// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useTheme, ThemeMode } from "@/hooks/useTheme";
// import styles from "./Navbar.module.css";

// const NAV_LINKS = [
//   { href: "/#about", label: "About" },
//   { href: "/#products", label: "Products" },
//   { href: "#industries", label: "Industries" },
//   { href: "/blogs", label: "Blogs" },
// ];

// const THEME_BTNS: { mode: ThemeMode; icon: string; title: string }[] = [
//   { mode: "light", icon: "☀️", title: "Light mode" },
//   { mode: "dark", icon: "🌙", title: "Dark mode" },
//   { mode: "system", icon: "💻", title: "System pref" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { mode, applyTheme } = useTheme();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const closeMenu = () => setMenuOpen(false);

//   const ThemePill = () => (
//     <div
//       className={styles.themePill}
//       title="Switch theme"
//     >
//       {THEME_BTNS.map(({ mode: m, icon, title }) => (
//         <button
//           key={m}
//           className={`${styles.ttBtn} ${mode === m ? styles.ttBtnActive : ""}`}
//           onClick={() => applyTheme(m)}
//           title={title}
//           aria-pressed={mode === m}
//         >
//           {icon}
//         </button>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
//         <div className={styles.logo}>
//           MUDIT
//           <br />
//           <span>PAPER</span> CO.
//         </div>

//         {/* Desktop links */}
//         <ul className={styles.links}>
//           {NAV_LINKS.map(({ href, label }) => (
//             <li key={href}>
//               <Link
//                 href={href}
//                 className={styles.link}
//               >
//                 {label}
//               </Link>
//             </li>
//           ))}
//           <li>
//             <Link
//               href="#contact"
//               className={`${styles.link} ${styles.linkCta}`}
//             >
//               Get a Quote
//             </Link>
//           </li>
//           <li>
//             <ThemePill />
//           </li>
//         </ul>

//         {/* Mobile right */}
//         <div className={styles.mobileRight}>
//           <ThemePill />
//           <button
//             className={styles.hamburger}
//             onClick={() => setMenuOpen((o) => !o)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             <span className={menuOpen ? styles.hamOpen : ""} />
//             <span className={menuOpen ? styles.hamOpen : ""} />
//             <span className={menuOpen ? styles.hamOpen : ""} />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile menu overlay */}
//       {menuOpen && (
//         <div className={styles.mobileMenu}>
//           <button
//             className={styles.mobileClose}
//             onClick={closeMenu}
//             aria-label="Close menu"
//           >
//             ✕
//           </button>
//           {NAV_LINKS.map(({ href, label }) => (
//             <Link
//               key={href}
//               href={href}
//               className={styles.mobileLink}
//               onClick={closeMenu}
//             >
//               {label}
//             </Link>
//           ))}
//           <Link
//             href="#contact"
//             className={styles.mobileLink}
//             onClick={closeMenu}
//           >
//             Get a Quote
//           </Link>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme, ThemeMode } from "@/hooks/useTheme";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "/blogs", label: "Blogs" },
];

const THEME_BTNS: { mode: ThemeMode; icon: string; title: string }[] = [
  { mode: "light", icon: "☀️", title: "Light mode" },
  { mode: "dark", icon: "🌙", title: "Dark mode" },
  { mode: "system", icon: "💻", title: "System pref" },
];

// OUTSIDE Navbar — this is the only fix needed for stuck buttons
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
          // aria-pressed={mode === m}
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
  const { mode, applyTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.logo}>
          MUDIT
          <br />
          <span>PAPER</span> CO.
        </div>

        <ul className={styles.links}>
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
            aria-expanded={menuOpen}
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
            aria-label="Close menu"
          >
            ✕
          </button>
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