import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <nav className={`navbar ${isHome ? 'navbar-light' : 'navbar-dark'}`}>
      <NavLink to="/" className="navbar-logo">
        ARSLAN MODNIVA
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/portfolio">
          WORK
        </NavLink>

        <NavLink to="/profile#about">
          PROFILE
        </NavLink>

        <NavLink to="/profile#about">
          ABOUT
        </NavLink>

        <NavLink to="/contact">
          CONTACT
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar