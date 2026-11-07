import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">Subham<em>.</em></span>
        <p className="footer-copy">© {year} — All rights reserved</p>
        <div className="footer-links">
          <a href="https://github.com/"   target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/"  target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
