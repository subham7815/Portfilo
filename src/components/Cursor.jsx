import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const el = cursorRef.current
    let x = 0, y = 0, raf = 0

    const paint = () => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = 0
    }
    const move = e => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(paint)
    }
    // Event delegation: works for links on every route without re-binding
    const over = e => { el.classList.toggle('hovered', !!e.target.closest('a, button, [data-cursor]')) }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div id="cursor" ref={cursorRef} />
}
