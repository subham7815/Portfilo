import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView, useReducedMotion } from 'framer-motion'

/** Fade + slide in when scrolled into view. */
export function Reveal({ children, delay = 0, y = 28, x = 0, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Container that staggers its <Item> children. */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const item = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
export function Stagger({ children, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
export function Item({ children, className = '', ...rest }) {
  return <motion.div className={className} variants={item} {...rest}>{children}</motion.div>
}

/** Counts up to `to` when visible; writes straight to the DOM (no React re-renders). */
export function CountUp({ to, decimals = 0, suffix = '', prefix = '', duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const fmt = v => `${prefix}${v.toFixed(decimals)}${suffix}`

  useEffect(() => {
    if (!inView || !ref.current) return
    if (reduce) { ref.current.textContent = fmt(to); return }
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: v => { if (ref.current) ref.current.textContent = fmt(v) },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, to, duration, reduce])

  return <span ref={ref}>{fmt(0)}</span>
}

/** Rotates through words with a fade/slide. */
export function Rotator({ words, interval = 2400 }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words, interval])
  return (
    <span className="rotator">
      <motion.span
        key={words[i]}
        className="rotator-word"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {words[i]}
      </motion.span>
    </span>
  )
}

