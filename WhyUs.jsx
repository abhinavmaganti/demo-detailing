'use client';

import { useEffect, useRef } from 'react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 6L28 16H40L30 22L34 34L24 28L14 34L18 22L8 16H20L24 6Z" stroke="url(#fw1)" strokeWidth="1.5" strokeLinejoin="round" />
        <defs>
          <linearGradient id="fw1" x1="8" y1="6" x2="40" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Premium Products Only',
    desc: 'We use professional-grade, pH-balanced solutions and industry-leading waxes that protect and shine. No shortcuts, ever.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="16" stroke="url(#fw2)" strokeWidth="1.5" opacity="0.4" />
        <path d="M24 12V24L32 28" stroke="url(#fw2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="fw2" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'We Come to You',
    desc: 'Mobile service means zero commute, zero waiting. Schedule at your home, office, or gym — we show up on time.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M12 36L14 20H34L36 36H12Z" stroke="url(#fw3)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 20C18 20 18 12 24 12C30 12 30 20 30 20" stroke="url(#fw3)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 28C20 28 21 32 24 32C27 32 28 28 28 28" stroke="url(#fw3)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="fw3" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Meticulous Attention',
    desc: "Every panel, every seam, every inch gets the same care. We don't move on until the job is done right.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24" stroke="url(#fw4)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 8L36 12M36 12L40 8M36 12V16" stroke="url(#fw4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 24L22 28L32 18" stroke="url(#fw4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="fw4" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Flexible Scheduling',
    desc: 'Weekdays, weekends, early mornings — we work around your schedule, not the other way around.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 10L26.5 17H34L28 21.5L30.5 28.5L24 24L17.5 28.5L20 21.5L14 17H21.5L24 10Z" stroke="url(#fw5)" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="36" r="4" stroke="url(#fw5)" strokeWidth="1.5" />
        <path d="M24 28V32" stroke="url(#fw5)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="fw5" x1="14" y1="10" x2="34" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Satisfaction Guaranteed',
    desc: "Not happy with the result? We'll make it right. Your satisfaction is the only standard we work to.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M10 36L14 14L24 8L34 14L38 36" stroke="url(#fw6)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 36V26H30V36" stroke="url(#fw6)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 20H28" stroke="url(#fw6)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 14V18" stroke="url(#fw6)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="fw6" x1="10" y1="8" x2="38" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Locally Owned & Trusted',
    desc: 'Based right here in Central New Jersey. We\'re your neighbors — and we take pride in every car we touch.',
  },
];

const stats = [
  { value: '500+', label: 'Cars Detailed' },
  { value: '5★', label: 'Average Rating' },
  { value: '2h', label: 'Avg Service Time' },
  { value: '100%', label: 'Mobile' },
];

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="relative py-24 lg:py-32 bg-obsidian">
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-blue" />
            <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-medium">
              The Deluxe Difference
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-blue" />
          </div>
          <h2 className="reveal delay-100 font-display text-[clamp(40px,7vw,80px)] tracking-wide text-white leading-none mb-4">
            WHY CHOOSE US
          </h2>
          <p className="reveal delay-200 text-silver-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We're not just another car wash. We're a premium detailing service that treats
            every vehicle like it's our own.
          </p>
        </div>

        {/* Stats strip */}
        <div className="reveal delay-200 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl glass-card border border-white/5"
            >
              <div
                className="font-display text-4xl mb-1"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase text-silver-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal delay-${(i % 3 + 1) * 100} group p-6 rounded-2xl glass-card border border-white/5 hover:border-accent-blue/20 transition-all duration-400 hover:-translate-y-1 hover:shadow-card-hover`}
            >
              <div className="mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 w-fit">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-white text-base mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-silver-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
