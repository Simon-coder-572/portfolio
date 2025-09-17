import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import translations from "../lang";
import "../styles/HeroSection.css";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const { lang } = useContext(AppContext);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="avatar-circle">
              <img src={avatar} alt="John Doe Avatar" className="avatar-image" />
            </div>
          </div>

          <h1 className="hero-title">{translations[lang].heroName}</h1>
          <h2 className="hero-subtitle">{translations[lang].heroTitle}</h2>
          <p className="hero-description">{translations[lang].heroDescription}</p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate("/projects")}>{translations[lang].heroButton1}</button>
            <button className="btn btn-outline" onClick={() => navigate("/contact")}>{translations[lang].heroButton2}</button>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Simon-coder-572"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/simon-b-01b802294"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:simon.server@outlook.com" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

          <button onClick={() => scrollToSection("skills")} className="scroll-down-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
