import useIsMobile from '../hooks/useIsMobile'

const projects = [
  {
    name: 'task-queue-cli',
    description: 'A lightweight command-line task queue manager written in C++, where tasks are processed based on priority rather than insertion order. Built to apply concepts from professional experience working with queue-based scheduling systems in embedded software.',
    tech: ['C++17', 'STL', 'Makefile', 'CLI'],
    github: 'https://github.com/swherdika/task-queue-cli',
    highlight: true,
  },
]

function Projects() {
  const isMobile = useIsMobile()

  const sectionStyle = {
    padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
  }

  const innerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
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
    marginBottom: '3rem',
  }

  const cardStyle = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--accent-teal)',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: isMobile ? '100%' : '560px',
    position: 'relative',
  }

  const featuredTagStyle = {
    position: 'absolute',
    top: '-1px',
    right: '1.5rem',
    backgroundColor: 'var(--accent-teal)',
    color: 'var(--bg)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    fontWeight: 600,
    padding: '0.25rem 0.75rem',
    borderRadius: '0 0 6px 6px',
    letterSpacing: '0.08em',
  }

  const projectNameStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '1.3rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.75rem',
  }

  const descStyle = {
    color: 'var(--text-secondary)',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    lineHeight: 1.8,
    marginBottom: '1.25rem',
  }

  const pillsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  }

  const pillStyle = {
    padding: '0.25rem 0.75rem',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: '999px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
  }

  const linkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    color: 'var(--accent-teal)',
    letterSpacing: '0.05em',
    transition: 'opacity 0.2s ease',
  }

  const moreComingStyle = {
    marginTop: '2rem',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    opacity: 0.6,
  }

  return (
    <section id="projects" style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={headingStyle}>
          Personal <span style={headingAccentStyle}>Projects</span>
        </h2>
        <p style={subheadingStyle}>// what i build outside work</p>
        {projects.map((project) => (
          <div key={project.name} style={cardStyle}>
            {project.highlight && (
              <span style={featuredTagStyle}>featured</span>
            )}
            <p style={projectNameStyle}>{project.name}</p>
            <p style={descStyle}>{project.description}</p>
            <div style={pillsStyle}>
              {project.tech.map((t) => (
                <span key={t} style={pillStyle}>{t}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              ↗ view on github
            </a>
          </div>
        ))}
        <p style={moreComingStyle}>// more projects coming soon</p>
      </div>
    </section>
  )
}

export default Projects