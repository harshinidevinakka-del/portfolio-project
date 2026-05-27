import { useState } from 'react'
import '../styles/skills.css'

const SKILLS = {
  'Programming': [
    { name: 'Python',      level: 80, icon: '🐍' },
    { name: 'C',           level: 70, icon: '⚙️' },
    { name: 'HTML & CSS',  level: 75, icon: '🌐' },
    { name: 'JavaScript',  level: 60, icon: '🟨' },
  ],
  'IoT & Tools': [
    { name: 'IoT Systems',      level: 75, icon: '📡' },
    { name: 'Git & GitHub',     level: 80, icon: '🐙' },
    { name: 'Jupyter Notebook', level: 85, icon: '📓' },
    { name: 'Microsoft Excel',  level: 70, icon: '📊' },
  ],
  'Web & Cloud': [
    { name: 'React.js',  level: 55, icon: '⚛️' },
    { name: 'Node.js',   level: 40, icon: '🟩' },
    { name: 'AWS Cloud', level: 60, icon: '☁️' },
    { name: 'MongoDB',   level: 40, icon: '🍃' },
  ],
}

const ALSO_KNOW = [
  'NLP Basics', 'Data Analysis', 'Microcontrollers',
  'Sensors & Actuators', 'Python Scripting', 'Problem Solving', 'Team Collaboration',
]

const Skills = () => {
  const [active, setActive] = useState('Programming')
  const tabs = Object.keys(SKILLS)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Toolkit</span>
          <h2 className="section-title">Skills &amp; <span>Technologies</span></h2>
          <div className="divider" />
          <p className="section-subtitle">Technologies and tools I use to build, automate, and solve real problems</p>
        </div>
        <div className="skills-tabs" role="tablist">
          {tabs.map(tab => (
            <button key={tab} role="tab" aria-selected={active === tab}
              className={`skills-tab ${active === tab ? 'active' : ''}`}
              onClick={() => setActive(tab)}>
              {tab}
            </button>
          ))}
        </div>
        <div className="skills-grid" role="tabpanel">
          {SKILLS[active].map(({ name, level, icon }) => (
            <div className="skill-card" key={name}>
              <div className="skill-header">
                <span className="skill-icon" aria-hidden="true">{icon}</span>
                <span className="skill-name">{name}</span>
                <span className="skill-pct">{level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ '--target-width': `${level}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="skills-also">
          <p className="skills-also-label">Also familiar with</p>
          <div className="skills-tags">
            {ALSO_KNOW.map(tech => (
              <span className="skills-tag" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
