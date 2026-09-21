import { Link } from "react-router-dom";
import "./Digitals.css";
import { useEffect } from "react";
import heroImage from "../assets/images/profile-snapshot.jpg";
import frontImage from "../assets/images/signature-model.jpg";
import profileImage from "../assets/images/presence-motion-01.jpg";
import sideImage from "../assets/images/work-01.jpg";
import detailImage from "../assets/images/presence-motion-02.jpg";

const modelDetails = [
  { label: "Height", value: "—" },
  { label: "Chest", value: "—" },
  { label: "Waist", value: "—" },
  { label: "Shoes", value: "—" },
];

const digitalSet = [
  {
    number: "01",
    label: "Front",
    image: frontImage,
    alt: "Arslan Modniva front digital placeholder",
  },
  {
    number: "02",
    label: "Profile",
    image: profileImage,
    alt: "Arslan Modniva profile digital placeholder",
  },
  {
    number: "03",
    label: "Side",
    image: sideImage,
    alt: "Arslan Modniva side digital placeholder",
  },
];

function Digitals() {
    useEffect(() => {
    document.body.classList.add("digitals-page");

    return () => {
        document.body.classList.remove("digitals-page");
    };
    }, []);
  return (
    <main className="digitals-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="digitals-hero">
        <div className="digitals-hero__grid page-shell">
          <div className="digitals-hero__copy">
            <p className="eyebrow">Digitals</p>

            <h1 className="digitals-hero__title">
              Clean. Current.
              <span>Casting Ready.</span>
            </h1>

            <p className="digitals-hero__description">
              A clean presentation for casting, representation and professional
              opportunities. Natural, straightforward and easy to review.
            </p>

            <div className="digitals-hero__meta">
              <span>01</span>
              <span className="digitals-hero__meta-line" />
              <span>04</span>
            </div>
          </div>

          <figure className="digitals-hero__media">
            <img
              src={heroImage}
              alt="Arslan Modniva digital portrait placeholder"
              className="digitals-hero__image"
            />
            <figcaption>ARSLAN MODNIVA / DIGITALS</figcaption>
          </figure>
        </div>
      </section>

      {/* =====================================================
          DIGITAL SET
      ===================================================== */}
      <section className="digitals-set section-light">
        <div className="page-shell">
          <div className="digitals-section-heading">
            <p className="eyebrow">The Digital Set</p>
            <span className="digitals-section-heading__rule" />
          </div>

          <div className="digitals-set__grid">
            {digitalSet.map((item) => (
              <figure className="digital-card" key={item.number}>
                <div className="digital-card__media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <figcaption className="digital-card__caption">
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="digitals-set__note">
            Current images are being used as presentation placeholders until a
            dedicated digitals shoot is added.
          </p>
        </div>
      </section>

      {/* =====================================================
          MODEL DETAILS
      ===================================================== */}
      <section className="digitals-details section-light">
        <div className="page-shell">
          <div className="digitals-section-heading">
            <p className="eyebrow">Model Details</p>
            <span className="digitals-section-heading__rule" />
          </div>

          <div className="digitals-details__grid">
            <div className="digitals-details__panel">
              <div className="digitals-measurements">
                {modelDetails.map((item) => (
                  <div className="digitals-measurement" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>

              <div className="digitals-casting">
                <p className="eyebrow eyebrow--light">Casting Information</p>
                <p>
                  Available for commercial, editorial, fashion and lifestyle
                  projects.
                </p>

                <div className="digitals-casting__meta">
                  <div>
                    <span>Based In</span>
                    <strong>Pakistan</strong>
                  </div>
                  <div>
                    <span>Availability</span>
                    <strong>Open</strong>
                  </div>
                </div>
              </div>
            </div>

            <figure className="digitals-details__media">
              <img
                src={detailImage}
                alt="Arslan Modniva portrait placeholder"
                loading="lazy"
              />
              <figcaption>PROFILE / NATURAL LIGHT</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING CTA
      ===================================================== */}
      <section className="digitals-cta">
        <div className="digitals-cta__media">
          <img
            src={sideImage}
            alt="Arslan Modniva booking portrait placeholder"
            className="digitals-cta__image"
            loading="lazy"
          />
        </div>

        <div className="digitals-cta__overlay" />

        <div className="page-shell digitals-cta__inner">
          <p className="eyebrow eyebrow--light">Work With Arslan</p>

          <h2>
            Book Arslan
            <span>for Your Next Project.</span>
          </h2>

          <p className="digitals-cta__description">
            For bookings, inquiries or collaborations, get in touch to discuss
            the project and availability.
          </p>

          <Link to="/book" className="digitals-cta__link">
            Get in Touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Digitals;
