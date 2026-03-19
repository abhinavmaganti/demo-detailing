'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY;
        const bg = heroRef.current.querySelector('.hero-bg');
        if (bg) bg.style.transform = `translateY(${y * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="hero-bg absolute inset-0 will-change-transform">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-[#040a18] to-obsidian" />

        {/* Radial glow blobs */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              'radial-gradient(ellipse, #3B82F6 0%, #06B6D4 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse, #3B82F6 0%, transparent 70%)',
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="absolute top-0 right-0 w-px h-full origin-top-right"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.3) 30%, transparent)',
              transform: 'translateX(-25vw) rotate(15deg) scaleY(2)',
            }}
          />
          <div
            className="absolute top-0 right-0 w-px h-full"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(6,182,212,0.2) 50%, transparent)',
              transform: 'translateX(-15vw) rotate(15deg) scaleY(2)',
            }}
          />
        </div>

        {/* Bottom fade to dark */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-obsidian to-transparent" />
      </div>

      {/* Floating badge */}
      <div className="absolute top-28 right-6 sm:right-12 lg:right-20 animate-[fadeIn_1.2s_ease_0.8s_both]">
        <div className="glass-card rounded-2xl px-4 py-3 border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="text-xs font-medium tracking-wider text-silver-400 uppercase">Now Booking</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Pre-headline */}
          <div
            className="inline-flex items-center gap-3 mb-6"
            style={{ animation: 'fadeUp 0.7s ease 0.1s both' }}
          >
            <div className="h-px w-10 bg-gradient-to-r from-accent-blue to-accent-cyan" />
            <span className="text-xs tracking-[0.3em] uppercase font-medium text-accent-cyan">
              Central New Jersey
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display text-[clamp(72px,12vw,160px)] leading-none tracking-wide text-white mb-2"
            style={{ animation: 'fadeUp 0.7s ease 0.2s both' }}
          >
            DELUXE
          </h1>
          <h1
            className="font-display text-[clamp(72px,12vw,160px)] leading-none tracking-wide mb-8"
            style={{
              animation: 'fadeUp 0.7s ease 0.3s both',
              background: 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 50%, #7dd3fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            DETAILS
          </h1>

          {/* Tagline */}
          <p
            className="text-xl sm:text-2xl font-light text-silver-300 mb-3 tracking-wide"
            style={{ animation: 'fadeUp 0.7s ease 0.4s both' }}
          >
            We bring the shine to you.
          </p>
          <p
            className="text-sm sm:text-base text-silver-500 max-w-xl leading-relaxed mb-10"
            style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}
          >
            Premium mobile car detailing — at your home, office, or wherever you need us.
            No drive. No wait. Just a flawless finish every time.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: 'fadeUp 0.7s ease 0.6s both' }}
          >
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-blue active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              }}
            >
              <span className="relative z-10">Book Your Detail</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
                }}
              />
            </button>
            <button
              onClick={scrollToServices}
              className="group px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm text-silver-300 border border-white/15 hover:border-accent-blue/50 hover:text-white transition-all duration-300 glass-card"
            >
              <span className="flex items-center gap-2">
                View Services
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust signals */}
          <div
            className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-white/5"
            style={{ animation: 'fadeUp 0.7s ease 0.7s both' }}
          >
            {[
              { label: 'Mobile Service', icon: '🚗' },
              { label: 'Eco-Friendly Products', icon: '✦' },
              { label: '5-Star Quality', icon: '★' },
              { label: 'Insured & Trusted', icon: '✓' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-accent-cyan text-xs">{item.icon}</span>
                <span className="text-xs tracking-wider uppercase text-silver-500 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.3em] uppercase text-silver-500">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-silver-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
