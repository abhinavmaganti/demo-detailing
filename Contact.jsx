'use client';

import { useState, useEffect, useRef } from 'react';

const services = [
  'Full Detail — $120',
  'Exterior Wash — $60',
  'Interior Clean — $60',
  'Full Detail + Clay Bar — $135',
  'Full Detail + Engine Bay — $130',
  'Other / Custom',
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto URL
    const subject = encodeURIComponent(
      `Booking Request — ${formState.service || 'Car Detail'} — ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\nService: ${formState.service}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:kaseygatchalian@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 bg-navy-950">
      {/* Decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #3B82F6, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-blue" />
            <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-medium">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-blue" />
          </div>
          <h2 className="reveal delay-100 font-display text-[clamp(40px,7vw,80px)] tracking-wide text-white leading-none mb-4">
            BOOK YOUR DETAIL
          </h2>
          <p className="reveal delay-200 text-silver-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Ready to get that showroom shine? Reach out and we'll get you scheduled —
            typically within 24–48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Contact info column */}
          <div className="lg:col-span-2 reveal-left">
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:7326770331"
                className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 group-hover:from-accent-blue/30 transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-silver-500 mb-0.5">Call or Text</p>
                  <p className="font-semibold text-white text-lg group-hover:text-accent-cyan transition-colors">(732) 677-0331</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:kaseygatchalian@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 group-hover:from-accent-blue/30 transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs tracking-widest uppercase text-silver-500 mb-0.5">Email Us</p>
                  <p className="font-semibold text-white text-sm group-hover:text-accent-cyan transition-colors truncate">
                    kaseygatchalian@gmail.com
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/deluxe._details"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 hover:border-pink-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-500/10 group-hover:from-pink-500/30 transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-silver-500 mb-0.5">Instagram</p>
                  <p className="font-semibold text-white group-hover:text-pink-400 transition-colors">
                    @deluxe._details
                  </p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/deluxe.details"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-blue-400/10 group-hover:from-blue-600/30 transition-all duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-silver-500 mb-0.5">Facebook</p>
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    @deluxe.details
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-silver-500 mb-0.5">Service Area</p>
                  <p className="font-semibold text-white">Central New Jersey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 reveal-right delay-200">
            <div className="gradient-border p-1 rounded-2xl">
              <div className="bg-navy-900 rounded-[14px] p-6 sm:p-8">
                {!submitted ? (
                  <>
                    <h3 className="font-display text-2xl tracking-widest text-white mb-2">
                      REQUEST A BOOKING
                    </h3>
                    <p className="text-silver-500 text-sm mb-8">
                      Fill out the form below and we'll get back to you within a few hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs tracking-widest uppercase text-silver-500 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full bg-navy-800 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder-silver-500/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-xs tracking-widest uppercase text-silver-500 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="(732) 555-0000"
                            className="w-full bg-navy-800 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder-silver-500/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs tracking-widest uppercase text-silver-500 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@email.com"
                          className="w-full bg-navy-800 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder-silver-500/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-xs tracking-widest uppercase text-silver-500 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          required
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full bg-navy-800 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-200 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-navy-800">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-navy-800">{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs tracking-widest uppercase text-silver-500 mb-2">
                          Message / Vehicle Info
                        </label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us your car make/model, preferred date/time, or any special requests…"
                          className="w-full bg-navy-800 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder-silver-500/50 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all duration-200 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group w-full py-4 rounded-xl font-semibold tracking-wider uppercase text-sm text-white transition-all duration-300 hover:shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Send Booking Request
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>

                      <p className="text-center text-xs text-silver-500">
                        Or call/text us directly at{' '}
                        <a href="tel:7326770331" className="text-accent-cyan hover:underline font-medium">
                          (732) 677-0331
                        </a>
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-3xl tracking-widest text-white mb-3">REQUEST SENT</h3>
                    <p className="text-silver-400 text-sm max-w-xs mx-auto mb-6">
                      Thanks! Your email client should have opened. We'll be in touch shortly to confirm your booking.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-accent-cyan text-sm hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
