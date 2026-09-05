// components/portfolio-shell.tsx
import { CaseStudyRenderer } from './CaseStudyRenderer' // 👈 IMPORTAR

// ...

if (page === 'case' && selectedProjectId) {
  return (
    <>
      <CaseStudyRenderer 
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
