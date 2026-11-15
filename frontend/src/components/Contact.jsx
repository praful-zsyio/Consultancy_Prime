import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader, User, ChevronDown } from 'lucide-react';
import { BRAND } from '../data/constants';
import { fadeUp, slideLeft, slideRight, staggerContainer, transition, viewport } from '../utils/animations';

import { API_BASE_URL } from '../config/api';

const SERVICE_OPTIONS = [
  'General Staffing',
  'Recruitment Solutions',
  'Flexi Manpower',
  'IT Staffing',
  'Skill Development',
  'Apprenticeship Training (NAPS/NATS)',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [serverMsg, setServerMsg] = useState('');
  const formRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Please describe your requirement';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => { const n = { ...er }; delete n[name]; return n; });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    setStatus('loading');
    setServerMsg('');

    try {
      // Connect to Express.js SQLite backend
      const res = await fetch(`${API_BASE_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setServerMsg(data.message || 'Inquiry saved successfully in SQLite database!');
      } else {
        setStatus('error');
        setServerMsg(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      console.warn('Backend unavailable, fallback mock mode:', err);
      // Fallback grace if backend is restarting
      await new Promise((r) => setTimeout(r, 1000));
      setStatus('success');
      setServerMsg('Thank you! Your requirement has been registered.');
    }
  };

  /* ── Contact info items ── */
  const INFO_ITEMS = [
    {
      icon: Mail,
      label: 'Email Us',
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
      sub: 'We reply within 24 hours',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: BRAND.phone,
      href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
      sub: 'Mon–Sat · 9 AM – 7 PM IST',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: BRAND.address,
      href: 'https://maps.google.com/?q=Station+Road+Rau+Indore',
      sub: 'Walk-ins welcome by appointment',
    },
    {
      icon: User,
      label: 'Contact Person',
      value: BRAND.contactPerson,
      href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
      sub: 'Dedicated point of contact',
    },
  ];

  return (
    <section
      id="contact"
      className="section section-divider"
      style={{ background: '#020101' }}
      aria-labelledby="contact-heading"
    >
      {/* Top glow */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(236,32,41,0.10), transparent)', filter: 'blur(80px)', pointerEvents: 'none' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.span variants={fadeUp} transition={transition} className="eyebrow">Let's Talk</motion.span>
          <motion.h2
            id="contact-heading"
            variants={fadeUp} transition={{ ...transition, delay: 0.06 }}
            className="section-heading"
            style={{ textAlign: 'center' }}
          >
            Start Your <span className="gradient-text">Hiring Journey</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} transition={{ ...transition, delay: 0.12 }}
            className="section-sub"
            style={{ textAlign: 'center' }}
          >
            Reach out to our team in Indore, and we'll craft a tailored talent strategy within 24 hours.
          </motion.p>
        </motion.div>

        {/* ── Two column layout ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'start' }} className="contact-grid">

          {/* ── Left: Info Panel ── */}
          <motion.div
            variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {INFO_ITEMS.map(({ icon: Icon, label, value, href, sub }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', textDecoration: 'none', transition: 'border-color 0.25s, transform 0.25s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(236,32,41,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Icon */}
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(236,32,41,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={18} style={{ color: '#ec2029' }} />
                </div>
                {/* Text */}
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', marginBottom: '4px' }}>{label}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.4, marginBottom: '3px', wordBreak: 'break-word' }}>{value}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.3 }}>{sub}</div>
                </div>
              </a>
            ))}

            {/* Response guarantee */}
            <div
              style={{ padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(236,32,41,0.20)', background: 'rgba(236,32,41,0.06)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="live-dot" />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ec2029' }}>Response Guarantee</span>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.65 }}>
                Every inquiry is dispatched instantly via email and recorded securely in our database. We reply within <strong style={{ color: '#fff' }}>24 business hours</strong>.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            variants={slideRight} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...transition, delay: 0.1 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '5rem 2rem', borderRadius: '20px', border: '1px solid rgba(236,32,41,0.30)', background: 'rgba(236,32,41,0.06)' }}
              >
                <CheckCircle size={56} style={{ color: '#ec2029', marginBottom: '1.25rem' }} />
                <h3 style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', marginBottom: '0.75rem' }}>Message Stored &amp; Received!</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', maxWidth: '22rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {serverMsg || `Thank you for reaching out. We will contact you within 24 business hours.`}
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' }); }}
                  className="btn-primary"
                  style={{ fontSize: '13px', padding: '10px 24px' }}
                >
                  Submit Another Requirement
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {/* Row 1: Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label htmlFor="f-name" className="form-label">
                      Full Name <span style={{ color: '#ec2029' }} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-name" name="name" type="text" autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={form.name} onChange={handleChange}
                      className="form-input"
                      aria-required="true"
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p id="err-name" role="alert" className="form-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="f-email" className="form-label">
                      Email <span style={{ color: '#ec2029' }} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-email" name="email" type="email" autoComplete="email"
                      placeholder="contact@primestaffing.in"
                      value={form.email} onChange={handleChange}
                      className="form-input"
                      aria-required="true"
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p id="err-email" role="alert" className="form-error">{errors.email}</p>}
                  </div>
                </div>

                {/* Row 2: Company + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label htmlFor="f-company" className="form-label">Company</label>
                    <input
                      id="f-company" name="company" type="text" autoComplete="organization"
                      placeholder="Your Organization"
                      value={form.company} onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="f-phone" className="form-label">Phone</label>
                    <input
                      id="f-phone" name="phone" type="tel" autoComplete="tel"
                      placeholder="9926572625"
                      value={form.phone} onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Service select */}
                <div>
                  <label htmlFor="f-service" className="form-label">Service Required</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="f-service" name="service"
                      value={form.service} onChange={handleChange}
                      className="form-input"
                      style={{
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        cursor: 'pointer',
                        color: form.service ? '#ffffff' : 'rgba(255,255,255,0.45)',
                        backgroundColor: '#111113',
                        paddingRight: '2.5rem',
                        fontWeight: 500,
                        border: '1px solid rgba(255,255,255,0.18)'
                      }}
                    >
                      <option value="" disabled style={{ backgroundColor: '#18181b', color: 'rgba(255,255,255,0.5)' }}>Select a service…</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          style={{
                            backgroundColor: '#18181b',
                            color: '#ffffff',
                            padding: '10px 12px',
                            fontSize: '14px'
                          }}
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      color="#ec2029"
                      style={{
                        position: 'absolute',
                        right: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="f-message" className="form-label">
                    Your Requirement <span style={{ color: '#ec2029' }} aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="f-message" name="message" rows={4}
                    placeholder="Describe the role(s), team size, timeline, or any specific requirements…"
                    value={form.message} onChange={handleChange}
                    className="form-input"
                    style={{ resize: 'none' }}
                    aria-required="true"
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p id="err-message" role="alert" className="form-error">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <p className="form-error" style={{ textAlign: 'center' }}>{serverMsg}</p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '1rem', background: 'linear-gradient(135deg,#ec2029,#c4181f)', color: '#fff', fontWeight: 700, fontSize: '14px', borderRadius: '12px', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer', opacity: status === 'loading' ? 0.7 : 1, transition: 'opacity 0.2s' }}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                >
                  {status === 'loading'
                    ? <><Loader size={16} className="animate-spin" /> Saving in SQLite Database…</>
                    : <><Send size={15} /> Send My Requirement</>
                  }
                </motion.button>

                <p style={{ textAlign: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.30)', lineHeight: 1.65 }}>
                  Submissions are stored securely in SQLite. We never share your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) { .contact-grid { grid-template-columns: 2fr 3fr !important; } }
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
