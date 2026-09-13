import './Contact.css'

const Contact = () => {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <p className="contact-label">
          GET IN TOUCH
        </p>

        <h1>
          Let's work
          <span>together.</span>
        </h1>

        <p className="contact-intro">
          Available for castings, editorial work,
          commercial projects and creative collaborations.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-info">

          <div className="contact-block">
            <span>EMAIL</span>

            <a href="mailto:hello@arslanmodniva.com">
              hello@arslanmodniva.com
            </a>
          </div>

          <div className="contact-block">
            <span>INSTAGRAM</span>

            <a href="#">
              @arslanmodniva
            </a>
          </div>

          <div className="contact-block">
            <span>BASE</span>

            <p>Pakistan</p>
          </div>

          <div className="contact-block">
            <span>AVAILABLE FOR</span>

            <p>Castings</p>
            <p>Editorials</p>
            <p>Commercial Projects</p>
            <p>Creative Collaborations</p>
          </div>

        </div>

        <form className="contact-form">

          <div className="form-field">
            <label htmlFor="name">
              YOUR NAME
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">
              EMAIL
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-field">
            <label htmlFor="project">
              PROJECT TYPE
            </label>

            <select
              id="project"
              name="project"
              defaultValue=""
            >
              <option value="" disabled>
                Select project type
              </option>

              <option value="casting">
                Casting
              </option>

              <option value="editorial">
                Editorial
              </option>

              <option value="commercial">
                Commercial
              </option>

              <option value="collaboration">
                Collaboration
              </option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">
              MESSAGE
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about the project..."
            ></textarea>
          </div>

          <button type="submit">
            SEND INQUIRY →
          </button>

        </form>

      </section>

    </main>
  )
}

export default Contact