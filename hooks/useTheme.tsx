// "use client";

// import { useState, useEffect, useCallback } from "react";

// export type ThemeMode = "light" | "dark" | "system";

// function applyToDom(mode: ThemeMode): void {
//   const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const resolved = mode === "system" ? (dark ? "dark" : "light") : mode;
//   document.documentElement.setAttribute("data-theme", resolved);
// }

// export function useTheme() {
//   const [mode, setMode] = useState<ThemeMode>("light");

//   useEffect(() => {
//     const saved = (localStorage.getItem("mpc-theme") as ThemeMode) || "light";
//     setMode(saved);
//     applyToDom(saved);

//     const mq = window.matchMedia("(prefers-color-scheme: dark)");
//     const onChange = () => {
//       const cur = (localStorage.getItem("mpc-theme") as ThemeMode) || "light";
//       if (cur === "system") {
//         applyToDom("system");
//         setMode("system");
//       }
//     };
//     mq.addEventListener("change", onChange);
//     return () => mq.removeEventListener("change", onChange);
//   }, []);

//   const applyTheme = useCallback((newMode: ThemeMode) => {
//     localStorage.setItem("mpc-theme", newMode);
//     applyToDom(newMode);
//     setMode(newMode);
//   }, []);

//   return { mode, applyTheme };
// }
"use client";

import { useState, useEffect, useCallback } from "react";

export type ThemeMode = "light" | "dark" | "system";

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>("system");

  const applyTheme = useCallback((newMode: ThemeMode) => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const resolved =
      newMode === "system" ? (mq.matches ? "dark" : "light") : newMode;
    document.documentElement.setAttribute("data-theme", resolved);
    localStorage.setItem("mpc-theme", newMode);
    setMode(newMode);
  }, []);

  useEffect(() => {
    const saved = (localStorage.getItem("mpc-theme") as ThemeMode) || "system";
    applyTheme(saved);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (localStorage.getItem("mpc-theme") === "system") applyTheme("system");
    };
    mq.addEventListener("change", handleSystemChange);
    return () => mq.removeEventListener("change", handleSystemChange);
  }, [applyTheme]);

  return { mode, applyTheme };
}
