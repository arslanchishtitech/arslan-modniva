import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

import notFoundImage from "../assets/images/profile-snapshot.jpg";
import ctaimg from "../assets/images/presence-motion-main.jpg";

function NotFound() {
  useEffect(() => {
    document.body.classList.add("not-found-page");

    return () => {
      document.body.classList.remove("not-found-page");
    };
  }, []);

  return (
    <main className="not-found">
      {/* =====================================================
          01. 404 HERO
      ====================================================== */}
        <section className="not-found__hero">
          {/* Image */}
          <div className="not-found__media">
            <img
              src={notFoundImage}
              alt="Arslan Modniva"
              className="not-found__image"
            />
          </div>

          {/* Dark/light readability overlay */}
          <div className="not-found__shade" />

          {/* CONTENT MUST BE INSIDE THE HERO */}
          <div className="not-found__content page-shell">
            <div className="not-found__copy">
              <p className="eyebrow">404 ERROR</p>

              <h1>
                <span>Page</span>
                <span>Not Found.</span>
              </h1>

              <p className="not-found__description">
                The page you're looking for may have moved,
                been removed, or never existed.
              </p>

              <a href="/" className="not-found__button">
                Go To Home <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="not-found__index">
              <span>404</span>
              <span className="not-found__index-line" />
            </div>
          </div>
        </section>

      {/* =====================================================
          02. STAY CONNECTED / BOOKING CTA
      ====================================================== */}
      <section className="not-found__cta">
        <div className="not-found__cta-media" aria-hidden="true">
          <img src={ctaimg } alt="" />
        </div>

        <div className="not-found__cta-overlay" aria-hidden="true" />

        <div className="page-shell not-found__cta-inner">
          <p className="eyebrow eyebrow--light">Stay Connected</p>

          <div className="not-found__cta-content">
            <h2>
              Let’s Create
              <span>Something Great.</span>
            </h2>

            <p>
              For bookings, collaborations, or professional inquiries,
              I’d love to hear from you.
            </p>

            <Link to="/book" className="not-found__cta-link">
              Book Arslan <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
