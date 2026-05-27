import '../styles/hero.css'

const DATA = {
  greeting: 'Available for Internships & Opportunities',
  name: 'Harshini Devi Nakka',
  roleEmphasis: 'Python & IoT',
  description: `Aspiring Computer Science & Engineering student specialising in IoT,
with hands-on experience in Python, real-time systems, and automation.
Currently expanding into full-stack web development.`,
  stats: [
    { number: '2+',    label: 'Projects Built'  },
    { number: '3+',    label: 'Certifications'  },
    { number: '7.76',  label: 'CGPA'            },
    { number: '88.7%', label: 'Class XII Score' },
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/harshinidevinakka-del',
      svg: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/harshinidevinakka',
      svg: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ],
}

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-grid-bg" aria-hidden="true" />
    <div className="hero-glow"    aria-hidden="true" />
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {DATA.greeting}
          </div>
          <h1 className="hero-name">
            Hi, I'm <span className="hero-name-accent">{DATA.name}</span>
          </h1>
          <h2 className="hero-role">
            I work with <span className="hero-role-accent">{DATA.roleEmphasis}</span> &amp; Web Dev
          </h2>
          <p className="hero-description">{DATA.description}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects <ArrowIcon /></a>
            <a href="#contact"  className="btn btn-outline">Get In Touch</a>
          </div>
          <div className="hero-socials">
            <span className="hero-socials-label">Find me on</span>
            <div className="hero-socials-row">
              {DATA.socials.map(s => (
                <a key={s.label} href={s.href} className="hero-social-icon"
                   aria-label={s.label} target="_blank" rel="noreferrer">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="profile-wrap">
            <div className="profile-ring" />
            <div className="profile-circle">
              <img src="/profile.jpg" alt="Harshini Devi Nakka" />
            </div>
            <div className="profile-chip chip-top">🎓 CSE — IoT</div>
            <div className="profile-chip chip-bottom">⚡ Open to Internships</div>
          </div>
        </div>
      </div>
      <div className="hero-stats" role="list">
        {DATA.stats.map(s => (
          <div className="stat-item" key={s.label} role="listitem">
            <span className="stat-number">{s.number}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Hero
