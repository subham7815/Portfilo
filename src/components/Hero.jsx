import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Rotator, CountUp } from './motion'
import { Starburst, Scribble, Arrow, Sparkle } from './Doodles'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import {
  SiPython, SiReact, SiPytorch, SiMongodb, SiMysql, SiFastapi, SiGit, SiGithub, SiJavascript, SiCplusplus, SiPandas, SiHtml5,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import './Hero.css'

const ROLES = ['Full-Stack Developer', 'AI / Document AI Engineer', 'ServiceNow CSA & CAD', 'Problem Solver']

const STATS = [
  { to: 10, suffix: '+', label: 'Projects shipped' },
  { to: 3, suffix: '', label: 'Top certifications' },
  { to: 7.6, decimals: 1, suffix: '', label: 'B.Tech CGPA' },
  { to: 2, suffix: 'x', label: 'ServiceNow certified' },
]

const TECH = [
  [FaJava, '#ED8B00'], [SiPython, '#3776AB'], [SiCplusplus, '#5C9CE8'], [SiJavascript, '#F7DF1E'], [SiReact, '#61DAFB'],
  [SiFastapi, '#05998B'], [SiHtml5, '#E34F26'], [SiPytorch, '#EE4C2C'], [SiPandas, '#E70488'], [SiMysql, '#4A90D9'],
  [SiMongodb, '#47A248'], [SiGit, '#F05032'], [SiGithub, '#ffffff'], [VscVscode, '#3aa0ff'],
]

export default function Hero() {
  const year = new Date().getFullYear()

  return (
    <section id="hero" className="hero">
      <Scribble variant="zigzag" className="d-hero-a" />
      <Scribble variant="loop" className="d-hero-b" />
      <Sparkle className="d-hero-c" />

      <div className="hero-main container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-row">
              SUBHAM
              <Starburst className="hero-star" />
            </span>
            <span className="hero-title-row">KUMAR NAYAK</span>
          </h1>

          <div className="hero-sub">
            <Arrow className="hero-arrow" />
            <span className="hero-role"><Rotator words={ROLES} /></span>
          </div>

          <div className="hero-pills">
            <span className="pill">Full-Stack Developer</span>
            <span className="pill">Document AI</span>
            <span className="pill">ServiceNow CSA &amp; CAD</span>
          </div>

          <p className="hero-desc">
            CSE graduate from <strong>SOA University</strong> and former AI/ML intern at{' '}
            <strong>KreativeTimebox</strong>. Certified in ServiceNow (<strong>CSA &amp; CAD</strong>) and{' '}
            <strong>Oracle Agentic AI</strong>: building web apps and Document AI pipelines.
          </p>

          <div className="hero-cta-row">
            <Link to="/work" className="cta-btn primary">View my work →</Link>
            <Link to="/contact" className="cta-btn ghost">Let's talk</Link>
          </div>

          <div className="hero-social-strip">
            <a href="/Subham_Kumar_Nayak_Resume.pdf" download="Subham_Kumar_Nayak_Resume.pdf" className="hero-resume-btn" title="Download Resume PDF">
              <FaFileDownload /> <span>Resume</span>
            </a>
            <a href="https://github.com/subham7815" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /> <span>subham7815</span></a>
            <a href="https://www.linkedin.com/in/subham7815/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /> <span>LinkedIn</span></a>
            <a href="https://vercel.com/shubhams-projects-369a9342" target="_blank" rel="noreferrer" aria-label="Vercel"><SiGithub /> <span>Repos</span></a>
            <a href="mailto:nayaksubham551@gmail.com" aria-label="Email"><FaEnvelope /> <span>Email</span></a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <span className="hero-disc" aria-hidden="true" />
          <Scribble variant="crown" className="d-photo-a" />
          <Starburst className="d-photo-b" />
          <img
            src="/subham-portrait.webp"
            alt="Subham Kumar Nayak - Full-Stack Developer & AI Engineer"
            className="hero-portrait"
            width="1086"
            height="1448"
            decoding="async"
          />
          <span className="hero-badge">Open to work · {year}</span>
        </div>
      </div>

      <div className="hero-stats container">
        {STATS.map((st, i) => (
          <motion.div
            key={st.label}
            className="stat-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          >
            <span className="stat-num"><CountUp to={st.to} decimals={st.decimals || 0} suffix={st.suffix} /></span>
            <span className="stat-label">{st.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="tech-marquee" aria-hidden="true">
        <div className="tech-track">
          {[...TECH, ...TECH].map(([Icon, color], i) => (
            <span className="tech-icon" key={i} style={{ color }}><Icon /></span>
          ))}
        </div>
      </div>
    </section>
  )
}
