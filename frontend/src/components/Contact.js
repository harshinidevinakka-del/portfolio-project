import { useState } from 'react'
import '../styles/contact.css'

const CONTACT_INFO = [
  { icon: '📧', label: 'Email',    value: 'harshinidevinakka@gmail.com',         href: 'mailto:harshinidevinakka@gmail.com'       },
  { icon: '📱', label: 'Phone',    value: '+91 9063524227',                       href: 'tel:+919063524227'                         },
  { icon: '📍', label: 'Location', value: 'Visakhapatnam, Andhra Pradesh, India', href: '#'                                         },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/harshinidevinakka',    href: 'https://linkedin.com/in/harshinidevinakka' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/harshinidevinakka-del',     href: 'https://github.com/harshinidevinakka-del'  },
]

const INIT = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const [form,    setForm]    = useState(INIT)
  const [status,  setStatus]  = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://harshini-portfolio-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStatus('success')
      setForm(INIT)
      setTimeout(() => setStatus(''), 5000)
    } catch (err) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="divider" />
          <p className="section-subtitle">Open to internships, project collaborations, and learning opportunities.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>Whether you have an internship opportunity, a project idea, or just want to connect — feel free to reach out anytime.</p>
            <div className="contact-info-list">
              {CONTACT_INFO.map(({ icon, label, value, href }) => (
                <a key={label} href={href} className="contact-info-item"
                   target={href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                  <span className="contact-item-icon">{icon}</span>
                  <div>
                    <span className="contact-item-label">{label}</span>
                    <span className="contact-item-value">{value}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="contact-avail">
              <span className="avail-dot" />
              Available for internships — starting immediately
            </div>
          </div>
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" value={form.name}
                    onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" value={form.email}
                    onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" value={form.subject}
                  onChange={handleChange} placeholder="Internship Opportunity / Project Collab" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} value={form.message}
                  onChange={handleChange} placeholder="Write your message here…" required />
              </div>
              {status === 'success' && <p className="form-feedback success">✅ Message sent! I'll get back to you soon.</p>}
              {status === 'error'   && <p className="form-feedback error">❌ Something went wrong. Please email me directly.</p>}
              <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact