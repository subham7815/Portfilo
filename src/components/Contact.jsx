import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'
import { motion } from 'framer-motion'
import { Stagger, Item } from './motion'
import './Contact.css'

const TILES = [
  { icon: '⚡', label: 'Response time', value: 'Within 24 hours', color: 'var(--amber)' },
  { icon: '🌍', label: 'Location', value: 'Odisha, India', color: 'var(--steel)' },
  { icon: '💼', label: 'Open to', value: 'Full-time & Remote', color: 'var(--steel)' },
  { icon: '🕘', label: 'Timezone', value: 'IST (UTC+5:30)', color: 'var(--amber)' },
]

const FAQ = [
  ['Are you open to remote work?', 'Yes. I am open to remote, hybrid and on-site roles.'],
  ['What roles are you looking for?', 'Full-stack / software engineering, Document AI & OCR work, and ServiceNow development or administration.'],
  ['Where are you based?', 'Odisha, India (IST, UTC+5:30), comfortable collaborating across time zones.'],
  ['Can I see your resume?', 'Yes, download it from the Home or About page, or use the LinkedIn link here.'],
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('nayaksubham551@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    // Open default mail client or simulate instant send
    const mailto = `mailto:nayaksubham551@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry from ' + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`
    window.location.href = mailto
    setTimeout(() => setStatus('sent'), 600)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">

        {/* Left */}
        <div className="contact-left">
          <span className="label">INITIATE CONVERSATION</span>
          <h2 className="contact-heading">
            Let's build<br />
            <em>intelligent software.</em>
          </h2>

          <div className="contact-meta">
            <div className="contact-email-row">
              <a href="mailto:nayaksubham551@gmail.com" className="contact-email">
                <FaEnvelope className="contact-icon" /> nayaksubham551@gmail.com
              </a>
              <button
                type="button"
                className={`contact-copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                title="Copy email to clipboard"
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
            <div className="contact-location">
              <FaMapMarkerAlt className="contact-icon" /> Odisha, India 🇮🇳 · Open to Remote &amp; On-Site
            </div>
            <p className="contact-note">
              Available for software engineering roles, Document AI/OCR research initiatives, and ServiceNow enterprise implementations.
            </p>

            <Stagger className="contact-tiles">
              {TILES.map(t => (
                <Item key={t.label} className="contact-tile" style={{ '--t': t.color }}>
                  <span className="tile-icon">{t.icon}</span>
                  <b>{t.label}</b>
                  <span>{t.value}</span>
                </Item>
              ))}
            </Stagger>

            <div className="contact-direct-links">
              <a href="https://www.linkedin.com/in/subham7815/" target="_blank" rel="noreferrer" className="contact-pill-link">
                <FaLinkedin /> LinkedIn Profile
              </a>
              <a href="https://github.com/subham7815" target="_blank" rel="noreferrer" className="contact-pill-link">
                <FaGithub /> GitHub (subham7815)
              </a>
              <a href="https://vercel.com/shubhams-projects-369a9342" target="_blank" rel="noreferrer" className="contact-pill-link">
                <SiVercel /> Vercel Deployments
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-right">
          {status === 'sent' ? (
            <div className="sent-state">
              <span className="sent-icon">✓</span>
              <p>Thank you, Subham will receive your email directly!</p>
              <button
                className="btn-pill"
                onClick={() => { setStatus(null); setForm({ name:'', email:'', subject:'', message:'' }) }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Alex Johnson"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="subject">Subject / Project Interest</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Software Engineering / AI / ServiceNow"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your team, project, or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Composing…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>

      </div>

      <div className="container contact-faq">
        <span className="label">FAQ</span>
        <div className="faq-list">
          {FAQ.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
