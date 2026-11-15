import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/constants';
import { fadeUp, staggerContainer, transition, viewport } from '../utils/animations';

const BADGE_STYLE = {
  'Core Service': { background: 'rgba(236,32,41,0.15)', color: '#ec2029' },
  'Popular': { background: 'rgba(251,191,36,0.12)', color: '#fbbf24' },
  'On-Demand': { background: 'rgba(56,189,248,0.12)', color: '#38bdf8' },
  'Government Aligned': { background: 'rgba(74,222,128,0.12)', color: '#4ade80' },
};

function ServiceCard({ svc, index }) {
  return (
    <motion.article
      variants={fadeUp}
      transition={{ ...transition, delay: index * 0.08 }}
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
      whileHover={{ y: -6, borderColor: 'rgba(236,32,41,0.45)' }}
      tabIndex={0}
      role="article"
      aria-label={`${svc.title}: ${svc.desc}`}
    >
      {/* Service Image Header */}
      {svc.image && (
        <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden' }}>
          <img
            src={svc.image}
            alt={svc.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            className="service-card-img"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)' }} />

          {/* Badge overlaid on image */}
          {svc.badge && (
            <span style={{
              ...BADGE_STYLE[svc.badge] || { background: 'rgba(236,32,41,0.15)', color: '#ec2029' },
              position: 'absolute',
              top: '12px',
              right: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 10px',
              borderRadius: '50px',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Sparkles size={9} />
              {svc.badge}
            </span>
          )}

          <div style={{ position: 'absolute', bottom: '12px', left: '16px', fontSize: '1.75rem', lineHeight: 1 }} aria-hidden="true">
            {svc.icon}
          </div>
        </div>
      )}

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Title */}
        <h3 style={{ color: 'var(--c-text-primary)', fontWeight: 800, fontSize: '17px', lineHeight: 1.35, marginBottom: '0.75rem' }}>
          {svc.title}
        </h3>

        {/* Description */}
        <p style={{ color: 'var(--c-text-muted)', fontSize: '13px', lineHeight: 1.65, flexGrow: 1, marginBottom: '1.25rem' }}>
          {svc.desc}
        </p>

        {/* CTA */}
        <Link
          to="/services"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ec2029', textDecoration: 'none', marginTop: 'auto' }}
        >
          Explore Details <ArrowRight size={11} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="section section-divider"
      style={{ background: 'var(--c-surface-base)' }}
      aria-labelledby="services-heading"
    >
      <div className="container">

        {/* Header */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.span variants={fadeUp} transition={transition} className="eyebrow">Our Core Offerings</motion.span>
          <motion.h2
            id="services-heading"
            variants={fadeUp} transition={{ ...transition, delay: 0.06 }}
            className="section-heading" style={{ textAlign: 'center' }}
          >
            Specialized <span className="gradient-text">Staffing &amp; Talent Services</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} transition={{ ...transition, delay: 0.12 }}
            className="section-sub" style={{ textAlign: 'center', maxWidth: '44rem' }}
          >
            Delivering robust workforce solutions — from general staffing, recruitment, and IT staffing to flexi manpower and industry skill development.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '1.5rem' }}
          className="services-grid"
          role="list" aria-label="Our services"
        >
          {SERVICES.map((svc, i) => (
            <div role="listitem" key={svc.id}>
              <ServiceCard svc={svc} index={i} />
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
          transition={{ ...transition, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
        >
          <Link
            to="/contact"
            className="btn-outline"
            style={{ display: 'inline-flex', textDecoration: 'none' }}
          >
            Discuss Your Requirements <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 640px)  { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4,1fr) !important; } }
        article:hover .service-card-img { transform: scale(1.06); }
      `}</style>
    </section>
  );
}
