import { useEffect, useRef, useState } from 'react'
import './App.css'
import {
  profile,
  navLinks,
  socials,
  hero,
  works,
  caseStudies,
  about,
  stats,
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
  const text = `• ${profile.availableText.toUpperCase()} `
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

      <div className="hero-stack">
        {hero.lines.map((line, i) => (
          <h1 className="hero-line" key={i}>
            {rich(line, `hl${i}-`)}
          </h1>
        ))}
      </div>

      <div className="hero-tags">
        {hero.tags.map((tag) => (
          <span key={tag} className="hero-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="hero-actions">
        <a href="#works" className="btn btn-primary">
          View my work
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get in touch
        </a>
      </div>

      <div className="hero-info">
        {hero.info.map((block) => (
          <div className="hero-info-block" key={block.label}>
            <h6>{block.label}</h6>
            <p>
              {block.body.split('\n').map((line, i) =>
                block.href ? (
                  <a key={i} href={block.href}>
                    {line}
                  </a>
                ) : (
                  <span key={i}>
                    {line}
                    {i < block.body.split('\n').length - 1 && <br />}
                  </span>
                )
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Works({ onOpen }) {
  return (
    <section id="works" className="section">
      <div className="section-head">
        <h2>Selected works</h2>
        <p>
          Four projects, one question at the center of each — explore how I
          framed the problem and shaped the experience.
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
              <div className="work-meta">
                <span className="work-num">{work.num}</span>
                <span className="work-category">{work.tags}</span>
              </div>
              <h3>{rich(work.headline, `w-${work.slug}-`)}</h3>
              <span className="work-cta">Read the case study →</span>
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

function CaseSections({ study, slugPrefix }) {
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
        <div className="case-callout">{rich(sec.callout, `${slugPrefix}c${i}-`)}</div>
      )}
      {sec.cards && (
        <div className="case-cards">
          {sec.cards.map((card, j) => (
            <div className="case-card" key={j}>
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
              Next case study · {String(idx + 2).padStart(2, '0')} / {workOrder.length}
            </div>
            <h2 className="case-next-title">
              {caseStudies[nextSlug].eyebrow.split(' ·')[0]}
            </h2>
            <button
              className="case-next-link"
              onClick={() => onNavigate(nextSlug)}
              type="button"
            >
              Continue reading →
            </button>
          </>
        ) : (
          <>
            <div className="case-next-eyebrow">That's the work — for now.</div>
            <h2 className="case-next-title">Want to talk? I'd love that.</h2>
            <button className="case-next-link" onClick={onClose} type="button">
              ← Back to all work
            </button>
          </>
        )}
      </section>
    </div>
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
          <h2>{rich(about.heading, 'ab-h-')}</h2>
          {about.body.map((para, i) => (
            <p key={i}>{rich(para, `ab-b${i}-`)}</p>
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

      <div className="about-lists">
        <div className="about-list">
          <h3>Strengths</h3>
          <ul>
            {about.strengths.map((item, i) => (
              <li key={item}>
                <span>{item}</span>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-list">
          <h3>Tools</h3>
          <ul>
            {about.tools.map((tool) => (
              <li key={tool.name}>
                <span>{tool.name}</span>
                <span>{tool.freq}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-currently">
          <h3>Currently</h3>
          <p>{about.currently}</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="contact-eyebrow">{contact.eyebrow}</span>
      <h2 className="contact-title">{rich(contact.title, 'co-t-')}</h2>
      <div className="contact-links">
        {contact.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="contact-link"
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span>{link.num}</span> {link.label}
          </a>
        ))}
      </div>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </span>
        <span>{contact.tagline}</span>
      </footer>
    </section>
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
        <Works onOpen={setActiveCase} />
        <About />
        <Contact />
      </main>
      <CaseStudyOverlay
        slug={activeCase}
        onClose={() => setActiveCase(null)}
        onNavigate={setActiveCase}
      />
    </div>
  )
}

export default App
