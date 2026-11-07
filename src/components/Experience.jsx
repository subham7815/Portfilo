import { FaBriefcase, FaGraduationCap, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Reveal, Stagger, Item, CountUp } from './motion'
import './Experience.css'

function ServiceNowMini() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1.2em" height="1.2em" style={{ verticalAlign: 'middle', color: '#81b5a1' }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5c-2.48 0-4.5-2.02-4.5-4.5S8.52 8.5 11 8.5c1.47 0 2.78.71 3.6 1.8l-1.55 1.15c-.47-.63-1.22-1.05-2.05-1.05-1.43 0-2.6 1.17-2.6 2.6s1.17 2.6 2.6 2.6c.92 0 1.73-.49 2.18-1.22l1.62.98C14.07 16.59 12.63 17.5 11 17.5zm5.9-2.58l-1.63-.98c.22-.38.35-.82.35-1.29 0-.48-.13-.92-.35-1.3l1.63-.98c.45.69.72 1.51.72 2.38 0 .86-.27 1.68-.72 2.39z"/>
    </svg>
  )
}

const experiences = [
  {
    role: 'AI/ML Intern — Document AI & OCR',
    company: 'KreativeTimebox',
    type: 'Internship',
    duration: '2026',
    location: 'Remote',
    icon: <FaBriefcase />,
    accent: 'var(--amber)',
    highlights: [
      'Engineered AI-powered processing workflows for invoices, receipts, and bank statements across varied templates.',
      'Conducted functional, unit, and regression testing for document classification and key-value extraction modules.',
      'Validated and benchmarked OCR & Vision Language Model (VLM) extractions for supplier/customer details, line items, VAT, and banking telemetry.',
      'Investigated and debugged edge-case model extraction failures via backend telemetry logs, API responses, and UI behavior.',
    ],
    tags: ['Document AI', 'OCR Pipelines', 'VLM Models', 'PyTorch', 'Regression Testing', 'Data Validation'],
  },
  {
    role: 'ServiceNow Platform Developer & Admin',
    company: 'ServiceNow Platform Training',
    type: 'Intensive Training & Certification',
    duration: 'Jun 2025 – Aug 2025',
    location: 'Odisha, India',
    icon: <ServiceNowMini />,
    accent: '#81b5a1',
    highlights: [
      'Built and architected end-to-end enterprise service requests, forms, fields, and automation using ServiceNow Studio and Flow Designer.',
      'Implemented robust client and server scripts using GlideRecord, GlideSystem, Script Includes, Client Scripts, and Business Rules.',
      'Developed custom scoped applications adhering to ITSM, CMDB, and ACL security best practices.',
      'Earned ServiceNow Certified System Administrator (CSA) and Certified Application Developer (CAD) credentials.',
    ],
    tags: ['ServiceNow Studio', 'Flow Designer', 'GlideScript', 'ITSM', 'CMDB', 'Business Rules'],
  },
  {
    role: 'B.Tech in Computer Science & Engineering',
    company: "Siksha 'O' Anusandhan (SOA) University",
    type: 'Higher Education',
    duration: '2022 – 2026',
    location: 'Bhubaneswar, Odisha',
    icon: <FaGraduationCap />,
    accent: 'var(--steel)',
    highlights: [
      'Graduated with Cumulative Grade Point Average (CGPA) of 7.6 from Institute of Technical Education & Research (ITER).',
      'Completed in-depth coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, and OOP.',
      'Built foundational systems projects including console-based Linux file explorers in C++ and full-stack web applications.',
    ],
    tags: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'C++', 'Java', 'Full-Stack Web'],
  },
]

// Editable summary content
const FOCUS = [
  { num: 2026, label: 'AI/ML internship', color: 'var(--amber)', raw: true },
  { num: 3, label: 'Months of ServiceNow training', color: 'var(--steel)' },
  { num: 4, label: 'Years of B.Tech CSE', color: 'var(--steel)' },
  { num: 10, label: 'Projects delivered', color: 'var(--amber)', suffix: '+' },
]
const BRING = [
  { icon: '🤖', title: 'AI that is validated', text: 'Experience benchmarking OCR/VLM output against real financial documents.' },
  { icon: '🏢', title: 'Enterprise-ready', text: 'ServiceNow CSA & CAD: forms, flows, scripts and ACL security.' },
  { icon: '⚡', title: 'Full-stack delivery', text: 'React, Node and Next.js apps shipped end to end.' },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container exp-header">
        <div>
          <span className="label">CAREER JOURNEY</span>
          <h2 className="exp-main-title">Experience &amp; Education</h2>
        </div>
        <p className="exp-subtext">
          A track record of engineering impact across AI research, enterprise ServiceNow implementations, and Computer Science fundamentals.
        </p>
      </div>

      <Stagger className="container exp-focus">
        {FOCUS.map(f => (
          <Item key={f.label} className="focus-card" style={{ '--f': f.color }}>
            <b>{f.raw ? f.num : <CountUp to={f.num} suffix={f.suffix || ''} />}</b>
            <span>{f.label}</span>
          </Item>
        ))}
      </Stagger>

      <div className="container exp-timeline">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.6 }}
            className="exp-card"
            style={{ '--exp-accent': exp.accent }}
          >
            {/* Timeline Left Node */}
            <div className="exp-node-col">
              <div className="exp-icon-bubble">
                {exp.icon}
              </div>
              {idx < experiences.length - 1 && <div className="exp-line-stem" />}
            </div>

            {/* Timeline Card Content */}
            <div className="exp-body">
              <div className="exp-top-row">
                <div>
                  <span className="exp-company-tag">{exp.company}</span>
                  <h3 className="exp-role-title">{exp.role}</h3>
                </div>
                <div className="exp-time-badge">
                  <span className="exp-duration">{exp.duration}</span>
                  <span className="exp-type-pill">{exp.type}</span>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.highlights.map((h, i) => (
                  <li key={i}>
                    <FaCheckCircle className="bullet-check" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tags-row">
                {exp.tags.map(t => (
                  <span key={t} className="exp-chip">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container exp-tech">
        <Reveal><span className="label">TECHNOLOGIES ACROSS ROLES</span></Reveal>
        <Reveal className="exp-tech-cloud">
          {[...new Set(experiences.flatMap(e => e.tags))].map(t => <span key={t} className="exp-chip">{t}</span>)}
        </Reveal>
      </div>

      <div className="container exp-bring">
        <Reveal><span className="label">WHAT I BRING</span></Reveal>
        <Stagger className="bring-grid">
          {BRING.map(b => (
            <Item key={b.title} className="bring-card card">
              <span className="bring-icon">{b.icon}</span>
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
