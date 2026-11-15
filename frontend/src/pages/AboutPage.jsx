import About from '../components/About';
import { BRAND } from '../data/constants';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header */}
      <section style={{ padding: '4rem 0 2rem', background: 'radial-gradient(ellipse at top, rgba(236,32,41,0.15), transparent 70%)', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Our Legacy &amp; Values</span>
          <h1 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Empowering Careers, <span className="gradient-text">Powering Enterprises</span>
          </h1>
          <p className="section-sub" style={{ maxWidth: '42rem' }}>
            Established in {BRAND.estYear} and operating from Indore, {BRAND.name} has shaped workforce ecosystems and empowered businesses with end-to-end staffing excellence.
          </p>
        </div>
      </section>

      <About />
    </div>
  );
}

