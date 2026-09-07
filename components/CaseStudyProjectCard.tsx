'use client'

import { Database, Wrench, Calendar, Users } from 'lucide-react'
import type { CaseStudyProjectCard as CaseStudyProjectCardType, CaseStudyIcon } from './ui/caseStudiesData'
import { ImageCarousel } from './ImageCarousel'

const iconMap: Record<CaseStudyIcon, typeof Database> = {
  database: Database,
  tools: Wrench,
  calendar: Calendar,
  team: Users,
}

interface CaseStudyProjectCardProps {
  card: CaseStudyProjectCardType
}

// Tarjeta blanca con el resumen del producto. Se puede usar más de una vez
// en la misma página (ver "showProjectCardAfter" en caseStudiesData.ts).
export function CaseStudyProjectCard({ card }: CaseStudyProjectCardProps) {
  return (
    <div className="case-project-card fade-section">
      <div className="case-project-card-info">
        {card.logo && <img className="case-project-card-logo" src={card.logo.src} alt={card.logo.alt} />}
        <h3>{card.title}</h3>
        <p className="case-project-card-description">{card.description}</p>
        <div className="case-project-card-groups">
          {card.groups.map((group, i) => {
            const Icon = iconMap[group.icon]
            return (
              <div key={i} className="case-project-card-group">
                <Icon size={18} aria-hidden="true" />
                <div>
                  <p className="case-project-card-group-label">{group.label}</p>
                  <ul>
                    {group.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="case-project-card-images">
        <ImageCarousel images={card.images} />
      </div>
    </div>
  )
}
