import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const el = cursorRef.current
    const move = e => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }

    const addHover   = () => el.classList.add('hovered')
    const removeHover= () => el.classList.remove('hovered')

    window.addEventListener('mousemove', move)

    const targets = document.querySelectorAll('a, button, [data-cursor]')
    targets.forEach(t => {
      t.addEventListener('mouseenter', addHover)
      t.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      targets.forEach(t => {
        t.removeEventListener('mouseenter', addHover)
        t.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return <div id="cursor" ref={cursorRef} />
}

