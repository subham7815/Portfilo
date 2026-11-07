import { useState } from 'react'
import './Work.css'

const projects = [
  {
    id: '01',
    title: 'E-Commerce Platform',
    category: 'Full Stack · 2024',
    description: 'End-to-end e-commerce with real-time inventory, Stripe payments, and an AI-powered recommendation engine.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#1a1a2e',
    accent: '#c8b8ff',
    link: 'https://github.com/',
  },
  {
    id: '02',
    title: 'Task Management Suite',
    category: 'Full Stack · 2024',
    description: 'Real-time collaborative project management platform. Drag-and-drop boards, team workspaces, and in-app notifications.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    color: '#0d1f1a',
    accent: '#a8e6c8',
    link: 'https://github.com/',
  },
  {
    id: '03',
    title: 'AI Chat Interface',
    category: 'AI/ML · 2023',
    description: 'ChatGPT-style interface powered by OpenAI. Streaming responses, conversation memory, and Markdown rendering.',
    tags: ['React', 'OpenAI API', 'Node.js', 'Redis'],
    color: '#1f1a0d',
    accent: '#f0d080',
    link: 'https://github.com/',
  },
  {
    id: '04',
    title: 'Analytics Dashboard',
    category: 'Frontend · 2023',
    description: 'Live analytics platform with interactive D3.js charts, WebSocket real-time feed, and customisable widget grid.',
    tags: ['React', 'D3.js', 'WebSockets', 'TypeScript'],
    color: '#1a0d1a',
    accent: '#f0a0d0',
    link: 'https://github.com/',
  },
]

export default function Work() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="work" className="work">
      {/* Section label */}
      <div className="container work-header fade-up">
        <span className="label">Selected Work</span>
        <span className="label muted">({projects.length} projects)</span>
      </div>

      <div className="h-line" />

      {/* Project rows */}
      <div className="work-list">
        {projects.map((p, i) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className={`work-row ${hovered === i ? 'active' : hovered !== null ? 'dimmed' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ '--p-color': p.color, '--p-accent': p.accent }}
          >
            <div className="container work-row-inner">
              {/* Number */}
              <span className="p-num">{p.id}</span>

              {/* Title + category */}
              <div className="p-title-wrap">
                <h2 className="p-title">{p.title}</h2>
                <span className="p-cat">{p.category}</span>
              </div>

              {/* Description (shown on hover) */}
              <p className="p-desc">{p.description}</p>

              {/* Arrow */}
              <span className="p-arrow">↗</span>
            </div>

            {/* Hover background swatch */}
            <div className="p-bg-swatch" />
          </a>
        ))}
      </div>

      <div className="h-line" />
    </section>
  )
}

