import Testimonials from '../components/Testimonials';

export default function TestimonialsPage() {
  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header */}
      <section style={{ padding: '4rem 0 2rem', background: 'radial-gradient(ellipse at top, rgba(236,32,41,0.15), transparent 70%)', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Proven Track Record</span>
          <h1 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Client Reviews &amp; <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="section-sub" style={{ maxWidth: '42rem' }}>
            Discover how corporate leaders and recruitment directors leverage our staffing capabilities to solve complex hiring challenges.
          </p>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}

