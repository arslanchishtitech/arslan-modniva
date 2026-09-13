import './CTASection.css'

const CTASection = () => {
  return (
    <section className="cta-section" id="contact">

      <div className="cta-label">
        GET IN TOUCH
      </div>

      <div className="cta-content">
        <h2>
          Let's work
          <span>together.</span>
        </h2>

        <div className="cta-details">
          <p>
            Available for castings, editorials,
            commercial projects and creative collaborations.
          </p>

          <a href="mailto:hello@arslanmodniva.com">
            START A CONVERSATION →
          </a>
        </div>
      </div>

      <div className="cta-footer">
        <a href="#" aria-label="Instagram">
          INSTAGRAM
        </a>

        <a href="#" aria-label="Email">
          EMAIL
        </a>
      </div>

    </section>
  )
}

export default CTASection