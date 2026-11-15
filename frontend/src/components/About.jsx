import { motion } from 'framer-motion';
import { PROCESS_STEPS, BRAND } from '../data/constants';
import { fadeUp, slideLeft, slideRight, staggerContainer, transition, viewport } from '../utils/animations';

export default function About() {
  return (
    <section
      id="about"
      className="section section-divider"
      style={{ background: '#020101', overflow: 'hidden' }}
      aria-labelledby="about-heading"
    >
      {/* BG accent */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: '50%', right: 0, width: '384px', height: '384px', transform: 'translateY(-50%)', borderRadius: '50%', background: 'radial-gradient(circle, #ec2029, transparent)', filter: 'blur(80px)', opacity: 0.04, pointerEvents: 'none' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">

          {/* ── Left: About text ── */}
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}>
            <span className="eyebrow">About Us</span>
            <h2 id="about-heading" className="section-heading" style={{ marginBottom: '1.25rem' }}>
              Established in {BRAND.estYear} · Driving <span className="gradient-text">Workforce Excellence</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '15px', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '36rem' }}>
              {BRAND.name} was founded with one mission: to remove friction from hiring. We built a consultancy that blends rigorous talent science with deep human understanding — resulting in placements that last.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '15px', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '36rem' }}>
              Headquartered in Indore with presence across 15 Indian cities and global delivery partnerships, we serve Fortune 500s, funded start-ups, and everything in between.
            </p>

            {/* Values grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
              {[
                { icon: '🎯', title: 'Precision Matching', desc: 'Data + intuition for right-fit placements' },
                { icon: '⚡', title: 'Speed to Hire',      desc: '72-hour shortlist guarantee' },
                { icon: '🛡️', title: 'Zero Drop-off',      desc: '90-day replacement assurance' },
                { icon: '🌍', title: 'Pan-India Reach',    desc: '15 cities, global network' },
              ].map((v) => (
                <div
                  key={v.title}
                  className="card"
                  style={{ padding: '1.25rem' }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.625rem', lineHeight: 1 }} aria-hidden="true">{v.icon}</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '13px', marginBottom: '4px' }}>{v.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.40)', fontSize: '11px', lineHeight: 1.5 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Process steps ── */}
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...transition, delay: 0.1 }}>
            <span className="eyebrow">Our Process</span>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  transition={{ ...transition, delay: i * 0.08 }}
                  style={{ display: 'flex', gap: '1.25rem', marginBottom: i < PROCESS_STEPS.length - 1 ? '0' : '0' }}
                  className="process-step"
                >
                  {/* Step indicator + connector */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div
                      style={{ width: '44px', height: '44px', borderRadius: '50%', border: '2px solid rgba(236,32,41,0.35)', background: 'rgba(236,32,41,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ec2029', fontWeight: 900, fontSize: '12px', flexShrink: 0 }}
                    >
                      {step.step}
                    </div>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div style={{ width: '1px', flexGrow: 1, background: 'linear-gradient(to bottom, rgba(236,32,41,0.25), transparent)', margin: '6px 0' }} />
                    )}
                  </div>

                  {/* Step content */}
                  <div style={{ paddingBottom: i < PROCESS_STEPS.length - 1 ? '2rem' : 0 }}>
                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', marginBottom: '4px', lineHeight: 1.4 }}>{step.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) { .about-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
