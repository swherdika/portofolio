import { useState, useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '1.25rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: scrolled || menuOpen ? 'rgba(8, 13, 20, 0.95)' : 'transparent',
    backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
    borderBottom: scrolled || menuOpen ? '1px solid #1e2d3d' : '1px solid transparent',
  }

  const logoStyle = {
    fontFamily: 'var(--font-mono)',
    color: 'var(--accent-teal)',
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap',
  }

  const hamburgerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '4px',
  }

  const barStyle = {
    width: '24px',
    height: '2px',
    backgroundColor: 'var(--text-primary)',
    transition: 'all 0.3s ease',
  }

  const mobileMenuStyle = {
    position: 'fixed',
    top: '60px',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(8, 13, 20, 0.97)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #1e2d3d',
    padding: '1.5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    zIndex: 99,
    transform: menuOpen ? 'translateY(0)' : 'translateY(-150%)',
    transition: 'transform 0.3s ease',
  }

  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    transition: 'color 0.2s ease',
    letterSpacing: '0.03em',
  }

  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

  return (
    <>
      <nav style={navStyle}>
        <span style={logoStyle}>herdika-shidqi.vercel.app</span>

        {isMobile ? (
          <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={barStyle} />
            <div style={barStyle} />
            <div style={barStyle} />
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={'#' + item.toLowerCase()}
                style={linkStyle}
                onMouseEnter={e => { e.target.style.color = 'var(--accent-teal)' }}
                onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)' }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {isMobile && (
        <div style={mobileMenuStyle}>
          {navItems.map((item) => (
            <a
              key={item}
              href={'#' + item.toLowerCase()}
              style={linkStyle}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={e => { e.target.style.color = 'var(--accent-teal)' }}
              onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)' }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar