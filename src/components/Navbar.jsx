import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";          // npm install js-cookie
import translations from "../lang";       // importeer lang file
import "../styles/Navbar.css";

export default function Navbar() {
  // Load settings from cookies (fallback: dark+EN)
  const [darkMode, setDarkMode] = useState(Cookies.get("darkMode") === "true");
  const [lang, setLang] = useState(Cookies.get("lang") || "EN");
  const [isOpen, setIsOpen] = useState(false);

  // Update cookie when darkMode changes
  useEffect(() => {
    Cookies.set("darkMode", darkMode, { expires: 365 });
  }, [darkMode]);

  // Update cookie when lang changes
  useEffect(() => {
    Cookies.set("lang", lang, { expires: 365 });
  }, [lang]);

  return (
    <nav className={darkMode ? "dark" : "light"}>
      <div className="navbar">
        <img
          src="src/assets/Servernet-logo-noBG.svg"
          alt="Logo"
          className="logo"
        />

        {/* Hamburger */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <div className={`links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            {translations[lang].home}
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            {translations[lang].about}
          </Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>
            {translations[lang].skills}
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            {translations[lang].projects}
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            {translations[lang].contact}
          </Link>

          {/* Toggles */}
          <div className="toggles">
            {/* Dark/Light toggle */}
            <button
              className="mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Language toggle */}
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === "EN" ? "NL" : "EN")}
            >
              {lang}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
