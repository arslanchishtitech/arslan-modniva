import { Link, useParams } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import "./WorkDetail.css";
import ctaImage from "../assets/images/work-cta.jpg";
import galleryFallback01 from "../assets/images/presence-motion-01.jpg";
import galleryFallback02 from "../assets/images/presence-motion-02.jpg";

function getGalleryImages(work) {
  const gallery = Array.isArray(work?.gallery)
    ? work.gallery.filter(Boolean)
    : [];

  if (gallery.length > 0) {
    return [work.image, ...gallery].filter(Boolean).slice(0, 3);
  }

  return [work.image, galleryFallback01, galleryFallback02].filter(Boolean);
}

function WorkDetail() {
  const { slug } = useParams();

  const currentIndex = portfolioData.findIndex((work) => work.slug === slug);
  const work = portfolioData[currentIndex];

  if (!work) {
    return (
      <main className="work-detail-not-found">
        <div className="work-detail-not-found__inner">
          <span className="eyebrow">404 / WORK</span>
          <h1>Work Not Found.</h1>
          <p>
            The requested portfolio project could not be found in the current
            portfolio data.
          </p>
          <Link to="/portfolio" className="editorial-link">
            Back to Portfolio <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
    );
  }

  const galleryImages = getGalleryImages(work);

  const moreProjects = portfolioData;

  const previousWork =
    currentIndex > 0 ? portfolioData[currentIndex - 1] : portfolioData.at(-1);

  const nextWork =
    currentIndex < portfolioData.length - 1
      ? portfolioData[currentIndex + 1]
      : portfolioData[0];

  return (
    <main className="work-detail">
      {/* =========================================================
          01. HERO
      ========================================================== */}
      <section className="work-hero" aria-labelledby="work-title">
        <div className="work-hero__media">
          <img
            src={work.image}
            alt={`${work.title} — ${work.category}`}
            className="work-hero__image"
          />
          <div className="work-hero__overlay" />
        </div>

        <div className="work-hero__content page-shell">
          <Link to="/portfolio" className="work-back-link">
            <span aria-hidden="true">←</span> Back to Portfolio
          </Link>

          <div className="work-hero__copy">
            <p className="eyebrow eyebrow--light">{work.category}</p>

            <h1 id="work-title" className="work-hero__title">
              {work.title}
            </h1>

            <div className="work-hero__meta">
              <span>{work.year}</span>
              <span aria-hidden="true">/</span>
              <span>{work.category}</span>
            </div>
          </div>

          <div className="work-hero__index" aria-label="Portfolio project index">
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
            <span aria-hidden="true">/</span>
            <span>{String(portfolioData.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          02. PROJECT INTRO / INFORMATION
      ========================================================== */}
      <section className="work-intro section-light">
        <div className="page-shell work-intro__grid">
          <div className="work-intro__about">
            <p className="eyebrow">About the Work</p>
            <p className="work-intro__description">
              {work.description ||
                "A curated visual study built around presence, character and refined editorial direction."}
            </p>
          </div>

          <div className="work-intro__details">
            <p className="eyebrow">Project Info</p>

            <dl className="project-meta">
              <div>
                <dt>Category</dt>
                <dd>{work.category}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{work.year}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>Model / Creative Direction / Photography / Design</dd>
              </div>
            </dl>
          </div>

          <figure className="work-intro__detail-image">
            <img
              src={galleryImages[1] ?? work.image}
              alt="Editorial detail"
              loading="lazy"
            />
            <figcaption>
              <span>Simple styles.</span>
              <span>Bigger stories.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================
          03. PROJECT GALLERY
      ========================================================== */}
      <section className="work-gallery section-light" aria-label="Project gallery">
        <div className="page-shell work-gallery__grid">
          <figure className="work-gallery__main">
            <img
              src={galleryImages[0] ?? work.image}
              alt={`${work.title} editorial image 01`}
              loading="lazy"
            />
            <figcaption className="media-label">
              <span className="media-play" aria-hidden="true">
                ▷
              </span>
              Watch Full Campaign
            </figcaption>
          </figure>

          <div className="work-gallery__side">
            <figure>
              <img
                src={galleryImages[1] ?? work.image}
                alt={`${work.title} editorial image 02`}
                loading="lazy"
              />
            </figure>
            <figure>
              <img
                src={galleryImages[2] ?? work.image}
                alt={`${work.title} editorial image 03`}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* =========================================================
          04. MORE PROJECTS
          Approved related-works design, kept inside Work Detail.
      ========================================================== */}
      <section className="more-projects section-light" aria-labelledby="more-projects-title">
        <div className="page-shell">
          <div className="more-projects__heading">
            <div>
              <p className="eyebrow">Related Works</p>
              <h2 id="more-projects-title">More Projects</h2>
              <p className="more-projects__intro">
                Explore more visual stories, each crafted with intention,
                character and a refined editorial approach.
              </p>
            </div>

            <div className="more-projects__control" aria-hidden="true">
              <span>←</span>
              <span>→</span>
              <small>
                {String(currentIndex + 1).padStart(2, "0")} / {String(portfolioData.length).padStart(2, "0")}
              </small>
            </div>
          </div>

          <div className="more-projects__grid">
            {moreProjects.map((project, index) => (
              <Link
                key={project.id ?? project.slug}
                to={`/portfolio/${project.slug}`}
                className="more-project-card"
              >
                <div className="more-project-card__media">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                  />
                  <div className="more-project-card__shade" />
                </div>

                <div className="more-project-card__content">
                  <span className="more-project-card__category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <div className="more-project-card__footer">
                    <span>{project.year}</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          05. PREVIOUS / NEXT
      ========================================================== */}
      <nav className="work-pagination section-light" aria-label="Portfolio navigation">
        <div className="page-shell work-pagination__grid">
          <Link to={`/portfolio/${previousWork.slug}`} className="project-nav-card">
            <span className="project-nav-card__direction">← Previous Work</span>
            <span className="project-nav-card__title">{previousWork.title}</span>
            <span className="project-nav-card__meta">
              {previousWork.category} / {previousWork.year}
            </span>
          </Link>

          <Link
            to={`/portfolio/${nextWork.slug}`}
            className="project-nav-card project-nav-card--next"
          >
            <span className="project-nav-card__direction">Next Work →</span>
            <span className="project-nav-card__title">{nextWork.title}</span>
            <span className="project-nav-card__meta">
              {nextWork.category} / {nextWork.year}
            </span>
          </Link>
        </div>
      </nav>

      {/* =========================================================
          06. BOOKING CTA
      ========================================================== */}
 
      <section className="work-booking-cta">
        {/* Full section background image */}
        <div className="work-booking-cta__media" aria-hidden="true">
          <img
            src={ctaImage}
            alt=""
            className="work-booking-cta__image"
          />
        </div>

        {/* Dark overlay */}
        <div className="work-booking-cta__overlay" aria-hidden="true" />

        {/* Content sits above image */}
        <div className="page-shell work-booking-cta__inner">
          <p className="eyebrow eyebrow--light">
            Let's Create Together
          </p>

          <div className="work-booking-cta__row">
            <div className="work-booking-cta__content">
              <h2>
                <span>Have a Project</span>
                <span>in Mind?</span>
              </h2>

              <p>
                I'm open to new collaborations, creative ideas and meaningful
                visual stories.
              </p>

              <Link to="/book" className="cta-link">
                Get in Touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorkDetail;
