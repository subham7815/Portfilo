import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        {/* Left label */}
        <div className="about-label">
          <span className="label">BIOGRAPHY</span>
        </div>

        {/* Right content */}
        <div className="about-content">
          <p className="about-bio">
            I'm <strong>Subham Kumar Nayak</strong> — a Full-Stack Software Engineer and AI/ML Practitioner
            based in Odisha, India. I specialize in building <em>resilient web applications</em>,
            <em> intelligent Document AI &amp; OCR pipelines</em>, and <em>enterprise automation on ServiceNow</em>.
          </p>

          <p className="about-bio" style={{ fontSize: '1.25rem', color: '#94a3b8' }}>
            Graduated with a B.Tech in Computer Science &amp; Engineering from <strong>SOA University</strong>.
            During my AI/ML internship at <strong>KreativeTimebox</strong>, I researched and engineered
            deep learning models for Optical Character Recognition (OCR), Vision-Language Models (VLM),
            and automated document intelligence. Additionally, I hold both <strong>ServiceNow CSA</strong> (Certified System Administrator)
            and <strong>CAD</strong> (Certified Application Developer) credentials.
          </p>

          <div className="about-facts">
            <div className="fact">
              <span className="fact-num">10+</span>
              <span className="fact-label">Projects Deployed</span>
            </div>
            <div className="fact">
              <span className="fact-num">2</span>
              <span className="fact-label">ServiceNow Certifications</span>
            </div>
            <div className="fact">
              <span className="fact-num">AI/ML</span>
              <span className="fact-label">Document AI &amp; OCR</span>
            </div>
            <div className="fact">
              <span className="fact-num">B.Tech</span>
              <span className="fact-label">SOA University CSE</span>
            </div>
          </div>

          <div className="about-links">
            <a href="https://github.com/subham7815" target="_blank" rel="noreferrer" className="about-link">
              GitHub Profile (subham7815) ↗
            </a>
            <a href="https://www.linkedin.com/in/subham7815/" target="_blank" rel="noreferrer" className="about-link">
              LinkedIn Profile ↗
            </a>
            <a href="https://vercel.com/shubhams-projects-369a9342" target="_blank" rel="noreferrer" className="about-link">
              Vercel Projects ↗
            </a>
            <a href="mailto:nayaksubham551@gmail.com" className="about-link">
              nayaksubham551@gmail.com ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
