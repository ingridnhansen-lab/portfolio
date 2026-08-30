'use client'

import { useEffect, useState } from 'react'

const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20jun%202026%2C%2020_24_33-2J198kGWZfIDkoqCfS3yxwXGKzsONL.png'
const collage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2013-4RCyDrsgiNnQc5mDQGCDvs13sxADYG.png'
const pexelsWorkspace = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400'
const contactLinks = [
  ['WhatsApp', 'https://wa.me/541176411571'],
  ['Telegram', 'https://t.me/ingridhansen1'],
  ['Email', 'mailto:ingridnhansen@gmail.com'],
]
const keywords = ['UX RESEARCH', 'UI DESIGN', 'PRODUCT STRATEGY', 'CONTENT CREATION', 'DIGITAL EXPERIENCES', 'USER-CENTERED DESIGN', 'PRODUCT DESIGN', 'ACCESSIBILITY']

function Ticker() {
  const items = [...keywords, ...keywords]
  return <div className="ticker" aria-label="UX and product design specialties"><div>{items.map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div></div>
}

function CaseStudy({ onBack }: { onBack: () => void }) {
  return <main className="case-study page-enter" id="case-study-top">
    <button className="back-link" onClick={onBack}>← Back to portfolio</button>
    <p className="eyebrow">UX/UI CASE STUDY / 2023</p>
    <h1>Experta App<br /><em>Redesign.</em></h1>
    <p className="case-lede">Redesigning a mobile insurance experience to make it simpler, faster, and more accessible.</p>
    <img className="case-hero-image" src={collage} alt="Experta App redesign presentation" />
    <section className="case-grid"><div><p className="eyebrow">01 / THE PROBLEM</p><h2>Less friction.<br /><em>More confidence.</em></h2></div><div><p>Experta needed to turn a complex insurance ecosystem into a clear mobile experience. Customers struggled to find coverage details, request assistance, and understand what happened next.</p><p className="case-meta">ROLE · PRODUCT DESIGN<br />TEAM · PRODUCT + ENGINEERING<br />TIMELINE · 8 WEEKS</p></div></section>
    <section className="case-grid"><div><p className="eyebrow">02 / THE DECISION</p><h2>Design the<br /><em>next step.</em></h2></div><div><p>We prioritized the moments that mattered most: a task-based home, plain-language coverage, and a guided assistance flow. Research and moderated testing shaped every iteration.</p><ol><li>Heuristic audit and support-ticket analysis.</li><li>User interviews and task mapping.</li><li>Flows, prototypes, and usability testing.</li><li>Accessible UI and production handoff.</li></ol></div></section>
    <img className="case-detail-image" src={pexelsWorkspace} alt="Design team collaborating around a table" />
    <section className="case-grid case-impact"><div><p className="eyebrow">03 / THE IMPACT</p><h2>Clarity that<br /><em>moves people.</em></h2></div><div><p>The final direction gave users a more confident path from question to resolution, while giving the team a scalable foundation for future insurance journeys.</p><p className="case-meta">OUTCOME · CLEARER TASK FLOWS<br />NEXT · SCALE THE DESIGN SYSTEM</p><div className="project-links"><a className="back-link" href="https://www.behance.net/gallery/250252187/From-Chaos-to-Clarity-Reverse-Engineering-an-App-2023" target="_blank" rel="noreferrer">View full case study on Behance ↗</a></div></div></section>
  </main>
}

export function PortfolioShell() {
  const [page, setPage] = useState<'home' | 'case'>('home')
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    if (page === 'case') window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const backToTop = <button className={`back-to-top${showTop ? ' is-visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg></button>
  if (page === 'case') return <><CaseStudy onBack={() => setPage('home')} />{backToTop}</>
  return <main>
    <header className="site-header"><a className="wordmark" href="https://www.linkedin.com/in/ingrid-hansen-382298120" target="_blank" rel="noreferrer">Ingrid Hansen</a><nav><a className="nav-active" href="#home">Home</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>
    <section id="home" className="hero section-wrap"><div className="hero-copy"><p className="eyebrow"> DIGITAL PRODUCT DESIGN · UX/UI · AI · SYSTEMS <span>— BUENOS AIRES, ARGENTINA / REMOTE</span></p><h1>From complexity<br /><em>TO CLARITY</em></h1><p className="hero-intro"></p><p className="highlight">B2B SAAS · WEB PRODUCTS · AI · STARTUPS</p><p className="available"> ● OPEN TO PRODUCT DESIGN ROLES & FREELANCE PROJECTS</p><div className="hero-keywords"></div></div></section>
    <Ticker />
    <section id="about" className="about section-wrap"><p className="section-label">01 / ABOUT</p><div className="about-grid"><div><h2>Hello, I&apos;m<br /><em>Ingrid.</em></h2><p className="mono-copy">This past year, I've been experimenting with AI to reshape how I design — from research to systems. Bootcamps, blockchain challenges, and Data Analytics have been part of the process. I'm currently focused on Framer, Figma make, Claude design and v0, design systems, and web design with an AI-first mindset. I approach design as a constantly evolving laboratory. Always exploring how technology can connect with real human needs.</p><a className="back-link about-link" href="https://www.linkedin.com/in/ingrid-hansen-382298120" target="_blank" rel="noreferrer">More about me ↗</a></div><div className="about-card"><img src={portrait} alt="Ingrid Hansen holding coffee" /></div></div></section>
    <section id="work" className="work section-wrap"><p className="section-label">02 / SELECTED WORK</p><div className="section-heading"><h2>Ideas that<br /><em>took shape.</em></h2><p>Case studies, learnings, and recent obsessions.</p></div><div className="work-grid"><article className="work-card work-card-featured" role="link" tabIndex={0} onClick={() => setPage('case')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setPage('case') } }}><img src={collage} alt="Experta App redesign screens" /><div className="work-card-body"><p className="project-type">Featured case study</p><h3>Experta App<br /><em>Redesign</em></h3><p>From complexity to confidence: a clearer insurance experience for real people.</p></div></article><article className="work-card"><img src={pexelsWorkspace} alt="Product design team workshop" /><div className="work-card-body"><p className="project-type">Product design</p><h3>Systems that<br /><em>connect.</em></h3><p>Turning scattered needs into a shared, usable direction.</p><a className="case-button" href="#contact">Discuss a project ↗</a></div></article><article className="work-card"><img src={portrait} alt="Editorial portrait of Ingrid Hansen" /><div className="work-card-body"><p className="project-type">UX research</p><h3>Closer to<br /><em>people.</em></h3><p>Research-led decisions for experiences that feel clear.</p><a className="case-button" href="#about">Read my approach ↗</a></div></article></div></section>
    <section id="contact" className="contact-section section-wrap"><p className="section-label">03 / CONTACT</p><div className="contact-heading"><h2>Let&apos;s make<br /><em>something useful.</em></h2><p>Pick whatever works for you. I reply fast.</p></div><div className="contact-links-grid">{contactLinks.map(([label, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><span>{label}</span><b>↗</b></a>)}</div></section>
    <footer><strong>Ingrid Hansen</strong><span>Product & UX Designer</span><a href="https://www.linkedin.com/in/ingrid-hansen-382298120" target="_blank" rel="noreferrer">LinkedIn ↗</a><small>© 2026</small></footer>
    {backToTop}
  </main>
}
