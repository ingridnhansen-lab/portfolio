// components/Header.tsx
'use client'

import { ReactNode } from 'react'

interface HeaderProps {
  variant?: 'full' | 'minimal'
  onHomeClick?: () => void
}

export function Header({ variant = 'full', onHomeClick }: HeaderProps) {
  const handleHomeClick = (e: React.MouseEvent) => {
    if (onHomeClick) {
      e.preventDefault()
      onHomeClick()
    }
  }

  return (
    <header className="site-header">
      <a 
        className="wordmark" 
        href="#home" 
        onClick={onHomeClick ? handleHomeClick : undefined}
      >
        Ingrid Hansen
      </a>
      <nav>
        {variant === 'full' ? (
          <>
            <a className="nav-active" href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </>
        ) : (
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
