import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Work.css'

const projects = [
  {
    id: '01',
    title: 'DexAI Platform',
    category: 'AI / Full-Stack · 2026',
    description: 'Modern AI product platform landing & showcase with responsive components, dark-mode glassmorphic styling, and interactive workflow demos.',
    tags: ['TypeScript', 'React', 'CSS3', 'Vercel'],
    image: '/projects/dexai.png',
    liveUrl: 'https://dexai-website.vercel.app',
    githubUrl: 'https://github.com/subham7815/dexai-website',
    accent: '#38bdf8',
    color: '#071626',
    featured: true,
  },
  {
    id: '02',
    title: 'TalentFlow — Mini ATS',
    category: 'Full-Stack Web App · 2026',
    description: 'Full-Stack Applicant Tracking System (ATS) designed for HR teams to manage job openings, candidate pipelines, recruitment stages, and hiring analytics.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/mini-ats.png',
    liveUrl: 'https://mini-ats-one.vercel.app',
    githubUrl: 'https://github.com/subham7815/mini-ats',
    accent: '#3b82f6',
    color: '#0b162c',
    featured: true,
  },
  {
    id: '03',
    title: 'FitLife — Fitness Platform',
    category: 'Modern Web UI · 2026',
    description: 'Clean, responsive fitness platform with high-energy UI, fluid CSS animations, dynamic membership tiers, trainer showcases, and mobile-friendly design.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: '/projects/fitness.png',
    liveUrl: 'https://fitness-website-sandy-eight.vercel.app',
    githubUrl: 'https://github.com/subham7815/Fitness-website',
    accent: '#10b981',
    color: '#061c14',
    featured: true,
  },
  {
    id: '04',
    title: 'Linux File Explorer Application',
    category: 'Systems & C++ · 2025-2026',
    description: 'Console-based Linux file explorer featuring dual-mode navigation (Normal/Command), live regex search, and low-level Linux syscalls for terminal operations.',
    tags: ['C++', 'Linux Syscalls', 'OOP', 'Terminal UI'],
    image: '/projects/file-explorer.png',
    liveUrl: 'https://file-explorer-application-five.vercel.app',
    githubUrl: 'https://github.com/subham7815/File-Explorer-Application',
    accent: '#f59e0b',
    color: '#1a1306',
    featured: true,
  },
  {
    id: '05',
    title: 'InvoNexa — Smart Invoicing SaaS',
    category: 'SaaS Platform · 2026',
    description: 'Enterprise invoice generation & billing SaaS with real-time revenue KPIs, client directory, automated PDF generation, and payment lifecycle tracking.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    image: '/projects/invonexa.svg',
    liveUrl: 'https://github.com/subham7815/InvoNexa',
    githubUrl: 'https://github.com/subham7815/InvoNexa',
    accent: '#60a5fa',
    color: '#0a101d',
    featured: false,
  },
  {
    id: '06',
    title: 'Morrow Banking Dashboard',
    category: 'Fintech UI & Analytics · 2026',
    description: 'High-aesthetic banking and liquidity dashboard featuring interactive financial charts, live transaction feeds, virtual platinum cards, and analytics.',
    tags: ['CSS Grid', 'JavaScript', 'Data Viz', 'Fintech UI'],
    image: '/projects/morrow-banking.svg',
    liveUrl: 'https://github.com/subham7815/morrow-banking-dashboard',
    githubUrl: 'https://github.com/subham7815/morrow-banking-dashboard',
    accent: '#a78bfa',
    color: '#120d24',
    featured: false,
  },
  {
    id: '07',
    title: 'Replica — Cross-Platform App',
    category: 'Mobile / Web Prototype · 2026',
    description: 'High-fidelity mobile and web interface recreation built with TypeScript, Expo, and React with smooth haptics, native gestures, and 60fps transitions.',
    tags: ['TypeScript', 'Expo', 'React Native', 'UI Motion'],
    image: '/projects/replica.svg',
    liveUrl: 'https://github.com/subham7815/replica',
    githubUrl: 'https://github.com/subham7815/replica',
    accent: '#fb923c',
    color: '#1c1008',
    featured: false,
  },
  {
    id: '08',
    title: 'Book Management System (ServiceNow)',
    category: 'Enterprise App · 2026',
    description: 'Enterprise ServiceNow application built with Flow Designer, custom scoped tables, Business Rules, Client Scripts, ACL security, and ATF test suites.',
    tags: ['ServiceNow Studio', 'Flow Designer', 'GlideScript', 'ATF'],
    image: '/projects/book-management.svg',
    liveUrl: 'https://github.com/subham7815',
    githubUrl: 'https://github.com/subham7815',
    accent: '#81b5a1',
    color: '#041f17',
    featured: false,
  },
  {
    id: '09',
    title: 'UrbanStore — E-Commerce Website',
    category: 'E-Commerce · 2025',
    description: 'Full-featured online storefront with product catalog, category filters, responsive shopping cart drawer, and interactive checkout flow.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Cart System'],
    image: '/projects/ecommerce.svg',
    liveUrl: 'https://github.com/subham7815/Ecommerce-website.',
    githubUrl: 'https://github.com/subham7815/Ecommerce-website.',
    accent: '#38bdf8',
    color: '#071523',
    featured: false,
  },
  {
    id: '10',
    title: 'Tic-Tac-Toe Game',
    category: 'Interactive Web Game · 2025',
    description: 'Two-player interactive web game featuring dynamic winner strike-through detection, turn tracking, scoreboard, and game reset functionality.',
    tags: ['JavaScript', 'CSS3 Animations', 'DOM API'],
    image: '/projects/tictactoe.svg',
    liveUrl: 'https://github.com/subham7815/Tic-Tac-Toe',
    githubUrl: 'https://github.com/subham7815/Tic-Tac-Toe',
    accent: '#a5b4fc',
    color: '#0d0d26',
    featured: false,
  },
]

export default function Work() {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const categories = ['All', 'Full-Stack', 'Frontend', 'ServiceNow & Systems', 'AI & Tools']

  const filtered = projects.filter(p => {
    if (filter === 'All') return true
    if (filter === 'Full-Stack') return p.category.includes('Full-Stack') || p.tags.includes('Node.js') || p.tags.includes('Next.js 14')
    if (filter === 'Frontend') return p.tags.includes('HTML5') || p.category.includes('Web UI') || p.category.includes('E-Commerce')
    if (filter === 'ServiceNow & Systems') return p.tags.includes('C++') || p.tags.includes('ServiceNow Studio')
    if (filter === 'AI & Tools') return p.category.includes('AI') || p.title.includes('DexAI')
    return true
  })

  return (
    <section id="work" className="work">
      {/* Header */}
      <div className="container work-header">
        <div>
          <span className="label">FEATURED PORTFOLIO</span>
          <h2 className="work-main-title">Selected Works &amp; Deployments</h2>
        </div>
        <span className="label project-count">({filtered.length} of {projects.length} Projects)</span>
      </div>

      {/* Filter Chips */}
      <div className="container work-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`work-filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid with Rich Thumbnails */}
      <div className="container work-grid">
        {filtered.map((p, idx) => (
          <div
            key={p.id}
            className={`work-card ${p.featured ? 'is-featured' : ''}`}
            style={{ '--card-accent': p.accent }}
            onMouseEnter={() => setActiveProject(p.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Visual Preview */}
            <div className="work-card-media">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="work-card-img"
              />
              <div className="work-media-overlay">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="media-action-btn primary"
                    title="Open Live Website"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="media-action-btn secondary"
                    title="View GitHub Code"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
              <span className="work-card-id">{p.id}</span>
            </div>

            {/* Content Details */}
            <div className="work-card-content">
              <div className="work-card-meta">
                <span className="work-card-cat">{p.category}</span>
                {p.featured && <span className="featured-pill">Featured</span>}
              </div>

              <h3 className="work-card-title">
                <a href={p.liveUrl || p.githubUrl} target="_blank" rel="noreferrer">
                  {p.title} <span className="title-arrow">↗</span>
                </a>
              </h3>

              <p className="work-card-desc">{p.description}</p>

              {/* Stack Chips */}
              <div className="work-card-tags">
                {p.tags.map(t => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>

              {/* Links Footer */}
              <div className="work-card-links">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="work-link-btn live">
                    <FaExternalLinkAlt /> Visit Project
                  </a>
                )}
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="work-link-btn code">
                    <FaGithub /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
