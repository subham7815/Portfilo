import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        {/* Left label */}
        <div className="about-label fade-up">
          <span className="label">About</span>
        </div>

        {/* Right content */}
        <div className="about-content">
          <p className="about-bio fade-up">
            I'm Subham — a full stack developer based in India with 3+ years of experience
            building products that sit at the intersection of{' '}
            <em>engineering precision</em> and <em>design craft</em>.
          </p>

          <p className="about-bio fade-up" style={{ transitionDelay: '0.1s' }}>
            I've shipped production software for clients across fintech, SaaS, and consumer
            spaces — from zero to launch. I care deeply about performance, accessibility,
            and the small details that make a product feel <em>alive</em>.
          </p>

          <div className="about-facts fade-up" style={{ transitionDelay: '0.18s' }}>
            <div className="fact">
              <span className="fact-num">3+</span>
              <span className="fact-label">Years of experience</span>
            </div>
            <div className="fact">
              <span className="fact-num">25+</span>
              <span className="fact-label">Projects shipped</span>
            </div>
            <div className="fact">
              <span className="fact-num">∞</span>
              <span className="fact-label">Lines of coffee</span>
            </div>
          </div>

          <div className="about-links fade-up" style={{ transitionDelay: '0.24s' }}>
            <a href="https://github.com/"   target="_blank" rel="noreferrer" className="about-link">GitHub ↗</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="about-link">LinkedIn ↗</a>
            <a href="/resume.pdf" download className="about-link">Download CV ↗</a>
          </div>
        </div>

      </div>
      <div className="h-line" />
    </section>
  )
}
