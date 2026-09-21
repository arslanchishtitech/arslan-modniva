import { Link } from 'react-router-dom'
import './ProfileSnapshot.css'

import profileSnapshotImage from '../assets/images/profile-snapshot.jpg'

const ProfileSnapshot = () => {
  return (
    <section className="profile-snapshot-section">
      <div className="profile-snapshot-container">

        {/* LEFT — INTRO + MODEL DETAILS */}
        <div className="profile-snapshot-left">

          <div className="profile-snapshot-heading">
            <div className="profile-snapshot-meta">
              <span>04 / 05</span>
              <span className="profile-snapshot-meta-line" />
            </div>

            <h2 className="profile-snapshot-title">
              <span>PROFILE</span>
              <span>SNAPSHOT</span>
            </h2>

            <p className="profile-snapshot-description">
              A quick look at who I am — my background,
              key details and what drives me as a model.
            </p>

            <Link
              to="/profile"
              className="profile-snapshot-link"
            >
              <span>VIEW FULL PROFILE</span>
              <span className="profile-snapshot-arrow">→</span>
            </Link>
          </div>

          <div className="profile-snapshot-details">

            <div className="profile-snapshot-name">
              <span>ARSLAN MODNIVA</span>
              <small>EMERGING FASHION MODEL</small>
            </div>

            <div className="profile-snapshot-measurements">

              <div className="profile-measurement">
                <span>HEIGHT</span>
                <strong>6'0"</strong>
              </div>

              <div className="profile-measurement">
                <span>CHEST</span>
                <strong>38"</strong>
              </div>

              <div className="profile-measurement">
                <span>WAIST</span>
                <strong>31"</strong>
              </div>

              <div className="profile-measurement">
                <span>HIPS</span>
                <strong>38"</strong>
              </div>

            </div>

            <div className="profile-snapshot-secondary-details">
              <span>SHOES&nbsp; 44</span>
              <span className="detail-separator">|</span>
              <span>HAIR&nbsp; BLACK</span>
              <span className="detail-separator">|</span>
              <span>EYES&nbsp; DARK BROWN</span>
            </div>

            <div className="profile-snapshot-categories">
              <span>FASHION</span>
              <span>/</span>
              <span>EDITORIAL</span>
              <span>/</span>
              <span>COMMERCIAL</span>
              <span>/</span>
              <span>CASTING</span>
            </div>

          </div>
        </div>

        {/* CENTER — PORTRAIT */}
        <div className="profile-snapshot-image">
          <img
            src={profileSnapshotImage}
            alt="Arslan Modniva"
            loading="lazy"
          />

          <div className="profile-snapshot-image-caption">
            <span>ARSLAN MODNIVA</span>
            <span>EMERGING<br />FASHION MODEL</span>
          </div>
        </div>

        {/* RIGHT — ABOUT */}
        <div className="profile-snapshot-right">

          <div className="profile-snapshot-about">
            <span className="profile-snapshot-about-label">
              ABOUT ME
            </span>

            <p>
              I'm Arslan Modniva, a Pakistan-based fashion
              model with a passion for storytelling through
              presence, movement and expression. My journey
              is driven by discipline, growth and a commitment
              to becoming a versatile, professional model on
              the international stage.
            </p>

            <Link
              to="/profile"
              className="profile-snapshot-more"
            >
              <span>VIEW MORE</span>
              <span>→</span>
            </Link>
          </div>

          <Link
            to="/profile"
            className="profile-snapshot-cta"
          >
            <span>
              EXPLORE MY
              <br />
              FULL PROFILE
            </span>

            <span className="profile-snapshot-cta-arrow">
              →
            </span>
          </Link>

        </div>

      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="profile-snapshot-bottom">
        <span className="profile-snapshot-bottom-line" />

        <div className="profile-snapshot-scroll">
          <span>SCROLL</span>
          <span>↓</span>
        </div>

        <span className="profile-snapshot-bottom-line" />
      </div>
    </section>
  )
}

export default ProfileSnapshot