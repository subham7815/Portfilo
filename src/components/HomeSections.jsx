import { Link } from 'react-router-dom'
import {
  FaLaptopCode, FaBrain, FaCogs, FaVial, FaArrowRight, FaExternalLinkAlt,
} from 'react-icons/fa'
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb, SiMysql, SiPostgresql, SiPytorch, SiOpencv,
  SiPandas, SiGit, SiGithub, SiVercel, SiDocker, SiLinux, SiPostman, SiHackerrank, SiInfosys, SiTata,
} from 'react-icons/si'
import { Reveal, Stagger, Item } from './motion'
import { Starburst, Scribble, Squiggle, Clip, Tape, Sparkle } from './Doodles'
import { projects } from './Work'
import './HomeSections.css'

/* ---------- Editable content ---------- */
const MENU = [
  ['01', 'Work', '/work'],
  ['02', 'Experience', '/experience'],
  ['03', 'Certificates', '/certificates'],
  ['04', 'Skills', '/skills'],
  ['05', 'About', '/about'],
  ['06', 'Contact', '/contact'],
]

const TIMELINE = [
  { date: '2026', role: 'AI/ML Intern, Document AI & OCR', org: 'KreativeTimebox', text: 'Validated OCR and Vision-Language Model extractions on invoices, receipts and bank statements.' },
  { date: '06/2025 - 08/2025', role: 'ServiceNow Developer & Admin', org: 'Platform training', text: 'Scoped apps, Flow Designer, GlideScript; earned CSA and CAD certifications.' },
  { date: '2022 - 2026', role: 'B.Tech Computer Science', org: "Siksha 'O' Anusandhan University", text: 'CGPA 7.6: DSA, operating systems, DBMS and full-stack projects.' },
]

const INTRO_TOOLS = [
  [SiReact, '#61DAFB'], [SiNodedotjs, '#5FA04E'], [SiPython, '#3776AB'], [SiPytorch, '#EE4C2C'], [SiMongodb, '#47A248'],
]

const SERVICES = [
  { icon: <FaLaptopCode />, title: 'Full-Stack Web Apps', text: 'React, Next.js, Node and Express applications with clean APIs, MongoDB / SQL data layers and responsive UI.', points: ['SPA & SSR apps', 'REST API design', 'Vercel deployment'] },
  { icon: <FaBrain />, title: 'Document AI & OCR', text: 'Pipelines that read invoices, receipts and bank statements using OCR and Vision-Language Models, validated field by field.', points: ['OCR & VLM validation', 'Key-value extraction', 'PyTorch workflows'] },
  { icon: <FaCogs />, title: 'ServiceNow Development', text: 'Certified (CSA & CAD) platform work: scoped apps, Flow Designer, Business Rules, Client Scripts and ACL security.', points: ['Flow Designer', 'GlideScript', 'ITSM & CMDB'] },
  { icon: <FaVial />, title: 'Testing & Quality', text: 'Functional, unit and regression testing mindset: log tracing, edge-case debugging and benchmark-driven checks.', points: ['Regression testing', 'Vitest & JSDOM', 'Telemetry debugging'] },
]

const PROCESS = [
  { n: '01', title: 'Understand', text: 'Clarify the real workflow, users and constraints before writing code.' },
  { n: '02', title: 'Design', text: 'Plan data models, APIs and UI structure that can grow cleanly.' },
  { n: '03', title: 'Build', text: 'Ship in small, testable pieces with readable, typed code.' },
  { n: '04', title: 'Validate', text: 'Test, benchmark and debug edge cases until output can be trusted.' },
  { n: '05', title: 'Ship', text: 'Deploy to production, monitor, and iterate from feedback.' },
]

// Issuer wordmarks use each brand's own colour; logos exist only where react-icons has them
const ISSUERS = [
  { name: 'Oracle', color: '#f80000', text: 'Agentic AI Foundations' },
  { name: 'ServiceNow', color: '#3c8f74', text: 'CSA & CAD' },
  { name: 'Deloitte', color: '#6a9c10', text: 'Data Analytics Simulation' },
  { name: 'EY & Microsoft', color: '#b89b00', text: 'AI Skills Passport' },
  { name: 'HackerRank', color: '#1ba94c', icon: <SiHackerrank />, text: 'React (Frontend)' },
  { name: 'Infosys', color: '#007cc3', icon: <SiInfosys />, text: 'Data Science' },
  { name: 'Tata', color: '#2f6fb7', icon: <SiTata />, text: 'Crucible Campus Quiz' },
]

const TOOLBOX = [
  { group: 'Languages', items: [[SiPython, 'Python', '#3776AB'], [SiJavascript, 'JavaScript', '#d4b106'], [SiTypescript, 'TypeScript', '#3178C6'], [SiCplusplus, 'C++', '#00599C']] },
  { group: 'Frontend', items: [[SiReact, 'React', '#1fa8c9'], [SiNextdotjs, 'Next.js', '#111111'], [SiTailwindcss, 'Tailwind', '#06B6D4']] },
  { group: 'Backend & Data', items: [[SiNodedotjs, 'Node.js', '#5FA04E'], [SiExpress, 'Express', '#333333'], [SiFastapi, 'FastAPI', '#05998B'], [SiMongodb, 'MongoDB', '#47A248'], [SiMysql, 'MySQL', '#4479A1'], [SiPostgresql, 'PostgreSQL', '#336791']] },
  { group: 'AI / ML', items: [[SiPytorch, 'PyTorch', '#EE4C2C'], [SiOpencv, 'OpenCV', '#2f6fb7'], [SiPandas, 'Pandas', '#E70488']] },
  { group: 'Tools & Cloud', items: [[SiGit, 'Git', '#F05032'], [SiGithub, 'GitHub', '#111111'], [SiVercel, 'Vercel', '#111111'], [SiDocker, 'Docker', '#2496ED'], [SiLinux, 'Linux', '#c99a00'], [SiPostman, 'Postman', '#FF6C37']] },
]

export default function HomeSections() {
  const featured = projects.filter(p => p.featured).slice(0, 3)

  return (
    <div className="home-sections">
      {/* ===== Intro on paper ===== */}
      <div className="band paper intro-band">
        <div className="container intro-grid">
          <div className="intro-text">
            <Reveal>
              <h2 className="intro-hello">Hi! Nice to meet you</h2>
              <p className="intro-name">I'm <strong>Subham Kumar Nayak</strong></p>
              <div className="intro-pills"><span className="pill">Full-Stack Developer</span><span className="pill">AI / ML</span></div>
              <p className="intro-bio">
                I'm a software engineer who loves turning messy workflows into <strong>reliable web apps</strong>,
                <strong> Document AI pipelines</strong> and <strong>ServiceNow automations</strong>.
              </p>
              <p className="intro-bio">
                I focus on details, testing and clean structure: from validating OCR output field by field to shipping
                full-stack apps on Vercel.
              </p>
            </Reveal>

            <Reveal className="timeline-mini">
              <h3 className="intro-h3">Experience</h3>
              {TIMELINE.map(t => (
                <div className="tl-row" key={t.role}>
                  <span className="pill date">{t.date}</span>
                  <h4>{t.role}</h4>
                  <em>{t.org}</em>
                  <p>{t.text}</p>
                </div>
              ))}
            </Reveal>

            <Reveal>
              <h3 className="intro-h3">Tools</h3>
              <div className="intro-tools">
                {INTRO_TOOLS.map(([Icon, color], i) => (
                  <span key={i} className="intro-tool"><Icon style={{ color }} /><i /></span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="intro-photo" x={30}>
            <figure className="polaroid">
              <Tape />
              <img src="/subham-photo.jpg" alt="Subham Kumar Nayak" loading="lazy" decoding="async" />
              <figcaption>Subham / Odisha, India</figcaption>
            </figure>
            <Starburst className="intro-star" />
            <Scribble variant="wave" className="intro-scrib" color="var(--blue)" />
            <img className="intro-avatar" src="/subham-portrait.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </div>

      {/* ===== Numbered menu on blue ===== */}
      <section className="band blue menu-band">
        <Scribble variant="zigzag" className="menu-scrib-a" />
        <Scribble variant="loop" className="menu-scrib-b" />
        <div className="container">
          <Reveal><span className="label">Explore</span><h2 className="hs-title">Pick a page</h2></Reveal>
          <Stagger className="menu-grid">
            {MENU.map(([n, name, to]) => (
              <Item key={n}>
                <Link to={to} className="menu-item">
                  <span className="menu-n">{n}</span>
                  <span className="menu-name">{name}</span>
                  <Squiggle />
                </Link>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== Services + projects + credentials + toolbox on paper ===== */}
      <div className="band paper alt main-band">
        <section className="hs-block">
          <div className="container">
            <Reveal>
              <span className="label">What I do</span>
              <h2 className="hs-title">Four things I do well</h2>
            </Reveal>
            <Stagger className="hs-grid hs-grid-4">
              {SERVICES.map((s, i) => (
                <Item key={s.title} className={`hs-card service-card tone-${i % 2}`}>
                  <span className="service-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>{s.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="hs-block">
          <div className="container">
            <Reveal className="hs-head-row">
              <div>
                <span className="label">Selected work</span>
                <h2 className="hs-title">Featured projects</h2>
              </div>
              <Link to="/work" className="hs-link">View all {projects.length} projects <FaArrowRight /></Link>
            </Reveal>
            <div className="showcase-list">
              {featured.map((p, i) => (
                <Reveal key={p.id} className={`showcase ${i % 2 ? 'flip' : ''}`}>
                  <div className="showcase-text">
                    <span className="brush-tag">{p.title}</span>
                    <span className="pill solid">{p.category.split('·')[0].trim()}</span>
                    <p>{p.description}</p>
                    <div className="showcase-tags">{p.tags.slice(0, 5).map(t => <span className="pill" key={t}>{t}</span>)}</div>
                    <div className="project-links">
                      <a href={p.liveUrl} target="_blank" rel="noreferrer">Live demo <FaExternalLinkAlt /></a>
                      <a href={p.githubUrl} target="_blank" rel="noreferrer">Source</a>
                    </div>
                  </div>
                  <div className="showcase-art">
                    <Clip className="clip-l" /><Clip className="clip-r" />
                    <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="hs-block">
          <div className="container">
            <Reveal className="hs-head-row">
              <div>
                <span className="label">Credentials</span>
                <h2 className="hs-title">Certified &amp; verified</h2>
              </div>
              <Link to="/certificates" className="hs-link">See all certificates <FaArrowRight /></Link>
            </Reveal>
            <Stagger className="issuer-grid">
              {ISSUERS.map(is => (
                <Item key={is.name} className="issuer-card" style={{ '--brand': is.color }}>
                  <span className="issuer-name">{is.icon}{is.name}</span>
                  <span className="issuer-text">{is.text}</span>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="hs-block">
          <div className="container">
            <Reveal>
              <span className="label">Toolbox</span>
              <h2 className="hs-title">Technologies I work with</h2>
            </Reveal>
            <div className="toolbox">
              {TOOLBOX.map(g => (
                <Reveal key={g.group} className="tool-group">
                  <h4>{g.group}</h4>
                  <div className="tool-items">
                    {g.items.map(([Icon, name, color]) => (
                      <span className="tool-item" key={name}>
                        <Icon style={{ color }} />
                        {name}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ===== Process + CTA on blue ===== */}
      <section className="band blue process-band">
        <Sparkle className="proc-spark" />
        <div className="container">
          <Reveal>
            <span className="label">How I work</span>
            <h2 className="hs-title">From idea to production</h2>
          </Reveal>
          <Stagger className="process-row">
            {PROCESS.map((s, i) => (
              <Item key={s.n} className={`process-step tone-${i % 2}`}>
                <span className="process-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Item>
            ))}
          </Stagger>

          <Reveal className="cta-banner">
            <div>
              <h2>Have a role or project in mind?</h2>
              <p>I'm open to software engineering roles, Document AI work and ServiceNow implementations.</p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="cta-btn primary">Get in touch <FaArrowRight style={{ marginLeft: 8 }} /></Link>
              <a href="/resume.pdf" download="Subham_Kumar_Nayak_Resume.pdf" className="cta-btn ghost">Download resume</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
