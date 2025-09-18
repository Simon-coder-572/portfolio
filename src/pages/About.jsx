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
          <div className="main">
            <div className="card">
              <h2>{t.myStory}</h2>
              <p>{t.myStoryText1}</p>
              <p>{t.myStoryText2}</p>
              <p>{t.myStoryText3}</p>
              <p>{t.myStoryText4}</p>
              <p>{t.myStoryText5}</p>
            </div>

            <div className="card">
              <h2>{t.education}</h2>
              <div className="timeline">
                <div className="item">
                  <h3>{t.edu1Title}</h3>
                  <p className="subtitle">{t.edu1Subtitle}</p>
                  <p>{t.edu1Text}</p>
                </div>
                <div className="item">
                  <h3>{t.edu2Title}</h3>
                  <p className="subtitle">{t.edu2Subtitle}</p>
                  <p>{t.edu2Text}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2>{t.experience}</h2>
              <div className="timeline">
                <div className="item">
                  <h3>{t.exp1Title}</h3>
                  <p className="subtitle">{t.exp1Subtitle}</p>
                  <p>{t.exp1Text}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="card">
              <h3>{t.personalInfo}</h3>
              <ul>
                <li>📍 Zaanstad, Nederland</li>
                <li>📅 2+ jaar ervaring</li>
                <li>🎓 BASc Software engineering</li>
              </ul>
            </div>

            <div className="card">
              <h3>{t.companyInfo}</h3>
              <table className="company-table">
                <tbody>
                  <tr>
                    <td>{t.companyName}</td>
                    <td>{t.companyName}</td>
                  </tr>
                  <tr>
                    <td>Slogan</td>
                    <td>{t.companySlogan}</td>
                  </tr>
                  <tr>
                    <td>Locatie</td>
                    <td>{t.companyLocation}</td>
                  </tr>
                  <tr>
                    <td>Werk tijden</td>
                    <td>{t.companyHours}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{t.companyEmail}</td>
                  </tr>
                </tbody>
              </table>
              <div className="contact-link">
                <a href="/contact">{t.contactNow}</a>
              </div>
            </div>

            <div className="card">
              <h3>{t.interests}</h3>
              <div className="tags">
                {t.tagsList.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>{t.languages}</h3>
              <ul className="languages">
                <li>
                  <span>{t.langNL}</span>
                  <span className="badge">{t.langNative}</span>
                </li>
                <li>
                  <span>{t.langEN}</span>
                  <span className="badge">{t.langProfessional}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
