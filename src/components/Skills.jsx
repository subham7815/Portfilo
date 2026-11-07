import { Link } from 'react-router-dom'
import {
  SiPython, SiCplusplus, SiJavascript, SiPytorch, SiPandas, SiReact, SiHtml5,
  SiFastapi, SiMysql, SiMongodb, SiGit, SiGithub, SiVitest,
} from 'react-icons/si'
import {
  FaJava, FaCss3Alt, FaBrain, FaEye, FaLayerGroup, FaFileExport, FaCheckDouble,
  FaVial, FaCogs, FaBug, FaComments, FaUsers, FaSyncAlt, FaBolt, FaClock, FaPuzzlePiece, FaArrowRight,
} from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { Reveal, Stagger, Item } from './motion'
import { Squiggle, Clip, Starburst } from './Doodles'
import './Skills.css'

// Custom official ServiceNow Logo SVG component
function ServiceNowLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-2.48 0-4.5-2.02-4.5-4.5S8.52 8.5 11 8.5c1.47 0 2.78.71 3.6 1.8l-1.55 1.15c-.47-.63-1.22-1.05-2.05-1.05-1.43 0-2.6 1.17-2.6 2.6s1.17 2.6 2.6 2.6c.92 0 1.73-.49 2.18-1.22l1.62.98C14.07 16.59 12.63 17.5 11 17.5zm5.9-2.58l-1.63-.98c.22-.38.35-.82.35-1.29 0-.48-.13-.92-.35-1.3l1.63-.98c.45.69.72 1.51.72 2.38 0 .86-.27 1.68-.72 2.39z"/>
    </svg>
  )
}

/* ---------------------------------------------------------------
   Skills exactly as listed on the resume (technical + soft).
   Edit here to change what the Skills page shows.
---------------------------------------------------------------- */
const skillCategories = [
  {
    category: 'Languages',
    description: 'Core languages for application development, algorithms and systems work',
    skills: [
      { name: 'Java', icon: <FaJava />, color: '#ED8B00', level: 'Proficient', note: 'OOP & architecture' },
      { name: 'Python', icon: <SiPython />, color: '#3776AB', level: 'Advanced', note: 'AI/ML & automation' },
      { name: 'C++', icon: <SiCplusplus />, color: '#00599C', level: 'Proficient', note: 'Systems & file handling' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#d4b106', level: 'Advanced', note: 'Web applications' },
    ],
  },
  {
    category: 'AI/ML & Document Processing',
    description: 'From my AI/ML internship at KreativeTimebox',
    skills: [
      { name: 'OCR', icon: <FaBrain />, color: '#0288D1', level: 'Internship', note: 'Invoices, receipts, statements' },
      { name: 'VLM', icon: <FaEye />, color: '#7c3aed', level: 'Internship', note: 'Vision-Language Models' },
      { name: 'Document Classification', icon: <FaLayerGroup />, color: '#e6a100', level: 'Internship', note: 'Across document formats' },
      { name: 'Data Extraction', icon: <FaFileExport />, color: '#2f9e6b', level: 'Internship', note: 'Line items, VAT, totals' },
      { name: 'Data Validation', icon: <FaCheckDouble />, color: '#d6336c', level: 'Internship', note: 'Field-by-field checks' },
    ],
  },
  {
    category: 'Frameworks & Web',
    description: 'Building and serving responsive web applications',
    skills: [
      { name: 'React.js', icon: <SiReact />, color: '#1fa8c9', level: 'Advanced', note: 'Hooks, state & SPA' },
      { name: 'FastAPI', icon: <SiFastapi />, color: '#05998B', level: 'Proficient', note: 'Async Python services' },
      { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26', level: 'Expert', note: 'Semantic structure' },
      { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6', level: 'Expert', note: 'Flexbox, Grid & animation' },
    ],
  },
  {
    category: 'Testing',
    description: 'Quality checks for extraction and classification modules',
    skills: [
      { name: 'Unit Testing', icon: <FaVial />, color: '#2f9e6b', level: 'Internship', note: 'Isolated module checks' },
      { name: 'Functional Testing', icon: <FaCogs />, color: '#0288D1', level: 'Internship', note: 'End-to-end behaviour' },
      { name: 'Regression Testing', icon: <FaBug />, color: '#d6336c', level: 'Internship', note: 'Verifying fixes' },
      { name: 'Vitest', icon: <SiVitest />, color: '#6E9F18', level: 'Testing', note: 'JavaScript unit tests' },
    ],
  },
  {
    category: 'Libraries',
    description: 'Deep learning and data analysis',
    skills: [
      { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C', level: 'Practitioner', note: 'Deep learning models' },
      { name: 'Pandas', icon: <SiPandas />, color: '#E70488', level: 'Advanced', note: 'Data pipelines & analysis' },
    ],
  },
  {
    category: 'Databases',
    description: 'Relational and document data storage',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', level: 'Advanced', note: 'Relational schemas & SQL' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 'Advanced', note: 'NoSQL documents' },
    ],
  },
  {
    category: 'Tools',
    description: 'Version control, editor and enterprise platform',
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#F05032', level: 'Advanced', note: 'Version control' },
      { name: 'GitHub', icon: <SiGithub />, color: '#111111', level: 'Advanced', note: 'Collaboration & hosting' },
      { name: 'VS Code', icon: <VscVscode />, color: '#007ACC', level: 'Daily Tool', note: 'Development environment' },
      { name: 'ServiceNow', icon: <ServiceNowLogo />, color: '#3c8f74', level: 'CSA & CAD', note: 'Certified Admin & Developer' },
    ],
  },
]

const SOFT_SKILLS = [
  { icon: <FaPuzzlePiece />, title: 'Problem-Solving', text: 'Tracing extraction failures through backend responses, logs and UI behaviour to find the cause.' },
  { icon: <FaComments />, title: 'Communication', text: 'Reporting defects clearly and explaining fixes to developers so issues can be reproduced.' },
  { icon: <FaUsers />, title: 'Teamwork', text: 'Collaborating with developers to reproduce, track and validate fixes.' },
  { icon: <FaSyncAlt />, title: 'Adaptability', text: 'Moving between AI/OCR validation, web development and ServiceNow platform work.' },
  { icon: <FaBolt />, title: 'Quick Learning', text: 'Picked up ServiceNow Studio, Flow Designer and Glide Script in a 3-month training.' },
  { icon: <FaClock />, title: 'Time Management', text: 'Balancing coursework, training, certifications and project delivery.' },
]

// Where the skills were used: real project screenshots from /public/projects
const IN_ACTION = [
  { title: 'Book Management System', image: '/projects/book-management.svg', skills: ['ServiceNow', 'Business Rules', 'Client Scripts'], text: 'Tables, forms, Business Rules, Client Scripts and Service Catalog approval workflows.' },
  { title: 'File Explorer Application', image: '/projects/file-explorer.svg', skills: ['C++', 'OOP', 'File handling'], text: 'Create, delete, rename, copy and move operations with a modular OOP design.' },
  { title: 'TalentFlow, Mini ATS', image: '/projects/mini-ats.png', skills: ['React.js', 'MongoDB', 'CSS'], text: 'Hiring pipeline app with candidate stages and analytics.' },
  { title: 'DexAI Platform', image: '/projects/dexai.png', skills: ['React.js', 'JavaScript', 'CSS'], text: 'Responsive AI product showcase with interactive workflow demos.' },
]

const pad = n => String(n + 1).padStart(2, '0')

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container skills-top">
        <div>
          <span className="label">TECHNICAL EXPERTISE</span>
          <h2 className="skills-main-title">Technical &amp; Soft Skills</h2>
        </div>
        <p className="skills-subtext">
          The skills on my resume: languages, AI/ML and document processing, web frameworks, testing, libraries, databases and tools,
          plus the soft skills I use every day.
        </p>
      </div>

      {/* Technical skills: editorial rows, no cards */}
      <div className="container sk-list">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.category} className="sk-row">
            <div className="sk-head">
              <span className="sk-num">{pad(i)}</span>
              <div>
                <h3 className="sk-title">{cat.category}</h3>
                <p className="sk-desc">{cat.description}</p>
                <Squiggle className="sk-squig" color="var(--yellow)" />
              </div>
            </div>
            <ul className="sk-chips">
              {cat.skills.map(skill => (
                <li key={skill.name} className="sk-chip" style={{ '--brand-color': skill.color }}>
                  <span className="sk-ico" style={{ color: skill.color }}>{skill.icon}</span>
                  <span className="sk-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Soft skills: open columns */}
      <div className="container soft-wrap">
        <Reveal>
          <span className="label">SOFT SKILLS</span>
          <h2 className="soft-title">How I work with people</h2>
        </Reveal>
        <Stagger className="soft-list">
          {SOFT_SKILLS.map((s, i) => (
            <Item key={s.title} className="soft-item">
              <span className="soft-n">{pad(i)}</span>
              <div>
                <h4><span className="soft-ico">{s.icon}</span>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>

      {/* Skills in action: showcase rows with the project screenshot */}
      <div className="container action-wrap">
        <Reveal className="action-head">
          <div>
            <span className="label">SKILLS IN ACTION</span>
            <h2 className="soft-title">Where I used them</h2>
          </div>
          <Link to="/work" className="hs-link">All projects <FaArrowRight /></Link>
        </Reveal>
        <div className="showcase-list">
          {IN_ACTION.map((a, i) => (
            <Reveal key={a.title} className={`showcase ${i % 2 ? 'flip' : ''}`}>
              <div className="showcase-text">
                <span className="brush-tag">{a.title}</span>
                <p>{a.text}</p>
                <div className="showcase-tags">{a.skills.map(t => <span className="pill" key={t}>{t}</span>)}</div>
              </div>
              <div className="showcase-art">
                <Clip className="clip-l" /><Clip className="clip-r" />
                <img src={a.image} alt={a.title} loading="lazy" decoding="async" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
