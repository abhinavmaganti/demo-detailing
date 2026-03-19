'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    name: 'Exterior Wash',
    price: 60,
    tag: 'Popular',
    tagColor: 'from-accent-blue to-accent-cyan',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke="url(#g1)" strokeWidth="1.5" opacity="0.3" />
        <path d="M10 28C10 28 14 22 24 22C34 22 38 28 38 28" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 32C16 32 18 28 24 28C30 28 32 32 32 32" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 24L40 24" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="24" cy="24" r="4" stroke="url(#g1)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="g1" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    includes: [
      'Foam pre-wash & rinse',
      'Hand wash — every panel',
      'Wheel cleaning & polish',
      'Glass cleaning inside & out',
      'Hand polish & wax (1–2 months)',
    ],
  },
  {
    name: 'Full Detail',
    price: 120,
    tag: 'Best Value',
    tagColor: 'from-violet-500 to-accent-blue',
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 30L12 18H36L40 30" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 34L8 30H40L42 34" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 34V38H16V34" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 34V38H38V34" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 22L18 14H30L32 22" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="16" cy="30" r="2" fill="url(#g2)" />
        <circle cx="32" cy="30" r="2" fill="url(#g2)" />
        <path d="M24 10L25.5 14H22.5L24 10Z" fill="url(#g2)" opacity="0.8" />
        <defs>
          <linearGradient id="g2" x1="6" y1="10" x2="42" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    includes: [
      'Everything in Exterior Wash',
      'Full interior surface clean',
      'Complete vacuum — all surfaces',
      'Leather care & conditioning',
      'Leather & surface polish',
    ],
  },
  {
    name: 'Interior Clean',
    price: 60,
    tag: 'Refresh',
    tagColor: 'from-accent-cyan to-teal-400',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="14" width="28" height="22" rx="3" stroke="url(#g3)" strokeWidth="1.5" opacity="0.4" />
        <path d="M14 20H34" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 26H28" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 32H22" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="32" r="6" stroke="url(#g3)" strokeWidth="1.5" opacity="0.7" />
        <path d="M33 32L35 34L39 30" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g3" x1="10" y1="14" x2="38" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      </svg>
    ),
    includes: [
      'All surface wipe-down',
      'Full vacuum — seats, floor, trunk',
      'Interior glass cleaning',
      'Leather care & conditioning',
      'Dashboard & trim polish',
    ],
  },
];

const extras = [
  {
    name: 'Clay Bar Treatment',
    price: 15,
    desc: 'Removes embedded contaminants for a glass-smooth finish.',
    icon: '◈',
  },
  {
    name: 'Engine Bay Clean',
    price: 10,
    desc: 'Degrease and detail under the hood for that showroom look.',
    icon: '⚙',
  },
];

function ServiceCard({ service, index }) {
  return (
    <div
      className={`reveal delay-${(index + 1) * 100} gradient-border relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover ${
        service.featured
          ? 'ring-1 ring-accent-blue/30'
          : ''
      }`}
    >
      {/* Featured glow */}
      {service.featured && (
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent-blue/10 to-transparent pointer-events-none" />
      )}

      <div className="relative z-10 p-8">
        {/* Tag */}
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase mb-6 bg-gradient-to-r ${service.tagColor} bg-clip-text`}
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span
            className={`bg-gradient-to-r ${service.tagColor} bg-clip-text`}
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {service.tag}
          </span>
        </div>

        {/* Icon */}
        <div className="mb-6 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 w-fit">
          {service.icon}
        </div>

        {/* Name & price */}
        <h3 className="font-display text-3xl tracking-wide text-white mb-1">
          {service.name.toUpperCase()}
        </h3>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-5xl font-display text-white">${service.price}</span>
          <span className="text-silver-500 text-sm font-body">/ visit</span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-accent-blue/30 to-transparent mb-6" />

        {/* Includes */}
        <ul className="space-y-3 mb-8">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-silver-400">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-cyan"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Book button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`block w-full text-center py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
            service.featured
              ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white hover:shadow-glow-blue hover:scale-[1.02]'
              : 'glass-card border border-white/10 text-silver-300 hover:border-accent-blue/40 hover:text-white'
          }`}
        >
          Book This Service
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              rgba(59,130,246,0.5) 0px,
              rgba(59,130,246,0.5) 1px,
              transparent 1px,
              transparent 40px
            )
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-blue" />
            <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-medium">
              What We Offer
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-blue" />
          </div>
          <h2 className="reveal delay-100 font-display text-[clamp(40px,7vw,80px)] tracking-wide text-white leading-none mb-4">
            OUR SERVICES
          </h2>
          <p className="reveal delay-200 text-silver-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Every detail matters. We offer a range of premium packages designed to keep
            your vehicle looking showroom-ready — wherever you are.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>

        {/* Extras */}
        <div className="reveal delay-400">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl tracking-widest text-silver-400 uppercase">
              Add-On Services
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {extras.map((extra) => (
              <div
                key={extra.name}
                className="glass-card rounded-2xl p-5 border border-white/5 hover:border-accent-blue/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-accent-cyan text-lg">{extra.icon}</span>
                    <span className="font-semibold text-white text-sm">{extra.name}</span>
                  </div>
                  <span className="font-display text-2xl text-accent-blue">+${extra.price}</span>
                </div>
                <p className="text-xs text-silver-500 ml-7">{extra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
