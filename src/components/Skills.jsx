import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript,
  SiPytorch, SiOpencv, SiPandas,
  SiReact, SiNextdotjs, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFastapi,
  SiMysql, SiMongodb, SiPostgresql,
  SiGit, SiGithub, SiVercel, SiVitest
} from 'react-icons/si'
import {
  FaJava, FaCss3Alt, FaBrain, FaEye, FaNetworkWired,
  FaChartBar, FaVial, FaCheckDouble, FaLayerGroup
} from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { Reveal, Stagger, Item } from './motion'
import './Skills.css'

// Custom official ServiceNow Logo SVG component
function ServiceNowLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-2.48 0-4.5-2.02-4.5-4.5S8.52 8.5 11 8.5c1.47 0 2.78.71 3.6 1.8l-1.55 1.15c-.47-.63-1.22-1.05-2.05-1.05-1.43 0-2.6 1.17-2.6 2.6s1.17 2.6 2.6 2.6c.92 0 1.73-.49 2.18-1.22l1.62.98C14.07 16.59 12.63 17.5 11 17.5zm5.9-2.58l-1.63-.98c.22-.38.35-.82.35-1.29 0-.48-.13-.92-.35-1.3l1.63-.98c.45.69.72 1.51.72 2.38 0 .86-.27 1.68-.72 2.39z"/>
    </svg>
  )
}

const skillCategories = [
  {
    category: 'Programming Languages',
    description: 'Core languages for systems, algorithms, and application development',
    skills: [
      { name: 'Python', icon: <SiPython />, color: '#3776AB', level: 'Advanced', note: 'AI/ML & Automation' },
      { name: 'Java', icon: <FaJava />, color: '#ED8B00', level: 'Proficient', note: 'OOP & Architecture' },
      { name: 'C++', icon: <SiCplusplus />, color: '#00599C', level: 'Proficient', note: 'Linux Systems & DSA' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', level: 'Advanced', note: 'ES2024+ Full-Stack' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', level: 'Advanced', note: 'Type-Safe Applications' },
    ],
  },
  {
    category: 'AI/ML & Document Intelligence',
    description: 'Computer Vision, OCR pipelines, and Vision-Language models',
    skills: [
      { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C', level: 'Practitioner', note: 'Deep Learning Models' },
      { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8', level: 'Practitioner', note: 'Image Processing & Filters' },
      { name: 'Pandas', icon: <SiPandas />, color: '#E70488', level: 'Advanced', note: 'Data Pipeline & Analysis' },
      { name: 'Document AI & OCR', icon: <FaBrain />, color: '#0288D1', level: 'Internship', note: 'KreativeTimebox Research' },
      { name: 'Vision LLMs (VLM)', icon: <FaEye />, color: '#A855F7', level: 'Practitioner', note: 'Multimodal Document Vision' },
    ],
  },
  {
    category: 'Frontend & UI Engineering',
    description: 'Responsive, accessible, and high-performance user interfaces',
    skills: [
      { name: 'React.js', icon: <SiReact />, color: '#61DAFB', level: 'Advanced', note: 'Hooks, State & SPA' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#111111', level: 'Advanced', note: 'App Router & SSR' },
      { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26', level: 'Expert', note: 'Semantic Architecture' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 'Expert', note: 'Flexbox, Grid & Animations' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 'Advanced', note: 'Modern Utility Styling' },
    ],
  },
  {
    category: 'Backend & Cloud APIs',
    description: 'Scalable server architecture, microservices, and RESTful endpoints',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', level: 'Advanced', note: 'Event-driven Runtime' },
      { name: 'Express.js', icon: <SiExpress />, color: '#c4c9d0', level: 'Advanced', note: 'API Routing & Middleware' },
      { name: 'FastAPI', icon: <SiFastapi />, color: '#009688', level: 'Proficient', note: 'Async Python Services' },
      { name: 'RESTful APIs', icon: <FaNetworkWired />, color: '#38BDF8', level: 'Advanced', note: 'API Design & Integration' },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Relational schemas, NoSQL documents, and data persistence',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 'Advanced', note: 'NoSQL & Mongoose' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', level: 'Advanced', note: 'Relational Schemas & SQL' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', level: 'Proficient', note: 'ACID & Relational Queries' },
    ],
  },
  {
    category: 'Enterprise Platforms & Tools',
    description: 'Industry-certified enterprise platforms, testing, and DevOps',
    skills: [
      { name: 'ServiceNow', icon: <ServiceNowLogo />, color: '#81B5A1', level: 'CSA & CAD', note: 'Certified Admin & Dev' },
      { name: 'Power BI', icon: <FaChartBar />, color: '#F2C811', level: 'Proficient', note: 'Analytics & Dashboards' },
      { name: 'Git & GitHub', icon: <SiGit />, color: '#F05032', level: 'Advanced', note: 'Version Control & Actions' },
      { name: 'VS Code', icon: <VscVscode />, color: '#007ACC', level: 'Daily Tool', note: 'Dev Environment' },
      { name: 'Vercel', icon: <SiVercel />, color: '#111111', level: 'Cloud Deploy', note: 'Production Hosting' },
      { name: 'Vitest & JSDOM', icon: <SiVitest />, color: '#6E9F18', level: 'Testing', note: 'Unit & Regression QA' },
    ],
  },
]

const LEVEL_PCT = { Expert: 95, Advanced: 88, Proficient: 74, Practitioner: 68, Internship: 72, 'CSA & CAD': 90 }
const pctFor = level => LEVEL_PCT[level] || 80
const CAT_COLORS = ['var(--amber)', 'var(--steel)', 'var(--steel)', 'var(--amber)', '#8b949e', 'var(--amber)']

// Editable: things currently being explored and how I work
const LEARNING = ['Agentic AI workflows', 'LLM tool-calling', 'Docker & containers', 'System design', 'Prompt engineering', 'CI/CD pipelines']
const WAYS_OF_WORKING = [
  { icon: '🧪', title: 'Test-minded', text: 'Unit & regression testing from my Document AI internship.' },
  { icon: '🔍', title: 'Debugger', text: 'Trace failures through logs, API responses and UI behavior.' },
  { icon: '🎯', title: 'Detail-driven', text: 'Validating extractions field by field: VAT, line items, banking data.' },
  { icon: '🚀', title: 'Ships fast', text: '10+ projects deployed on Vercel.' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container skills-top">
        <div>
          <span className="label">TECHNICAL EXPERTISE</span>
          <h2 className="skills-main-title">Skills &amp; Technology Stack</h2>
        </div>
        <p className="skills-subtext">
          A comprehensive suite of technologies, frameworks, and enterprise platforms used across production deployments and AI research.
        </p>
      </div>

      <div className="container skills-categories-wrap">
        {skillCategories.map((cat, ci) => (
          <Reveal key={cat.category} className="skill-cat-card" style={{ '--cat': CAT_COLORS[ci % CAT_COLORS.length] }}>
            <div className="skill-cat-header">
              <h3 className="skill-cat-title">{cat.category}</h3>
              <p className="skill-cat-desc">{cat.description}</p>
            </div>

            <Stagger className="skills-badges-grid">
              {cat.skills.map(skill => (
                <Item
                  key={skill.name}
                  className="skill-badge-item"
                  style={{ '--brand-color': skill.color }}
                >
                  <div className="skill-icon-wrap" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-details">
                    <div className="skill-title-row">
                      <span className="skill-badge-name">{skill.name}</span>
                      <span className="skill-badge-level">{skill.level}</span>
                    </div>
                    <span className="skill-badge-note">{skill.note}</span>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        style={{ width: `${pctFor(skill.level)}%`, transformOrigin: 'left' }}
                        initial={{ scaleX: 0.02 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                      />
                    </div>
                  </div>
                </Item>
              ))}
            </Stagger>
          </Reveal>
        ))}
      </div>

      <div className="container skills-extra">
        <Reveal className="skills-learning card">
          <span className="label">CURRENTLY EXPLORING</span>
          <div className="learning-chips">
            {LEARNING.map((l, i) => (
              <motion.span
                key={l}
                className="learning-chip"
                style={{ '--chip': CAT_COLORS[i % CAT_COLORS.length] }}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <Stagger className="ways-grid">
          {WAYS_OF_WORKING.map((w, i) => (
            <Item key={w.title} className="way-card card" style={{ '--chip': CAT_COLORS[i % CAT_COLORS.length] }}>
              <span className="way-icon">{w.icon}</span>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
