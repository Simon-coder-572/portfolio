import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import translations from "../lang";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

export function HeroSection() {
  const { lang } = useContext(AppContext);
  const t = translations[lang];
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative"
    >
      <div className="max-w-[1200px] w-full px-4 text-center flex flex-col items-center">
        {/* Avatar */}
        <div className="w-48 h-48 mb-8 rounded-full overflow-hidden flex items-center justify-center shadow-[0_8px_24px_var(--shadow-color)]">
          <img
            src={avatar}
            alt="Simon Bloem"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Teksten */}
        <h1 className="text-[2.5rem] md:text-[3.75rem] lg:text-[4rem] font-bold mb-6 bg-[var(--text-color)] bg-clip-text text-transparent leading-tight">
          {t.heroName}
        </h1>
        <h2 className="text-xl md:text-2xl text-[var(--accent-color)] font-medium mb-6">
          {t.heroTitle}
        </h2>
        <p className="text-lg text-[var(--text-color-soft)] leading-relaxed max-w-3xl mb-8">
          {t.heroDescription}
        </p>

        {/* Knoppen */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <button
            onClick={() => navigate("/about")}
            className="default"
          >
            {t.heroButton1}
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="default"
           >
            {t.heroButton2}
          </button>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/Simon-coder-572"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-md"
          >
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {" "}
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>{" "}
            </svg>{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/simon-b-01b802294"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-md"
          >
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>{" "}
              <rect x="2" y="9" width="4" height="12"></rect>{" "}
              <circle cx="4" cy="4" r="2"></circle>{" "}
            </svg>{" "}
          </a>{" "}
          <a
            href="mailto:simon.server@outlook.com"
            className="text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-md"
          >
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {" "}
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>{" "}
              <polyline points="22,6 12,13 2,6"></polyline>{" "}
            </svg>{" "}
          </a>{" "}
        </div>

        {/* Scroll knop - nu gecentreerd */}
        <button
          onClick={() => {
            const el = document.querySelector(".skill-section");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors p-2 animate-bounce"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
