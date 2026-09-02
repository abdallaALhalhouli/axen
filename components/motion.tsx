'use client'

import { useEffect, useRef, useState } from 'react'

/** True once the element has been scrolled into view. Never flips back. */
export function useInView<T extends HTMLElement>(rootMargin = '0px 0px -20px 0px') {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || seen) return

    // Content must never depend on the observer to become visible. If
    // IntersectionObserver is missing, throttled, or never fires (some
    // embedded and offscreen renderers), the element reveals anyway.
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }

    // Already on screen or near viewport at mount — reveal immediately.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 150) {
      setSeen(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )
    io.observe(el)

    // Last resort: reveal regardless rather than leave a blank section.
    const failsafe = setTimeout(() => setSeen(true), 1200)

    return () => {
      io.disconnect()
      clearTimeout(failsafe)
    }
  }, [seen, rootMargin])

  return [ref, seen] as const
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Section reveal. Eight pixels and a fade — enough to feel considered, short
 * enough that nobody waits for it. The forty-pixel slide every template ships
 * is what makes a page feel generated.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const [ref, seen] = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${seen ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
