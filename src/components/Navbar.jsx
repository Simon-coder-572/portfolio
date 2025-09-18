import { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import translations from "../lang";
import "../styles/Navbar.css";

export default function Navbar() {
  const { darkMode, setDarkMode, lang, setLang } = useContext(AppContext);
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);

  const linksRef = useRef(null);
  const underlineRef = useRef(null);
  const mobileSliderRef = useRef(null);

  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(
    () => localStorage.getItem("is24Hour") === "true"
  );

  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/skills", label: "skills" },
    { path: "/projects", label: "projects" },
    { path: "/contact", label: "contact" },
  ];

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("is24Hour", is24Hour);
  }, [is24Hour]);

  const moveUnderline = (target) => {
    if (!target || !underlineRef.current || !linksRef.current) return;
    const rect = target.getBoundingClientRect();
    const parentRect = linksRef.current.getBoundingClientRect();
    underlineRef.current.style.width = `${rect.width}px`;
    underlineRef.current.style.transform = `translateX(${
      rect.left - parentRect.left
    }px)`;
  };

  const moveMobileSlider = (target) => {
    if (!target || !mobileSliderRef.current || !linksRef.current) return;
    const rect = target.getBoundingClientRect();
    const parentRect = linksRef.current.getBoundingClientRect();
    mobileSliderRef.current.style.top = `${rect.top - parentRect.top}px`;
    mobileSliderRef.current.style.height = `${rect.height}px`;
  };

  useEffect(() => {
    const activeLink = linksRef.current.querySelector(
      `a[href="${activePath}"]`
    );
    if (activeLink) {
      moveUnderline(activeLink);
      if (window.innerWidth <= 900) moveMobileSlider(activeLink);
    }
  }, [activePath, lang]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        linksRef.current &&
        !linksRef.current.contains(e.target) &&
        !e.target.classList.contains("hamburger")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset underline when mouse leaves navbar
  useEffect(() => {
    const handleMouseLeaveNavbar = () => {
      const activeLink = linksRef.current.querySelector(
        `a[href="${activePath}"]`
      );
      if (activeLink) moveUnderline(activeLink);
    };

    const navbarEl = linksRef.current;
    if (navbarEl) {
      navbarEl.addEventListener("mouseleave", handleMouseLeaveNavbar);
    }

    return () => {
      if (navbarEl) {
        navbarEl.removeEventListener("mouseleave", handleMouseLeaveNavbar);
      }
    };
  }, [activePath]);

  // Toggle button helper (closes menu in mobile)
  const handleToggleClick = (callback) => {
    callback();
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo-container">
          <img
            src="src/assets/Servernet-logo-noBG.svg"
            alt="Logo"
            className="logo"
          />
          <p
            className="live-clock"
            onClick={() => handleToggleClick(() => setIs24Hour(!is24Hour))}
            style={{ cursor: "pointer" }}
          >
            {time.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: !is24Hour,
            })}
          </p>
        </div>

        <h2 className="logo-text">
          <NavLink to="/" className="logo-link">
            {t.title}
          </NavLink>
        </h2>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className={`links ${isOpen ? "active" : ""}`} ref={linksRef}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => {
                if (window.innerWidth > 900) moveUnderline(e.currentTarget);
                else moveMobileSlider(e.currentTarget);
              }}
            >
              {t[item.label]}
            </NavLink>
          ))}

          <div className="underline" ref={underlineRef}></div>
          <div className="mobile-slider" ref={mobileSliderRef}></div>

          <div className="toggles">
            <button
              className="mode-toggle"
              onClick={() => handleToggleClick(() => setDarkMode(!darkMode))}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button
              className="lang-toggle"
              onClick={() =>
                handleToggleClick(() => setLang(lang === "EN" ? "NL" : "EN"))
              }
            >
              {lang}
            </button>
            <button
              className="time-toggle"
              onClick={() => handleToggleClick(() => setIs24Hour(!is24Hour))}
            >
              {is24Hour ? "24" : "12"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
