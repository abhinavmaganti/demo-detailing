'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            {/* Logo mark */}
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute inset-0.5 rounded-full bg-obsidian flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path
                    d="M3 12C3 7.5 7 4 12 4C17 4 21 7.5 21 12"
                    stroke="url(#logoGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 15L5.5 13H18.5L19 15L20 17H4L5 15Z"
                    fill="url(#logoGrad)"
                    opacity="0.9"
                  />
                  <path d="M7 17V19H9V17" stroke="url(#logoGrad)" strokeWidth="1.5" />
                  <path d="M15 17V19H17V17" stroke="url(#logoGrad)" strokeWidth="1.5" />
                  <defs>
                    <linearGradient id="logoGrad" x1="3" y1="4" x2="21" y2="19" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <span className="font-display text-2xl tracking-widest text-white leading-none">
                DELUXE
              </span>
              <span
                className="block text-[9px] tracking-[0.35em] font-body font-medium uppercase"
                style={{ color: '#06B6D4' }}
              >
                DETAILS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link text-sm font-medium tracking-wider text-silver-400 hover:text-white transition-colors duration-200 uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('#contact')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-accent-blue to-accent-cyan text-white hover:shadow-glow-blue hover:scale-105 active:scale-95"
            >
              Book Now
            </button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'w-0 opacity-0' : 'w-4'
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                  menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-obsidian/90 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-navy-900 border-l border-white/5 flex flex-col pt-24 pb-10 px-8 transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left py-4 text-xl font-display tracking-widest text-silver-300 hover:text-white border-b border-white/5 transition-colors duration-200"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => handleNav('#contact')}
            className="mt-auto w-full py-4 rounded-full font-semibold tracking-wider uppercase text-sm bg-gradient-to-r from-accent-blue to-accent-cyan text-white"
          >
            Book Now
          </button>
          <div className="mt-6 text-center">
            <a
              href="tel:7326770331"
              className="text-sm text-silver-500 hover:text-accent-cyan transition-colors"
            >
              (732) 677-0331
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
