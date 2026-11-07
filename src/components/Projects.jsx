import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured e-commerce platform with real-time inventory, payments via Stripe, JWT auth, and an admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    category: 'Full Stack',
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: true,
    emoji: '🛒',
  },
  {
    title: 'Task Management App',
    desc: 'A Jira-like project management tool with drag-and-drop boards, real-time collaboration, and team workspaces.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    category: 'Full Stack',
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: true,
    emoji: '📋',
  },
  {
    title: 'AI Chat Interface',
    desc: 'A modern ChatGPT-like interface powered by OpenAI API, with conversation history, markdown support, and streaming.',
    tags: ['React', 'OpenAI', 'Node.js', 'Tailwind'],
    category: 'AI/ML',
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: false,
    emoji: '🤖',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    desc: 'A live analytics dashboard with interactive charts, WebSocket data feed, and customizable widgets.',
    tags: ['React', 'D3.js', 'WebSockets', 'Redis'],
    category: 'Frontend',
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: false,
    emoji: '📊',
  },
  {
    title: 'DevBlog CMS',
    desc: 'A headless CMS and developer blog platform with Markdown editor, SEO optimization, and RSS feed.',
    tags: ['Next.js', 'MDX', 'PostgreSQL', 'Prisma'],
    category: 'Full Stack',
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: false,
    emoji: '✍️',
  },
  {
    title: 'REST API Boilerplate',
    desc: 'A production-ready Node.js REST API starter with auth, rate-limiting, logging, testing, and CI/CD pipeline.',
    tags: ['Node.js', 'Express', 'JWT', 'Docker', 'Jest'],
    category: 'Backend',
    github: 'https://github.com/',
    live: null,
    featured: false,
    emoji: '⚙️',
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>A selection of things I've built</p>
          <div className="title-line" />
        </motion.div>

        {/* Filter tabs */}
        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              className={`project-card ${p.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              {p.featured && <span className="featured-tag">⭐ Featured</span>}
              <div className="project-emoji">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

