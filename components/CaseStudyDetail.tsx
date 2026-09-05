// components/CaseStudyDetail.tsx
'use client'

import { projectsData } from './ui/projectsData'

interface CaseStudyDetailProps {
  projectId: string
  onBack: () => void
}

export function CaseStudyDetail({ projectId, onBack }: CaseStudyDetailProps) {
  const project = Object.values(projectsData).find(
    (p) => p.id === projectId
  )
  
  if (!project || !project.caseStudy) {
    return (
      <main className="case-study page-enter">
        <p>Proyecto no encontrado</p>
      </main>
    )
  }

  const { caseStudy } = project

  return (
    <main className="case-study page-enter" id="case-study-top">
      <p className="eyebrow">UX/UI CASE STUDY / {caseStudy.year}</p>
      <h1>{project.title}<br /><em>{project.subtitle}</em></h1>
      
      {/* Usamos la descripción corta */}
      <p className="case-lede">{project.description}</p>
      
      <img className="case-hero-image" src={caseStudy.heroImage} alt={project.title} />
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">01 / THE PROBLEM</p>
          <h2>
            {caseStudy.problemTitle || 'Less friction.'}<br />
            <em>{caseStudy.problemEm || 'More confidence.'}</em>
          </h2>
        </div>
        <div>
          {/* El style="whiteSpace: pre-line" es la clave para que \n funcione */}
          <p style={{ whiteSpace: 'pre-line' }}>{caseStudy.problem}</p>
          <p className="case-meta">
            ROLE · {caseStudy.role}<br />
            TEAM · {caseStudy.team}<br />
            TIMELINE · {caseStudy.timeline}
          </p>
        </div>
      </section>
      
      <section className="case-grid">
        <div>
          <p className="eyebrow">02 / THE DECISION</p>
          <h2>
            {caseStudy.decisionTitle || 'Design the'}<br />
            <em>{caseStudy.decisionEm || 'next step.'}</em>
          </h2>
        </div>
        <div>
          <p style={{ whiteSpace: 'pre-line' }}>{caseStudy.decision}</p>
        </div>
      </section>
      
      <img className="case-detail-image" src={caseStudy.heroImage} alt="Design team collaborating around a table" />
      
      <section className="case-grid case-impact">
        <div>
          <p className="eyebrow">03 / THE IMPACT</p>
          <h2>
            {caseStudy.impactTitle || 'Clarity that'}<br />
            <em>{caseStudy.impactEm || 'moves people.'}</em>
          </h2>
        </div>
        <div>
          <p style={{ whiteSpace: 'pre-line' }}>{caseStudy.impact}</p>
          <div className="project-links">
            <a className="back-link" href={caseStudy.behanceLink} target="_blank" rel="noreferrer">
              View full case study on Behance ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
