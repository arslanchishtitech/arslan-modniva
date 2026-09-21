import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CompCard.css";

import heroImage from "../assets/images/profile-snapshot.jpg";
import frontImage from "../assets/images/signature-model.jpg";
import profileImage from "../assets/images/presence-motion-01.jpg";
import detailImage from "../assets/images/work-03.jpg";
import fullLengthImage from "../assets/images/work-04.jpg";
import backImage from "../assets/images/work-02.jpg";
import ctaImage from "../assets/images/work-01.jpg";

function CompCard() {
  useEffect(() => {
    document.body.classList.add("comp-card-page");

    return () => {
      document.body.classList.remove("comp-card-page");
    };
  }, []);

  const modelDetails = [
    ["Height", "—"],
    ["Chest", "—"],
    ["Waist", "—"],
    ["Shoes", "—"],
    ["Hair", "—"],
    ["Eyes", "—"],
  ];

  return (
    <main className="comp-card-page__main">
      {/* =====================================================
          01. HERO
      ====================================================== */}
      <section className="comp-card-hero">
        <div className="comp-card-hero__media" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            className="comp-card-hero__image"
          />
        </div>

        <div className="comp-card-hero__overlay" aria-hidden="true" />

        <div className="page-shell comp-card-hero__inner">
          <div className="comp-card-hero__content">
            <p className="eyebrow">Comp Card</p>

            <h1 className="comp-card-hero__title">
              Authentic Look.
              <span>Professional Ready.</span>
            </h1>

            <p className="comp-card-hero__description">
              A clean and professional comp card featuring key images and
              essential details for casting and industry use.
            </p>
          </div>

          <div className="comp-card-hero__index" aria-label="Comp card index">
            <span>01</span>
            <span aria-hidden="true" />
            <span>04</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. THE COMP CARD
      ====================================================== */}
      <section className="comp-card-gallery section-light">
        <div className="page-shell">
          <div className="section-heading-row">
            <p className="eyebrow">The Comp Card</p>
            <span className="section-rule" aria-hidden="true" />
          </div>

          <div className="comp-card-gallery__grid">
            <figure className="comp-card-media comp-card-media--front">
              <img
                src={frontImage}
                alt="Arslan Modniva front portrait"
                loading="lazy"
              />
              <figcaption>Front</figcaption>
            </figure>

            <div className="comp-card-gallery__column">
              <figure className="comp-card-media">
                <img
                  src={profileImage}
                  alt="Arslan Modniva profile portrait"
                  loading="lazy"
                />
                <figcaption>Profile</figcaption>
              </figure>

              <figure className="comp-card-media">
                <img
                  src={detailImage}
                  alt="Arslan Modniva detail portrait"
                  loading="lazy"
                />
                <figcaption>Detail</figcaption>
              </figure>
            </div>

            <div className="comp-card-gallery__column">
              <figure className="comp-card-media">
                <img
                  src={fullLengthImage}
                  alt="Arslan Modniva full length portrait"
                  loading="lazy"
                />
                <figcaption>Full Length</figcaption>
              </figure>

              <figure className="comp-card-media">
                <img
                  src={backImage}
                  alt="Arslan Modniva back portrait"
                  loading="lazy"
                />
                <figcaption>Back</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03. DETAILS + CASTING
      ====================================================== */}
      <section className="comp-card-info section-light">
        <div className="page-shell comp-card-info__grid">
          <div className="comp-card-info__details">
            <div className="section-heading-row">
              <p className="eyebrow">Model Details</p>
              <span className="section-rule" aria-hidden="true" />
            </div>

            <dl className="comp-card-specs">
              {modelDetails.map(([label, value]) => (
                <div className="comp-card-spec" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="comp-card-info__casting">
            <div className="section-heading-row">
              <p className="eyebrow">Casting Information</p>
              <span className="section-rule" aria-hidden="true" />
            </div>

            <p className="comp-card-info__intro">
              Available for commercial, editorial, fashion and lifestyle
              projects.
            </p>

            <div className="comp-card-meta-grid">
              <div className="comp-card-meta-item">
                <span className="comp-card-meta-icon" aria-hidden="true">
                  ◉
                </span>
                <div>
                  <span>Based In</span>
                  <strong>Pakistan</strong>
                </div>
              </div>

              <div className="comp-card-meta-item">
                <span className="comp-card-meta-icon" aria-hidden="true">
                  ◎
                </span>
                <div>
                  <span>Availability</span>
                  <strong>Open</strong>
                </div>
              </div>
            </div>

            <div className="comp-card-book">
              <p className="eyebrow">Let&apos;s Work Together</p>
              <Link to="/book" className="comp-card-book__link">
                Book Arslan <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04. CONTACT CTA
      ====================================================== */}
      <section className="comp-card-cta">
        <div className="comp-card-cta__media" aria-hidden="true">
          <img
            src={ctaImage}
            alt=""
            className="comp-card-cta__image"
          />
        </div>

        <div className="comp-card-cta__overlay" aria-hidden="true" />

        <div className="page-shell comp-card-cta__inner">
          <div className="comp-card-cta__content">
            <p className="eyebrow eyebrow--light">Get In Touch</p>
            <h2>
              Your Next Project
              <span>Starts Here.</span>
            </h2>
            <p>
              For bookings, inquiries or collaborations, feel free to reach
              out.
            </p>

            <Link to="/book" className="comp-card-cta__link">
              Contact Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CompCard;




