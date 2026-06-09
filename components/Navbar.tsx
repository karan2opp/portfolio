'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Experience', 'Contributions', 'Blog']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1e1e1e]' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="text-white font-body font-medium tracking-[0.15em] text-sm uppercase">
            Karan
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-mono tracking-widest text-[#888] hover:text-white transition-colors duration-200 uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-1">
          {/* X / Twitter */}
          <a
            href="https://x.com/karanNagpa47270/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#666] hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/karan2opp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#666] hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/karan-kumar2opp/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#666] hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Mobile menu */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="flex flex-col gap-1">
              <span className={`block w-5 h-px bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1e1e1e]">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-xs font-mono tracking-widest text-[#888] hover:text-white transition-colors uppercase border-b border-[#1a1a1a]"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
