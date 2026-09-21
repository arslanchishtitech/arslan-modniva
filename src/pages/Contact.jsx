import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/work-cta.jpg";
import consultationImage from "../assets/images/presence-motion-main.jpg";
import "./Contact.css";

const contactDetails = [
  {
    label: "Email",
    value: "hello@arslanmodniva.com",
    note: "Replace with your real email before deployment.",
    href: "mailto:hello@arslanmodniva.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+92 XXX XXXXXXX",
    note: "Replace with your real phone number before deployment.",
    href: "tel:+92XXXXXXXXXX",
    icon: "phone",
  },
  {
    label: "Location",
    value: "Pakistan",
    note: "Based in Pakistan.",
    href: null,
    icon: "location",
  },
  {
    label: "Instagram",
    value: "@arslanmodniva",
    note: "Replace with your active profile URL before deployment.",
    href: "https://instagram.com/",
    icon: "instagram",
  },
];

function ContactIcon({ type }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 3.8 9.5 3c.7-.2 1.5.2 1.8.9l1.1 2.8c.2.6.1 1.2-.3 1.6l-1.5 1.7a15.6 15.6 0 0 0 3.4 3.4l1.7-1.5c.4-.4 1-.5 1.6-.3l2.8 1.1c.7.3 1.1 1.1.9 1.8l-.8 2.3c-.3.9-1.2 1.5-2.2 1.4C10 17.3 6.7 14 4.2 7.9c-.1-1 .5-1.9 1.4-2.2l1.6-.5Z" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10.2c0 5.1-8 10.2-8 10.2S4 15.3 4 10.2a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Contact() {
  useEffect(() => {
  document.body.classList.add("book-page");

  return () => {
    document.body.classList.remove("book-page");
  };
}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="contact-page-content">
      {/* =====================================================
          01. HERO
      ====================================================== */}
      <section className="contact-hero">
        <div className="contact-hero__media" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            className="contact-hero__image"
          />
        </div>

        <div className="contact-hero__overlay" aria-hidden="true" />

        <div className="contact-hero__inner page-shell">
          <div className="contact-hero__copy">
            <p className="contact-eyebrow">Contact</p>

            <h1>
              Let&apos;s Create Something Great.
            </h1>

            <p className="contact-hero__description">
              Have a project in mind, a casting inquiry, or just want to
              connect? I&apos;d love to hear from you. Reach out and let&apos;s
              discuss how we can work together.
            </p>
          </div>

          <div className="contact-hero__index" aria-hidden="true">
            <span>01</span>
            <i />
            <span>04</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. CONTACT INFORMATION + FORM
      ====================================================== */}
      <section className="contact-main section-light">
        <div className="page-shell contact-main__grid">
          <div className="contact-info">
            <div className="contact-section-heading">
              <p className="contact-eyebrow">Contact Information</p>
              <span aria-hidden="true" />
            </div>

            <div className="contact-info__intro">
              <h2>Get In Touch.</h2>
              <p>
                I&apos;m always open to new opportunities, creative
                collaborations and professional connections. Feel free to
                reach out through any of the channels below.
              </p>
            </div>

            <div className="contact-info__list">
              {contactDetails.map((item) => {
                const content = (
                  <>
                    <span className="contact-info__icon">
                      <ContactIcon type={item.icon} />
                    </span>
                    <span className="contact-info__copy">
                      <span className="contact-info__label">{item.label}</span>
                      <span className="contact-info__value">{item.value}</span>
                      <span className="contact-info__note">{item.note}</span>
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    href={item.href}
                    className="contact-info__item"
                    key={item.label}
                    target={item.icon === "instagram" ? "_blank" : undefined}
                    rel={item.icon === "instagram" ? "noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="contact-info__item" key={item.label}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="contact-section-heading">
              <p className="contact-eyebrow">Send A Message</p>
              <span aria-hidden="true" />
            </div>

            <div className="contact-form-wrap__intro">
              <h2>Let&apos;s Talk.</h2>
              <p>
                Fill out the form below and I&apos;ll get back to you as soon
                as possible. Whether it&apos;s a booking, collaboration or
                general inquiry — I&apos;m here to help.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row contact-form__row--two">
                <label>
                  <span>Name *</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>

                <label>
                  <span>Email *</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Subject *</span>
                <select name="subject" defaultValue="" required>
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="booking">Booking</option>
                  <option value="casting">Casting</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="general">General Inquiry</option>
                </select>
              </label>

              <label>
                <span>Message *</span>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your message here..."
                  required
                />
              </label>

              <button className="contact-form__submit" type="submit">
                Send Message <span aria-hidden="true">→</span>
              </button>

              <p className="contact-form__note">
                Frontend form only for now. Connect a real backend/service before
                production use.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          03. BOOK CONSULTATION
      ====================================================== */}
      <section className="contact-consultation">
        <div className="contact-consultation__media" aria-hidden="true">
          <img
            src={consultationImage}
            alt=""
            className="contact-consultation__image"
          />
        </div>

        <div className="contact-consultation__overlay" aria-hidden="true" />

        <div className="page-shell contact-consultation__inner">
          <div className="contact-consultation__content">
            <p className="contact-eyebrow contact-eyebrow--light">
              Book Consultation
            </p>

            <h2>Need a Personal Consultation?</h2>

            <p>
              For detailed discussions about bookings, assignments or
              professional opportunities, book a consultation and let&apos;s talk
              directly.
            </p>

            <Link to="/book" className="contact-consultation__link">
              Book Consultation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
