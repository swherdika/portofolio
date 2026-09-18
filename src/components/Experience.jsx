import useIsMobile from '../hooks/useIsMobile'

const experiences = [
  {
    company: 'NH Korindo Sekuritas Indonesia',
    role: 'HTS Software Developer',
    period: 'Jun 2026 – Present',
    bullets: [
      'Maintain and support a production desktop application built on MFC 4.2 (C++), keeping a legacy codebase stable for daily use',
      'Researching and designing the software architecture for a React + Tauri desktop application that will replace the legacy MFC system',
    ]
  },
  {
    company: 'Samsung Research Indonesia',
    role: 'Software Engineer',
    period: 'Apr 2024 – Jun 2026',
    bullets: [
      'Contributed to a cross-functional team of 6 engineers developing a dbus-activated daemon application for Samsung Smart TVs, designed to offload .NET assembly compilation from boot time to idle CPU periods',
      'Built and maintained compilation queue management logic in C++, including CPU usage threshold monitoring to schedule tasks without straining system resources',
      'Developed a standalone CLI tool for interfacing with the daemon app to inspect status, manage task queues, and control processes during development and QA',
      'Supported porting efforts for Samsung Tizen framework to RISC-V CPU architecture, contributing to compatibility testing across the platform',
      'Maintained and debugged a customized .NET launcher plugin for Tizen TV, resolving issues across multiple subsystems and developing broad understanding of the plugin\'s internals',
      'Maintained SmartThings application and Home Screen component across 5 legacy TV model years (2018–2022), managing compatibility and bug fixes across multiple simultaneous codebases in a Tizen environment',
    ]
  },
  {
    company: 'PT. BeIT Inovasi Tiwikrama',
    role: 'Backend Developer',
    period: 'Aug 2023 – Apr 2024',
    bullets: [
      'Designed and implemented REST APIs using Laravel and .NET Core to serve data and business logic for client-facing applications',
      'Architected database schemas and ODM structures aligned to project requirements, ensuring scalable and maintainable data layers',
      'Collaborated closely with project stakeholders to translate requirements into backend solutions',
    ]
  },
  {
    company: 'Direktorat Jenderal Pendidikan Tinggi, Riset dan Teknologi Kemdikbudristek',
    role: 'Full Stack Developer and Administrator Assist (Freelance)',
    period: 'Dec 2022 – Dec 2023',
    bullets: [
      'Served as sole PIC for an end-to-end reviewer assignment feature, independently designing and implementing the full flow including database relations, CRUD operations, query logic, and UI tables for a research proposal management system used by academic researchers',
      'Presented and demonstrated the feature directly to client stakeholders and administration teams',
      'Collaborated in an agile team of 11+ engineers across frontend (Tailwind, Alpine.js, Livewire) and backend (Laravel) layers',
    ]
  },
]

function Experience() {
  const isMobile = useIsMobile()

  const sectionStyle = {
    padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
    position: 'relative',
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

  const timelineStyle = {
    position: 'relative',
    paddingLeft: isMobile ? '1.25rem' : '2rem',
    borderLeft: '1px solid var(--border)',
  }

  const cardStyle = {
    position: 'relative',
    marginBottom: '3rem',
    paddingBottom: '3rem',
    borderBottom: '1px solid var(--border)',
  }

  const dotStyle = {
    position: 'absolute',
    left: isMobile ? '-1.65rem' : '-2.4rem',
    top: '0.4rem',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent-teal)',
    boxShadow: '0 0 8px rgba(45, 212, 191, 0.6)',
  }

  const companyStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: isMobile ? '1rem' : '1.2rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  }

  const roleStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    color: 'var(--accent-blue)',
    marginBottom: '0.25rem',
    letterSpacing: '0.05em',
  }

  const periodStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: 'var(--text-secondary)',
    marginBottom: '1.25rem',
    letterSpacing: '0.05em',
  }

  const bulletStyle = {
    color: 'var(--text-secondary)',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    lineHeight: 1.8,
    marginBottom: '0.5rem',
    paddingLeft: '1rem',
    borderLeft: '2px solid var(--border)',
  }

  return (
    <section id="experience" style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={headingStyle}>
          Work <span style={headingAccentStyle}>Experience</span>
        </h2>
        <p style={subheadingStyle}>// where i've been</p>
        <div style={timelineStyle}>
          {experiences.map((exp) => (
            <div key={exp.company} style={cardStyle}>
              <div style={dotStyle} />
              <p style={companyStyle}>{exp.company}</p>
              <p style={roleStyle}>{exp.role}</p>
              <p style={periodStyle}>{exp.period}</p>
              {exp.bullets.map((bullet, i) => (
                <p key={i} style={bulletStyle}>{bullet}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience