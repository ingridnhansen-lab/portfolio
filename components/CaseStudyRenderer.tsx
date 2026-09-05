'use client'

import { Case1 } from './cases/case1'
import { Case2 } from './cases/case2'
import { Case3 } from './cases/case3'

interface CaseStudyRendererProps {
  projectId: string
  onBack: () => void
}

export function CaseStudyRenderer({ projectId, onBack }: CaseStudyRendererProps) {
  switch (projectId) {
    case 'project1':
      return <Case1 onBack={onBack} />
    case 'project2':
      return <Case2 onBack={onBack} />
    case 'project3':
      return <Case3 onBack={onBack} />
    default:
      return <div>Proyecto no encontrado</div>
  }
}
