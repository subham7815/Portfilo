import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        {/* Left column: Photo + Status */}
        <div className="about-left-col">
          <span className="label">BIOGRAPHY</span>
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

          <p className="about-bio" style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.8' }}>
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
              <span className="fact-num">2x</span>
              <span className="fact-label">ServiceNow (CSA &amp; CAD)</span>
            </div>
            <div className="fact">
              <span className="fact-num">10+</span>
              <span className="fact-label">Projects Deployed</span>
            </div>
            <div className="fact">
              <span className="fact-num">7.6</span>
              <span className="fact-label">SOA B.Tech CSE CGPA</span>
            </div>
          </div>

          <div className="about-links">
            <a href="/resume.pdf" download="Subham_Kumar_Nayak_Resume.pdf" className="about-link highlight">
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
    </section>
  )
}
