// components/CaseStudyDetail.tsx
'use client'

import { projectsData } from './ui/projectsData'

interface CaseStudyDetailProps {
  projectId: string
  onBack: () => void
}

export function CaseStudyDetail({ projectId, onBack }: CaseStudyDetailProps) {
  // Buscar el proyecto por ID
  const project = Object.values(projectsData).find(
    (p) => p.action === 'case' && p.title.toLowerCase().replace(/\s/g, '-') === projectId
  )
  
  // Si no se encuentra el proyecto, mostrar mensaje de error
  if (!project || !project.caseStudy) {
    return (
      <main className="case-study page-enter">
        <button className="back-link" onClick={onBack}>← Back to portfolio</button>
        <p>Proyecto no encontrado</p>
      </main>
    )
  }

  const { caseStudy } = project

  return (
    <main className="case-study page-enter" id="case-study-top">
      <button className="back-link" onClick={onBack}>← Back to portfolio</button>
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
          <h2>Design the<br /><em>next step.</em></h2>
        </div>
        <div>
          <p>{caseStudy.decision}</p>
          <ol>
            <li>Heuristic audit and support-ticket analysis.</li>
            <li>User interviews and task mapping.</li>
            <li>Flows, prototypes, and usability testing.</li>
            <li>Accessible UI and production handoff.</li>
          </ol>
        </div>
      </section>
      
      <img className="case-detail-image" src={caseStudy.heroImage} alt="Design team collaborating around a table" />
      
      <section className="case-grid case-impact">
        <div>
          <p className="eyebrow">03 / THE IMPACT</p>
          <h2>Clarity that<br /><em>moves people.</em></h2>
        </div>
        <div>
          <p>{caseStudy.impact}</p>
          <p className="case-meta">
            OUTCOME · CLEARER TASK FLOWS<br />
            NEXT · SCALE THE DESIGN SYSTEM
          </p>
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
