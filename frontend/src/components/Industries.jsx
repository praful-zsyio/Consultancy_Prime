import { motion } from 'framer-motion';
import { INDUSTRIES } from '../data/constants';
import { fadeUp, scaleUp, staggerContainer, staggerFast, transition, viewport } from '../utils/animations';

export default function Industries() {
  return (
    <section
      id="industries"
      className="section section-divider"
      style={{ background: '#000' }}
      aria-labelledby="industries-heading"
    >
      <div className="container">

        {/* Header */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <motion.span variants={fadeUp} transition={transition} className="eyebrow">Sector Expertise</motion.span>
          <motion.h2
            id="industries-heading"
            variants={fadeUp} transition={{ ...transition, delay: 0.06 }}
            className="section-heading" style={{ textAlign: 'center' }}
          >
            Staffing Across <span className="gradient-text">Every Industry</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} transition={{ ...transition, delay: 0.12 }}
            className="section-sub" style={{ textAlign: 'center' }}
          >
            Deep domain expertise across 12+ sectors ensures we understand your business context, compliance needs, and talent landscape.
          </motion.p>
        </motion.div>

        {/* Industries grid */}
        <motion.div
          variants={staggerFast} initial="hidden" whileInView="visible" viewport={viewport}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.75rem' }}
          className="industries-grid"
          role="list" aria-label="Industries we serve"
        >
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              role="listitem"
              variants={scaleUp}
              transition={{ ...transition, delay: i * 0.04 }}
              className="card"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', cursor: 'default' }}
              whileHover={{ y: -3, borderColor: 'rgba(236,32,41,0.35)', background: 'rgba(236,32,41,0.04)' }}
              tabIndex={0}
            >
              <span style={{ fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{ind.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.70)', fontSize: '13px', fontWeight: 600, lineHeight: 1.35, transition: 'color 0.2s' }}>{ind.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
          transition={{ ...transition, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0', marginTop: '3rem', padding: '1.75rem 2rem', borderRadius: '20px', border: '1px solid rgba(236,32,41,0.15)', background: 'rgba(236,32,41,0.04)' }}
          className="highlight-strip"
        >
          {[
            { label: '12+',      desc: 'Industry Verticals' },
            { label: 'Pan-India', desc: 'Coverage across all states' },
            { label: 'Global',    desc: 'International placements' },
          ].map((item, i) => (
            <div
              key={i}
              style={{ textAlign: 'center', padding: '0 2rem', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              className="highlight-item"
            >
              <div style={{ fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 900, color: '#ec2029', marginBottom: '4px' }}>{item.label}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 480px)  { .industries-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (min-width: 768px)  { .industries-grid { grid-template-columns: repeat(4,1fr) !important; } }
        @media (max-width: 600px)  {
          .highlight-strip { flex-direction: column !important; gap: 1.5rem !important; }
          .highlight-item  { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1.5rem; }
          .highlight-item:last-child { border-bottom: none !important; padding-bottom: 0; }
        }
      `}</style>
    </section>
  );
}
