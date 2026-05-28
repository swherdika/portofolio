import useIsMobile from '../hooks/useIsMobile'

function Hero() {
  const isMobile = useIsMobile()

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: isMobile ? '6rem 1.5rem 3rem' : '0 2rem',
    position: 'relative',
    overflow: 'hidden',
  }

  const gridBgStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    opacity: 0.3,
    zIndex: 0,
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '900px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? '2rem' : '4rem',
    textAlign: isMobile ? 'center' : 'left',
  }

  const photoWrapperStyle = {
    flexShrink: 0,
  }

  const photoRingStyle = {
    width: isMobile ? '180px' : '250px',
    height: isMobile ? '180px' : '250px',
    borderRadius: '50%',
    border: '2px solid var(--accent-teal)',
    padding: '4px',
    boxShadow: '0 0 30px rgba(45, 212, 191, 0.2)',
    overflow: 'hidden',
  }

  const photoImgStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: '50% 8%',
    transform: 'scale(2.0)',
    transformOrigin: '47% 10%',
  }

  const greetingStyle = {
    fontFamily: 'var(--font-mono)',
    color: 'var(--accent-teal)',
    fontSize: '0.85rem',
    letterSpacing: '0.1em',
    marginBottom: '0.75rem',
  }

  const nameStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '0.5rem',
    color: 'var(--text-primary)',
  }

  const lastNameStyle = {
    color: 'var(--accent-teal)',
  }

  const titleStyle = {
    fontFamily: 'var(--font-mono)',
    color: 'var(--accent-blue)',
    fontSize: isMobile ? '0.85rem' : '1rem',
    marginBottom: '1.5rem',
    letterSpacing: '0.05em',
  }

  const bioStyle = {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    maxWidth: '480px',
    lineHeight: 1.8,
    marginBottom: '2rem',
    margin: isMobile ? '0 auto 2rem' : '0 0 2rem',
  }

  const btnRowStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: isMobile ? 'center' : 'flex-start',
  }

  const primaryBtnStyle = {
    padding: '0.75rem 1.75rem',
    backgroundColor: 'var(--accent-teal)',
    color: 'var(--bg)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    fontWeight: 600,
    borderRadius: '4px',
    transition: 'opacity 0.2s ease',
    letterSpacing: '0.05em',
  }

  const secondaryBtnStyle = {
    padding: '0.75rem 1.75rem',
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    letterSpacing: '0.05em',
  }

  return (
    <section id="about" style={sectionStyle}>
      <div style={gridBgStyle} />
      <div style={contentStyle}>

        <div style={photoWrapperStyle}>
          <div style={photoRingStyle}>
            <img
              src="/profile.jpg"
              alt="Herdika Shidqi Wibowo"
              style={photoImgStyle}
            />
          </div>
        </div>

        <div>
          <p style={greetingStyle}>{'>'} hello, world</p>
          <h1 style={nameStyle}>
            Herdika Shidqi
            <br />
            <span style={lastNameStyle}>Wibowo</span>
          </h1>
          <p style={titleStyle}>
            Software Engineer · Embedded Systems & C/C++
          </p>
          <p style={bioStyle}>
            I build software close to the metal — shipped on Samsung Smart TVs,
            maintained across legacy codebases, and delivered without cutting corners.
          </p>
          <div style={btnRowStyle}>
            <a
              href="#experience"
              style={primaryBtnStyle}
              onMouseEnter={e => { e.target.style.opacity = '0.85' }}
              onMouseLeave={e => { e.target.style.opacity = '1' }}
            >
              view my work
            </a>
            <a
              href="https://linkedin.com/in/herdika-shidqi"
              target="_blank"
              rel="noreferrer"
              style={secondaryBtnStyle}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-teal)'
                e.currentTarget.style.color = 'var(--accent-teal)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              linkedin
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero