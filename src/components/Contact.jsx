import { useRef, useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">

        {/* Left */}
        <div className="contact-left">
          <span className="label fade-up">Get in touch</span>
          <h2 className="contact-heading fade-up">
            Let's build<br />
            <em>something great.</em>
          </h2>
          <div className="contact-meta fade-up">
            <a href="mailto:subham@example.com" className="contact-email">
              subham@example.com
            </a>
            <p className="contact-note">
              Open to freelance projects, full-time roles, and interesting conversations.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-right fade-up" style={{ transitionDelay: '0.1s' }}>
          {status === 'sent' ? (
            <div className="sent-state">
              <span className="sent-icon">✓</span>
              <p>Message received. I'll be in touch shortly.</p>
              <button className="btn-pill" onClick={() => { setStatus(null); setForm({ name:'', email:'', message:'' }) }}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6"
                  placeholder="Tell me what you're working on..."
                  value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
