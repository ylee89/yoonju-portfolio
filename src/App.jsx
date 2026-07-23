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
          A few projects I’ve shaped, each built around one question — how I
          framed the problem and designed the experience.
        </p>
      </div>
      <div className="work-grid">
        {works.map((work, i) =>
          work.placeholder ? (
            <div className="work-card work-card-soon" key={`ph-${i}`}>
              <div className={`work-thumb tint-${work.tint}`}>
                <span className="soon-badge">Coming soon</span>
              </div>
              <div className="work-body">
                <h3>{work.name}</h3>
                <span className="work-category">{work.tags}</span>
              </div>
            </div>
          ) : (
            <button
              key={work.slug}
              className="work-card"
              onClick={() => onOpen(work.slug)}
              type="button"
            >
              <div
                className={`work-thumb tint-${work.tint}${
                  work.image ? ` fit-${work.imageFit || 'cover'}` : ''
                }`}
              >
                {work.image ? (
                  <img
                    src={work.image}
                    alt={`${work.name} preview`}
                    loading="lazy"
                  />
                ) : (
                  <span>{work.name}</span>
                )}
              </div>
              <div className="work-body">
                <div className="work-body-head">
                  <h3>{work.name}</h3>
                  <span className="work-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <span className="work-category">{work.tags}</span>
              </div>
            </button>
          )
        )}
      </div>
    </section>
  )
}

// Adobe-style brand tile: rounded square, brand background, two letters.
function adobeIcon(bg, fg, letters) {
  return (
    <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="8" fill={bg} />
      <text
        x="20"
        y="21"
        fill={fg}
        fontSize="15"
        fontWeight="700"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Inter, sans-serif"
      >
        {letters}
      </text>
    </svg>
  )
}

const skillIcons = {
  figma: (
    <svg viewBox="0 0 38 57" width="20" height="30" aria-hidden="true">
      <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
      <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
      <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19Z" />
      <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
      <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
    </svg>
  ),
  photoshop: adobeIcon('#001e36', '#31a8ff', 'Ps'),
  illustrator: adobeIcon('#330000', '#ff9a00', 'Ai'),
  indesign: adobeIcon('#49021f', '#ff3366', 'Id'),
  htmlcss: (
    <svg viewBox="0 0 512 512" width="28" height="28" aria-hidden="true">
      <path fill="#e34f26" d="M71 460 30 0h452l-41 460-185 52z" />
      <path fill="#ef652a" d="m256 472 149-41 35-394H256z" />
      <path fill="#ebebeb" d="M256 208h-75l-5-58h80V94H114l14 171h128zm0 147-63-17-4-45h-57l8 89 116 32z" />
      <path fill="#fff" d="M256 208v57h70l-7 74-63 17v59l116-32 16-175zm0-114v56h137l4-56z" />
    </svg>
  ),
  aftereffects: adobeIcon('#00005b', '#9999ff', 'Ae'),
  premiere: adobeIcon('#2a0a4e', '#ea77ff', 'Pr'),
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-photos">
            {about.photos.map((photo, i) => (
              <figure className={`photo-card photo-${i}`} key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <AvailableBadge />
        </div>
        <div className="about-text">
          <h2>{about.heading}</h2>
          {about.body.map((para, i) => (
            <p key={i}>{rich(para, `ab-${i}-`)}</p>
          ))}
        </div>
      </div>

      <div className="about-skills">
        <div className="about-skills-head">
          <h3>My skills</h3>
          <span className="about-skills-rule" aria-hidden="true" />
        </div>
        <div className="skill-pills">
          {about.skills.map((skill) => (
            <div key={skill.name} className="skill-pill">
              <span className="skill-pill-icon">{skillIcons[skill.icon]}</span>
              <span>{skill.name}</span>
            </div>
          ))}
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
      {sec.palette && (
        <div className="case-palette">
          {sec.palette.map((c) => (
            <div className="swatch" key={c.hex}>
              <span className="swatch-chip" style={{ background: c.hex }} />
              <strong>{c.name}</strong>
              <span className="swatch-hex">{c.hex}</span>
            </div>
          ))}
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

// One browser-chrome pane. The full-page screenshot sits inside a fixed-height
// viewport the visitor scrolls manually with the mouse wheel.
function ScreenPane({ variant, src, url, label, viewportRef }) {
  return (
    <figure className="screen-mockup">
      <div className="mockup-bar">
        <span className="mockup-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mockup-url">{url}</span>
        <span className={`mockup-tag tag-${variant}`}>
          {variant === 'before' ? 'Before' : 'After'}
        </span>
      </div>
      <div className="mockup-viewport" ref={viewportRef}>
        <img
          src={src}
          alt={`${label} — ${variant === 'after' ? 'redesign' : 'original site'}`}
          loading="lazy"
        />
      </div>
    </figure>
  )
}

// A single full-page mockup in a browser frame, scrolled inside a fixed
// viewport. Used for from-scratch projects that have no before/after.
function ShowcasePane({ showcase }) {
  return (
    <figure className="screen-mockup showcase-mockup">
      <div className="mockup-bar">
        <span className="mockup-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mockup-url">{showcase.url}</span>
      </div>
      <div className="mockup-viewport showcase-viewport">
        <img src={showcase.src} alt={showcase.label} loading="lazy" />
      </div>
    </figure>
  )
}

// Feature comparison matrix. The owner column (first) is highlighted; each
// cell is a check or a cross. Scrolls horizontally on narrow screens.
function ComparisonTable({ data }) {
  return (
    <div className="compare-table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th className="ct-corner" scope="col">
              <span className="sr-only">Feature</span>
            </th>
            {data.columns.map((col, i) => (
              <th key={col} scope="col" className={i === 0 ? 'ct-own' : ''}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <tr key={row.feature}>
              <th scope="row" className="ct-feature">
                {row.feature}
              </th>
              {row.values.map((v, i) => (
                <td key={i} className={i === 0 ? 'ct-own' : ''}>
                  <span
                    className={`ct-mark ${v ? 'ct-yes' : 'ct-no'}`}
                    role="img"
                    aria-label={v ? 'Yes' : 'No'}
                  >
                    {v ? '✓' : '✕'}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Floating-phone showcase: a soft gradient stage, a giant faded wordmark,
// and phone mockups that drift gently. Phones fade in on first scroll into
// view; the float loop is pure CSS and respects prefers-reduced-motion.
function MobileShowcase({ showcase }) {
  const stageRef = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSeen(true)
      },
      { threshold: 0.25 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <div
      ref={stageRef}
      className={`showcase-stage${seen ? ' in-view' : ''}`}
    >
      <span className="showcase-word" aria-hidden="true">
        {showcase.word}
      </span>
      {showcase.phones.map((phone, i) =>
        showcase.bezel ? (
          <span
            key={i}
            className={`showcase-phone showcase-phone-${i} device`}
          >
            <img src={phone.src} alt={phone.alt} loading="lazy" />
          </span>
        ) : (
          <img
            key={i}
            className={`showcase-phone showcase-phone-${i}`}
            src={phone.src}
            alt={phone.alt}
            loading="lazy"
          />
        )
      )}
    </div>
  )
}

// A page shown as two side-by-side panes: original site vs redesign.
// The two viewports scroll together by ratio so the same part of each page
// (hero, services, CTA) stays aligned while the visitor scrolls manually.
function ComparePair({ screen }) {
  const beforeRef = useRef(null)
  const afterRef = useRef(null)

  useEffect(() => {
    const a = beforeRef.current
    const b = afterRef.current
    if (!a || !b) return

    let syncing = false
    const link = (src, dst) => () => {
      if (syncing) return
      const srcMax = src.scrollHeight - src.clientHeight
      const dstMax = dst.scrollHeight - dst.clientHeight
      if (srcMax <= 0 || dstMax <= 0) return
      syncing = true
      dst.scrollTop = (src.scrollTop / srcMax) * dstMax
      // release on the next frame so the mirrored scroll doesn't echo back
      requestAnimationFrame(() => {
        syncing = false
      })
    }

    const onBefore = link(a, b)
    const onAfter = link(b, a)
    a.addEventListener('scroll', onBefore, { passive: true })
    b.addEventListener('scroll', onAfter, { passive: true })
    return () => {
      a.removeEventListener('scroll', onBefore)
      b.removeEventListener('scroll', onAfter)
    }
  }, [screen])

  return (
    <div className="compare">
      <div className="compare-label">{screen.label}</div>
      <div className="compare-pair">
        <ScreenPane
          variant="before"
          src={screen.before}
          url={screen.url}
          label={screen.label}
          viewportRef={beforeRef}
        />
        <ScreenPane
          variant="after"
          src={screen.after}
          url={screen.url}
          label={screen.label}
          viewportRef={afterRef}
        />
      </div>
    </div>
  )
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

        {study.screens && (
          <div className="case-sec case-sec-wide">
            <h3 className="case-sec-h">Before &amp; after</h3>
            <p className="case-sec-note">
              Original site on the left, redesign on the right — scroll either
              screen and both move together to keep the same section aligned.
            </p>
            <div className="case-compare">
              {study.screens.map((screen) => (
                <ComparePair key={screen.label} screen={screen} />
              ))}
            </div>
          </div>
        )}

        {study.showcase && (
          <div className="case-sec case-sec-wide">
            <h3 className="case-sec-h">The landing page</h3>
            <p className="case-sec-note">
              The full homepage, top to bottom. Scroll inside the frame to move
              from the hero down to the news and blog.
            </p>
            <div className="case-showcase">
              <ShowcasePane showcase={study.showcase} />
            </div>
          </div>
        )}

        {study.slideGroups &&
          study.slideGroups.map((group, g) => (
            <div className="case-sec" key={g}>
              <h3 className="case-sec-h">{group.title}</h3>
              <div className="case-slides">
                {group.shots.map((shot, i) => (
                  <figure className="case-shot" key={i}>
                    <img src={shot.src} alt={shot.label} loading="lazy" />
                    <figcaption>
                      <strong>{shot.label}</strong>
                      <span>{shot.hint}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}

        {study.comparison && (
          <div className="case-sec case-sec-wide">
            <h3 className="case-sec-h">{study.comparison.title}</h3>
            {study.comparison.note && (
              <p className="case-sec-note">{study.comparison.note}</p>
            )}
            <ComparisonTable data={study.comparison} />
          </div>
        )}

        {study.webScreens && (
          <div className="case-sec">
            <h3 className="case-sec-h">{study.webScreens.title}</h3>
            {study.webScreens.groups.map((group, g) => (
              <div className="web-group" key={g}>
                <h4 className="web-group-title">{group.title}</h4>
                <div className="case-web">
                  {group.shots.map((shot, i) => (
                    <figure className="web-shot" key={i}>
                      <div className="screen-mockup">
                        <div className="mockup-bar">
                          <span className="mockup-dots" aria-hidden="true">
                            <i />
                            <i />
                            <i />
                          </span>
                          <span className="mockup-url">
                            {study.webScreens.url}
                          </span>
                        </div>
                        <img
                          className="web-img"
                          src={shot.src}
                          alt={shot.label}
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="web-cap">
                        <strong>{shot.label}</strong>
                        <span>{shot.hint}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {study.mobileShowcase && (
          <div className="case-sec">
            <h3 className="case-sec-h">{study.mobileShowcase.title}</h3>
            {study.mobileShowcase.note && (
              <p className="case-sec-note">{study.mobileShowcase.note}</p>
            )}
            <MobileShowcase showcase={study.mobileShowcase} />
          </div>
        )}

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
