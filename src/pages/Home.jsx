import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import translations from "../lang";
import { HeroSection } from "../components/HeroSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  const { lang } = useContext(AppContext);

  return (
    <div>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />

      <main> 
        <h1>{translations[lang].homeTitle}</h1>
        <p>
          Welcome to my portfolio website. Scroll down to see my projects and skills.
        </p>
      </main>
    </div>
  );
}
