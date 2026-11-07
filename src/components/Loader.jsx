import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Count from 0 → 100 over ~1.4s
    const steps = 38
    const duration = 1400
    const interval = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 7) + 2
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        // Hold for 200ms then slide out
        setTimeout(() => {
          setLeaving(true)
          setTimeout(onDone, 700)
        }, 200)
      }
      setCount(current)
    }, interval)

    return () => clearInterval(timer)
  }, [onDone])

  return (
    <div className={`loader ${leaving ? 'leaving' : ''}`}>
      <div className="loader-inner">
        <span className="loader-num">{count}</span>
        <span className="loader-pct">%</span>
      </div>
      <div className="loader-bar">
        <div className="loader-fill" style={{ width: `${count}%` }} />
      </div>
      <span className="loader-label">Loading portfolio</span>
    </div>
  )
}

