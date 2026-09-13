import './PresenceInMotion.css'
import motionImage from '../assets/images/motion-model.jpg'

const PresenceInMotion = () => {
  return (
    <section className="presence" id="about">

      <div className="presence-header">
        <p className="presence-label">PRESENCE IN MOTION</p>

        <h2>
          Movement
          <span>with intention.</span>
        </h2>
      </div>

      <div className="presence-image-wrapper">
        <img
          src={motionImage}
          alt="Arslan Modniva — movement and presence"
          className="presence-image"
        />
      </div>

      <div className="presence-bottom">

        <div className="presence-skills">
          <span>POSTURE</span>
          <span>WALK</span>
          <span>POSE</span>
          <span>EXPRESSION</span>
          <span>CAMERA AWARENESS</span>
          <span>PRESENCE</span>
        </div>

        <div className="presence-description">
          <p>
            Building control, natural presence and confidence
            through structured training, consistent practice
            and repetition.
          </p>

          <a href="#contact">
            DISCUSS A PROJECT →
          </a>
        </div>

      </div>

    </section>
  )
}

export default PresenceInMotion