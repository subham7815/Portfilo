import './Skills.css'

const groups = [
  {
    heading: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES2024+)', 'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion', 'D3.js'],
  },
  {
    heading: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Python / FastAPI', 'WebSockets'],
  },
  {
    heading: 'Data & Infrastructure',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Docker', 'AWS (EC2 · S3 · Lambda)', 'CI/CD · GitHub Actions'],
  },
  {
    heading: 'Craft',
    items: ['System Design', 'Performance Optimisation', 'Accessibility (WCAG)', 'UI/UX Collaboration', 'Code Review', 'Technical Writing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header fade-up">
          <span className="label">Skills & Stack</span>
        </div>

        <div className="h-line" style={{ marginBottom: '64px' }} />

        <div className="skills-grid">
          {groups.map((g, i) => (
            <div
              key={g.heading}
              className="skill-group fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3 className="skill-group-title">{g.heading}</h3>
              <ul className="skill-items">
                {g.items.map(item => (
                  <li key={item} className="skill-item">
                    <span className="skill-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="h-line" style={{ marginTop: '80px' }} />
    </section>
  )
}
