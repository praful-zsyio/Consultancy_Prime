import { motion } from 'framer-motion';
import { Globe, Share2, Link2, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, NAV_LINKS } from '../data/constants';
import logoImg from '../assets/logo.svg';

const FOOTER_SERVICES = [
  'General Staffing',
  'Recruitment Solutions',
  'Flexi Manpower',
  'IT Staffing',
  'Skill Development',
];

const SOCIAL = [
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Share2, href: '#', label: 'Twitter / X' },
  { icon: Globe, href: '#', label: 'Website' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      role="contentinfo"
      style={{ position: 'relative', background: '#020101', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Top glow line */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0 0 auto', height: '1px', background: 'linear-gradient(90deg,transparent,rgba(236,32,41,0.5),transparent)' }} />

      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>

        {/* ── Main footer grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 2rem', marginBottom: '3rem' }} className="footer-grid">

          {/* ── Brand column ── */}
          <div style={{ gridColumn: 'span 2' }} className="footer-brand-col">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', textDecoration: 'none' }}>
              <img
                src={logoImg}
                alt={`${BRAND.short} Logo`}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  display: 'block',
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ color: '#fff', fontWeight: 900, fontSize: '14px' }}>{BRAND.short}</div>
                <div style={{ color: '#ec2029', fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{BRAND.tagline}</div>
              </div>
            </Link>

            <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '13px', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '20rem' }}>
              Bridging exceptional talent with industry-leading organizations since {BRAND.estYear}. Pan-India reach, comprehensive staffing and consultancy.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{ width: '36px', height: '36px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.40)', transition: 'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.40)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation column ── */}
          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Navigation</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services column ── */}
          <div>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Services</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ── */}
          <div style={{ gridColumn: 'span 2' }} className="footer-contact-col">
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Contact</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Mail, val: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: Phone, val: BRAND.phone, href: `tel:${BRAND.phone.replace(/\s/g, '')}` },
                { icon: MapPin, val: BRAND.address, href: 'https://maps.google.com/?q=Station+Road+Rau+Indore' },
              ].map(({ icon: Icon, val, href }) => (
                <li key={val}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none', lineHeight: 1.5 }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    <Icon size={15} style={{ marginTop: '2px', flexShrink: 0, color: '#ec2029' }} />
                    <span style={{ wordBreak: 'break-word', whiteSpace: 'pre-line' }}>{val}</span>
                  </a>
                </li>
              ))}
              {BRAND.contactPerson && (
                <li>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '4px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#ec2029,#c4181f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 900, color: '#fff', flexShrink: 0 }}>
                      {BRAND.contactPerson.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>{BRAND.contactPerson}</div>
                      <div style={{ color: 'rgba(255,255,255,0.40)', fontSize: '10px' }}>Contact Person</div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '12px', margin: 0 }}>
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '11px', margin: 0 }}>
              Details designed by <a href="https://zsyio.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ec2029', textDecoration: 'none', fontWeight: 600 }}>zsyio.com</a> and powered by <a href="https://zsyio.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>zsyio</a>.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: 'rgba(255,255,255,0.30)', fontSize: '12px', transition: 'color 0.2s', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.60)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.30)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollTop}
        style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#ec2029,#c4181f)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(236,32,41,0.4)', zIndex: 40, border: 'none', cursor: 'pointer' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>

      {/* Responsive overrides */}
      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr 2fr !important; }
          .footer-brand-col { grid-column: span 1 !important; }
          .footer-contact-col { grid-column: span 1 !important; }
        }
      `}</style>
    </footer>
  );
}
