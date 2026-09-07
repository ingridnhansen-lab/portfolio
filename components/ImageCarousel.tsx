'use client'

import { useEffect, useRef, useState } from 'react'

export interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  className?: string
}

// Carrusel táctil (swipe) + puntos, con autoplay que se pausa al interactuar.
// Pensado para hasta 3 imágenes. Si solo hay 1, se muestra directo sin controles.
export function ImageCarousel({ images, className = '' }: ImageCarouselProps) {
  const total = images.length
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)

  useEffect(() => {
    if (total <= 1 || isPaused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 5000)
    return () => clearInterval(timer)
  }, [total, isPaused])

  if (total === 0) return null

  if (total === 1) {
    return <img className={`case-carousel-image case-carousel-single ${className}`} src={images[0].src} alt={images[0].alt} />
  }

  const goTo = (i: number) => setIndex(((i % total) + total) % total)

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX
    setIsDragging(true)
    setIsPaused(true)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return
    const width = containerRef.current.offsetWidth
    const deltaX = e.clientX - dragStartX.current
    setDragOffset((deltaX / width) * 100)
  }

  const finishDrag = () => {
    if (!isDragging) return
    const threshold = 15 // % del ancho del carrusel
    if (dragOffset > threshold) {
      goTo(index - 1)
    } else if (dragOffset < -threshold) {
      goTo(index + 1)
    }
    setIsDragging(false)
    setDragOffset(0)
    setTimeout(() => setIsPaused(false), 4000)
  }

  return (
    <div
      className={`case-carousel ${className}`}
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerLeave={finishDrag}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => !isDragging && setIsPaused(false)}
    >
      <div
        className={`case-carousel-track${isDragging ? ' is-dragging' : ''}`}
        style={{ transform: `translateX(calc(-${index * 100}% + ${dragOffset}%))` }}
      >
        {images.map((img, i) => (
          <img key={i} className="case-carousel-image" src={img.src} alt={img.alt} draggable={false} />
        ))}
      </div>
      <div className="case-carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`case-carousel-dot${i === index ? ' is-active' : ''}`}
            aria-label={`Ver imagen ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
