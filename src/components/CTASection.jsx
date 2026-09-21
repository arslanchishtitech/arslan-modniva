import { Link } from 'react-router-dom'
import './CTASection.css'

import ctaImage from '../assets/images/presence-motion-main.jpg'

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <img
          src={ctaImage}
          alt="Arslan Modniva"
          className="cta-image"
          loading='lazy'
        />
      </div>

      <div className="cta-overlay" />

      <div className="cta-container">

        {/* TOP META */}
        <div className="cta-meta">
          <span>FINAL CTA SECTION</span>
          <span className="cta-meta-line" />
        </div>

        {/* MAIN CONTENT */}
        <div className="cta-content">

          <div className="cta-copy">
            <p className="cta-eyebrow">
              LET'S CREATE SOMETHING TIMELESS
            </p>

            <h2 className="cta-title">
              <span>BOOK</span>
              <span>ARSLAN</span>
            </h2>

            <p className="cta-description">
              For collaborations, castings, editorial projects
              and professional opportunities. Let’s bring
              your vision to life.
            </p>

            <Link to="/book" className="cta-button">
              <span>GET IN TOUCH</span>
              <span className="cta-button-arrow">→</span>
            </Link>
          </div>

        </div>

        {/* RIGHT EDITORIAL META */}
        <div className="cta-side-meta">
          <span>FASHION</span>
          <span>EDITORIAL</span>
          <span>COMMERCIAL</span>
          <span className="cta-side-line" />
        </div>

        {/* BOTTOM LINKS */}
        <div className="cta-bottom">

          <Link to="/portfolio" className="cta-bottom-item">
            <span className="cta-bottom-title">
              MODEL PORTFOLIO
            </span>
            <span className="cta-bottom-subtitle">
              VIEW FULL PORTFOLIO
            </span>
          </Link>

          <span className="cta-bottom-divider" />

          <Link to="/comp-card" className="cta-bottom-item">
            <span className="cta-bottom-title">
              COMP CARD
            </span>
            <span className="cta-bottom-subtitle">
              DOWNLOAD PDF
            </span>
          </Link>

          <span className="cta-bottom-divider" />

          <Link to="/book" className="cta-bottom-item">
            <span className="cta-bottom-title">
              BOOKING
            </span>
            <span className="cta-bottom-subtitle">
              LET'S CONNECT
            </span>
          </Link>

        </div>

        {/* MODEL IDENTIFICATION */}
        <div className="cta-model-info">
          <span>ARSLAN MODNIVA</span>
          <span>EMERGING FASHION MODEL</span>
        </div>

      </div>
    </section>
  )
}

export default CTASection