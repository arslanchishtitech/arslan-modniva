import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import AMLogo from './AMLogo'

const Navbar = () => {
  const location = useLocation()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navItems = [
    { label: 'WORK', path: '/portfolio' },
    { label: 'DIGITALS', path: '/digitals' },
    { label: 'PROFILE', path: '/profile' },
    { label: 'COMP CARD', path: '/comp-card' },
    { label: 'BOOK ARSLAN', path: '/book' },
  ]

  return (
    <nav
      className={`navbar ${
        isScrolled ? 'navbar-scrolled' : 'navbar-top'
      }`}
    >
      <div className="navbar-inner">

        {/* Logo */}
        <AMLogo className="navbar-logo" />

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar-actions">

          {/* Search */}
          <button
            type="button"
            className="navbar-search"
            aria-label="Search"
          >
            <span className="search-icon" />
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            className={`navbar-menu-toggle ${
              isMenuOpen ? 'is-open' : ''
            }`}
            onClick={() =>
              setIsMenuOpen((previous) => !previous)
            }
            aria-label={
              isMenuOpen ? 'Close menu' : 'Open menu'
            }
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar-mobile-menu ${
          isMenuOpen ? 'is-open' : ''
        }`}
      >
        <div className="navbar-mobile-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              <span>{item.label}</span>
              <span className="navbar-mobile-arrow">↗</span>
            </NavLink>
          ))}
        </div>

        <p className="navbar-mobile-footer">
          ARSLAN MODNIVA
        </p>
      </div>
    </nav>
  )
}

export default Navbar