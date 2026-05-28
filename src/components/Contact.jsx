import useIsMobile from '../hooks/useIsMobile'

function Contact() {
  const isMobile = useIsMobile()

  const sectionStyle = {
    padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
    backgroundColor: 'var(--bg-secondary)',
  }

  const innerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }

  const headingStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: isMobile ? '1.75rem' : '2rem',
    fontWeight: 800,
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
  }

  const headingAccentStyle = {
    color: 'var(--accent-teal)',
  }

  const subheadingStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    letterSpacing: '0.1em',
    marginBottom: '1.5rem',
  }

  const descStyle = {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    lineHeight: 1.8,
    maxWidth: '480px',
    marginBottom: '2.5rem',
  }

  const linksStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '1rem',
    alignItems: 'center',
    marginBottom: '3rem',
    width: isMobile ? '100%' : 'auto',
  }

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    transition: 'all 0.2s ease',
    letterSpacing: '0.05em',
    width: isMobile ? '100%' : 'auto',
  }

  const footerStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
    opacity: 0.4,
    letterSpacing: '0.05em',
  }

  const links = [
    { label: 'email', href: 'mailto:herdika.s1@gmail.com' },
    { label: 'linkedin', href: 'https://linkedin.com/in/herdika-shidqi' },
    { label: 'github', href: 'https://github.com/swherdika' },
  ]

  return (
    <section id="contact" style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={headingStyle}>
          Get In <span style={headingAccentStyle}>Touch</span>
        </h2>
        <p style={subheadingStyle}>// let's work together</p>
        <p style={descStyle}>
          I'm currently open to new opportunities. Whether you have a role in mind,
          a project to discuss, or just want to connect — my inbox is open.
        </p>
        <div style={linksStyle}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'email' ? '_blank' : undefined}
              rel="noreferrer"
              style={linkStyle}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-teal)'
                e.currentTarget.style.color = 'var(--accent-teal)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
        <p style={footerStyle}>
          designed & built by Herdika Shidqi Wibowo © 2026
        </p>
      </div>
    </section>
  )
}

export default Contact