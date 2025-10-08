import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import translations from "../lang";
import { HeroSection } from "../components/HeroSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { SkillSection } from "../components/SkillSection";

export default function Home() {
  const { lang } = useContext(AppContext);
  const t = translations[lang];

  return (
    <div>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <main>
        <h1>{t.homeTitle}</h1>
        <p>
          Welcome to my portfolio website. Scroll down to see my projects and
          skills.
        </p>
        <div className="bg-blue-500 text-white text-center p-4 rounded-lg">
          Test Tailwind
        </div>
      </main>
    </div>
  );
}
