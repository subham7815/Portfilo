import { useEffect, useRef } from 'react'
import './Cursor.css'

const COLORS = ['#ffd60a', '#ffffff', '#ff6f8e', '#6ee7ff', '#8ef0b5']
const MAX = 160

// 4-point sparkle path centred on 0,0
function sparkle(ctx, r) {
  ctx.beginPath()
  ctx.moveTo(0, -r)
  ctx.quadraticCurveTo(r * 0.18, -r * 0.18, r, 0)
  ctx.quadraticCurveTo(r * 0.18, r * 0.18, 0, r)
  ctx.quadraticCurveTo(-r * 0.18, r * 0.18, -r, 0)
  ctx.quadraticCurveTo(-r * 0.18, -r * 0.18, 0, -r)
  ctx.closePath()
  ctx.fill()
}

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dot = dotRef.current, ring = ringRef.current, canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    let x = -100, y = -100, rx = -100, ry = -100, lx = -100, ly = -100, raf = 0
    const stars = []

    const spawn = (px, py, burst) => {
      const n = burst ? 16 : 1 + (Math.random() < 0.5 ? 1 : 0)
      for (let i = 0; i < n && stars.length < MAX; i++) {
        const a = burst ? (Math.PI * 2 * i) / n + Math.random() * 0.4 : Math.random() * Math.PI * 2
        const sp = burst ? 2.5 + Math.random() * 3.5 : 0.4 + Math.random() * 1.4
        stars.push({
          x: px, y: py,
          vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - (burst ? 1 : 0.3),
          r: burst ? 6 + Math.random() * 8 : 3 + Math.random() * 7,
          rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.2,
          life: 1, decay: 0.014 + Math.random() * 0.016,
          c: COLORS[(Math.random() * COLORS.length) | 0],
        })
      }
    }

    const tick = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i]
        s.x += s.vx; s.y += s.vy; s.vy += 0.045; s.vx *= 0.985
        s.rot += s.vr; s.life -= s.decay
        if (s.life <= 0) { stars.splice(i, 1); continue }
        ctx.save()
        ctx.translate(s.x, s.y); ctx.rotate(s.rot)
        ctx.globalAlpha = Math.max(s.life, 0)
        ctx.fillStyle = s.c
        ctx.shadowColor = s.c; ctx.shadowBlur = 8
        sparkle(ctx, s.r * (0.5 + s.life * 0.5))
        ctx.restore()
      }
      const moving = Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1
      raf = (stars.length || moving) ? requestAnimationFrame(tick) : 0
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick) }

    const move = e => {
      x = e.clientX; y = e.clientY
      if (!reduce) {
        const dist = Math.hypot(x - lx, y - ly)
        if (dist > 14) { spawn(x, y, false); lx = x; ly = y }
      }
      kick()
    }
    const down = e => {
      ring.classList.add('pressed')
      if (!reduce) spawn(e.clientX, e.clientY, true)
      kick()
    }
    const up = () => ring.classList.remove('pressed')
    // Event delegation: works for links on every route without re-binding
    const over = e => {
      const h = !!e.target.closest('a, button, [data-cursor]')
      dot.classList.toggle('hovered', h); ring.classList.toggle('hovered', h)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', down, { passive: true })
    window.addEventListener('mouseup', up, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('resize', resize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <canvas id="cursor-stars" ref={canvasRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor" ref={dotRef} />
    </>
  )
}
