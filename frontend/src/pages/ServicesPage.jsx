import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Users, Scale, FileText, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, BRAND } from '../data/constants';
import { fadeUp, staggerContainer, transition, viewport } from '../utils/animations';
import sectorsClusterImg from '../assets/services/apprenticeship_sectors_cluster.png';

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Page Hero */}
      <section style={{ padding: '4.5rem 0 3rem', background: 'radial-gradient(ellipse at top, rgba(236,32,41,0.18), transparent 70%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Enterprise Solutions · Est. {BRAND.estYear}</span>
          <h1 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Comprehensive <span className="gradient-text">Staffing &amp; Talent Pillars</span>
          </h1>
          <p className="section-sub" style={{ maxWidth: '44rem' }}>
            Empowering organizations nationwide through dependable general staffing, targeted recruitment, agile flexi manpower, specialized IT staffing, and certified skill development programs.
          </p>
        </div>
      </section>

      {/* Apprenticeship & Multi-Sector Focus Banner */}
      <section style={{ padding: '3.5rem 0', background: '#030202', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="card" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} id="apprenticeship-card">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', borderRadius: '50px', background: 'rgba(236,32,41,0.15)', border: '1px solid rgba(236,32,41,0.3)', marginBottom: '1rem' }}>
                <Award size={14} color="#ec2029" />
                <span style={{ color: '#ec2029', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Indian Govt. Schemes · NAPS &amp; NATS
                </span>
              </div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, lineHeight: 1.3, marginBottom: '1rem' }}>
                Hire &amp; Train Multiple Companies via <span className="gradient-text">Govt. Apprenticeship Schemes</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Under the <strong>Apprenticeship Act 1961</strong>, it is mandatory to engage apprentices for establishments of any sector having 30+ employees (2.5% to 15% headcount). As Third Party Aggregators (TPAs), we facilitate end-to-end recruitment, registration on portal, and stipend reimbursement from MSDE (NSDC) &amp; MHRD (BOAT).
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} color="#ec2029" />
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Exempt from PF, ESIC &amp; Bonus</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <IndianRupee size={18} color="#ec2029" />
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Up to ~30% Cost Savings</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)' }}>
                <img
                  src={sectorsClusterImg}
                  alt="Multi-sector workforce - Manufacturing, Healthcare, Technical, Corporate"
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '340px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '12px 16px', background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)', textAlign: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#fff', fontWeight: 700 }}>Industry Sectors: Precision Engineering · Health &amp; Pharma · Electrical · Logistics &amp; Manufacturing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Scheme Comparison & Statutory Advantages */}
      <section className="section" style={{ background: '#070505', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Statutory Framework</span>
            <h2 className="section-heading">
              NAPS &amp; NATS <span className="gradient-text">Scheme Advantages to Employer</span>
            </h2>
            <p className="section-sub" style={{ maxWidth: '44rem' }}>
              Government of India launched NAPS &amp; NATS to promote apprenticeship by providing financial incentives, technology, and advocacy support.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '12px', background: 'rgba(236,32,41,0.15)', color: '#ec2029', marginBottom: '1.25rem' }}>
                <Scale size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 800, marginBottom: '0.75rem' }}>Statutory Compliance Exemptions</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.7 }}>
                Non-applicability of labor laws such as PF (13.36%), ESIC (3.25%), HRA (5%), Gratuity and Bonus Act (8.33%). Delivers approximately 30% direct cost savings per engaged apprentice.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '12px', background: 'rgba(236,32,41,0.15)', color: '#ec2029', marginBottom: '1.25rem' }}>
                <IndianRupee size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 800, marginBottom: '0.75rem' }}>Direct Govt. Stipend Reimbursement</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.7 }}>
                Under <strong>NAPS</strong>: 25% of paid stipend or Rs. 1500/month per candidate. Under <strong>NATS</strong>: 50% of paid stipend or up to Rs. 4500/month per candidate directly credited by Govt.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '12px', background: 'rgba(236,32,41,0.15)', color: '#ec2029', marginBottom: '1.25rem' }}>
                <FileText size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 800, marginBottom: '0.75rem' }}>End-to-End TPA Services</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.7 }}>
                We manage company portal registration, candidate mobilization, apprenticeship contract execution, monthly attendance filing, claims submission to BOAT/NSDC, and final certification.
              </p>
            </div>
          </div>

          {/* Scheme Quick Specification Table */}
          <div className="card" style={{ padding: '2rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left' }}>
                  <th style={{ padding: '12px 16px', color: '#ec2029', fontWeight: 800 }}>Feature</th>
                  <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 800 }}>NAPS Scheme</th>
                  <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 800 }}>NATS Scheme</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700 }}>Governing Body</td>
                  <td style={{ padding: '12px 16px' }}>MSDE (through NSDC &amp; DGT)</td>
                  <td style={{ padding: '12px 16px' }}>MHRD (through BOAT)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700 }}>Applicability</td>
                  <td style={{ padding: '12px 16px' }}>Establishments having 30+ employees (2.5% - 15% quota)</td>
                  <td style={{ padding: '12px 16px' }}>Establishments having 30+ employees (2.5% - 15% quota)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700 }}>Qualification</td>
                  <td style={{ padding: '12px 16px' }}>5th, 10th, 12th, ITI, Diploma, Graduates</td>
                  <td style={{ padding: '12px 16px' }}>Diploma (Engg/Non-Engg), Graduate Engineers</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700 }}>Duration</td>
                  <td style={{ padding: '12px 16px' }}>12 Months (or optional trade 6-36 mos)</td>
                  <td style={{ padding: '12px 16px' }}>12 Months</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', fontWeight: 700 }}>Govt. Reimbursement</td>
                  <td style={{ padding: '12px 16px', color: '#4ade80', fontWeight: 700 }}>25% or up to ₹1,500/month/candidate</td>
                  <td style={{ padding: '12px 16px', color: '#4ade80', fontWeight: 700 }}>50% or up to ₹4,500/month/candidate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Services 4-Column Grid */}
      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">Core Offerings</span>
            <h2 className="section-heading">
              Our End-to-End <span className="gradient-text">Staffing Verticals</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }}
            className="services-detailed-grid"
          >
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                variants={fadeUp}
                transition={{ ...transition, delay: i * 0.08 }}
                className="card"
                style={{ padding: 0, display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}
              >
                {/* Service Card Image */}
                {svc.image && (
                  <div style={{ position: 'relative', height: '200px', width: '100%', overflow: 'hidden' }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,14,14,0.95) 0%, rgba(14,14,14,0.3) 60%, transparent 100%)' }} />
                    {svc.badge && (
                      <span style={{ position: 'absolute', top: '14px', right: '14px', padding: '4px 12px', borderRadius: '50px', fontSize: '11px', fontWeight: 700, background: 'rgba(236,32,41,0.2)', color: '#ec2029', border: '1px solid rgba(236,32,41,0.4)', backdropFilter: 'blur(8px)' }}>
                        {svc.badge}
                      </span>
                    )}
                    <div style={{ position: 'absolute', bottom: '12px', left: '16px', fontSize: '2rem' }}>
                      {svc.icon}
                    </div>
                  </div>
                )}

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1rem' }}>
                  <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800 }}>{svc.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.7, flexGrow: 1 }}>{svc.desc}</p>

                  <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {(svc.features || []).map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}>
                        <CheckCircle2 size={16} color="#ec2029" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <Link
                      to="/contact"
                      className="btn-primary"
                      style={{ fontSize: '13px', padding: '10px 20px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      Enquire for {svc.title} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          #apprenticeship-card {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        @media (min-width: 640px) {
          .services-detailed-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
