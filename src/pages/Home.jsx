import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import translations from "../lang";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  const { lang } = useContext(AppContext);

  return (
    <div>
      <HeroSection /> {/* bovenaan */}

      <main> 
        <h1>{translations[lang].homeTitle}</h1>
        <p>
          Welcome to my portfolio website. Scroll down to see my projects and skills.
        </p>
        <p style={{ padding: "100rem" }}> testing</p>
      </main>
    </div>
  );
}
