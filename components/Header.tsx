// components/Header.tsx
'use client'

import { ReactNode } from 'react'

interface HeaderProps {
  variant?: 'full' | 'minimal'
  onHomeClick?: () => void // Para que el botón Home funcione en los casos
}

export function Header({ variant = 'full', onHomeClick }: HeaderProps) {
  const handleHomeClick = (e: React.MouseEvent) => {
    if (onHomeClick) {
      e.preventDefault()
      onHomeClick()
    }
    // Si no hay onHomeClick, el link funciona como href="#home" normal
  }

  return (
    <header className="site-header">
      {/* Si hay onHomeClick, el logo también vuelve al home */}
      <a 
        className="wordmark" 
        href="#home" 
        onClick={onHomeClick ? handleHomeClick : undefined}
      >
        Ingrid Hansen
      </a>
      <nav>
        {variant === 'full' ? (
          // Menú completo (para el Home)
          <>
            <a className="nav-active" href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
          // Menú minimalista (para los casos de estudio) - solo Home
          <a 
            className="nav-active" 
            href="#home" 
            onClick={handleHomeClick}
          >
            ← Home
          </a>
        )}
      </nav>
    </header>
  )
}
