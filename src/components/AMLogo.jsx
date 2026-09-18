import './AMLogo.css'
import amLogo from '../assets/brand/AM-monogram.svg'

const AMLogo = ({ className = '' }) => {
  return (
    <a
      href="/"
      className={`am-logo ${className}`}
      aria-label="Arslan Modniva — Home"
    >
      <img
        src={amLogo}
        alt="AM"
      />
    </a>
  )
}

export default AMLogo