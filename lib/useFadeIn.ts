'use client'

import { useEffect } from 'react'

// Mismo efecto de "aparición al scrollear" que ya usa el Home (clase .fade-section).
// Se puede reusar en cualquier página pasándole las dependencias que hacen
// que la lista de secciones cambie (ej: el id del caso de estudio).
export function useFadeIn(deps: unknown[] = []) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.fade-section')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
            } else {
              entry.target.classList.remove('is-visible')
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      )

      sections.forEach((section) => observer.observe(section))

      return () => {
        sections.forEach((section) => observer.unobserve(section))
      }
    }, 50)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
