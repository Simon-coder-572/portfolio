import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import translations from "../lang";
import "../styles/About.css";

export default function About() {
  const { lang } = useContext(AppContext);
  const t = translations[lang];

  return (
    <main className="about">
      <div className="container">
        <div className="grid">
          {/* Main Bio */}
          <div className="main">
            <div className="card">
              <h2>{t.myStory || "Mijn Verhaal"}</h2>
              <p>
                Hoi! Ik ben Simon, een ICT-student aan de Hogeschool van
                Amsterdam en de trotse eigenaar van mijn eigen Linux homeserver.
                Hier draai ik alles van virtuele machines tot databases,
                dashboards en huisautomatisering.
              </p>
              <p>
                Ik ben altijd bezig met nieuwe projecten: zo heb ik een
                AI-raceauto gebouwd met NEAT en Pygame, dashboards opgezet voor
                het monitoren van apparaten en netwerkverkeer, en werk ik aan
                diverse webapplicaties met React, Python en SQL. Containerisatie
                met Docker en het beheren van virtuele machines behoren ook tot
                mijn dagelijkse tools.
              </p>
              <p>
                Mijn focus ligt op praktische oplossingen en schaalbare systemen
                die zowel efficiënt als gebruiksvriendelijk zijn. Ik deel graag
                mijn kennis via open source projecten en experimenteer constant
                met nieuwe technologieën om mijn server, applicaties en
                automatisering te verbeteren.
              </p>
              <p>
                Buiten mijn digitale projecten vind ik het leuk om te zeilen,
                wandelen en technologieblogs te lezen. Zo blijf ik geïnspireerd
                en scherp terwijl ik aan mijn volgende project werk.
              </p>
              <p>
  Naast mijn persoonlijke projecten run ik ook Servernet, mijn eigen
  bedrijf waarin ik serverdiensten aanbied voor kleine bedrijven en
  zelfstandige ondernemers. Ik verzorg hier alles: van het opzetten van
  virtuele machines en SQL-databases, tot het hosten van websites,
  dashboards en huisautomatisering. Met Servernet kan ik mijn
  technische kennis inzetten om praktische oplossingen te leveren en
  bedrijven te ondersteunen in hun groei.
</p>
            </div>

            <div className="card">
              <h2>{t.education || "Opleiding"}</h2>
              <div className="timeline">
                <div className="item">
                  <h3>Hogeschool van Amsterdam</h3>
                  <p className="subtitle">Bachelor • jun. 2025 - jul. 2029</p>
                  <p>
                    Informatica (Software engineering) / Hogere opleiding
                    Software engineer
                  </p>
                </div>
                <div className="item">
                  <h3>Bertrand Russell College</h3>
                  <p className="subtitle">Havo • jan. 2018 - mei 2025</p>
                  <p>Middelbare school havo. Profiel: Natuur & Techniek.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2>{t.experience || "Ervaring"}</h2>
              <div className="timeline">
                <div className="item">
                  <h3>Vakkenvuller</h3>
                  <p className="subtitle">Parttime • mei 2024 - heden</p>
                  <p>GAMMA Nederland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="card">
              <h3>{t.personalInfo || "Persoonlijke Info"}</h3>
              <ul>
                <li>📍 Zaanstad, Nederland</li>
                <li>📅 2+ jaar ervaring</li>
                <li>🎓 BASc Software engineering</li>
              </ul>
            </div>

            <div className="card">
              <h3>{t.companyInfo || "Bedrijfs Info"}</h3>
              <table className="company-table">
                <tbody>
                  <tr>
                    <td>Naam</td>
                    <td>Servernet</td>
                  </tr>
                  <tr>
                    <td>Slogan</td>
                    <td>Your vision, Powered by us</td>
                  </tr>
                  <tr>
                    <td>Locatie</td>
                    <td>Amsterdam, Nederland</td>
                  </tr>
                  <tr>
                    <td>Werk tijden</td>
                    <td>Ma - Vr binnen 24 uur antwoord</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>simon.server@outlook.nl</td>
                  </tr>
                </tbody>
              </table>
              <div className="contact-link">
                <a href="/contact">Contact Nu</a>
              </div>
            </div>

            <div className="card">
              <h3>{t.interests || "Interesses"}</h3>
              <div className="tags">
                {[
                  "Linux",
                  "Server Management",
                  "Artificial Intelligence",
                  "Docker",
                  "React",
                  "Web development",
                  "Sailing",
                ].map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>{t.languages || "Talen"}</h3>
              <ul className="languages">
                <li>
                  <span>Nederlands</span>
                  <span className="badge">Moedertaal</span>
                </li>
                <li>
                  <span>Engels</span>
                  <span className="badge">Professionele werkvaardigheid</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
