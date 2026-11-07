import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <Link to="hero" smooth duration={700} className="nav-logo" offset={0}>
          Subham<span>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {['Work', 'Experience', 'Certificates', 'Skills', 'About', 'Contact'].map(l => (
            <li key={l}>
              <Link to={l.toLowerCase()} smooth duration={700} offset={-80} spy activeClass="active">
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="mailto:nayaksubham551@gmail.com" className="nav-cta">
          Available for hire ↗
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {['Work', 'Experience', 'Certificates', 'Skills', 'About', 'Contact'].map(l => (
          <Link key={l} to={l.toLowerCase()} smooth duration={700} offset={-80}
            onClick={() => setMenuOpen(false)}>
            {l}
          </Link>
        ))}
      </div>
    </nav>
  )
}
