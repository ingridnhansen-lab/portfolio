// components/ProjectCard.tsx
'use client'

interface ProjectCardProps {
  project: {
    image: string
    type: string
    title: string
    subtitle: string
    description: string
    action: string
  }
  onClick?: () => void
  isFeatured?: boolean
}

export function ProjectCard({ project, onClick, isFeatured = false }: ProjectCardProps) {
  const cardClasses = `work-card ${isFeatured ? 'work-card-featured' : ''}`
  
  return (
    <article 
      className={cardClasses}
      role={onClick ? 'link' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick()
        }
      } : undefined}
    >
      <img src={project.image} alt={project.title} />
      <div className="work-card-body">
        <p className="project-type">{project.type}</p>
        <h3>
          {project.title}<br /><em>{project.subtitle}</em>
        </h3>
        <p>{project.description}</p>
      </div>
    </article>
  )
}
