import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(isFinePointer && !prefersReducedMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return
    let ringX = 0, ringY = 0, targetX = 0, targetY = 0

    const move = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${targetX}px`
        dotRef.current.style.top = `${targetY}px`
      }
    }

    let raf
    const animateRing = () => {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(animateRing)
    }

    const onHoverStart = (e) => {
      if (e.target.closest('a, button, input, textarea')) {
        ringRef.current?.style.setProperty('width', '48px')
        ringRef.current?.style.setProperty('height', '48px')
        ringRef.current?.style.setProperty('opacity', '0.6')
      }
    }
    const onHoverEnd = () => {
      ringRef.current?.style.setProperty('width', '34px')
      ringRef.current?.style.setProperty('height', '34px')
      ringRef.current?.style.setProperty('opacity', '1')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onHoverStart)
    document.addEventListener('mouseout', onHoverEnd)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onHoverStart)
      document.removeEventListener('mouseout', onHoverEnd)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
