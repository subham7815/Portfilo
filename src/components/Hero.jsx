import { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'
import './Hero.css'

export default function Hero() {
  const year = new Date().getFullYear()
  const headRef = useRef(null)

  useEffect(() => {
    const fn = () => {
      if (headRef.current)
        headRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Top meta row */}
      <div className="hero-meta container">
        <span className="hero-status">
          <span className="status-dot" />
          Full-Stack Developer · AI/ML &amp; Document AI · ServiceNow CSA &amp; CAD
        </span>
        <span className="hero-loc">Odisha, India · © {year}</span>
      </div>

      {/* Giant headline */}
      <div className="hero-headline-wrap container" ref={headRef}>
        <div className="hero-intro-tag">SUBHAM KUMAR NAYAK</div>
        <h1 className="hero-headline">
          <span className="line">Engineering intelligent</span>
          <span className="line italic">full-stack systems</span>
          <span className="line">&amp; AI architectures.</span>
        </h1>
      </div>

      {/* Bottom row */}
      <div className="hero-bottom container">
        <div className="hero-desc-group">
          <p className="hero-desc">
            CSE Graduate from <strong>SOA University</strong> &amp; former AI/ML Intern at{' '}
            <strong>KreativeTimebox</strong>. Certified in ServiceNow (<strong>CSA &amp; CAD</strong>),
            specializing in Document AI, Vision ML, and modern cloud applications.
          </p>

          <div className="hero-social-strip">
            <a href="https://github.com/subham7815" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub Profile">
              <FaGithub /> <span>subham7815</span>
            </a>
            <a href="https://www.linkedin.com/in/subham7815/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn Profile">
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a href="https://vercel.com/shubhams-projects-369a9342" target="_blank" rel="noreferrer" aria-label="Vercel" title="Vercel Deployments">
              <SiVercel /> <span>Vercel</span>
            </a>
            <a href="mailto:nayaksubham551@gmail.com" aria-label="Email" title="Direct Email">
              <FaEnvelope /> <span>Email</span>
            </a>
          </div>
        </div>

        <div className="hero-scroll-cue">
          <Link to="work" smooth duration={800} offset={-80}>
            <span className="scroll-arrow">↓</span>
            <span>Explore 10 Projects</span>
          </Link>
        </div>
      </div>

      {/* Horizontal rule */}
      <div className="hero-line" />
    </section>
  )
}
