import './App.css'
import {
  profile,
  navLinks,
  socials,
  works,
  about,
  capabilities,
  stats,
} from './content'

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-inner">
        <a href="#home" className="nav-logo">
          {profile.name}
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="nav-social"
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
            >
              {s.short}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function AvailableBadge() {
  if (!profile.available) return null
  const text = '• AVAILABLE FOR FREELANCE '
  return (
    <div className="badge" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="badge-text">
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text>
          <textPath href="#circlePath">{text.repeat(2)}</textPath>
        </text>
      </svg>
      <span className="badge-icon">✦</span>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <AvailableBadge />
      <span className="doodle doodle-rainbow" aria-hidden="true">
        🌈
      </span>
      <span className="doodle doodle-plane" aria-hidden="true">
        ✈️
      </span>
      <h1 className="hero-title">
        Hello! {profile.emoji} I’m {profile.name},
        <br />
        {profile.role}.
      </h1>
      <p className="hero-intro">{profile.intro}</p>
      <div className="hero-actions">
        <a href="#works" className="btn btn-primary">
          View my work
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get in touch
        </a>
      </div>
    </section>
  )
}

function Works() {
  return (
    <section id="works" className="section">
      <div className="section-head">
        <h2>My selected works</h2>
        <p>
          제가 공들여 작업한 프로젝트들입니다. 어떤 문제를 어떻게 풀어냈는지
          살펴보세요.
        </p>
      </div>
      <div className="work-list">
        {works.map((work) => (
          <a
            key={work.title}
            href={work.link}
            className="work-card"
            target="_blank"
            rel="noreferrer"
          >
            <div className="work-info">
              <span className="work-category">{work.category}</span>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <span className="work-cta">View Project →</span>
            </div>
            <div className={`work-thumb tint-${work.tint}`}>
              <span>{work.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section section-tinted">
      <div className="about-grid">
        <div className="about-avatar" aria-hidden="true">
          <div className="about-blob">{profile.emoji}</div>
        </div>
        <div className="about-text">
          <h2>{about.heading}</h2>
          {about.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {stats.length > 0 && (
            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="capabilities">
        <h3>My capabilities</h3>
        <div className="cap-tags">
          {capabilities.map((cap) => (
            <span key={cap} className="cap-tag">
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="chat-bubble" aria-hidden="true">
        💬
      </span>
      <h2 className="contact-title">
        Let’s talk about
        <br />
        your project.
      </h2>
      <p className="contact-sub">
        함께 만들고 싶은 아이디어가 있으신가요? 편하게 연락 주세요.
      </p>
      <div className="contact-cta">
        <a href={`mailto:${profile.email}`} className="btn btn-light">
          Get in Touch
        </a>
        <span className="handwritten">and make it real together</span>
      </div>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.fullName}. {profile.location}
        </span>
        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Works />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
