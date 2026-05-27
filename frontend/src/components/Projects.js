import '../styles/projects.css'

const PROJECTS = [
  {
    id: '01',
    title: 'Smart Water Level Monitoring System',
    description: 'An IoT-based system to monitor water levels in storage tanks using sensors and microcontrollers. Implemented real-time alerts when levels reach critical thresholds. Used Python to log and analyse usage patterns to reduce water wastage.',
    tech: ['Python', 'IoT', 'Sensors', 'Microcontrollers', 'Data Logging'],
    github: 'https://github.com/harshinidevinakka-del',
    featured: true,
  },
  {
    id: '02',
    title: 'Automated News Summarization System',
    description: 'A Python application that extracts and summarises key information from news articles using basic NLP techniques. Automates data extraction from online sources and reduces lengthy articles into quick readable summaries.',
    tech: ['Python', 'NLP', 'Web Scraping', 'Automation'],
    github: 'https://github.com/harshinidevinakka-del',
    featured: false,
  },
  {
    id: '03',
    title: 'Personal Portfolio Website',
    description: 'This portfolio website built with React.js as part of learning full-stack web development. Features a dark modern UI, responsive design, smooth scrolling, and a contact form connected to a Node.js + MongoDB backend.',
    tech: ['React.js', 'CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/harshinidevinakka-del',
    featured: false,
  },
]

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const ProjectCard = ({ project }) => (
  <div className={`project-card ${project.featured ? 'featured' : ''}`}>
    <span className="project-num" aria-hidden="true">{project.id}</span>
    <div className="project-body">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tech.map(t => <span className="tech-pill" key={t}>{t}</span>)}
      </div>
    </div>
    <div className="project-links">
      <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
        <GithubIcon /> Code
      </a>
    </div>
  </div>
)

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">My Work</span>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="divider" />
        <p className="section-subtitle">Projects I've built to apply my skills and solve real-world problems</p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map(p => <ProjectCard project={p} key={p.id} />)}
      </div>
      <div className="projects-footer">
        <a href="https://github.com/harshinidevinakka-del" className="btn btn-outline" target="_blank" rel="noreferrer">
          <GithubIcon /> View GitHub Profile
        </a>
      </div>
    </div>
  </section>
)

export default Projects
