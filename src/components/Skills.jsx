import useIsMobile from '../hooks/useIsMobile'

const skillGroups = [
  {
    category: 'Systems & Embedded',
    icon: '⚙️',
    skills: ['C++', 'C', 'C#', 'Linux', 'Tizen', '.NET', 'RISC-V', 'dbus'],
  },
  {
    category: 'Backend',
    icon: '🛠️',
    skills: ['Laravel', 'PHP', 'REST API', 'PostgreSQL', 'MySQL', '.NET Core'],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['React', 'Tailwind CSS', 'Alpine.js', 'Livewire'],
  },
  {
    category: 'Tools & Workflow',
    icon: '🔧',
    skills: ['Git', 'Makefile', 'Agile', 'VS Code', 'GitHub'],
  },
]

function Skills() {
  const isMobile = useIsMobile()

  const sectionStyle = {
    padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
    backgroundColor: 'var(--bg-secondary)',
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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '1.5rem',
  }

  const cardStyle = {
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '1.5rem',
  }

  const categoryStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--accent-teal)',
    letterSpacing: '0.1em',
    marginBottom: '1rem',
  }

  const pillsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  }

  const pillStyle = {
    padding: '0.35rem 0.85rem',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: '999px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.78rem',
    color: 'var(--text-secondary)',
    letterSpacing: '0.03em',
    transition: 'all 0.2s ease',
    cursor: 'default',
  }

  return (
    <section id="skills" style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={headingStyle}>
          Technical <span style={headingAccentStyle}>Skills</span>
        </h2>
        <p style={subheadingStyle}>// what i work with</p>
        <div style={gridStyle}>
          {skillGroups.map((group) => (
            <div key={group.category} style={cardStyle}>
              <p style={categoryStyle}>
                {group.icon} {group.category}
              </p>
              <div style={pillsStyle}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={pillStyle}
                    onMouseEnter={e => {
                      e.target.style.borderColor = 'var(--accent-teal)'
                      e.target.style.color = 'var(--accent-teal)'
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.color = 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills