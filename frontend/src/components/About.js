import '../styles/about.css'

const QUICK_INFO = [
  { label: 'Name',     value: 'Harshini Devi Nakka'           },
  { label: 'Email',    value: 'harshinidevinakka@gmail.com'   },
  { label: 'Phone',    value: '+91 9063524227'                 },
  { label: 'Location', value: 'Visakhapatnam, India'           },
  { label: 'Degree',   value: 'B.Tech CSE (IoT)'              },
  { label: 'College',  value: 'Raghu Engineering College (A)' },
  { label: 'CGPA',     value: '7.76 / 10'                     },
  { label: 'Status',   value: '✅ Open to Internships'        },
]

const HIGHLIGHTS = [
  {
    icon: '🏆',
    title: 'Hackathon Finalist',
    desc: 'Reached the second round of CodeIAM Spark Nation Hackathon — a national-level competition organised by Andhra University.',
  },
  {
    icon: '🌐',
    title: 'IoT & Automation Enthusiast',
    desc: 'Built real-world IoT systems using sensors, microcontrollers, and Python for real-time monitoring and automation.',
  },
  {
    icon: '📚',
    title: 'Certified & Growing',
    desc: 'Certified in AWS Cloud Practitioner, Python (Skillrack), and AI Basics — always adding new skills to my toolkit.',
  },
]

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Who I <span>Am</span></h2>
        <div className="divider" />
      </div>
      <div className="about-grid">
        <div className="about-left">
          <div className="about-photo-wrap">
            <div className="about-photo">
              <img src="/profile.jpg" alt="Harshini Devi Nakka" />
            </div>
            <div className="about-photo-deco" aria-hidden="true" />
          </div>
          <div className="about-info-table">
            {QUICK_INFO.map(({ label, value }) => (
              <div className="info-row" key={label}>
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-right">
          <div className="about-intro">
            <h3>An Aspiring Engineer &amp; Problem Solver</h3>
            <p>I'm a B.Tech student in Computer Science and Engineering with a specialisation in Internet of Things at Raghu Engineering College (A), Visakhapatnam. I have a strong foundation in Python and enjoy building systems that interact with the real world.</p>
            <p>I recently started exploring full-stack web development and this portfolio is one of my first React projects. I'm passionate about learning new technologies and applying them to solve real problems efficiently.</p>
            <p>I'm an active Core Member of Raghu Scope Club and Airis Club, contributing to technical events and student engagement. I also enjoy participating in hackathons and coding challenges.</p>
          </div>
          <div className="about-highlights">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div className="highlight-card" key={title}>
                <span className="highlight-icon" aria-hidden="true">{icon}</span>
                <div className="highlight-body">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="about-resume">
            <a href="/Harshini_Resume.pdf" className="btn btn-primary" download>
              Download Resume <DownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
