export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-white/5">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 30%, rgba(6,182,212,0.4) 70%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan opacity-15" />
                <div className="absolute inset-0.5 rounded-full bg-navy-950 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M3 12C3 7.5 7 4 12 4C17 4 21 7.5 21 12" stroke="url(#footerGrad)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5 15L5.5 13H18.5L19 15L20 17H4L5 15Z" fill="url(#footerGrad)" opacity="0.9" />
                    <path d="M7 17V19H9V17" stroke="url(#footerGrad)" strokeWidth="1.5" />
                    <path d="M15 17V19H17V17" stroke="url(#footerGrad)" strokeWidth="1.5" />
                    <defs>
                      <linearGradient id="footerGrad" x1="3" y1="4" x2="21" y2="19" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-display text-2xl tracking-widest text-white leading-none">DELUXE</span>
                <span className="block text-[9px] tracking-[0.35em] font-body font-medium uppercase text-accent-cyan">DETAILS</span>
              </div>
            </div>

            <p
              className="text-sm font-light leading-relaxed mb-5 max-w-xs"
              style={{ color: '#7A8799' }}
            >
              Premium mobile car detailing in Central New Jersey. We bring the shine
              directly to you — at your home, office, or anywhere in between.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/deluxe._details"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card border border-white/8 flex items-center justify-center text-silver-500 hover:text-pink-400 hover:border-pink-500/30 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/deluxe.details"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card border border-white/8 flex items-center justify-center text-silver-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="tel:7326770331"
                className="w-9 h-9 rounded-lg glass-card border border-white/8 flex items-center justify-center text-silver-500 hover:text-accent-cyan hover:border-accent-blue/30 transition-all duration-200"
                aria-label="Call us"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-silver-500 font-medium mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Why Us', href: '#why-us' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-silver-500 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-silver-500/30 group-hover:bg-accent-cyan group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-silver-500 font-medium mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:7326770331" className="text-sm text-silver-400 hover:text-accent-cyan transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-silver-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (732) 677-0331
                </a>
              </li>
              <li>
                <a href="mailto:kaseygatchalian@gmail.com" className="text-sm text-silver-400 hover:text-accent-cyan transition-colors duration-200 flex items-start gap-2 break-all">
                  <svg className="w-3.5 h-3.5 text-silver-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  kaseygatchalian@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-silver-400">
                <svg className="w-3.5 h-3.5 text-silver-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Central New Jersey
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-silver-500">
            © {year} Deluxe Details. All rights reserved.
          </p>
          <p className="text-xs text-silver-500/60">
            Premium Mobile Car Detailing · Central New Jersey
          </p>
        </div>
      </div>
    </footer>
  );
}
