// components/Header.tsx
'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/">
        Ingrid Hansen
      </a>
      <nav>
        <a className="nav-active" href="/#home">Home</a>
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  )
}
