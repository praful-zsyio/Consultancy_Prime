import Contact from '../components/Contact';
import { BRAND } from '../data/constants';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header */}
      <section style={{ padding: '4rem 0 2rem', background: 'radial-gradient(ellipse at top, rgba(236,32,41,0.15), transparent 70%)', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Connect With Us</span>
          <h1 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Speak With <span className="gradient-text">Our HR &amp; Staffing Team</span>
          </h1>
          <p className="section-sub" style={{ maxWidth: '42rem' }}>
            Visit our office at Rau, Indore, or connect with our {BRAND.contactPerson} and staffing team for your recruitment requirements.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
}

