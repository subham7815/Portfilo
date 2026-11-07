import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeSections from './components/HomeSections'
import Work from './components/Work'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

const PAPER = ['/work', '/experience', '/certificates', '/about', '/skills', '/contact']

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const { pathname } = location

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  /* Intersection Observer for .fade-up elements */
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll('.fade-up:not(.visible)')
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: 0, rootMargin: '0px 0px -40px 0px' }
      )
      els.forEach(el => obs.observe(el))
      return obs
    }

    const obs1 = observe()
    // pages mount after the exit animation, so re-scan a few times
    let last = obs1
    const timers = [150, 450, 900].map(ms => setTimeout(() => { last.disconnect(); last = observe() }, ms))
    return () => { timers.forEach(clearTimeout); last.disconnect() }
  }, [pathname])

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Cursor />
      <Navbar />
      <main className="page">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            className={`route-wrap${PAPER.includes(pathname) ? ' paper' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<><Hero /><HomeSections /></>} />
              <Route path="/work" element={<Work />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
