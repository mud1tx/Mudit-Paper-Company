//  -----------------------------------------------------------------------------------------------------------------------------
//  Checks the system theme also
//  -----------------------------------------------------------------------------------------------------------------------------

// "use client";

// import { useState, useEffect, useCallback } from "react";

// export type ThemeMode = "light" | "dark" | "system";

// function applyToDom(mode: ThemeMode): void {
//   const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const resolved = mode === "system" ? (dark ? "dark" : "light") : mode;
//   document.documentElement.setAttribute("data-theme", resolved);
// }

// function getSaved(): ThemeMode {
//   return (localStorage.getItem("mpc-theme") as ThemeMode) || "light";
// }

// export function useTheme() {
//   const [mode, setMode] = useState<ThemeMode>("light");

//   useEffect(() => {
//     const saved = getSaved();
//     setMode(saved);
//     applyToDom(saved);

//     const onPageShow = (e: PageTransitionEvent) => {
//       if (e.persisted) {
//         const cur = getSaved();
//         setMode(cur);
//         applyToDom(cur);
//       }
//     };
//     window.addEventListener("pageshow", onPageShow);

//     const mq = window.matchMedia("(prefers-color-scheme: dark)");
//     const onChange = () => {
//       if (getSaved() === "system") {
//         applyToDom("system");
//         setMode("system");
//       }
//     };
//     mq.addEventListener("change", onChange);

//     return () => {
//       window.removeEventListener("pageshow", onPageShow);
//       mq.removeEventListener("change", onChange);
//     };
//   }, []);

//   const applyTheme = useCallback((newMode: ThemeMode) => {
//     localStorage.setItem("mpc-theme", newMode);
//     applyToDom(newMode);
//     setMode(newMode);
//   }, []);

//   return { mode, applyTheme };
// }

//  -----------------------------------------------------------------------------------------------------------------------------
//  Checks the system theme also
//  -----------------------------------------------------------------------------------------------------------------------------

"use client";

import { useState, useEffect, useCallback } from "react";

export type ThemeMode = "light" | "dark";

function applyToDom(mode: ThemeMode): void {
  document.documentElement.setAttribute("data-theme", mode);
}

function getSaved(): ThemeMode {
  return (localStorage.getItem("mpc-theme") as ThemeMode) || "light";
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const saved = getSaved();
    setMode(saved);
    applyToDom(saved);

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        const cur = getSaved();
        setMode(cur);
        applyToDom(cur);
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  const applyTheme = useCallback((newMode: ThemeMode) => {
    localStorage.setItem("mpc-theme", newMode);
    applyToDom(newMode);
    setMode(newMode);
  }, []);

  return { mode, applyTheme };
}
