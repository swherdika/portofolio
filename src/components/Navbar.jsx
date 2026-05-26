import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
    backgroundColor: scrolled ? 'rgba(8, 13, 20, 0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid #1e2d3d' : '1px solid transparent',
  }

  const logoStyle = {
    fontFamily: 'var(--font-mono)',
    color: 'var(--accent-teal)',
    fontSize: '0.9rem',
    letterSpacing: '0.05em'
  }

  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    transition: 'color 0.2s ease',
    letterSpacing: '0.03em'
  }

  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

  return (
    <nav style={navStyle}>
      <span style={logoStyle}>herdika-shidqi.vercel.app</span>
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
    </nav>
  )
}

export default Navbar