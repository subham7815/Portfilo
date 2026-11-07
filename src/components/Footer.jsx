import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">Subham Kumar Nayak<em>.</em></span>
          <span className="footer-role">Full-Stack &amp; AI/ML Software Engineer</span>
        </div>

        <nav className="footer-nav">
          {['Work', 'Experience', 'Certificates', 'Skills', 'About', 'Contact'].map(l => (
            <Link key={l} to={`/${l.toLowerCase()}`}>{l}</Link>
          ))}
        </nav>

        <p className="footer-copy">© {year} Subham Kumar Nayak · Built with React &amp; Vite</p>

        <div className="footer-links">
          <a href="https://github.com/subham7815" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/subham7815/" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://vercel.com/shubhams-projects-369a9342" target="_blank" rel="noreferrer">
            <SiVercel /> Vercel
          </a>
          <a href="mailto:nayaksubham551@gmail.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
      <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </footer>
  )
}
