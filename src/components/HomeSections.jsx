import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import {
  SiPython, SiJavascript, SiCplusplus, SiReact, SiFastapi, SiMongodb, SiMysql, SiPytorch,
  SiPandas, SiGit, SiGithub, SiHtml5, SiVitest, SiHackerrank, SiInfosys, SiTata,
} from 'react-icons/si'
import { FaJava, FaCss3Alt, FaBrain, FaEye, FaLayerGroup, FaFileExport, FaCheckDouble, FaVial, FaBug, FaCogs } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { Reveal, Stagger, Item } from './motion'
import { Starburst, Scribble, Squiggle, Clip, Tape, Sparkle, Arrow } from './Doodles'
import { projects } from './Work'
import './HomeSections.css'

/* ---------- Editable content ---------- */
const TERM_LINES = [
  { k: '$ whoami', v: 'Subham Kumar Nayak' },
  { k: '$ role', v: 'AI/ML · Full-Stack · ServiceNow' },
  { k: '$ stack', v: 'React, FastAPI, PyTorch, MongoDB' },
  { k: '$ certified', v: 'ServiceNow CSA + CAD, Oracle Agentic AI' },
  { k: '$ now', v: 'building things that are tested & trusted' },
  { k: '$ status', v: 'open to work ✦' },
]
const ORBIT = [[SiReact, '#61dafb'], [SiPython, '#ffd43b'], [SiPytorch, '#ee4c2c'], [SiMongodb, '#47a248'], [SiFastapi, '#05998b'], [SiMysql, '#4479a1'], [SiJavascript, '#f7df1e'], [SiGit, '#f05032']]

const STARS = [[60, 40], [130, 150], [220, 30], [300, 110], [380, 170], [470, 40], [560, 130], [640, 24], [720, 160], [800, 60], [880, 140], [940, 26], [1100, 40], [1160, 150], [40, 100], [1040, 180]]

function SpaceScene() {
  return (
    <div className="space" aria-hidden="true">
      <svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet">
        {STARS.map(([x, y], i) => <circle key={i} className="sp-star" cx={x} cy={y} r={i % 3 === 0 ? 2.6 : 1.8} fill="#fff" style={{ animationDelay: `${(i % 6) * 0.45}s` }} />)}

        <path d="M 150 36 a 22 22 0 1 0 14 38 a 17 17 0 1 1 -14 -38 z" fill="#fff4b8" className="sp-moon" />

        <g className="sp-planet">
          <circle cx="1020" cy="108" r="38" fill="#ff9a3c" />
          <path d="M984 96 q 36 -10 72 6 M982 116 q 38 8 76 -4" stroke="#ffbf75" strokeWidth="5" fill="none" strokeLinecap="round" />
          <ellipse cx="1020" cy="108" rx="66" ry="14" fill="none" stroke="#ffd60a" strokeWidth="4" transform="rotate(-18 1020 108)" />
          <circle cx="1020" cy="108" r="38" fill="none" />
          <g>
            <animateTransform attributeName="transform" type="rotate" from="0 1020 108" to="360 1020 108" dur="12s" repeatCount="indefinite" />
            <g transform="translate(1020 52)">
              <rect x="-7" y="-4" width="14" height="8" rx="2" fill="#dfe3ff" />
              <rect x="-17" y="-3" width="9" height="6" fill="#6ee7ff" /><rect x="8" y="-3" width="9" height="6" fill="#6ee7ff" />
            </g>
          </g>
        </g>

        <g className="sp-planet-sm">
          <circle cx="420" cy="48" r="13" fill="#6ee7ff" />
          <circle cx="415" cy="44" r="4" fill="#bff3ff" />
        </g>

        <line className="sp-shoot s1" x1="0" y1="0" x2="-70" y2="-26" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <line className="sp-shoot s2" x1="0" y1="0" x2="-70" y2="-26" stroke="#ffd60a" strokeWidth="2.5" strokeLinecap="round" />

        <g>
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" path="M -90 160 C 180 20, 420 190, 700 90 S 1120 30, 1300 120" />
          <g className="sp-trail">
            <circle cx="-34" cy="0" r="7" fill="rgba(255,255,255,.5)" />
            <circle cx="-52" cy="0" r="5" fill="rgba(255,255,255,.35)" />
            <circle cx="-68" cy="0" r="3.5" fill="rgba(255,255,255,.22)" />
          </g>
          <g className="sp-flame">
            <path d="M-20 0 L-42 -9 Q -34 0 -42 9 Z" fill="#ff6f3c" />
            <path d="M-20 0 L-34 -5 Q -29 0 -34 5 Z" fill="#ffd60a" />
          </g>
          <path d="M-16 -10 L-30 -22 L-8 -10 Z M-16 10 L-30 22 L-8 10 Z" fill="#ff4d6d" />
          <path d="M-20 -11 Q 6 -17 34 0 Q 6 17 -20 11 Z" fill="#fff" />
          <path d="M20 -8 Q 28 -4 34 0 Q 28 4 20 8 Q 25 0 20 -8 Z" fill="#ff4d6d" />
          <circle cx="4" cy="0" r="6" fill="#1a2bd6" stroke="#cfd5ff" strokeWidth="2" />
          <circle cx="2.5" cy="-1.5" r="1.8" fill="#6ee7ff" />
        </g>
      </svg>
    </div>
  )
}

function Terminal() {
  const [typed, setTyped] = useState(0)
  const total = TERM_LINES.reduce((n, l) => n + l.k.length + l.v.length + 1, 0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTyped(total); return }
    let n = 0
    const t = setInterval(() => { n += 1; setTyped(n); if (n >= total) clearInterval(t) }, 38)
    return () => clearInterval(t)
  }, [total])
  let left = typed
  return (
    <div className="term" aria-label="About me terminal">
      <div className="term-bar"><i /><i /><i /><span>subham@portfolio ~</span></div>
      <div className="term-body">
        {TERM_LINES.map((l, i) => {
          const kk = l.k.slice(0, Math.max(0, left)); left -= l.k.length
          const vv = l.v.slice(0, Math.max(0, left)); left -= l.v.length + 1
          if (!kk) return null
          const typing = left < 0 && left >= -(l.v.length + 1)
          return <p key={i}><span className="term-k">{kk}</span> <span className="term-v">{vv}</span>{typing && <em className="term-cursor" />}</p>
        })}
        {typed >= total && <p><span className="term-k">$</span> <em className="term-cursor" /></p>}
      </div>
    </div>
  )
}

function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit-core">S</div>
      <div className="orbit-ring">
        {ORBIT.map(([Icon, color], i) => (
          <span key={i} className="orbit-item" style={{ '--a': `${(360 / ORBIT.length) * i}deg` }}>
            <span className="orbit-icon"><Icon style={{ color }} /></span>
          </span>
        ))}
      </div>
    </div>
  )
}

const TIMELINE = [
  { date: '2026', role: 'AI/ML Intern, Document AI & OCR', org: 'KreativeTimebox', text: 'Validated OCR and Vision-Language Model extractions on invoices, receipts and bank statements.' },
  { date: '06/2025 - 08/2025', role: 'ServiceNow Developer & Admin', org: 'Platform training', text: 'Scoped apps, Flow Designer, GlideScript; earned CSA and CAD certifications.' },
  { date: '2022 - 2026', role: 'B.Tech Computer Science', org: "Siksha 'O' Anusandhan University", text: 'CGPA 7.6: DSA, operating systems, DBMS and full-stack projects.' },
]

const INTRO_TOOLS = [
  [SiReact, '#1fa8c9'], [SiPython, '#3776AB'], [SiPytorch, '#EE4C2C'], [SiMongodb, '#47A248'], [SiMysql, '#4479A1'],
]

const SERVICES = [
  { icon: <FaLaptopCode />, title: 'Full-Stack Web Apps', text: 'React front-ends and FastAPI services with MySQL / MongoDB data layers and responsive HTML/CSS interfaces.', points: ['React.js apps', 'FastAPI services', 'MySQL & MongoDB'] },
  { icon: <FaBrain />, title: 'Document AI & OCR', text: 'Pipelines that read invoices, receipts and bank statements using OCR and Vision-Language Models, validated field by field.', points: ['OCR & VLM validation', 'Key-value extraction', 'PyTorch workflows'] },
  { icon: <FaCogs />, title: 'ServiceNow Development', text: 'Certified (CSA & CAD) platform work: scoped apps, Flow Designer, Business Rules, Client Scripts and ACL security.', points: ['Flow Designer', 'GlideScript', 'ITSM & CMDB'] },
  { icon: <FaVial />, title: 'Testing & Quality', text: 'Functional, unit and regression testing mindset: log tracing, edge-case debugging and benchmark-driven checks.', points: ['Unit & functional tests', 'Regression testing', 'Vitest'] },
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
  { group: 'Languages', items: [[FaJava, 'Java', '#ED8B00'], [SiPython, 'Python', '#3776AB'], [SiCplusplus, 'C++', '#00599C'], [SiJavascript, 'JavaScript', '#d4b106']] },
  { group: 'AI/ML & Document Processing', items: [[FaBrain, 'OCR', '#0288D1'], [FaEye, 'VLM', '#7c3aed'], [FaLayerGroup, 'Document Classification', '#e6a100'], [FaFileExport, 'Data Extraction', '#2f9e6b'], [FaCheckDouble, 'Data Validation', '#d6336c']] },
  { group: 'Frameworks & Web', items: [[SiReact, 'React.js', '#1fa8c9'], [SiFastapi, 'FastAPI', '#05998B'], [SiHtml5, 'HTML', '#E34F26'], [FaCss3Alt, 'CSS', '#1572B6']] },
  { group: 'Testing', items: [[FaVial, 'Unit Testing', '#2f9e6b'], [FaCogs, 'Functional Testing', '#0288D1'], [FaBug, 'Regression Testing', '#d6336c'], [SiVitest, 'Vitest', '#6E9F18']] },
  { group: 'Libraries & Databases', items: [[SiPytorch, 'PyTorch', '#EE4C2C'], [SiPandas, 'Pandas', '#E70488'], [SiMysql, 'MySQL', '#4479A1'], [SiMongodb, 'MongoDB', '#47A248']] },
  { group: 'Tools', items: [[SiGit, 'Git', '#F05032'], [SiGithub, 'GitHub', '#111111'], [VscVscode, 'VS Code', '#007ACC']] },
]

const CERT_GALLERY = [
  { img: '/certificates/oracle-agentic-ai.jpg', title: 'Oracle', sub: 'Agentic AI Foundations' },
  { img: '/certificates/servicenow-csa.jpg', title: 'ServiceNow CSA', sub: 'System Administrator' },
  { img: '/certificates/servicenow-cad.jpg', title: 'ServiceNow CAD', sub: 'Application Developer' },
  { img: '/certificates/hackerrank-react.png', title: 'HackerRank', sub: 'Frontend (React)' },
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
            <div className="polaroid-back" aria-hidden="true" />
            <figure className="polaroid">
              <Tape />
              <img src="/subham-photo.jpg" alt="Subham Kumar Nayak" loading="lazy" decoding="async" />
              <figcaption>Subham / Odisha, India</figcaption>
            </figure>
            <Starburst className="intro-star" />
            <Sparkle className="intro-sparkle" />
            <svg className="intro-stamp" viewBox="0 0 120 120" aria-hidden="true">
              <defs><path id="stampCircle" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" /></defs>
              <circle cx="60" cy="60" r="56" fill="var(--yellow)" />
              <text fontSize="11.5" fontWeight="800" letterSpacing="3" fill="#0d1240"><textPath href="#stampCircle">OPEN TO WORK • OPEN TO WORK •</textPath></text>
              <path d="M60 42 L65 55 L79 56 L68 65 L72 79 L60 71 L48 79 L52 65 L41 56 L55 55 Z" fill="#1a2bd6" />
            </svg>
            <p className="intro-note"><Arrow className="intro-note-arrow" color="var(--blue)" />that's me!</p>
            <Scribble variant="wave" className="intro-scrib" color="var(--blue)" />
          </Reveal>
        </div>
      </div>

      {/* ===== Numbered menu on blue ===== */}
      <section className="band blue menu-band">
        <Scribble variant="zigzag" className="menu-scrib-a" />
        <Scribble variant="loop" className="menu-scrib-b" />
        <Sparkle className="menu-spark menu-spark-a" />
        <Sparkle className="menu-spark menu-spark-b" />
        <div className="container">
          <Reveal>
            <span className="label">Quick intro</span>
            <h2 className="hs-title">Hello, world <span className="wave-hand">👋</span></h2>
          </Reveal>
          <div className="term-grid">
            <Reveal x={-24}><Terminal /></Reveal>
            <Reveal x={24}><Orbit /></Reveal>
          </div>
          <Reveal>
            <div className="term-cta">
              <Link to="/work" className="btn-yellow">See my work <FaArrowRight /></Link>
              <Link to="/contact" className="term-link">Let&apos;s talk <FaArrowRight /></Link>
            </div>
          </Reveal>
          <SpaceScene />
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
            <div className="cert-gallery">
              {CERT_GALLERY.map((c, i) => (
                <Link to="/certificates" key={c.title} className={`cert-polaroid r${i % 4}`}>
                  <Tape />
                  <img src={c.img} alt={`${c.title} certificate`} loading="lazy" decoding="async" />
                  <span className="cp-title">{c.title}</span>
                  <span className="cp-sub">{c.sub}</span>
                </Link>
              ))}
            </div>
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
              <span className="label">Tech Stack</span>
              <h2 className="hs-title">Tools &amp; technologies I work with</h2>
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
              <a href="/Subham_Kumar_Nayak_Resume.pdf" download="Subham_Kumar_Nayak_Resume.pdf" className="cta-btn ghost">Download resume</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
