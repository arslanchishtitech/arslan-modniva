import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            ARSLAN
            <span>MODNIVA</span>
          </Link>

          <p>
            Emerging fashion model building toward
            professional and international opportunities.
          </p>
        </div>

        <div className="footer-navigation">
          <span className="footer-heading">
            NAVIGATION
          </span>

          <Link to="/">HOME</Link>
          <Link to="/portfolio">WORK</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/profile#about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="footer-social">
          <span className="footer-heading">
            CONNECT
          </span>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM
          </a>

          <a href="mailto:hello@arslanmodniva.com">
            EMAIL
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ARSLAN MODNIVA</p>
        <p>PAKISTAN → INTERNATIONAL</p>
      </div>

    </footer>
  )
}

export default Footer