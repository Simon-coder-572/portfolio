import "../styles/SkillsSection.css"; // Keep this import here

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "AWS", level: 78, category: "Cloud" },
  { name: "Docker", level: 82, category: "DevOps" },
  { name: "Figma", level: 90, category: "Design" },
];

const categories = ["Frontend", "Backend", "Database", "Cloud", "DevOps", "Design"];

export function SkillSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-description">
            I work with a diverse set of technologies to build modern, scalable applications
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category) => (
            <div key={category} className="skill-category-card">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress-container">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
