import './HeroSection.css'
import heroImage from '../assets/images/hero-main.jpg'

const HeroSection = () => {
  return (
    <section className="hero-section">

      {/* Background */}
      <div className="hero-background">
        <img
          src={heroImage}
          alt="Arslan Modniva"
          className="hero-image"
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-content-stack">

          <p className="hero-label">
            FASHION / EDITORIAL / COMMERCIAL
          </p>

          <div className="hero-title">
            <span className="hero-title-first">
              ARSLAN
            </span>

            <span className="hero-title-last">
              MODNIVA
            </span>
          </div>

          <div className="hero-meta">
            <p>EMERGING FASHION MODEL</p>
            <p>PAKISTAN → INTERNATIONAL</p>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <span className="hero-scroll-line" />
      </div>

      {/* Statement */}
      <p className="hero-statement">
        MORE THAN A PORTFOLIO, IT’S A PRESENCE.
      </p>

      {/* Page Index */}
      <p className="hero-index">
        01 / 05
      </p>

    </section>
  )
}

export default HeroSection