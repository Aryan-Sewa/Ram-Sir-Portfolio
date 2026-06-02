import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Awards', href: '#awards' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md border-b py-3 nav-scrolled'
          : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="#hero" className="font-display text-xl tracking-widest italic nav-logo">
            RD
          </a>

          {/* Dark / Light toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className={`relative w-12 h-6 rounded-full transition-colors duration-400 focus:outline-none toggle-track`}
          >
            {/* Thumb */}
            <span
              className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-400 toggle-thumb ${
                dark ? 'left-1' : 'left-7'
              }`}
            />
            {/* Icons inside track */}
            <span className="absolute left-1.5 top-1 text-[10px] leading-4 select-none">
              {dark ? '🌙' : ''}
            </span>
            <span className="absolute right-1.5 top-1 text-[10px] leading-4 select-none">
              {!dark ? '☀️' : ''}
            </span>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase nav-link transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px nav-hamburger transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px nav-hamburger transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px nav-hamburger transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center gap-6 py-8 nav-mobile-menu">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-[0.2em] uppercase nav-link transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}