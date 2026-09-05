'use client'

import { caseStudies } from './ui/caseStudiesData'
import { Header } from './Header'

interface CaseStudyPageProps {
  projectId: string
  onBack: () => void
}

// 👇 Este componente es genérico: sirve para TODOS los casos de estudio.
// Para agregar un caso nuevo no hace falta tocar este archivo — solo agregar
// un objeto nuevo en components/ui/caseStudiesData.ts
export function CaseStudyPage({ projectId, onBack }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find((c) => c.id === projectId)

  if (!caseStudy) {
    return <div>Proyecto no encontrado</div>
  }

  return (
    <main className="case-study page-enter" id="case-study-top">
      <Header variant="minimal" onHomeClick={onBack} />

      <p className="eyebrow">{caseStudy.category} / {caseStudy.year}</p>
      <h1>{caseStudy.title}<br /><em>{caseStudy.titleEm}</em></h1>
      <p className="case-lede">{caseStudy.lede}</p>
      <img className="case-hero-image" src={caseStudy.heroImage} alt={caseStudy.heroImageAlt} />

      {caseStudy.sections.map((section, index) => (
        <div key={`${caseStudy.id}-section-${index}`}>
          <section className={`case-grid${section.highlight ? ' case-impact' : ''}`}>
            <div>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>
                {section.heading}
                {section.headingEm && (
                  <>
                    <br />
                    <em>{section.headingEm}</em>
                  </>
                )}
              </h2>
            </div>
            <div>
              {section.body && <p>{section.body}</p>}
              {section.bullets && (
                <ul className="case-list">
                  {section.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
              {index === 0 && (
                <p className="case-meta">
                  ROLE · {caseStudy.role}
                  <br />
                  TEAM · {caseStudy.team}
                  <br />
                  TIMELINE · {caseStudy.timeline}
                </p>
              )}
              {section.highlight && caseStudy.behanceLink && (
                <div className="project-links">
                  <a className="back-link" href={caseStudy.behanceLink} target="_blank" rel="noreferrer">
                    View full case study on Behance ↗
                  </a>
                </div>
              )}
            </div>
          </section>
          {section.image && (
            <img className="case-detail-image" src={section.image.src} alt={section.image.alt} />
          )}
        </div>
      ))}
    </main>
  )
}
