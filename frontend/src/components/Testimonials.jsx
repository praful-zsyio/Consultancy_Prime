import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/constants';
import { fadeUp, staggerContainer, transition, viewport } from '../utils/animations';

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#ec2029" style={{ color: '#ec2029' }} aria-hidden="true" />
      ))}
    </div>
  );
}

function Avatar({ initials, size = 44 }) {
  return (
    <div style={{ width: `${size}px`, height: `${size}px`, borderRadius: '50%', background: 'linear-gradient(135deg,#ec2029,#c4181f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#fff', fontSize: `${Math.round(size * 0.3)}px`, flexShrink: 0 }}>
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="section section-divider"
      style={{ background: '#000' }}
      aria-labelledby="testimonials-heading"
    >
      {/* BG glow */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(236,32,41,0.03), transparent)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span variants={fadeUp} transition={transition} className="eyebrow">Client Stories</motion.span>
          <motion.h2
            id="testimonials-heading"
            variants={fadeUp} transition={{ ...transition, delay: 0.06 }}
            className="section-heading" style={{ textAlign: 'center' }}
          >
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} transition={{ ...transition, delay: 0.12 }}
            className="section-sub" style={{ textAlign: 'center' }}
          >
            Hear from the organizations we've helped hire better.
          </motion.p>
        </motion.div>

        {/* Featured carousel */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 3rem' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{   opacity: 0, y: -20 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="card"
              style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              <Quote size={32} style={{ color: '#ec2029', opacity: 0.25, marginBottom: '1.25rem' }} aria-hidden="true" />
              <Stars count={TESTIMONIALS[current].rating} />
              <blockquote style={{ color: '#fff', fontSize: 'clamp(15px,2.5vw,18px)', fontWeight: 500, lineHeight: 1.7, marginBottom: '1.75rem' }}>
                "{TESTIMONIALS[current].quote}"
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Avatar initials={TESTIMONIALS[current].avatar} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>{TESTIMONIALS[current].name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px' }}>{TESTIMONIALS[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
            {/* Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current ? 'true' : 'false'}
                  style={{ height: '8px', width: i === current ? '24px' : '8px', borderRadius: '50px', border: 'none', cursor: 'pointer', background: i === current ? '#ec2029' : 'rgba(255,255,255,0.20)', transition: 'all 0.3s' }}
                />
              ))}
            </div>
            {/* Arrows */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {[{ fn: prev, label: 'Previous', Icon: ChevronLeft }, { fn: next, label: 'Next', Icon: ChevronRight }].map(({ fn, label, Icon }) => (
                <motion.button
                  key={label}
                  onClick={fn}
                  aria-label={`${label} testimonial`}
                  whileTap={{ scale: 0.9 }}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: 'rgba(255,255,255,0.60)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.60)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                >
                  <Icon size={18} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail cards grid */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '1rem' }}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              variants={fadeUp}
              transition={{ ...transition, delay: i * 0.07 }}
              onClick={() => setCurrent(i)}
              aria-pressed={current === i}
              style={{
                textAlign:    'left',
                padding:      '1.25rem',
                borderRadius: '16px',
                border:       `1px solid ${current === i ? 'rgba(236,32,41,0.50)' : 'rgba(255,255,255,0.06)'}`,
                background:   current === i ? 'rgba(236,32,41,0.06)' : 'rgba(255,255,255,0.02)',
                cursor:       'pointer',
                transition:   'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => { if (current !== i) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; }}}
              onMouseLeave={(e) => { if (current !== i) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                <Avatar initials={t.avatar} size={36} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '12px' }}>{t.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.40)', fontSize: '10px', lineHeight: 1.3 }}>{t.role}</div>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                "{t.quote}"
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 480px) { .testimonials-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (min-width: 1024px){ .testimonials-grid { grid-template-columns: repeat(4,1fr) !important; } }
      `}</style>
    </section>
  );
}
