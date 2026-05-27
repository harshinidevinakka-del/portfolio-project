import { useState, useEffect } from 'react'
import '../styles/navbar.css'

const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

const Navbar = () => {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [scrolled,      setScrolled]      = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''))
      const scrollPos  = window.scrollY + 120
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <span className="logo-bracket">&lt;</span>
            Harshini
            <span className="logo-bracket">/&gt;</span>
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.href} className={activeSection === link.href.replace('#', '') ? 'active' : ''}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary nav-cta">Hire Me</a>
            </li>
          </ul>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-overlay ${menuOpen ? 'visible' : ''}`} onClick={closeMenu} />

      <div className={`nav-drawer ${menuOpen ? 'open' : ''}`}>
        <ul className="drawer-links">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a href={link.href}
                className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary drawer-cta" onClick={closeMenu}>Hire Me</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
