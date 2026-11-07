/* Decorative hand-drawn style SVG doodles (all aria-hidden, static, no filters). */

export function Starburst({ className = '', color = 'var(--yellow)' }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <polygon fill={color} points="50,0 57,37 90,12 63,43 100,50 63,57 88,90 57,63 50,100 43,63 12,88 37,57 0,50 37,43 10,12 43,37" />
    </svg>
  )
}

export function Sparkle({ className = '', color = 'var(--yellow)' }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <path fill={color} d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
    </svg>
  )
}

const SCRIBBLES = {
  zigzag: 'M2 60 L22 10 L40 90 L58 5 L78 88 L98 30 L118 70',
  loop: 'M5 80 C 40 10, 90 10, 70 55 C 55 90, 20 60, 60 40 C 100 20, 130 60, 150 30',
  crown: 'M5 70 L20 20 L40 55 L60 10 L80 55 L100 20 L115 70',
  wave: 'M2 40 C 20 5, 40 75, 60 40 S 100 5, 120 40 S 160 75, 180 40',
}
export function Scribble({ variant = 'zigzag', className = '', color = 'var(--yellow)' }) {
  return (
    <svg className={`doodle scribble ${className}`} viewBox="0 0 180 100" aria-hidden="true" fill="none">
      <path d={SCRIBBLES[variant]} stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Arrow({ className = '', color = 'var(--yellow)' }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 80 30" aria-hidden="true" fill="none">
      <path d="M3 16 C 20 10, 40 22, 74 14 M62 4 L75 14 L62 26" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Squiggle({ className = '', color = 'var(--yellow)' }) {
  return (
    <svg className={`doodle squiggle ${className}`} viewBox="0 0 120 10" preserveAspectRatio="none" aria-hidden="true" fill="none">
      <path d="M2 6 C 20 1, 40 9, 60 5 S 100 2, 118 6" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

export function Tape({ className = '' }) {
  return <span className={`tape ${className}`} aria-hidden="true" />
}

export function Clip({ className = '' }) {
  return (
    <svg className={`clip ${className}`} viewBox="0 0 60 70" aria-hidden="true">
      <path d="M8 22 L14 66 L46 66 L52 22 Z" fill="#14172e" />
      <path d="M17 24 C 17 -2, 43 -2, 43 24" fill="none" stroke="#9aa0c0" strokeWidth="4" />
    </svg>
  )
}
