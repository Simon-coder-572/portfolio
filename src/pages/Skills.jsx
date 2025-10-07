import { useState, useEffect } from "react";
import "../styles/Skills.css";

// Simulate fetching from a database/API
const fetchSkillsData = async () => {
  // Replace this with your real API/database call
  return {
    technical: {
      frontend: [
        { name: "HTML", percent: 95 },
        { name: "CSS", percent: 90 },
        { name: "JavaScript", percent: 60 },
        { name: "TypeScript", percent: 40 },
      ],
      backend: [
        { name: "Python", percent: 80 },
        { name: "Node.js", percent: 75 },
        { name: "React", percent: 50 },
      ],
      devops: [
        { name: "Docker", percent: 90 },
        { name: "Portainer", percent: 85 },
        { name: "K3s (Kubernetes)", percent: 70 },
        { name: "Proxmox", percent: 80 },
        { name: "Home Assistant", percent: 75 },
      ],
      server: [
        { name: "Windows (Server)", percent: 85 },
        { name: "Linux", percent: 70 },
        { name: "Homelab Automation", percent: 80 },
      ],
    },
    tools: {
      development: ["VS Code", "WebStorm", "Postman", "Chrome DevTools"],
      homelab: ["Portainer", "Proxmox", "K3s", "Home Assistant"],
      other: ["Git", "Docker Compose", "SSH", "Windows Admin Center"],
    },
    soft: [
      "Teamwork & Collaboratie",
      "Probleemoplossend Denken",
      "Projectmanagement",
      "Mentoring & Coaching",
      "Communicatie",
      "Agile/Scrum Methodologie",
      "Code Review",
      "Technical Writing",
    ],
  };
};

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("technical");
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetchSkillsData().then(setSkills);
  }, []);

  if (!skills) return <div>Loading...</div>;

  return (
    <main className="skills-page">
      <div className="container">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "technical" ? "active" : ""}`}
            onClick={() => setActiveTab("technical")}
          >
            Technische Skills
          </button>
          <button
            className={`tab-button ${activeTab === "tools" ? "active" : ""}`}
            onClick={() => setActiveTab("tools")}
          >
            Tools & Platforms
          </button>
          <button
            className={`tab-button ${activeTab === "soft" ? "active" : ""}`}
            onClick={() => setActiveTab("soft")}
          >
            Soft Skills
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "technical" && (
            <div className="grid-2">
              <div className="card">
                <h2>Frontend Development</h2>
                {skills.technical.frontend.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card">
                <h2>Backend Development</h2>
                {skills.technical.backend.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card">
                <h2>DevOps & Homelab</h2>
                {skills.technical.devops.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card">
                <h2>Server & Other</h2>
                {skills.technical.server.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "tools" && (
            <div className="grid-3">
              <div className="card">
                <h3>Development Tools</h3>
                <div className="badge-list">
                  {skills.tools.development.map((tool) => (
                    <span className="badge" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3>Homelab & DevOps Tools</h3>
                <div className="badge-list">
                  {skills.tools.homelab.map((tool) => (
                    <span className="badge" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3>Other Tools</h3>
                <div className="badge-list">
                  {skills.tools.other.map((tool) => (
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
                {skills.soft.map((softSkill) => (
                  <div className="soft-skill" key={softSkill}>{softSkill}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
