'use client'

import { useEffect, useState, useRef } from 'react'

// ============================================================
// 1. IMÁGENES Y ENLACES (editá acá las URLs)
// ============================================================
const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20jun%202026%2C%2020_24_33-2J198kGWZfIDkoqCfS3yxwXGKzsONL.png'
const collage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2013-4RCyDrsgiNnQc5mDQGCDvs13sxADYG.png'
const pexelsWorkspace = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400'

// ============================================================
// 2. REDES Y CONTACTO (editá acá los enlaces)
// ============================================================
const contactLinks = [
  ['WhatsApp', 'https://wa.me/541176411571'],
  ['Telegram', 'https://t.me/ingridhansen1'],
  ['Email', 'mailto:ingridnhansen@gmail.com'],
]

// ============================================================
// 3. PALABRAS CLAVE (editá acá el ticker)
// ============================================================
const keywords = [
  'UX RESEARCH',
  'UI DESIGN',
  'PRODUCT STRATEGY',
  'CONTENT CREATION',
  'DIGITAL EXPERIENCES',
  'USER-CENTERED DESIGN',
  'PRODUCT DESIGN',
  'ACCESSIBILITY'
]

// ============================================================
// 4. COMPONENTE TICKER (no tocar)
// ============================================================
function Ticker() {
  const items = [...keywords, ...keywords]
  return (
    <div className="ticker" aria-label="UX and product design specialties">
      <div>
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}<b>✦</b>
          </span>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// 5. CASO DE ESTUDIO (componente interno - no tocar)
// ============================================================
function CaseStudy({ onBack }: { onBack: () => void }) {
  return (
    <main className="case-study page-enter" id="case-study-top">
      <button className="back-link" onClick={onBack}>← Back to portfolio</button>
      <p className="eyebrow">UX/UI CASE STUDY / 2023</p>
      <h1>Experta App<br /><em>Redesign.</em></h1>
      <p className="case-lede">Redesigning a mobile insurance experience to make it simpler, faster, and more accessible.</p>
      <img className="case-hero-image" src={collage} alt="Experta App redesign presentation" />
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">01 / THE PROBLEM</p>
          <h2>Less friction.<br /><em>More confidence.</em></h2>
        </div>
        <div>
          <p>Experta needed to turn a complex insurance ecosystem into a clear mobile experience. Customers struggled to find coverage details, request assistance, and understand what happened next.</p>
          <p className="case-meta">ROLE · PRODUCT DESIGN<br />TEAM · PRODUCT + ENGINEERING<br />TIMELINE · 8 WEEKS</p>
        </div>
      </section>
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">02 / THE DECISION</p>
          <h2>Design the<br /><em>next step.</em></h2>
        </div>
        <div>
          <p>We prioritized the moments that mattered most: a task-based home, plain-language coverage, and a guided assistance flow. Research and moderated testing shaped every iteration.</p>
          <ol>
            <li>Heuristic audit and support-ticket analysis.</li>
            <li>User interviews and task mapping.</li>
            <li>Flows, prototypes, and usability testing.</li>
            <li>Accessible UI and production handoff.</li>
          </ol>
        </div>
      </section>
      
      <img className="case-detail-image" src={pexelsWorkspace} alt="Design team collaborating around a table" />
      
      <section className="case-grid case-impact">
        <div>
          <p className="eyebrow">03 / THE IMPACT</p>
          <h2>Clarity that<br /><em>moves people.</em></h2>
        </div>
        <div>
          <p>The final direction gave users a more confident path from question to resolution, while giving the team a scalable foundation for future insurance journeys.</p>
          <p className="case-meta">OUTCOME · CLEARER TASK FLOWS<br />NEXT · SCALE THE DESIGN SYSTEM</p>
          <div className="project-links">
            <a className="back-link" href="https://www.behance.net/gallery/250252187/From-Chaos-to-Clarity-Reverse-Engineering-an-App-2023" target="_blank" rel="noreferrer">View full case study on Behance ↗</a>
          </div>
        </div>
      </section>
    </main>
  )
}

// ============================================================
// 6. COMPONENTE PRINCIPAL (editá acá los textos de la landing)
// ============================================================
export function PortfolioShell() {
  const [page, setPage] = useState<'home' | 'case'>('home')
  const [showTop, setShowTop] = useState(false)
  
  // 👇 NUEVO: Intersection Observer para fade-in al scroll
    useEffect(() => {
  const sections = document.querySelectorAll('.fade-section')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      } else {
        entry.target.classList.remove('is-visible') // 👈 ESTA LÍNEA ES LA CLAVE
      }
    })
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  })
  
  sections.forEach(section => observer.observe(section))
  
  return () => {
    sections.forEach(section => observer.unobserve(section))
  }
}, [])
  const backToTop = (
    <button 
      className={`back-to-top${showTop ? ' is-visible' : ''}`} 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  )
  
  if (page === 'case') return <><CaseStudy onBack={() => setPage('home')} />{backToTop}</>
  
  // ============================================================
  // 6a. TEXTO DEL HERO (editá acá)
  // ============================================================
  const heroData = {
    eyebrow: 'DIGITAL PRODUCT DESIGN · UX/UI · AI · SYSTEMS',
    location: '— BUENOS AIRES, ARGENTINA / REMOTE',
    title: 'From complexity',
    titleEm: 'TO CLARITY',
    highlight: 'B2B SAAS · WEB PRODUCTS · AI · STARTUPS',
    availability: '● OPEN TO PRODUCT DESIGN ROLES & FREELANCE PROJECTS'
  }
  
  // ============================================================
  // 6b. TEXTO DEL ABOUT (editá acá)
  // ============================================================
  const aboutData = {
    title: "Hello, I'm",
    titleEm: 'Ingrid.',
    description: `This past year, I've been experimenting with AI to reshape how I design — from research to systems. Bootcamps, blockchain challenges, and Data Analytics have been part of the process. I'm currently focused on Framer, Figma, Claude, v0, design systems, and web design with an AI-first mindset. I approach design as a constantly evolving laboratory, always exploring how technology can connect with real human needs.`,
    linkText: 'More about me ↗',
    linkUrl: 'https://www.linkedin.com/in/ingrid-hansen-382298120'
  }
  
  // ============================================================
  // 6c. TEXTO DEL WORK (editá acá)
  // ============================================================
  const workData = {
    label: '02 / SELECTED WORK',
    title: 'Ideas that',
    titleEm: 'took shape.',
    subtitle: 'Case studies, learnings, and recent obsessions.'
  }
  
  // ============================================================
  // 6d. TEXTO DEL CONTACTO (editá acá)
  // ============================================================
  const contactData = {
    label: '03 / CONTACT',
    title: "Let's make",
    titleEm: 'something useful.',
    subtitle: 'Pick whatever works for you. I reply fast.'
  }
  
  // ============================================================
  // 6e. FOOTER (editá acá)
  // ============================================================
  const footerData = {
    name: 'Ingrid Hansen',
    role: 'Product & UX Designer',
    linkedinUrl: 'https://www.linkedin.com/in/ingrid-hansen-382298120'
  }
  
  // ============================================================
  // 7. RENDER (no tocar)
  // ============================================================
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href={footerData.linkedinUrl} target="_blank" rel="noreferrer">
          {footerData.name}
        </a>
        <nav>
          <a className="nav-active" href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      {/* ===== HERO (sin animación) ===== */}
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            {heroData.eyebrow} <span>{heroData.location}</span>
          </p>
          <h1>
            {heroData.title}<br /><em>{heroData.titleEm}</em>
          </h1>
          <p className="hero-intro"></p>
          <p className="highlight">{heroData.highlight}</p>
          <p className="available">{heroData.availability}</p>
          <div className="hero-keywords"></div>
        </div>
      </section>
      
      <Ticker />
      
      {/* ===== ABOUT (con fade al hacer scroll) ===== */}
      <section id="about" className="about section-wrap fade-section">
        <p className="section-label">01 / ABOUT</p>
        <div className="about-grid">
          <div>
            <h2>
              {aboutData.title}<br /><em>{aboutData.titleEm}</em>
            </h2>
            <p className="mono-copy">{aboutData.description}</p>
            <a className="back-link about-link" href={aboutData.linkUrl} target="_blank" rel="noreferrer">
              {aboutData.linkText}
            </a>
          </div>
          <div className="about-card">
            <img src={portrait} alt="Ingrid Hansen holding coffee" />
          </div>
        </div>
      </section>
      
      {/* ===== WORK (con fade al hacer scroll) ===== */}
      <section id="work" className="work section-wrap fade-section">
        <p className="section-label">{workData.label}</p>
        <div className="section-heading">
          <h2>
            {workData.title}<br /><em>{workData.titleEm}</em>
          </h2>
          <p>{workData.subtitle}</p>
        </div>
        <div className="work-grid">
          <article className="work-card work-card-featured" role="link" tabIndex={0} onClick={() => setPage('case')} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setPage('case') } }}>
            <img src={collage} alt="Experta App redesign screens" />
            <div className="work-card-body">
              <p className="project-type">Featured case study</p>
              <h3>Experta App<br /><em>Redesign</em></h3>
              <p>From complexity to confidence: a clearer insurance experience for real people.</p>
            </div>
          </article>
          <article className="work-card">
            <img src={pexelsWorkspace} alt="Product design team workshop" />
            <div className="work-card-body">
              <p className="project-type">Product design</p>
              <h3>Systems that<br /><em>connect.</em></h3>
              <p>Turning scattered needs into a shared, usable direction.</p>
              <a className="case-button" href="#contact">Discuss a project ↗</a>
            </div>
          </article>
          <article className="work-card">
            <img src={portrait} alt="Editorial portrait of Ingrid Hansen" />
            <div className="work-card-body">
              <p className="project-type">UX research</p>
              <h3>Closer to<br /><em>people.</em></h3>
              <p>Research-led decisions for experiences that feel clear.</p>
              <a className="case-button" href="#about">Read my approach ↗</a>
            </div>
          </article>
        </div>
      </section>
      
      {/* ===== CONTACT (con fade al hacer scroll) ===== */}
      <section id="contact" className="contact-section section-wrap fade-section">
        <p className="section-label">{contactData.label}</p>
        <div className="contact-heading">
          <h2>
            {contactData.title}<br /><em>{contactData.titleEm}</em>
          </h2>
          <p>{contactData.subtitle}</p>
        </div>
        <div className="contact-links-grid">
          {contactLinks.map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
              <span>{label}</span>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>
      
      {/* ===== FOOTER ===== */}
      <footer>
        <strong>{footerData.name}</strong>
        <span>{footerData.role}</span>
        <a href={footerData.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <small>© 2026</small>
      </footer>
      
      {backToTop}
    </main>
  )
}
