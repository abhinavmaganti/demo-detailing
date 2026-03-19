'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

// Using high-quality Unsplash car images
const galleryItems = [
  {
    id: 1,
    label: 'Exterior Detail',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    beforeAlt: 'Car before exterior detail',
    afterAlt: 'Car after exterior detail',
  },
  {
    id: 2,
    label: 'Interior Clean',
    before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    beforeAlt: 'Interior before clean',
    afterAlt: 'Interior after clean',
  },
  {
    id: 3,
    label: 'Full Detail',
    before: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80',
    beforeAlt: 'Car before full detail',
    afterAlt: 'Car after full detail',
  },
];

function BeforeAfterSlider({ before, after, beforeAlt, afterAlt, label }) {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const updateSlider = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      setSliderPos((x / rect.width) * 100);
      setHasInteracted(true);
    },
    []
  );

  // Mouse events
  const onMouseDown = (e) => {
    setDragging(true);
    updateSlider(e.clientX);
  };
  const onMouseMove = useCallback(
    (e) => { if (dragging) updateSlider(e.clientX); },
    [dragging, updateSlider]
  );
  const onMouseUp = () => setDragging(false);

  // Touch events
  const onTouchStart = (e) => {
    setDragging(true);
    updateSlider(e.touches[0].clientX);
  };
  const onTouchMove = useCallback(
    (e) => { if (dragging) updateSlider(e.touches[0].clientX); },
    [dragging, updateSlider]
  );
  const onTouchEnd = () => setDragging(false);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [onMouseMove, onTouchMove]);

  // Auto-animate hint on first load
  useEffect(() => {
    if (hasInteracted) return;
    let timeout;
    const sequence = [50, 30, 70, 50];
    let i = 0;
    const animate = () => {
      if (i < sequence.length) {
        setSliderPos(sequence[i]);
        i++;
        timeout = setTimeout(animate, 800);
      }
    };
    timeout = setTimeout(animate, 1500);
    return () => clearTimeout(timeout);
  }, [hasInteracted]);

  return (
    <div className="rounded-2xl overflow-hidden bg-navy-900 shadow-card group">
      {/* Slider */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] cursor-ew-resize select-none overflow-hidden"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* AFTER (base) */}
        <div className="absolute inset-0">
          <Image
            src={after}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950/30" />
        </div>

        {/* BEFORE (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={before}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Slight desaturate for before effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950/30" style={{ filter: 'saturate(0.6) brightness(0.85)' }} />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-10 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center cursor-ew-resize shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          style={{
            left: `${sliderPos}%`,
            background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
            <path d="M8 12H16M8 12L5 9M8 12L5 15M16 12L19 9M16 12L19 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase bg-black/60 text-silver-400 backdrop-blur-sm">
            Before
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-accent-blue/80 to-accent-cyan/80 text-white backdrop-blur-sm">
            After
          </span>
        </div>
      </div>

      {/* Label */}
      <div className="px-5 py-4 border-t border-white/5 flex items-center justify-between">
        <span className="font-display tracking-widest text-sm text-silver-300 uppercase">{label}</span>
        <span className="text-[10px] tracking-wider text-silver-500 uppercase">Drag to compare</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="relative py-24 lg:py-32 bg-navy-950">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-navy-950 to-obsidian pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-blue" />
            <span className="text-xs tracking-[0.3em] uppercase text-accent-cyan font-medium">
              Real Results
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-blue" />
          </div>
          <h2 className="reveal delay-100 font-display text-[clamp(40px,7vw,80px)] tracking-wide text-white leading-none mb-4">
            THE DIFFERENCE
          </h2>
          <p className="reveal delay-200 text-silver-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            See the Deluxe Details transformation. Drag the slider to compare before
            and after — the results speak for themselves.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`reveal delay-${(i + 1) * 100}`}
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                beforeAlt={item.beforeAlt}
                afterAlt={item.afterAlt}
                label={item.label}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal delay-400 text-center mt-14">
          <p className="text-silver-500 text-sm mb-4">Ready to see these results on your car?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider uppercase bg-gradient-to-r from-accent-blue to-accent-cyan text-white hover:shadow-glow-blue hover:scale-105 transition-all duration-300"
          >
            Book Your Detail
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
