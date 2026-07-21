import { useEffect, useRef, useState } from 'react'
import './App.css'
import {
  profile,
  navLinks,
  socials,
  hero,
  deck,
  works,
  caseStudies,
  process,
  statPills,
  about,
  capabilities,
  contact,
} from './content'

const workOrder = works.map((w) => w.slug)

// Lightweight markup: **bold** and *italic*. Content stays plain, readable
// prose in content.js instead of nested JSX trees.
function rich(text, keyPrefix = '') {
  if (!text) return null
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)
  return parts.map((part, i) => {
    const key = `${keyPrefix}${i}`
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={key}>{part.slice(1, -1)}</em>
    }
    return <span key={key}>{part}</span>
  })
}

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
  const text = '• I AM AVAILABLE • FOR OPPORTUNITIES '
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
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
      <span className="badge-icon">✉</span>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      {hero.stickers.map((sticker) => (
        <span
          key={sticker.label}
          className={`hero-sticker sticker-${sticker.side} tint-${sticker.tint}`}
          aria-hidden="true"
        >
          {sticker.label}
        </span>
      ))}
      <h1 className="hero-title">
        {hero.titleTop}
        <span className="hero-face" aria-hidden="true">
          {profile.emoji}
        </span>
        <br />
        {hero.titleBottom}
      </h1>
      <p className="hero-sub">{rich(hero.sub, 'hs-')}</p>
    </section>
  )
}

function Deck() {
  return (
    <div className="deck" aria-label="Quick links">
      {deck.map((card, i) => (
        <a
          key={card.title}
          href={card.href}
          className={`deck-card deck-${i} tint-${card.tint}`}
        >
          <h3>{card.title}</h3>
          <p>{card.body}</p>
          <span className="deck-arrow" aria-hidden="true">
            →
          </span>
        </a>
      ))}
    </div>
  )
}

function Works({ onOpen }) {
  return (
    <section id="works" className="section">
      <div className="section-head">
        <h2>My selected works</h2>
        <p>
          Four projects, one question at the center of each — how I framed the
          problem and shaped the experience.
        </p>
      </div>
      <div className="work-list">
        {works.map((work) => (
          <button
            key={work.slug}
            className="work-card"
            onClick={() => onOpen(work.slug)}
            type="button"
          >
            <div className="work-info">
              <h3>{work.name}</h3>
              <span className="work-category">{work.tags}</span>
              <p>{rich(work.headline, `w-${work.slug}-`)}</p>
              <span className="btn btn-outline">View Case Study</span>
            </div>
            <div className={`work-thumb tint-${work.tint}`}>
              <span>{work.name}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process">
      <div className="process-grid">
        <div className="process-intro">
          <h2>
            {process.heading.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p>{process.sub}</p>
        </div>
        <div className="process-cards">
          {process.steps.map((step) => (
            <div key={step.num} className={`process-card tint-${step.tint}`}>
              <div className="process-card-top">
                <span className="process-icon" aria-hidden="true" />
                <span className="process-num">{step.num}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  if (statPills.length === 0) return null
  return (
    <section className="section stats">
      <div className="section-head">
        <h2>My numbers say it all</h2>
        <p>
          A few numbers from the case studies — the kind that come from
          listening, testing, and iterating.
        </p>
      </div>
      <div className="stat-pills">
        {statPills.map((stat) => (
          <div key={stat.label} className="stat-pill">
            <strong className={`stat-value tint-text-${stat.tint}`}>
              {stat.value}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-photo" aria-hidden="true">
            <span className="about-emoji">{profile.emoji}</span>
          </div>
          <AvailableBadge />
        </div>
        <div className="about-text">
          <h2>{about.heading}</h2>
          {about.body.map((para, i) => (
            <p key={i}>{rich(para, `ab-${i}-`)}</p>
          ))}
          <div className="skills">
            {about.skills.map((skill) => (
              <div key={skill.name} className="skill">
                <div className="skill-row">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="section capabilities">
      <div className="section-head">
        <h2>My capabilities</h2>
        <p>
          The skills I bring to a team — shaped by product work, print work,
          and five years of listening for a living.
        </p>
      </div>
      <div className="cap-tags">
        {capabilities.map((cap) => (
          <span key={cap} className="cap-tag">
            {cap}
          </span>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <span className="chat-bubble" aria-hidden="true">
          💬
        </span>
        <h2 className="contact-title">
          {contact.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p className="contact-sub">{contact.sub}</p>
        <div className="contact-cta">
          <a href={`mailto:${profile.email}`} className="btn btn-light">
            {contact.cta}
          </a>
          <span className="handwritten">{contact.handwritten}</span>
        </div>

        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.fullName}. All rights
            reserved.
          </span>
          <div className="footer-links">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <span>{contact.tagline}</span>
        </footer>
      </div>
    </section>
  )
}

function CaseSections({ study, slugPrefix }) {
  const tints = ['blue', 'mint', 'pink', 'yellow', 'rose', 'lime']
  return study.sections.map((sec, i) => (
    <div className="case-sec" key={i}>
      <div className="case-sec-eyebrow">{sec.eyebrow}</div>
      <h3 className="case-sec-h">{rich(sec.heading, `${slugPrefix}h${i}-`)}</h3>
      {sec.body && (
        <div className="case-sec-body">
          {sec.body.map((p, j) => (
            <p key={j}>{rich(p, `${slugPrefix}b${i}-${j}-`)}</p>
          ))}
        </div>
      )}
      {sec.callout && (
        <div className="case-callout">
          {rich(sec.callout, `${slugPrefix}c${i}-`)}
        </div>
      )}
      {sec.cards && (
        <div className="case-cards">
          {sec.cards.map((card, j) => (
            <div className={`case-card tint-${tints[j % tints.length]}`} key={j}>
              <h4>{rich(card.title, `${slugPrefix}ct${i}-${j}-`)}</h4>
              <p className="case-card-meta">{card.meta}</p>
              <p>{rich(card.body, `${slugPrefix}cb${i}-${j}-`)}</p>
            </div>
          ))}
        </div>
      )}
      {sec.impact && (
        <div className="case-impact">
          {sec.impact.map((item, j) => (
            <div className={`impact-card impact-${j % 3}`} key={j}>
              <div className="impact-num">{item.num}</div>
              <div className="impact-stat">{item.stat}</div>
              <p className="impact-label">
                {rich(item.label, `${slugPrefix}im${i}-${j}-`)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  ))
}

function CaseStudyOverlay({ slug, onClose, onNavigate }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (slug) overlayRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!slug) return null
  const study = caseStudies[slug]
  const idx = workOrder.indexOf(slug)
  const nextSlug = workOrder[idx + 1]

  return (
    <div
      className={`case-overlay ${slug ? 'open' : ''}`}
      role="dialog"
      aria-modal="true"
      ref={overlayRef}
    >
      <div className="case-topbar">
        <button className="case-back-btn" onClick={onClose} type="button">
          <span className="case-back-arrow">←</span> All work
        </button>
        <span className="case-nav-meta">
          Case study {String(idx + 1).padStart(2, '0')} / {workOrder.length}
        </span>
      </div>

      <div className="case-body">
        <div className="case-eyebrow">{study.eyebrow}</div>
        <h1 className="case-title">{rich(study.title, `${slug}-t-`)}</h1>
        <p className="case-sub">{rich(study.sub, `${slug}-s-`)}</p>

        <div className="case-meta">
          {study.meta.map((m) => (
            <div className="case-meta-block" key={m.label}>
              <h6>{m.label}</h6>
              <p>{m.value}</p>
            </div>
          ))}
        </div>

        <CaseSections study={study} slugPrefix={`${slug}-`} />

        {study.gallery && (
          <div className="case-sec">
            <h3 className="case-sec-h">Selected screens</h3>
            <div className="case-gallery">
              {study.gallery.map((item, i) => (
                <div className={`case-gallery-tile tint-${study.tint}`} key={i}>
                  <strong>{item.label}</strong>
                  <span>{item.hint}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="case-next">
        {nextSlug ? (
          <>
            <div className="case-next-eyebrow">
              Next case study · {String(idx + 2).padStart(2, '0')} /{' '}
              {workOrder.length}
            </div>
            <h2 className="case-next-title">
              {caseStudies[nextSlug].eyebrow.split(' ·')[0]}
            </h2>
            <button
              className="btn btn-light"
              onClick={() => onNavigate(nextSlug)}
              type="button"
            >
              Continue Reading →
            </button>
          </>
        ) : (
          <>
            <div className="case-next-eyebrow">That's the work — for now.</div>
            <h2 className="case-next-title">Want to talk? I'd love that.</h2>
            <button className="btn btn-light" onClick={onClose} type="button">
              ← Back to All Work
            </button>
          </>
        )}
      </section>
    </div>
  )
}

function App() {
  const [activeCase, setActiveCase] = useState(null)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (workOrder.includes(hash)) setActiveCase(hash)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('case-open', Boolean(activeCase))
    if (activeCase) {
      window.history.replaceState(null, '', `#${activeCase}`)
    } else if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [activeCase])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape' && activeCase) setActiveCase(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [activeCase])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Deck />
        <Works onOpen={setActiveCase} />
        <Process />
        <Stats />
        <About />
        <Capabilities />
      </main>
      <Contact />
      <CaseStudyOverlay
        slug={activeCase}
        onClose={() => setActiveCase(null)}
        onNavigate={setActiveCase}
      />
    </div>
  )
}

export default App
