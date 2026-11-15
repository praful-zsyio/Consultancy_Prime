import { motion } from 'framer-motion';
import { SKILLS_PILLARS } from '../data/constants';
import { fadeUp, slideLeft, slideRight, staggerContainer, transition, viewport } from '../utils/animations';

function PillarCard({ pillar, index }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...transition, delay: index * 0.09 }}
      className="card"
      style={{ padding: '1.75rem', cursor: 'default', position: 'relative', overflow: 'hidden' }}
      whileHover={{ y: -4, borderColor: 'rgba(236,32,41,0.30)', background: 'rgba(236,32,41,0.03)' }}
    >
      <div style={{ fontSize: '2.25rem', marginBottom: '1rem', lineHeight: 1 }} aria-hidden="true">{pillar.icon}</div>
      <h3 style={{ color: 'var(--c-text-primary)', fontWeight: 700, fontSize: '15px', marginBottom: '0.625rem', lineHeight: 1.3 }}>{pillar.title}</h3>
      <p style={{ color: 'var(--c-text-muted)', fontSize: '13px', lineHeight: 1.7, marginBottom: '1.25rem' }}>{pillar.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {pillar.tags.map((t) => (
          <span key={t} style={{ padding: '3px 10px', borderRadius: '50px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em', background: 'rgba(236,32,41,0.12)', color: '#ec2029' }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section section-divider"
      style={{ background: 'var(--c-surface-muted)', overflow: 'hidden' }}
      aria-labelledby="skills-heading"
    >
      {/* Background accent */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.03, background: 'radial-gradient(circle at 20% 50%, #ec2029, transparent 50%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Two-column intro ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }} className="skills-intro">

          {/* Left text */}
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}>
            <span className="eyebrow">Skills Development</span>
            <h2
              id="skills-heading"
              className="section-heading"
              style={{ marginBottom: '1.25rem' }}
            >
              We Don't Just Place Talent.<br />
              <span className="gradient-text">We Build It.</span>
            </h2>
            <p style={{ color: 'var(--c-text-body)', fontSize: '15px', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '32rem' }}>
              We go beyond conventional staffing. In partnership with industry standards and government apprenticeship schemes (NAPS &amp; NATS), our skill development programs train, evaluate, and certify candidate capability — ensuring an industry-ready workforce for IT infrastructure, manufacturing, engineering, logistics, and commercial sectors.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'IT infrastructure, sysadmin & technical helpdesk assessment',
                'Trade-specific shopfloor & technical assessment',
                'NAPS / NATS government scheme alignment with stipend benefits',
                'Practical machinery, network maintenance & electrical capability',
                'Statutory compliance & structured apprentice onboarding',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--c-text-body)', fontSize: '14px', lineHeight: 1.5 }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(236,32,41,0.15)', color: '#ec2029', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: skill meter */}
          <motion.div
            variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport}
            transition={{ ...transition, delay: 0.1 }}
            className="skills-meter"
            style={{ padding: '2rem', borderRadius: '20px', border: '1px solid var(--c-border)', background: 'var(--c-surface-card)' }}
          >
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-text-muted)', marginBottom: '1.5rem' }}>
              Candidate Skill Readiness
            </p>
            {[
              { label: 'Technical Proficiency', pct: 94 },
              { label: 'Cultural Alignment',    pct: 88 },
              { label: 'Leadership Potential',  pct: 76 },
              { label: 'Communication Skills',  pct: 91 },
              { label: 'Industry Knowledge',    pct: 85 },
            ].map((m, i) => (
              <div key={m.label} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--c-text-body)', fontSize: '13px', fontWeight: 500 }}>{m.label}</span>
                  <span style={{ color: '#ec2029', fontSize: '13px', fontWeight: 700 }}>{m.pct}%</span>
                </div>
                <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg,#ec2029,#ff6b6b)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.pct}%` }}
                    viewport={viewport}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Pillars Grid ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '1.25rem' }}
          className="pillars-grid"
        >
          {SKILLS_PILLARS.map((p, i) => <PillarCard key={p.id} pillar={p} index={i} />)}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) { .skills-intro  { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 1023px) { .skills-meter  { display: none !important; } }
        @media (min-width: 640px)  { .pillars-grid  { grid-template-columns: repeat(2,1fr) !important; } }
        @media (min-width: 1024px) { .pillars-grid  { grid-template-columns: repeat(3,1fr) !important; } }
        @media (min-width: 1280px) { .pillars-grid  { grid-template-columns: repeat(5,1fr) !important; } }
      `}</style>
    </section>
  );
}
