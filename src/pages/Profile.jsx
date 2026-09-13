import './Profile.css'

const Profile = () => {
  return (
    <main className="profile-page">

      <section className="profile-hero">
        <p className="profile-label">
          PROFILE
        </p>

        <h1>
          ARSLAN
          <span>MODNIVA</span>
        </h1>

        <p className="profile-intro">
          Pakistan-based emerging fashion model
          building toward professional and
          international opportunities.
        </p>
      </section>

      <section className="profile-about" id="about">
        <div className="profile-section-label">
          ABOUT
        </div>

        <div className="profile-about-content">
          <h2>
            Building presence
            <span>through discipline.</span>
          </h2>

          <p>
            Arslan Modniva is an emerging fashion model
            developing through structured training,
            consistent practice and a strong focus on
            natural presence, movement and visual
            expression.
          </p>
        </div>
      </section>

      <section className="profile-details">
        <div className="profile-section-label">
          MODEL DETAILS
        </div>

        <div className="profile-details-grid">

          <div>
            <span>BASE</span>
            <p>Pakistan</p>
          </div>

          <div>
            <span>FOCUS</span>
            <p>Fashion</p>
            <p>Editorial</p>
            <p>Commercial</p>
          </div>

          <div>
            <span>AVAILABILITY</span>
            <p>Castings</p>
            <p>Editorials</p>
            <p>Commercial Projects</p>
            <p>Creative Collaborations</p>
          </div>

        </div>
      </section>

      <section className="profile-development">
        <div className="profile-section-label">
          DEVELOPMENT
        </div>

        <div className="development-content">
          <h2>
            Skills in
            <span>progress.</span>
          </h2>

          <div className="development-list">
            <p>Posture & Presence</p>
            <p>Walking</p>
            <p>Stopping</p>
            <p>Posing</p>
            <p>Expression</p>
            <p>Camera Awareness</p>
            <p>Professional Communication</p>
            <p>Casting Readiness</p>
          </div>
        </div>
      </section>

      <section className="profile-cta">
        <p>
          AVAILABLE FOR CASTINGS, EDITORIALS
          AND CREATIVE COLLABORATIONS.
        </p>

        <a href="/contact">
          GET IN TOUCH →
        </a>
      </section>

    </main>
  )
}

export default Profile