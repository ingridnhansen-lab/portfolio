'use client'

import { useState, useEffect } from 'react'
import { projectsData } from './ui/projectsData'
import { Header } from './Header'
import { ProjectCard } from './ProjectCard'
import { CaseStudyDetail } from './CaseStudyDetail'
import { CaseStudyCarousel } from './CaseStudyCarousel'

// ============================================================
// 1. REDES Y CONTACTO
// ============================================================
const contactLinks = [
  ['WhatsApp', 'https://wa.me/541176411571'],
  ['Telegram', 'https://t.me/ingridhansen1'],
  ['Email', 'mailto:ingridnhansen@gmail.com'],
]

// ============================================================
// 2. PALABRAS CLAVE (ticker)
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
// 3. COMPONENTE TICKER
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
// 4. COMPONENTE PRINCIPAL
// ============================================================
export function PortfolioShell() {
  const [page, setPage] = useState<'home' | 'case'>('home')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [showTop, setShowTop] = useState(false)
  const [renderKey, setRenderKey] = useState(0)

  // Efecto para mostrar el botón "Back to Top"
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 100)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ============================================================
  // EFECTO PRINCIPAL: Controla la carga del home al volver
  // ============================================================
  useEffect(() => {
    if (page === 'home') {
      // 1. Forzar re-render
      setRenderKey(prev => prev + 1)
      // 2. Subir el scroll
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [page])
// ==============================================================================
 // Efecto para forzar scroll al principio cuando se abre un caso de estudio
  // ============================================================================
useEffect(() => {
  if (page === 'case') {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}, [page])

  // ============================================================
  // EFECTO PARA EL FADE-IN (se ejecuta DESPUÉS de renderizar)
  // ============================================================
  useEffect(() => {
    if (page === 'home') {
      // Delay para asegurar que el DOM esté listo
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
      }, 50) // 50ms de delay
      
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

  // ============================================================
  // MANEJADORES DE NAVEGACIÓN
  // ============================================================
  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId)
    setPage('case')
  }

  const handleBackToHome = () => {
    setPage('home')
    setSelectedProjectId(null)
  }

  const handleCarouselSelect = (projectId: string) => {
    setSelectedProjectId(projectId)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 10)
  }

  // ============================================================
  // RENDER: CASO DE ESTUDIO
  // ============================================================
  if (page === 'case' && selectedProjectId) {
    return (
      <>
        <Header />
        <CaseStudyDetail 
          projectId={selectedProjectId} 
          onBack={handleBackToHome} 
        />
        <CaseStudyCarousel 
          currentProjectId={selectedProjectId} 
          onSelect={handleCarouselSelect} 
        />
        {backToTop}
      </>
    )
  }

  // ============================================================
  // RENDER: HOME
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

  // Obtener los proyectos (excluyendo aboutPhoto)
  const projects = Object.entries(projectsData)
  .filter(([key, value]) => {
    // Solo incluir claves que empiecen con 'project' y tengan title
    return key.startsWith('project') && value && value.title
  })
  .map(([key, project]) => ({ key, ...project }))

  return (
    <main key={`home-${renderKey}`}>
      <Header />
      
      {/* ===== HERO ===== */}
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
      
      {/* ===== ABOUT ===== */}
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
            <img src={projectsData.aboutPhoto} alt="Ingrid Hansen holding coffee" />
          </div>
        </div>
      </section>
      
      {/* ===== WORK ===== */}
      <section id="work" className="work section-wrap fade-section">
        <p className="section-label">{workData.label}</p>
        <div className="section-heading">
          <h2>
            {workData.title}<br /><em>{workData.titleEm}</em>
          </h2>
          <p>{workData.subtitle}</p>
        </div>
        <div className="work-grid">
          {projects.map((project, index) => {
            const projectId = project.title.toLowerCase().replace(/\s/g, '-')
            const isFeatured = index === 0
            
            return (
              <ProjectCard
                key={project.key}
                project={project}
                isFeatured={isFeatured}
                onClick={() => handleProjectClick(projectId)}
              />
            )
          })}
        </div>
      </section>
      
      {/* ===== CONTACT ===== */}
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
