'use client'

import { useState, useEffect } from 'react'
import { projectsData } from './ui/projectsData'
import { Header } from './Header'

// ============================================================
// 1. REDES Y CONTACTO
// ============================================================
const contactLinks = [
  ['WhatsApp', 'https://wa.me/541176411571'],
  ['Telegram', 'https://t.me/ingridhansen1'],
  ['Email', 'mailto:ingridnhansen@gmail.com'],
]

// ============================================================
// 2. PALABRAS CLAVE
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
// 3. TICKER
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
// 4. CASO DE ESTUDIO
// ============================================================
function CaseStudy({ projectId, onBack }: { projectId: string; onBack: () => void }) {
  // Buscar el proyecto por su ID
  const project = Object.values(projectsData).find(p => p.id === projectId)
  
  if (!project) {
    return <div>Proyecto no encontrado</div>
  }

  const { caseStudy } = project

  return (
    <main className="case-study page-enter" id="case-study-top">
      <Header variant="minimal" onHomeClick={onBack} />
      
      <p className="eyebrow">UX/UI CASE STUDY / {caseStudy.year}</p>
      <h1>{project.title}<br /><em>{project.subtitle}</em></h1>
      <p className="case-lede">{caseStudy.problem}</p>
      <img className="case-hero-image" src={caseStudy.heroImage} alt={project.title} />
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">01 / THE PROBLEM</p>
          <h2>Less friction.<br /><em>More confidence.</em></h2>
        </div>
        <div>
          <p>{caseStudy.problem}</p>
          <p className="case-meta">ROLE · {caseStudy.role}<br />TEAM · {caseStudy.team}<br />TIMELINE · {caseStudy.timeline}</p>
        </div>
      </section>
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">02 / THE DECISION</p>
          <h2>Design the<br /><em>next step.</em></h2>
        </div>
        <div>
          <p>{caseStudy.decision}</p>
        </div>
      </section>
      
      <img className="case-detail-image" src={caseStudy.heroImage} alt={project.title} />
      
      <section className="case-grid case-impact">
        <div>
          <p className="eyebrow">03 / THE IMPACT</p>
          <h2>Clarity that<br /><em>moves people.</em></h2>
        </div>
        <div>
          <p>{caseStudy.impact}</p>
          <div className="project-links">
            <a className="back-link" href={caseStudy.behanceLink} target="_blank" rel="noreferrer">View full case study on Behance ↗</a>
          </div>
        </div>
      </section>
    </main>
  )
}

// ============================================================
// 5. COMPONENTE PRINCIPAL
// ============================================================
export function PortfolioShell() {
  const [page, setPage] = useState<'home' | 'case'>('home')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [showTop, setShowTop] = useState(false)
  const [renderKey, setRenderKey] = useState(0)
  
  // Efecto para mostrar el botón "Back to Top" al scrollear
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 100)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  
  // EFECTO PRINCIPAL: Controla la carga del home al volver
  useEffect(() => {
    if (page === 'home') {
      setRenderKey(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [page])
  
  // Efecto para forzar scroll al principio cuando se abre un caso
  useEffect(() => {
    if (page === 'case') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [page])
  
  // EFECTO PARA EL FADE-IN
  useEffect(() => {
    if (page === 'home') {
      const timer = setTimeout(() => {
        const sections = document.querySelectorAll('.fade-section')
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
            } else {
              entry.target.classList.remove('is-visible')
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
      }, 50)
      
      return () => clearTimeout(timer)
    }
  }, [page, renderKey])
  
  // Botón "Back to Top"
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
  
  // Si estamos en un caso de estudio
  if (page === 'case' && selectedProjectId) {
    console.log('Renderizando caso:', selectedProjectId)
    return (
      <>
        <CaseStudy 
          key={selectedProjectId}
          projectId={selectedProjectId} 
          onBack={() => {
            setPage('home')
            window.scrollTo({ top: 0, behavior: 'instant' })
          }} 
        />
        {backToTop}
      </>
    )
  }
  
  // ============================================================
  // TEXTOS DEL HOME
  // ============================================================
  const heroData = {
    eyebrow: 'DIGITAL PRODUCT DESIGN · UX/UI · AI · SYSTEMS',
    location: '— BUENOS AIRES, ARGENTINA / REMOTE',
    title: 'From complexity',
    titleEm: 'TO CLARITY',
    highlight: 'B2B SAAS · WEB PRODUCTS · AI · STARTUPS',
    availability: '● OPEN TO PRODUCT DESIGN ROLES & FREELANCE PROJECTS'
  }
  
  const aboutData = {
    title: "Hello, I'm",
    titleEm: 'Ingrid.',
    description: `This past year, I've been experimenting with AI to reshape how I design — from research to systems. Bootcamps, blockchain challenges, and Data Analytics have been part of the process. I'm currently focused on Framer, Figma, Claude, v0, design systems, and web design with an AI-first mindset. I approach design as a constantly evolving laboratory, always exploring how technology can connect with real human needs.`,
    linkText: 'More about me ↗',
    linkUrl: 'https://www.linkedin.com/in/ingrid-hansen-382298120'
  }
  
  const workData = {
    label: '02 / SELECTED WORK',
    title: 'Ideas that',
    titleEm: 'took shape.',
    subtitle: 'Case studies, learnings, and recent obsessions.'
  }
  
  const contactData = {
    label: '03 / CONTACT',
    title: "Let's make",
    titleEm: 'something useful.',
    subtitle: 'Pick whatever works for you. I reply fast.'
  }
  
  const footerData = {
    name: 'Ingrid Hansen',
    role: 'Product & UX Designer',
    linkedinUrl: 'https://www.linkedin.com/in/ingrid-hansen-382298120'
  }
  
  // ============================================================
  // RENDER DEL HOME
  // ============================================================
  return (
    <main key={`home-${renderKey}`}>
      <Header variant="full" />
      
      {/* HERO */}
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
      
      {/* ABOUT */}
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
            <img src={projectsData.aboutImage} alt="Ingrid Hansen holding coffee" />
          </div>
        </div>
      </section>
      
      {/* WORK */}
      <section id="work" className="work section-wrap fade-section">
        <p className="section-label">{workData.label}</p>
        <div className="section-heading">
          <h2>
            {workData.title}<br /><em>{workData.titleEm}</em>
          </h2>
          <p>{workData.subtitle}</p>
        </div>
        <div className="work-grid">
          {[projectsData.project1, projectsData.project2, projectsData.project3].map((project) => (
            <article 
              key={project.id}
              className={`work-card ${project.id === 'experta-app' ? 'work-card-featured' : ''}`} 
              role="link" 
              tabIndex={0} 
              onClick={() => {
                console.log('Abriendo caso:', project.id)
                setSelectedProjectId(project.id)
                setPage('case')
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'instant' })
                }, 10)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  console.log('Abriendo caso (teclado):', project.id)
                  setSelectedProjectId(project.id)
                  setPage('case')
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'instant' })
                  }, 10)
                }
              }}
            >
              <img src={project.image} alt={project.title} />
              <div className="work-card-body">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}<br /><em>{project.subtitle}</em></h3>
                <p>{project.description}</p>
                {project.id === 'experta-app' ? null : (
                  <a className="case-button" href="#contact">Discuss a project ↗</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* CONTACT */}
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
      
      {/* FOOTER */}
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
