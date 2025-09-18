import { useState } from "react";
import "../styles/Skills.css";

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 95, category: "frontend" },
    { name: "React/Next.js", level: 90, category: "frontend" },
    { name: "Vue.js", level: 75, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Python", level: 80, category: "backend" },
    { name: "Express.js", level: 85, category: "backend" },
    { name: "PostgreSQL", level: 80, category: "database" },
    { name: "MongoDB", level: 75, category: "database" },
    { name: "Redis", level: 70, category: "database" },
    { name: "Docker", level: 75, category: "devops" },
    { name: "AWS", level: 70, category: "devops" },
    { name: "Git/GitHub", level: 90, category: "tools" },
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2023", status: "Actief" },
    { name: "React Developer Certification", issuer: "Meta", date: "2022", status: "Actief" },
    { name: "Google Cloud Professional", issuer: "Google", date: "2023", status: "Actief" },
  ];

  const softSkills = [
    "Teamwork & Collaboratie",
    "Probleemoplossend Denken",
    "Projectmanagement",
    "Mentoring & Coaching",
    "Communicatie",
    "Agile/Scrum Methodologie",
    "Code Review",
    "Technical Writing",
  ];

  const tabs = [
    { value: "technical", label: "Technische Skills" },
    { value: "tools", label: "Tools & Platforms" },
    { value: "soft", label: "Soft Skills" },
    { value: "certifications", label: "Certificaten" },
  ];

  return (
    <main className="skills-page">
      <div className="container">
        <h1>Mijn Vaardigheden</h1>
        <p className="description">
          Een overzicht van mijn technische expertise, tools en competenties die ik heb ontwikkeld gedurende mijn carrière.
        </p>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`tab-button ${activeTab === tab.value ? "active" : ""}`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "technical" && (
            <div className="grid-2">
              {["frontend", "backend", "database", "devops"].map((category) => (
                <div className="card" key={category}>
                  <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                  {technicalSkills
                    .filter((skill) => skill.category === category || (category === "devops" && skill.category === "tools"))
                    .map((skill, index) => (
                      <div key={index} className="skill">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          )}

          {activeTab === "tools" && (
            <div className="grid-3">
              <div className="card">
                <h3>Design Tools</h3>
                <div className="badge-list">
                  {["Figma", "Adobe XD", "Sketch", "Photoshop"].map((tool) => (
                    <span className="badge" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3>Development Tools</h3>
                <div className="badge-list">
                  {["VS Code", "WebStorm", "Postman", "Chrome DevTools"].map((tool) => (
                    <span className="badge" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3>Mobile Development</h3>
                <div className="badge-list">
                  {["React Native", "Expo", "Flutter", "Cordova"].map((tool) => (
                    <span className="badge" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "soft" && (
            <div className="grid-2">
              <div className="card">
                <h2>Persoonlijke Competenties</h2>
                {softSkills.map((skill, index) => (
                  <div className="soft-skill" key={index}>{skill}</div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="grid-2">
              {certifications.map((cert, index) => (
                <div className="card" key={index}>
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                  <p>Behaald: {cert.date}</p>
                  <span className={`badge ${cert.status === "Actief" ? "active" : ""}`}>{cert.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
