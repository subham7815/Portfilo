import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
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
    const timer = setTimeout(() => { obs1.disconnect(); observe() }, 100)
    return () => { clearTimeout(timer); obs1.disconnect() }
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Certificates />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
