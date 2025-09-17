import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

// cookie helpers
const getCookie = (name) => {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : null;
};
const setCookie = (name, value, days = 365) => {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
};

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const c = getCookie("darkMode");
    if (c === null) {
      return typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return c === "true";
  });

  const [lang, setLang] = useState(() => getCookie("lang") || "EN");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    setCookie("darkMode", darkMode ? "true" : "false", 365);
  }, [darkMode]);

  useEffect(() => {
    setCookie("lang", lang, 365);
  }, [lang]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
}
