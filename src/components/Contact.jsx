import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

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
            <a href="mailto:nayaksubham551@gmail.com" className="contact-email">
              <FaEnvelope className="contact-icon" /> nayaksubham551@gmail.com
            </a>
            <div className="contact-location">
              <FaMapMarkerAlt className="contact-icon" /> Odisha, India 🇮🇳 · Open to Remote &amp; On-Site
            </div>
            <p className="contact-note">
              Available for software engineering roles, Document AI/OCR research initiatives, and ServiceNow enterprise implementations.
            </p>

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
    </section>
  )
}
