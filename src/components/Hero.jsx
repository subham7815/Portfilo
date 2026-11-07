import { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import './Hero.css'

export default function Hero() {
  const year = new Date().getFullYear()
  const headRef = useRef(null)

  /* Subtle parallax on headline */
  useEffect(() => {
    const fn = () => {
      if (headRef.current)
        headRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section id="hero" className="hero">
      {/* Top meta row */}
      <div className="hero-meta container">
        <span>Full Stack Developer — India</span>
        <span>© {year}</span>
      </div>

      {/* Giant headline */}
      <div className="hero-headline-wrap container" ref={headRef}>
        <h1 className="hero-headline">
          <span className="line">Building digital</span>
          <span className="line italic">experiences</span>
          <span className="line">that matter.</span>
        </h1>
      </div>

      {/* Bottom row */}
      <div className="hero-bottom container">
        <p className="hero-desc">
          I design & engineer scalable web products —<br />
          from pixel-perfect UIs to resilient backends.
        </p>
        <div className="hero-scroll-cue">
          <Link to="work" smooth duration={800} offset={-80}>
            <span className="scroll-arrow">↓</span>
            <span>Selected work</span>
          </Link>
        </div>
      </div>

      {/* Horizontal rule */}
      <div className="hero-line" />
    </section>
  )
}
