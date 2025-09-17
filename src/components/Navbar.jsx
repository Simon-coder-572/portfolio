import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import translations from "../lang";
import "../styles/Navbar.css";

export default function Navbar() {
  const { darkMode, setDarkMode, lang, setLang } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  // Helper voor NavLink class
  const getNavLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav>
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
          <NavLink
            to="/"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            {translations[lang].home}
          </NavLink>
          <NavLink
            to="/about"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            {translations[lang].about}
          </NavLink>
          <NavLink
            to="/skills"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            {translations[lang].skills}
          </NavLink>
          <NavLink
            to="/projects"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            {translations[lang].projects}
          </NavLink>
          <NavLink
            to="/contact"
            className={getNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            {translations[lang].contact}
          </NavLink>

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
