import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/" onClick={closeMenu} aria-label="szilv.online főoldal">
          szilv<span>.</span>online
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Navigáció megnyitása"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={isOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Fő navigáció">
          <a href="#projektek" onClick={closeMenu}>Projektek</a>
          <a href="#rolam" onClick={closeMenu}>Rólam</a>
          <a className="nav-cta" href="mailto:hello@szilv.online" onClick={closeMenu}>Kapcsolat ↗</a>
        </nav>
      </div>
    </header>
  )
}
