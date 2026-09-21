import { Link } from 'react-router-dom'
import './Footer.css'
import AMLogo from './AMLogo'

import footerImage from '../assets/images/presence-motion-01.jpg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      {/* TOP META */}
      <div className="footer-meta">
        <div className="footer-meta-left">
          <span>FASHION</span>
          <span>/</span>
          <span>EDITORIAL</span>
          <span>/</span>
          <span>COMMERCIAL</span>
        </div>

        <span className="footer-meta-right">
          PAKISTAN <span>→</span> INTERNATIONAL
        </span>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="footer-brand-name">
            <span>ARSLAN</span>
            <span>MODNIVA</span>
          </Link>

          <span className="footer-brand-line" />

          <p>
            Emerging Fashion Model
            <br />
            Pakistan → International
          </p>

          <span className="footer-brand-statement">
            MORE THAN A PORTFOLIO,
            <br />
            IT’S A PRESENCE.
          </span>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <span className="footer-column-title">
            QUICK LINKS
          </span>

          <nav className="footer-links">
            <Link to="/">HOME</Link>
            <Link to="/portfolio">PORTFOLIO</Link>
            <Link to="/digitals">DIGITALS</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/comp-card">COMP CARD</Link>
            <Link to="/book">BOOK ARSLAN</Link>
          </nav>
        </div>

        {/* CONTACT / BOOKING */}
        <div className="footer-column footer-contact">
          <span className="footer-column-title">
            CONTACT
          </span>

          <p>
            Available for collaborations,
            <br />
            castings and editorial projects.
          </p>

          <span className="footer-location">
            PAKISTAN → INTERNATIONAL
          </span>

          <Link to="/book" className="footer-book-link">
            <span>BOOK ARSLAN</span>
            <span>→</span>
          </Link>
        </div>

        {/* FOLLOW */}
        <div className="footer-column footer-follow">
          <span className="footer-column-title">
            FOLLOW
          </span>

          <div className="footer-follow-links">
            <span>INSTAGRAM</span>
            <span>YOUTUBE</span>
            <span>LINKEDIN</span>
          </div>
        </div>

      </div>

      {/* CINEMATIC BRAND BAND */}
      <div className="footer-image-band">

        <img
          src={footerImage}
          alt="Arslan Modniva"
          loading="lazy"
        />

        <div className="footer-image-overlay" />

        <div className="footer-monogram">
          <AMLogo />
        </div>

        <div className="footer-manifesto">
          <span>DISCIPLINE</span>
          <span>CREATES</span>
          <span>FREEDOM</span>

          <i />
        </div>

      </div>

      {/* LEGAL BAR */}
      <div className="footer-bottom">

        <span>
          © {currentYear} ARSLAN MODNIVA. ALL RIGHTS RESERVED.
        </span>

        <div className="footer-bottom-links">
          <span>PRIVACY POLICY</span>
          <span className="footer-bottom-divider" />
          <span>TERMS & CONDITIONS</span>
          <span className="footer-bottom-divider" />
          <Link to="/book">CONTACT</Link>
        </div>

        <button
          type="button"
          className="footer-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>

      </div>

    </footer>
  )
}

export default Footer