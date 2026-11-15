import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Users, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, STATS } from '../data/constants';
import { fadeUp, staggerContainer, transition } from '../utils/animations';

function HeroBg() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(var(--c-grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--c-grid-line) 1px,transparent 1px)',
        backgroundSize: '72px 72px',
      }} />
      {/* Radial glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 85% 55% at 50% -5%, var(--c-hero-glow) 0%, transparent 68%)' }} />
      {/* Orb left */}
      <motion.div
        style={{ position: 'absolute', top: '-160px', left: '-160px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,32,41,0.13) 0%, transparent 72%)', filter: 'blur(72px)' }}
        animate={{ x: [0,50,0], y: [0,36,0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Orb right */}
      <motion.div
        style={{ position: 'absolute', top: '50%', right: '-112px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,32,41,0.09) 0%, transparent 72%)', filter: 'blur(90px)' }}
        animate={{ x: [0,-40,0], y: [0,-48,0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(to bottom, transparent, var(--c-surface-base))' }} />
    </div>
  );
}

function FloatCard({ icon: Icon, label, sub, delay, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position:       'absolute',
        display:        'flex',
        alignItems:     'center',
        gap:            '12px',
        padding:        '12px 16px',
        borderRadius:   '16px',
        border:         '1px solid var(--c-border)',
        background:     'var(--c-surface-card)',
        backdropFilter: 'blur(18px)',
        boxShadow:      '0 8px 30px rgba(0,0,0,0.08)',
        ...style,
      }}
      className="float-card"
    >
      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(236,32,41,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={16} style={{ color: '#ec2029' }} />
      </div>
      <div>
        <p style={{ color: 'var(--c-text-primary)', fontSize: '12px', fontWeight: 700, lineHeight: 1.3, marginBottom: '2px' }}>{label}</p>
        <p style={{ color: 'var(--c-text-muted)', fontSize: '10px', lineHeight: 1 }}>{sub}</p>
      </div>
    </motion.div>
  );
}

function LiveTicker() {
  const events = [
    '✅  50 Industrial Apprentices deployed · Pithampur',
    '⚡  35 Flexi Manpower staff mobilized · Indore',
    '🏆  General Staffing expansion · Dewas',
    '🇮🇳  NAPS & NATS compliance managed · Multi-Industry',
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 16px',
        borderRadius: '50px',
        border: '1px solid var(--c-border)',
        background: 'var(--c-surface-card)',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        maxWidth: '340px'
      }}
    >
      <span className="live-dot" />
      <div style={{ overflow: 'hidden', height: '16px', flexShrink: 0 }}>
        <motion.div
          animate={{ y: ['0%', '-75%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {events.map((e, i) => (
            <span key={i} style={{ color: 'var(--c-text-body)', fontSize: '11px', fontWeight: 600, lineHeight: '16px', whiteSpace: 'nowrap' }}>{e}</span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--c-surface-base)',
        overflow: 'hidden'
      }}
    >
      <HeroBg />

      <div
        className="container"
        style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)', textAlign: 'center' }}
      >
        {/* Ticker */}
        <LiveTicker />

        {/* Headline */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ marginTop: '2rem' }}>
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            transition={transition}
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--c-text-primary)', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}
          >
            Your Partner in<br />
            <span className="gradient-text">Skills, Talent</span>
            <br />
            <span style={{ color: 'var(--c-text-primary)' }}>&amp; Staff Solutions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ ...transition, delay: 0.1 }}
            style={{ color: 'var(--c-text-muted)', fontSize: 'clamp(14px,2vw,17px)', lineHeight: 1.7, maxWidth: '38rem', margin: '0 auto 2.5rem', fontWeight: 400 }}
          >
            {BRAND.name} (Est. {BRAND.estYear}) connects industry-ready workforce with leading enterprises across India.
            Specializing in General Staffing, Recruitment Solutions, Flexi Manpower, and Govt. Apprenticeship Schemes (NAPS &amp; NATS).
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            transition={{ ...transition, delay: 0.18 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
          >
            <Link
              to="/contact"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Find Top Talent <ChevronRight size={16} />
            </Link>
            <Link
              to="/services"
              className="btn-outline"
              style={{ textDecoration: 'none' }}
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate="visible"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '52rem', margin: '5rem auto 0' }}
          className="stats-grid"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              transition={{ ...transition, delay: 0.28 + i * 0.08 }}
              className="card"
              style={{ padding: '1.5rem 1rem', textAlign: 'center' }}
              whileHover={{ y: -4 }}
            >
              <div style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 900, color: '#ec2029', lineHeight: 1, marginBottom: '6px' }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--c-text-muted)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <Link
          to="/services"
          aria-label="Explore services"
          style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '8px', margin: '4rem auto 0', color: 'var(--c-text-faint)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, padding: '8px', borderRadius: '8px', textDecoration: 'none' }}
        >
          <span>Explore</span>
          <motion.div animate={{ y: [0,7,0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={16} />
          </motion.div>
        </Link>
      </div>

      {/* Floating accent cards */}
      <FloatCard icon={Users}     label="650+ Talents Placed" sub="This quarter"       delay={1.0} style={{ top: '35%', left: 'max(1.5rem, 3vw)' }} />
      <FloatCard icon={Award}     label="Best Staffing Firm"  sub="India Awards 2025"  delay={1.2} style={{ top: '48%', right: 'max(1.5rem, 3vw)' }} />
      <FloatCard icon={Briefcase} label="48hr Turnaround"     sub="Contract staffing"  delay={1.4} style={{ bottom: '30%', left: 'max(1.5rem, 4vw)' }} />

      <style>{`
        @media (max-width: 1023px) { .float-card { display: none !important; } }
        @media (min-width: 768px)  { .stats-grid { grid-template-columns: repeat(4,1fr) !important; } }
      `}</style>
    </section>
  );
}
