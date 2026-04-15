import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">Auto Dealer <strong>Pro</strong></span>
        </a>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#android" onClick={() => setOpen(false)}>Android</a>
          <a
            href="https://apps.apple.com/us/app/auto-dealer-pro/id6761709277?itscg=30200&itsct=apps_box_link&mttnsubad=6761709277"
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta"
            onClick={() => setOpen(false)}
          >
            Download Free
          </a>
        </nav>

        <button
          className={`header__burger ${open ? 'header__burger--open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
