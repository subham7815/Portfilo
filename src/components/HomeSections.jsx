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

function Puppy() {
  return (
    <svg className="pup-svg" viewBox="0 0 130 90" aria-hidden="true">
      <ellipse cx="62" cy="86" rx="40" ry="3.5" fill="rgba(0,0,0,.22)" />
      <g className="pup-tail"><path d="M24 40 C 8 30, 6 16, 16 10" fill="none" stroke="#e0993a" strokeWidth="9" strokeLinecap="round" /></g>
      <g className="pup-leg pup-leg-b2"><rect x="30" y="58" width="11" height="24" rx="5.5" fill="#d98a2b" /></g>
      <g className="pup-leg pup-leg-f2"><rect x="82" y="58" width="11" height="24" rx="5.5" fill="#d98a2b" /></g>
      <ellipse cx="60" cy="50" rx="40" ry="22" fill="#f4b860" />
      <ellipse cx="60" cy="58" rx="24" ry="11" fill="#ffe2b0" />
      <g className="pup-leg pup-leg-b1"><rect x="42" y="58" width="11" height="26" rx="5.5" fill="#f4b860" /></g>
      <g className="pup-leg pup-leg-f1"><rect x="70" y="58" width="11" height="26" rx="5.5" fill="#f4b860" /></g>
      <g className="pup-head">
        <path d="M84 30 C 80 12, 92 4, 100 10 C 98 20, 96 26, 92 32 Z" fill="#b96d1c" className="pup-ear" />
        <circle cx="102" cy="34" r="20" fill="#f4b860" />
        <ellipse cx="114" cy="42" rx="12" ry="9" fill="#ffe2b0" />
        <ellipse cx="121" cy="38" rx="5" ry="4" fill="#2a1a10" />
        <circle cx="104" cy="28" r="3.6" fill="#2a1a10" /><circle cx="105.2" cy="26.8" r="1.2" fill="#fff" />
        <path d="M112 47 Q 117 52 122 46" fill="none" stroke="#2a1a10" strokeWidth="2" strokeLinecap="round" />
        <path className="pup-tongue" d="M116 48 q 2 9 6 3 q 0 -4 -2 -5 z" fill="#ff6f8e" />
      </g>
    </svg>
  )
}

function Robot() {
  return (
    <svg className="bot-svg" viewBox="0 0 110 140" aria-hidden="true">
      <ellipse cx="55" cy="136" rx="34" ry="3.5" fill="rgba(0,0,0,.22)" />
      <line x1="55" y1="6" x2="55" y2="22" stroke="#cfd5ff" strokeWidth="4" strokeLinecap="round" />
      <circle className="bot-ball" cx="55" cy="6" r="6" fill="#ffd60a" />
      <rect x="26" y="22" width="58" height="40" rx="14" fill="#eef0ff" />
      <rect x="33" y="30" width="44" height="24" rx="10" fill="#0d1240" />
      <circle className="bot-eye" cx="45" cy="42" r="5.5" fill="#6ee7ff" />
      <circle className="bot-eye" cx="65" cy="42" r="5.5" fill="#6ee7ff" />
      <rect x="20" y="34" width="6" height="16" rx="3" fill="#ffd60a" /><rect x="84" y="34" width="6" height="16" rx="3" fill="#ffd60a" />
      <rect x="30" y="66" width="50" height="46" rx="12" fill="#dfe3ff" />
      <rect x="40" y="76" width="30" height="22" rx="7" fill="#1a2bd6" />
      <path className="bot-heart" d="M55 94 C 44 86, 46 79, 51 79 C 53 79, 55 81, 55 82 C 55 81, 57 79, 59 79 C 64 79, 66 86, 55 94 Z" fill="#ff6f8e" />
      <g className="bot-arm-l"><rect x="14" y="68" width="16" height="9" rx="4.5" fill="#cfd5ff" /></g>
      <g className="bot-arm-r"><rect x="80" y="62" width="9" height="30" rx="4.5" fill="#cfd5ff" /><circle cx="84.5" cy="60" r="6" fill="#ffd60a" /></g>
      <rect x="38" y="112" width="12" height="20" rx="5" fill="#cfd5ff" /><rect x="60" y="112" width="12" height="20" rx="5" fill="#cfd5ff" />
      <rect x="33" y="128" width="20" height="8" rx="4" fill="#ffd60a" /><rect x="57" y="128" width="20" height="8" rx="4" fill="#ffd60a" />
    </svg>
  )
}

const CONFETTI = [
  ['#ffd60a', -60, -70], ['#ff6f8e', -20, -90], ['#6ee7ff', 25, -80], ['#8ef0b5', 60, -55], ['#fff', -80, -30], ['#ffd60a', 45, -100], ['#ff6f8e', -45, -105], ['#6ee7ff', 80, -75],
]

function ChaseScene() {
  return (
    <div className="chase" aria-hidden="true">
      <i className="chase-star cs1" /><i className="chase-star cs2" /><i className="chase-star cs3" /><i className="chase-star cs4" />
      <span className="chase-cloud cc1" /><span className="chase-cloud cc2" />
      <div className="chase-ground" />
      <div className="chase-puppy">
        <i className="dust d1" /><i className="dust d2" /><i className="dust d3" />
        <i className="chase-ball" />
        <div className="chase-bob"><div className="chase-jump"><Puppy /></div></div>
      </div>
      <div className="chase-bot">
        <Robot />
        <span className="chase-say">Good boy!</span>
        <i className="chase-heart h1">♥</i><i className="chase-heart h2">♥</i><i className="chase-heart h3">♥</i>
        <span className="confetti">
          {CONFETTI.map(([col, x, y], i) => <b key={i} style={{ '--c': col, '--x': `${x}px`, '--y': `${y}px`, '--d': `${i * 0.05}s` }} />)}
        </span>
      </div>
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
          <ChaseScene />
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
              <span className="label">Toolbox</span>
              <h2 className="hs-title">Skills from my resume</h2>
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
