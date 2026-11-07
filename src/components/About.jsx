import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal, Stagger, Item, CountUp } from './motion'
import './About.css'

// Editable content
const JOURNEY = [
  { year: '2022', title: 'Started B.Tech CSE', text: "Siksha 'O' Anusandhan University, ITER, Bhubaneswar.", color: 'var(--amber)' },
  { year: '2025', title: 'ServiceNow CSA & CAD', text: 'Platform training (Jun-Aug) and two official certifications.', color: 'var(--steel)' },
  { year: '2026', title: 'AI/ML Intern', text: 'Document AI & OCR validation at KreativeTimebox.', color: 'var(--steel)' },
  { year: '2026', title: 'Oracle Agentic AI', text: 'Certified in Agentic AI Foundations; graduated with CGPA 7.6.', color: 'var(--amber)' },
]
const INTERESTS = ['Document AI', 'Agentic AI', 'Full-Stack Web', 'Enterprise Automation', 'Linux & Systems', 'UI Motion', 'Open Source']
const EDUCATION = [
  { year: '2026', title: 'B.Tech, Computer Science and Engineering', place: "Siksha 'O' Anusandhan University, Bhubaneswar", note: 'CGPA 7.6', image: '/certificates/soa-university.svg' },
  { year: '2022', title: 'Higher Secondary Certificate', place: 'Deepika English Medium School', note: 'Completed 2022', image: null },
]
const ABOUT_CERTS = [
  { img: '/certificates/oracle-agentic-ai.jpg', label: 'Oracle Agentic AI' },
  { img: '/certificates/servicenow-csa.jpg', label: 'ServiceNow CSA' },
  { img: '/certificates/servicenow-cad.jpg', label: 'ServiceNow CAD' },
  { img: '/certificates/infosys-data-science.jpg', label: 'Infosys Data Science' },
]
const QUICK = [
  ['Location', 'Odisha, India'],
  ['Degree', 'B.Tech CSE (2022-2026)'],
  ['University', "Siksha 'O' Anusandhan (ITER)"],
  ['CGPA', '7.6'],
  ['Role focus', 'Full-Stack & Document AI'],
  ['Certifications', 'Oracle, ServiceNow x2, Deloitte, EY, HackerRank'],
  ['Availability', 'Open to full-time, remote or on-site'],
  ['Contact', 'nayaksubham551@gmail.com'],
]
const VALUES = [
  { icon: '🧭', title: 'Build with purpose', text: 'Software should solve a real workflow, not just look good in a demo.', color: 'var(--amber)' },
  { icon: '🔬', title: 'Validate everything', text: 'Test, benchmark and debug until the output can be trusted.', color: 'var(--steel)' },
  { icon: '🌱', title: 'Keep learning', text: 'Certifications, projects and research keep the stack growing.', color: 'var(--amber)' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        {/* Left column: Photo + Status */}
        <div className="about-left-col">
          <span className="label">BIOGRAPHY</span>
          <h1 className="sr-only">About Subham Kumar Nayak</h1>
          <div className="about-photo-wrap">
            <img
              src="/subham-photo.jpg"
              alt="Subham Kumar Nayak"
              className="about-photo-img"
            />
            <div className="about-photo-badge">
              <span className="pulse-green" />
              <span>Open for Software Roles</span>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="about-content">
          <p className="about-bio">
            I'm <strong>Subham Kumar Nayak</strong> — a Full-Stack Software Engineer, Oracle-Certified in Agentic AI,
            and ServiceNow (CSA &amp; CAD) developer based in Odisha, India. I specialize in building <em>resilient web applications</em>,
            <em> intelligent Document AI &amp; OCR pipelines</em>, and <em>enterprise cloud automation</em>.
          </p>

          <p className="about-bio about-bio-sub">
            Graduated with a B.Tech in Computer Science &amp; Engineering from <strong>Siksha 'O' Anusandhan (SOA) University</strong> (CGPA 7.6).
            During my AI/ML internship at <strong>KreativeTimebox</strong>, I worked on production Document AI processing financial invoices, receipts, and bank statements
            using Optical Character Recognition (OCR), Vision-Language Models (VLM), and PyTorch pipelines.
            I also hold verified certifications from <strong>Oracle</strong> (Agentic AI Foundations), <strong>ServiceNow</strong> (CSA &amp; CAD),
            <strong>Infosys Springboard</strong>, <strong>Deloitte</strong>, and <strong>HackerRank</strong>.
          </p>

          <div className="about-facts">
            <div className="fact">
              <span className="fact-num">Oracle</span>
              <span className="fact-label">Agentic AI Certified</span>
            </div>
            <div className="fact">
              <span className="fact-num"><CountUp to={2} suffix="x" /></span>
              <span className="fact-label">ServiceNow (CSA &amp; CAD)</span>
            </div>
            <div className="fact">
              <span className="fact-num"><CountUp to={10} suffix="+" /></span>
              <span className="fact-label">Projects Deployed</span>
            </div>
            <div className="fact">
              <span className="fact-num"><CountUp to={7.6} decimals={1} /></span>
              <span className="fact-label">SOA B.Tech CSE CGPA</span>
            </div>
          </div>

          <div className="about-links">
            <a href="/Subham_Kumar_Nayak_Resume.pdf" download="Subham_Kumar_Nayak_Resume.pdf" className="about-link highlight">
              📥 Download Resume (PDF) ↗
            </a>
            <a href="https://github.com/subham7815" target="_blank" rel="noreferrer" className="about-link">
              GitHub Profile (subham7815) ↗
            </a>
            <a href="https://www.linkedin.com/in/subham7815/" target="_blank" rel="noreferrer" className="about-link">
              LinkedIn Profile ↗
            </a>
            <a href="https://vercel.com/shubhams-projects-369a9342" target="_blank" rel="noreferrer" className="about-link">
              Vercel Projects ↗
            </a>
          </div>
        </div>

      </div>

      {/* Journey */}
      <div className="container about-extra">
        <Reveal><span className="label">MY JOURNEY</span><h3 className="about-h3">From classroom to <span className="grad-text">production AI</span></h3></Reveal>
        <Stagger className="journey-grid">
          {JOURNEY.map(j => (
            <Item key={j.title} className="journey-card card" style={{ '--j': j.color }}>
              <span className="journey-year">{j.year}</span>
              <h4>{j.title}</h4>
              <p>{j.text}</p>
            </Item>
          ))}
        </Stagger>

        <Reveal className="edu-block">
          <span className="label">EDUCATION</span>
          <div className="edu-grid">
            {EDUCATION.map(e => (
              <div className="edu-card" key={e.title}>
                {e.image && <img src={e.image} alt="" loading="lazy" decoding="async" />}
                <div>
                  <span className="pill solid">{e.year}</span>
                  <h4>{e.title}</h4>
                  <p>{e.place}</p>
                  <em>{e.note}</em>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="quick-facts">
          <span className="label">QUICK FACTS</span>
          <dl className="quick-grid">
            {QUICK.map(([k, v]) => (
              <div className="quick-row" key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="about-certs">
          <span className="label">CREDENTIALS</span>
          <div className="about-cert-grid">
            {ABOUT_CERTS.map((c, i) => (
              <Link to="/certificates" key={c.label} className={`about-cert r${i % 4}`}>
                <img src={c.img} alt={`${c.label} certificate`} loading="lazy" decoding="async" />
                <span>{c.label}</span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal className="interests">
          <span className="label">WHAT I'M INTO</span>
          <div className="interest-chips">
            {INTERESTS.map((t, i) => (
              <motion.span key={t} className="interest-chip" style={{ '--c': JOURNEY[i % JOURNEY.length].color }}>{t}</motion.span>
            ))}
          </div>
        </Reveal>

        <Stagger className="values-grid">
          {VALUES.map(v => (
            <Item key={v.title} className="value-card card" style={{ '--j': v.color }}>
              <span className="value-icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
