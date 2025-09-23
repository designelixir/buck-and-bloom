"use client"
import { useState } from "react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleToggleMenu = () => setOpen(!open)
  const handleLinkClick = () => setOpen(false)

  return (
    <nav className="mobile-nav">
      <button
        onClick={handleToggleMenu}
        className="mobile-nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        style={{ backgroundImage: "unset", fontSize: "18px" }}
      >
        {open ? "X" : "Menu"}
      </button>

      {open && (
        <div id="mobile-menu" className="mobile-menu flex-end-end flex-column">
          <a href="#markets" onClick={handleLinkClick} className="nav-link">Markets</a>
          <a href="#visit" onClick={handleLinkClick} className="nav-link">Visit Us</a>
          <a href="#about" onClick={handleLinkClick} className="nav-link">About</a>
          <a href="#contact" onClick={handleLinkClick} className="nav-link">Contact</a>
        </div>
      )}
      <style jsx>{`
        .mobile-menu {width: 100vw; border: 2px solid teal; position: absolute;}
      `}</style>
    </nav>
  )
}
