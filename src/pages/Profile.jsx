import { useEffect } from "react";
import { Link } from "react-router-dom";
import profileSnapshot from "../assets/images/profile-snapshot.jpg";
import signatureModel from "../assets/images/signature-model.jpg";
import portrait03 from "../assets/images/work-01.jpg";
import portrait04 from "../assets/images/work-02.jpg";
import ctaImage from "../assets/images/presence-motion-main.jpg";
import "./Profile.css";

function Profile() {
  useEffect(() => {
    document.body.classList.add("digitals-page");

    return () => {
        document.body.classList.remove("digitals-page");
    };
    }, []);
  const portraits = [
    {
      src: profileSnapshot,
      alt: "Arslan Modniva portrait front view",
      label: "Portrait 01",
    },
    {
      src: signatureModel,
      alt: "Arslan Modniva portrait profile view",
      label: "Portrait 02",
    },
    {
      src: portrait03,
      alt: "Arslan Modniva editorial portrait",
      label: "Portrait 03",
    },
    {
      src: portrait04,
      alt: "Arslan Modniva portrait",
      label: "Portrait 04",
    },
  ];

  return (
    <main className="profile-page-content">
      {/* =====================================================
          01. PROFILE HERO
      ====================================================== */}
      <section className="profile-hero">
        <div className="page-shell profile-hero__grid">
          <div className="profile-hero__copy">
            <p className="eyebrow">Profile</p>

            <h1 className="profile-hero__title">
              <span>Natural Presence.</span>
              <span>Real Impact.</span>
            </h1>

            <p className="profile-hero__description">
              Explore a curated profile built around versatility, personality
              and professional presence across different moods and aesthetics.
            </p>
          </div>

          <figure className="profile-hero__media">
            <img
              src={profileSnapshot}
              alt="Arslan Modniva profile portrait"
              fetchPriority="high"
            />
          </figure>

          <div className="profile-hero__index" aria-label="Profile section index">
            <span>01</span>
            <span className="profile-hero__index-line" aria-hidden="true" />
            <span>04</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. PORTRAITS
      ====================================================== */}
      <section className="profile-portraits section-light">
        <div className="page-shell">
          <div className="profile-section-heading">
            <p className="eyebrow">Portraits</p>
            <div className="profile-section-heading__rule" aria-hidden="true" />
          </div>

          <div className="profile-portraits__grid">
            {portraits.map((portrait) => (
              <figure className="profile-portrait-card" key={portrait.label}>
                <img src={portrait.src} alt={portrait.alt} loading="lazy" />
                <figcaption>{portrait.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          03. QUICK OVERVIEW
      ====================================================== */}
      <section className="profile-overview">
        <div className="page-shell profile-overview__grid">
          <div className="profile-overview__intro">
            <p className="eyebrow eyebrow--light">Quick Overview</p>
            <h2>
              Versatile. Expressive.
              <br />
              Professional.
            </h2>
          </div>

          <dl className="profile-overview__details">
            <div>
              <dt>Height</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt>Chest</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt>Waist</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt>Shoes</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt>Hair</dt>
              <dd>—</dd>
            </div>
            <div>
              <dt>Eyes</dt>
              <dd>—</dd>
            </div>
          </dl>

          <div className="profile-overview__casting">
            <p className="eyebrow eyebrow--light">Casting Information</p>
            <p>
              Available for commercial, editorial, fashion and lifestyle
              projects.
            </p>

            <div className="profile-overview__meta">
              <div>
                <span aria-hidden="true" className="profile-meta-icon">⌖</span>
                <div>
                  <small>Based In</small>
                  <strong>Pakistan</strong>
                </div>
              </div>

              <div>
                <span aria-hidden="true" className="profile-meta-icon">◎</span>
                <div>
                  <small>Availability</small>
                  <strong>Open</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04. BOOKING CTA
      ====================================================== */}
      <section className="profile-booking-cta">
        <div className="profile-booking-cta__media" aria-hidden="true">
          <img src={ctaImage} alt="" loading="lazy" />
        </div>
        <div className="profile-booking-cta__overlay" aria-hidden="true" />

        <div className="page-shell profile-booking-cta__inner">
          <p className="eyebrow eyebrow--light">Let's Work Together</p>

          <div className="profile-booking-cta__row">
            <div>
              <h2>
                <span>Book Arslan</span>
                <span>for Your Next Project.</span>
              </h2>
              <p>
                For bookings, inquiries or collaborations, feel free to get in
                touch.
              </p>
            </div>

            <Link to="/book" className="profile-cta-link">
              Get in Touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
