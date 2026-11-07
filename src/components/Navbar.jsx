import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const LINKS = ['Work', 'Experience', 'Certificates', 'Skills', 'About', 'Contact']

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
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          Subham<span>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l}>
              <NavLink to={`/${l.toLowerCase()}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l}
              </NavLink>
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
        {LINKS.map(l => (
          <NavLink key={l} to={`/${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            {l}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
