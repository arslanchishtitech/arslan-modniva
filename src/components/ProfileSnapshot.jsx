import './ProfileSnapshot.css'

const ProfileSnapshot = () => {
  return (
    <section className="profile-snapshot" id="profile">
      <div className="profile-label">
        PROFILE
      </div>

      <div className="profile-main">
        <div className="profile-heading">
          <h2>
            ARSLAN
            <span>MODNIVA</span>
          </h2>

          <p className="profile-location">
            Pakistan-based emerging fashion model
          </p>
        </div>

        <div className="profile-details">
          <div className="profile-block">
            <span className="profile-block-title">
              FOCUS
            </span>

            <p>Fashion</p>
            <p>Editorial</p>
            <p>Commercial</p>
          </div>

          <div className="profile-block">
            <span className="profile-block-title">
              DEVELOPMENT
            </span>

            <p>Posture & Presence</p>
            <p>Walking</p>
            <p>Posing</p>
            <p>Expression</p>
            <p>Camera Awareness</p>
          </div>
        </div>
      </div>

      <div className="profile-footer">
        <p>
          Building toward professional and international
          opportunities through structured training,
          consistency and visual presence.
        </p>

        <a href="#about">
          VIEW FULL PROFILE →
        </a>
      </div>
    </section>
  )
}

export default ProfileSnapshot