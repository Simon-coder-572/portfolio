import "../styles/ProjectSection.css"; // Keep this import here

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with modern design, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
    image:
      "https://images.unsplash.com/photo-1676731820390-a119efe23333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React Native", "Firebase", "Redux", "Plaid API"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-description">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <a
                      href={project.demoUrl}
                      className="btn btn-secondary project-btn"
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn btn-outline project-btn"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-text">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
