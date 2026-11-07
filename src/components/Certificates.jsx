import { useState } from 'react'
import { FaCheckCircle, FaAward, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import './Certificates.css'

function OracleLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1.2em" height="1.2em" style={{ verticalAlign: 'middle', marginRight: '6px', color: '#f80000' }}>
      <path d="M16.284 19.349H7.716C3.454 19.349 0 15.895 0 11.633s3.454-7.716 7.716-7.716h8.568c4.262 0 7.716 3.454 7.716 7.716s-3.454 7.716-7.716 7.716zM7.716 6.368c-2.908 0-5.265 2.357-5.265 5.265s2.357 5.265 5.265 5.265h8.568c2.908 0 5.265-2.357 5.265-5.265s-2.357-5.265-5.265-5.265H7.716z"/>
    </svg>
  )
}

function ServiceNowLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-2.48 0-4.5-2.02-4.5-4.5S8.52 8.5 11 8.5c1.47 0 2.78.71 3.6 1.8l-1.55 1.15c-.47-.63-1.22-1.05-2.05-1.05-1.43 0-2.6 1.17-2.6 2.6s1.17 2.6 2.6 2.6c.92 0 1.73-.49 2.18-1.22l1.62.98C14.07 16.59 12.63 17.5 11 17.5zm5.9-2.58l-1.63-.98c.22-.38.35-.82.35-1.29 0-.48-.13-.92-.35-1.3l1.63-.98c.45.69.72 1.51.72 2.38 0 .86-.27 1.68-.72 2.39z"/>
    </svg>
  )
}

const certificates = [
  {
    id: 'oracle-ai',
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle',
    type: 'Official Oracle Certification',
    date: 'Oct 31, 2026 · Valid thru 2028',
    certId: '103571559AAI26OFA',
    image: '/certificates/oracle-agentic-ai.jpg',
    accent: '#f97316',
    description: 'Official Oracle certification validating foundational mastery of Agentic AI, autonomous agent design, multi-agent frameworks, tool use, memory architecture, and prompt engineering.',
    skills: ['Agentic AI', 'Autonomous Systems', 'Multi-Agent Workflows', 'Oracle Cloud AI', 'LLM Agents'],
    link: 'https://www.linkedin.com/in/subham7815/',
    featured: true,
  },
  {
    id: 'csa',
    title: 'Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    type: 'Official ServiceNow Certification',
    date: 'Certified',
    image: '/certificates/servicenow-csa.svg',
    accent: '#81b5a1',
    description: 'Validates comprehensive expertise in Now Platform configuration, user role security, CMDB architecture, schema modeling, Flow Designer automation, and business rule orchestration.',
    skills: ['Platform Administration', 'Flow Designer', 'CMDB', 'User Security', 'Business Rules'],
    link: 'https://www.linkedin.com/in/subham7815/',
    featured: true,
  },
  {
    id: 'cad',
    title: 'Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    type: 'Official ServiceNow Certification',
    date: 'Certified',
    image: '/certificates/servicenow-cad.svg',
    accent: '#38bdf8',
    description: 'Validates enterprise application development, custom scoped apps, client/server scripting (GlideRecord, GlideSystem, Script Includes), REST/SOAP integrations, and Automated Test Framework (ATF).',
    skills: ['Scoped Applications', 'Script Includes', 'GlideScript', 'REST Integrations', 'ATF Testing'],
    link: 'https://www.linkedin.com/in/subham7815/',
    featured: true,
  },
  {
    id: 'ai-doc',
    title: 'AI/ML & Document AI Practitioner',
    issuer: 'KreativeTimebox',
    type: 'AI Research Internship',
    date: 'Completed',
    image: '/certificates/kreativetimebox-ai.svg',
    accent: '#c084fc',
    description: 'Hands-on production engineering in Optical Character Recognition (OCR), Vision Language Models (VLM), multimodal document understanding, and PyTorch deep learning pipelines.',
    skills: ['Document AI', 'OCR Pipelines', 'Vision Models (VLM)', 'PyTorch', 'OpenCV'],
    link: 'https://www.linkedin.com/in/subham7815/',
    featured: false,
  },
  {
    id: 'infosys',
    title: 'Introduction to Data Science',
    issuer: 'Infosys Springboard',
    type: 'Professional Credential',
    date: 'Completed',
    image: '/certificates/infosys-data-science.svg',
    accent: '#007cc3',
    description: 'Certification covering statistical inference, exploratory data analysis, Pandas/NumPy computational workflows, predictive modeling foundations, and data storytelling.',
    skills: ['Data Science', 'Exploratory Analysis', 'Pandas & NumPy', 'Statistical Modeling'],
    link: 'https://www.linkedin.com/in/subham7815/',
    featured: false,
  },
  {
    id: 'deloitte',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    type: 'Virtual Experience Simulation',
    date: 'Completed',
    image: '/certificates/deloitte-analytics.svg',
    accent: '#22c55e',
    description: 'Completed corporate business analytics simulation involving dataset hygiene, forensic data investigation, executive dashboarding, and actionable client recommendations.',
    skills: ['Business Analytics', 'Forensic Data', 'Data Visualization', 'Client Advisory'],
    link: 'https://www.linkedin.com/in/subham7815/',
    featured: false,
  },
  {
    id: 'hackerrank',
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    type: 'Verified Skills Assessment',
    date: 'Certified',
    image: '/certificates/hackerrank-react.svg',
    accent: '#00EA64',
    description: 'Standardized assessment evaluating production React proficiency: functional components, custom hooks, context API, state synchronization, and DOM performance optimization.',
    skills: ['React.js', 'State Optimization', 'Custom Hooks', 'Component Architecture'],
    link: 'https://www.linkedin.com/in/subham7815/',
    featured: false,
  },
  {
    id: 'btech-cse',
    title: 'B.Tech — Computer Science & Engineering',
    issuer: 'SOA University (ITER)',
    type: 'Undergraduate Degree',
    date: 'Graduate · CGPA: 7.6',
    image: '/certificates/soa-university.svg',
    accent: '#60a5fa',
    description: 'Four-year engineering degree covering core Computer Science: Data Structures & Algorithms, Operating Systems, Database Management Systems, System Architecture, and Software Engineering.',
    skills: ['Algorithms & Data Structures', 'Operating Systems', 'DBMS', 'OOP System Design'],
    link: 'https://www.linkedin.com/in/subham7815/',
    featured: false,
  },
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [filter, setFilter] = useState('All')

  const filterCategories = ['All', 'Official Certifications', 'AI & Data Science', 'Academic & Virtual']

  const filtered = certificates.filter(c => {
    if (filter === 'All') return true
    if (filter === 'Official Certifications') return c.issuer === 'Oracle' || c.issuer === 'ServiceNow' || c.issuer === 'HackerRank'
    if (filter === 'AI & Data Science') return c.id === 'oracle-ai' || c.id === 'ai-doc' || c.id === 'infosys' || c.id === 'deloitte'
    if (filter === 'Academic & Virtual') return c.id === 'btech-cse' || c.id === 'deloitte' || c.id === 'ai-doc'
    return true
  })

  return (
    <section id="certificates" className="certificates">
      <div className="container cert-header">
        <div>
          <span className="label">LINKEDIN &amp; INDUSTRY CREDENTIALS</span>
          <h2 className="cert-main-title">Licenses &amp; Certifications</h2>
        </div>
        <p className="cert-subtext">
          Verified professional credentials uploaded on LinkedIn, spanning Oracle Agentic AI, ServiceNow (CSA &amp; CAD), Document AI, and Computer Science.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="container cert-filter-row">
        {filterCategories.map(cat => (
          <button
            key={cat}
            className={`cert-filter-pill ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
        <span className="cert-count-pill">({filtered.length} Credentials)</span>
      </div>

      <div className="container cert-grid">
        {filtered.map(cert => (
          <div
            key={cert.id}
            className={`cert-card ${cert.featured ? 'is-featured-cert' : ''}`}
            style={{ '--cert-accent': cert.accent }}
          >
            {/* Certificate Preview Image */}
            <div
              className="cert-media-wrap"
              onClick={() => setSelectedCert(cert)}
              title="Click to view full certificate"
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                className="cert-preview-img"
              />
              <div className="cert-media-hover">
                <span className="cert-zoom-pill">🔍 Click to Expand</span>
              </div>
              <div className="cert-badge-tag">
                <FaCheckCircle className="check-icon" /> Verified
              </div>
              {cert.certId && (
                <div className="cert-id-tag">ID: {cert.certId}</div>
              )}
            </div>

            {/* Content info */}
            <div className="cert-content">
              <div className="cert-meta-row">
                <span className="cert-issuer">
                  {cert.issuer === 'ServiceNow' && <ServiceNowLogo />}
                  {cert.issuer === 'Oracle' && <OracleLogo />}
                  {cert.issuer}
                </span>
                <span className="cert-type">{cert.date}</span>
              </div>

              <h3 className="cert-title" onClick={() => setSelectedCert(cert)}>
                {cert.title}
              </h3>

              <p className="cert-desc">{cert.description}</p>

              {/* Skills */}
              <div className="cert-skills-wrap">
                {cert.skills.map(s => (
                  <span key={s} className="cert-skill-tag">{s}</span>
                ))}
              </div>

              {/* Link */}
              <div className="cert-footer-row">
                <button
                  type="button"
                  className="cert-view-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  <FaAward /> View Full Certificate
                </button>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-verify-link"
                >
                  View on LinkedIn <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Modal Viewer */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-box" onClick={e => e.stopPropagation()}>
            <button
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="cert-modal-image-wrap">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="cert-modal-img"
              />
            </div>
            <div className="cert-modal-footer">
              <div>
                <h4>{selectedCert.title}</h4>
                <p>
                  {selectedCert.issuer} · {selectedCert.type}
                  {selectedCert.certId ? ` · ID: ${selectedCert.certId}` : ''}
                </p>
              </div>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noreferrer"
                className="btn-pill"
              >
                Verify on LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
