import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../data/constants';
import logoImg from '../assets/logo.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <motion.header
        role="banner"
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(0,0,0,0.96)' : 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
            gap: '1rem',
          }}
        >
          {/* ── Logo ── */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}
            aria-label={`${BRAND.name} — Home`}
          >
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
            <div style={{ lineHeight: 1.2 }}>
              <span style={{ display: 'block', color: '#fff', fontWeight: 900, fontSize: '14px', letterSpacing: '0.03em' }}>
                {BRAND.short}
              </span>
              <span style={{ display: 'block', color: '#ec2029', fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            role="navigation"
            aria-label="Primary navigation"
            style={{ display: 'none', alignItems: 'center', gap: '2px' }}
            className="lg-nav"
          >
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  style={{
                    position: 'relative',
                    padding: '8px 14px',
                    fontSize: '13px',
                    fontWeight: 600,
                    borderRadius: '8px',
                    transition: 'color 0.2s',
                    color: active ? '#fff' : 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.95)'; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-bg"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '8px',
                        background: 'rgba(236,32,41,0.18)',
                        border: '1px solid rgba(236,32,41,0.3)',
                        zIndex: -1
                      }}
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Right: CTA + Hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <Link
              to="/contact"
              className="btn-primary desktop-cta"
              style={{ padding: '10px 22px', fontSize: '13px', textDecoration: 'none' }}
            >
              Get Started <ChevronRight size={14} />
            </Link>

            {/* Mobile hamburger */}
            <motion.button
              className="hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open navigation menu'}
              whileTap={{ scale: 0.88 }}
              style={{ padding: '8px', color: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: 'flex' }}><X size={22}/></motion.span>
                  : <motion.span key="ham" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: 'flex' }}><Menu size={22}/></motion.span>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-nav"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden', background: 'rgba(2,1,1,0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div style={{ padding: '16px var(--gutter)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {NAV_LINKS.map((link, i) => {
                  const active = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.045 }}
                    >
                      <Link
                        to={link.path}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '12px 16px',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: active ? '#fff' : 'rgba(255,255,255,0.70)',
                          background: active ? 'rgba(236,32,41,0.15)' : 'transparent',
                          borderRadius: '12px',
                          textDecoration: 'none'
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{ marginTop: '8px', justifyContent: 'center', textDecoration: 'none' }}
                >
                  Get Started <ChevronRight size={14} />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Responsive CSS via style tag ── */}
      <style>{`
        @media (min-width: 1024px) {
          .lg-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .desktop-cta { display: inline-flex !important; }
        }
        @media (max-width: 1023px) {
          .lg-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .desktop-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
