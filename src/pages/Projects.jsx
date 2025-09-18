import { useState } from "react";
import "../styles/Project.css";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("featured");

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Een volledig functioneel e-commerce platform gebouwd met React, Node.js en PostgreSQL.",
      longDescription: "Dit project omvatte het ontwikkelen van een complete e-commerce oplossing voor een mid-size retailer. Frontend met React/TypeScript, backend Node.js + Express + PostgreSQL. Inclusief realtime inventory tracking en Stripe betalingen.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      category: "fullstack",
      year: "2023",
      team: "4 personen",
      duration: "6 maanden",
      role: "Lead Frontend Developer",
      github: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://ecommerce-demo.johndoe.dev",
      status: "Live",
      highlights: ["40% verbetering in conversie rate", "Sub-second laadtijden", "100% mobile responsive", "Volledig toegankelijk (WCAG 2.1)"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Een moderne task management applicatie met real-time collaboratie.",
      longDescription: "Een geavanceerde projectmanagement tool met real-time updates, drag-and-drop interface (react-beautiful-dnd) en uitgebreide rapportages. Gebouwd met focus op UX en productiviteit.",
      technologies: ["Vue.js", "Firebase", "WebSockets", "Tailwind CSS"],
      category: "frontend",
      year: "2023",
      team: "2 personen",
      duration: "4 maanden",
      role: "Full Stack Developer",
      github: "https://github.com/johndoe/task-manager",
      demo: "https://tasks.johndoe.dev",
      status: "Live",
      highlights: ["Real-time synchronisatie", "Offline functionaliteit", "Geavanceerde filtering", "Team collaboration tools"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Een responsive weather dashboard met geavanceerde data visualisatie.",
      longDescription: "Uitgebreide weer app met meerdere API integraties, interactieve kaarten en charts. Focus op performance en UX. Gebouwd met React + D3.js + Mapbox.",
      technologies: ["React", "D3.js", "Weather API", "Mapbox"],
      category: "frontend",
      year: "2022",
      team: "Solo project",
      duration: "2 maanden",
      role: "Frontend Developer",
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather.johndoe.dev",
      status: "Live",
      highlights: ["Multiple API integraties", "Interactieve kaarten", "Advanced data visualisatie", "Responsive design"]
    }
  ];

  const otherProjects = [
    { title: "Portfolio Website", description: "Portfolio website met React en Tailwind CSS", technologies: ["React", "Tailwind CSS", "TypeScript"], year: "2024", category: "frontend" },
    { title: "Blog CMS", description: "Content management systeem voor bloggers", technologies: ["Next.js", "Prisma", "PostgreSQL"], year: "2023", category: "fullstack" },
    { title: "Chat Application", description: "Real-time chat applicatie met rooms en file sharing", technologies: ["Socket.io", "Express", "MongoDB"], year: "2022", category: "backend" },
    { title: "Budget Tracker", description: "Persoonlijke finance tracker met categorieën en reports", technologies: ["Vue.js", "Chart.js", "Firebase"], year: "2022", category: "frontend" }
  ];

  const tabs = [
    { value: "featured", label: "Featured Projects" },
    { value: "all", label: "Alle Projecten" },
    { value: "open-source", label: "Open Source" }
  ];

  return (
    <main className="projects-page">
      <div className="container">
        <h1>Mijn Projecten</h1>
        <p className="description">
          Overzicht van recent werk, van persoonlijke projecten tot professionele opdrachten.
        </p>

        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.value}
              className={`tab-button ${activeTab === tab.value ? "active" : ""}`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "featured" && (
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <div className="card" key={project.id}>
                  <div className={`grid ${index % 2 === 1 ? "reverse" : ""}`}>
                    <div className="card-content">
                      <div className="badges">
                        <span className="badge">{project.category}</span>
                        <span className={`badge status ${project.status === "Live" ? "live" : ""}`}>{project.status}</span>
                      </div>
                      <h2>{project.title}</h2>
                      <p className="long-desc">{project.longDescription}</p>
                      <div className="project-info">
                        <span>📅 {project.year}</span>
                        <span>👥 {project.team}</span>
                      </div>
                      <ul className="highlights">
                        {project.highlights.map((h, i) => (
                          <li key={i}>⭐ {h}</li>
                        ))}
                      </ul>
                      <div className="tech-badges">
                        {project.technologies.map((tech, i) => <span className="badge" key={i}>{tech}</span>)}
                      </div>
                      <div className="buttons">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">🔗 Live Demo</a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn outline">🐙 Code</a>
                      </div>
                    </div>
                    <div className="card-image">
                      <div className="image-placeholder">
                        <span>🖥️</span>
                        <p>Project Screenshot</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "all" && (
            <div className="grid-3">
              {[...featuredProjects, ...otherProjects].map((project, i) => (
                <div className="card" key={i}>
                  <div className="card-header">
                    <span className="badge">{project.category}</span>
                    <span className="year">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-badges">
                    {project.technologies.slice(0,3).map((t,j) => <span className="badge" key={j}>{t}</span>)}
                    {project.technologies.length > 3 && <span className="badge">+{project.technologies.length - 3}</span>}
                  </div>
                  {project.demo && <a href={project.demo} className="btn outline">🔗 Demo</a>}
                  {project.github && <a href={project.github} className="btn outline">🐙 Code</a>}
                </div>
              ))}
            </div>
          )}

          {activeTab === "open-source" && (
            <div className="grid-2">
              <div className="card">
                <h2>Open Source Bijdragen</h2>
                <div className="contributions">
                  <div className="contrib-item"><h4>React Documentation</h4><p>Verbeteringen aan officiële React documentatie</p></div>
                  <div className="contrib-item"><h4>Tailwind CSS Components</h4><p>Custom component library</p></div>
                  <div className="contrib-item"><h4>Node.js Utils</h4><p>Utility functions voor Node.js development</p></div>
                </div>
              </div>
              <div className="card">
                <h2>GitHub Statistieken</h2>
                <div className="stats">
                  <span>Total Repositories: 42</span>
                  <span>Stars Received: 234</span>
                  <span>Forks: 89</span>
                  <span>Contributions: 1,247</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
