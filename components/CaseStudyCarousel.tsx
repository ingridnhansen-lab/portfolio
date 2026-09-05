// components/CaseStudyCarousel.tsx
'use client'

import { projectsData } from './ui/projectsData'
import { ProjectCard } from './ProjectCard'

interface CaseStudyCarouselProps {
  currentProjectId: string
  onSelect: (projectId: string) => void
}

export function CaseStudyCarousel({ currentProjectId, onSelect }: CaseStudyCarouselProps) {
  // Obtener todos los proyectos que tienen caseStudy y no son el actual
  const otherProjects = Object.entries(projectsData)
    .filter(([key, project]) => {
      // Excluir aboutImage y el proyecto actual
      if (key === 'aboutImage') return false
      // Excluir el proyecto actual
      return project.title.toLowerCase().replace(/\s/g, '-') !== currentProjectId
    })
    .map(([key, project]) => ({ key, ...project }))

  // Si no hay otros proyectos, no mostrar nada
  if (otherProjects.length === 0) {
    return null
  }

  return (
    <section className="work section-wrap carousel-section">
      <div className="section-heading">
        <h2>
          Other<br /><em>case studies.</em>
        </h2>
        <p>Explore more of my work.</p>
      </div>
      <div className="work-grid">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.key}
            project={project}
            onClick={() => {
              const projectId = project.title.toLowerCase().replace(/\s/g, '-')
              onSelect(projectId)
            }}
          />
        ))}
      </div>
    </section>
  )
}
