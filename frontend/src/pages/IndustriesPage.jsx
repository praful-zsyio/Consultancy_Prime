import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  CheckCircle2,
  ArrowRight,
  LineChart,
  Layers,
  Scale,
  Factory,
  Building2,
  Stethoscope,
  Truck,
  Car,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, staggerContainer, staggerFast, transition, viewport } from '../utils/animations';
import { BRAND, INDUSTRIES } from '../data/constants';

export default function IndustriesPage() {
  const analysisVerticals = [
    {
      title: 'Business & Operations Analysis',
      icon: BarChart3,
      desc: 'Operational analysts, process optimization experts, and MIS specialists who streamline shopfloor productivity and enterprise workflows.',
      skills: ['Process Optimization', 'MIS Reporting', 'Workflow Mapping', 'Inventory Tracking', 'Operations Auditing'],
      roles: ['Business Operations Analyst', 'MIS Coordinator', 'Process Improvement Lead', 'Cost Reduction Analyst']
    },
    {
      title: 'Financial & Cost Analysis',
      icon: LineChart,
      desc: 'Financial modelers, commercial analysts, and payroll auditors ensuring accurate budget allocation, labor cost control, and tax compliance.',
      skills: ['Cost-Benefit Analysis', 'Statutory Wage Audits', 'Budget Forecasting', 'Variance Analysis', 'ERP Financials'],
      roles: ['Financial Analyst', 'Commercial Cost Controller', 'Audit & Compliance Analyst', 'Budget Planning Specialist']
    },
    {
      title: 'Manufacturing & Production Analysis',
      icon: Factory,
      desc: 'Industrial engineers and production planning specialists analyzing machine utilization, cycle times, and scrap rate reductions.',
      skills: ['Time & Motion Study', 'OEE Analysis', 'Six Sigma / Lean', 'Yield Optimization', 'PPC Planning'],
      roles: ['Industrial Engineering Analyst', 'Production Planning & Control (PPC)', 'OEE Efficiency Analyst', 'Quality Metrics Lead']
    },
    {
      title: 'Supply Chain & Logistics Analytics',
      icon: Truck,
      desc: 'Logistics planning analysts and inventory controllers optimizing transit turnaround times, warehouse storage efficiency, and dispatch schedules.',
      skills: ['Route & Fleet Optimization', 'Warehouse Space Analytics', 'Vendor Performance', 'Demand Forecasting', 'Supply Chain Mapping'],
      roles: ['Supply Chain Analyst', 'Logistics Planning Specialist', 'Inventory Control Analyst', 'Procurement Analyst']
    },
    {
      title: 'Quality & Workforce Compliance Analysis',
      icon: Scale,
      desc: 'Statutory compliance auditors and QC analysts ensuring adherence to Apprenticeship Act 1961, Factories Act, and safety regulations.',
      skills: ['Apprenticeship Act Audits', 'Labour Law Compliance', 'Safety Metric Tracking', 'QC Root-Cause Analysis', 'Statutory Documentation'],
      roles: ['Statutory Compliance Officer', 'Labour Law Analyst', 'QA/QC Compliance Auditor', 'Workforce Audit Lead']
    },
    {
      title: 'Market & Manpower Demand Forecasting',
      icon: Layers,
      desc: 'Workforce planners analyzing seasonal manpower fluctuations, attrition trends, and industrial wage benchmarks across key manufacturing clusters.',
      skills: ['Manpower Headcount Planning', 'Attrition Analysis', 'Wage Benchmarking', 'Talent Pipeline Mapping', 'Cluster Sourcing Analysis'],
      roles: ['Workforce Planning Analyst', 'HR Analytics Specialist', 'Talent Mapping Analyst', 'Manpower Cost Modeler']
    }
  ];

  const analyticsMetrics = [
    { label: 'Core Industry Sectors', value: '11+' },
    { label: 'Turnaround Guarantee', value: '48 Hours' },
    { label: 'Compliance Accuracy', value: '100%' },
    { label: 'Partner Organizations', value: '450+' }
  ];

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Page Hero */}
      <section style={{ padding: '4.5rem 0 3rem', background: 'radial-gradient(ellipse at top, rgba(236,32,41,0.18), transparent 70%)', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Industry Sectors · Est. {BRAND.estYear}</span>
          <h1 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
            Industry Sectors &amp; <span className="gradient-text">Operations Analysis</span>
          </h1>
          <p className="section-sub" style={{ maxWidth: '44rem' }}>
            Empowering India's manufacturing, healthcare, logistics, and enterprise hubs with specialized industrial manpower, statutory apprenticeship compliance, and analytical workforce solutions.
          </p>
        </div>
      </section>

      {/* Analysis & Industry Focus Overview */}
      <section style={{ padding: '3.5rem 0', background: '#020101', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="card" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} id="overview-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', borderRadius: '50px', background: 'rgba(236,32,41,0.15)', border: '1px solid rgba(236,32,41,0.3)', marginBottom: '1rem' }}>
                <TrendingUp size={14} color="#ec2029" />
                <span style={{ color: '#ec2029', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Industrial Capability &amp; Workforce Analysis
                </span>
              </div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.25rem' }}>
                Workforce Intelligence for <span className="gradient-text">Core Manufacturing &amp; Enterprises</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {BRAND.name} combines rigorous domain analysis with boots-on-the-ground talent sourcing. From shopfloor productivity analysis and plant labor mapping to statutory apprenticeship compliance (NAPS &amp; NATS), we ensure your enterprise operates with optimized costs, minimal friction, and reliable staffing pipelines.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#ec2029" />
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>100% Labor Law &amp; Factory Compliance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#ec2029" />
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Up to 30% Cost Savings via NAPS/NATS</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#ec2029" />
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Trained Machinery &amp; Trade Workforce</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#ec2029" />
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Pan-India Industrial Cluster Reach</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{ background: 'rgba(236,32,41,0.04)', border: '1px solid rgba(236,32,41,0.18)', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                <BarChart3 size={18} color="#ec2029" />
                <h3 style={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}>Industry Impact &amp; Analysis Metrics</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {analyticsMetrics.map((m, idx) => (
                  <div key={idx} style={{ borderLeft: '2px solid #ec2029', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '6px' }}>{m.value}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Practice Verticals */}
      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">Operational Intelligence</span>
            <h2 className="section-heading">
              Workforce &amp; Operations <span className="gradient-text">Analysis Verticals</span>
            </h2>
            <p className="section-sub" style={{ maxWidth: '44rem' }}>
              Specialized analysis services tailored to industrial plants, commercial organizations, and logistics networks.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.75rem' }}
            className="analysis-grid"
          >
            {analysisVerticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  transition={{ ...transition, delay: i * 0.08 }}
                  className="card"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(255,255,255,0.08)',
                    position: 'relative'
                  }}
                  whileHover={{ y: -4, borderColor: 'rgba(236,32,41,0.4)', background: 'rgba(236,32,41,0.03)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(236,32,41,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={22} color="#ec2029" />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>0{i + 1}</span>
                  </div>

                  <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>{v.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.7, marginBottom: '1.5rem', flexGrow: 1 }}>{v.desc}</p>

                  {/* Skills tags */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#ec2029', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                      Focus Areas &amp; Capabilities:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {v.skills.map((s) => (
                        <span key={s} style={{ padding: '3px 9px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.85)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Common roles */}
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                      Featured Roles:
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      {v.roles.join(' · ')}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Industries Grid Listing */}
      <section className="section" style={{ background: '#050404', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">Sectors We Serve</span>
            <h2 className="section-heading">
              Core Industry <span className="gradient-text">Landscape</span>
            </h2>
            <p className="section-sub" style={{ maxWidth: '42rem' }}>
              Deep domain presence across manufacturing clusters, production plants, and commercial organizations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="card"
                style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '1.25rem' }}
              >
                <span style={{ fontSize: '1.5rem', lineHeight: 1 }} aria-hidden="true">{ind.icon}</span>
                <span style={{ color: '#fff', fontSize: '14px', fontWeight: 700 }}>{ind.name}</span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <div className="card" style={{ padding: '3rem 2rem', maxWidth: '44rem', margin: '0 auto', background: 'radial-gradient(ellipse at center, rgba(236,32,41,0.12), transparent)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Need Industry Staffing or Operations Analysis?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Connect with our advisory and recruitment experts to conduct a workforce audit or mobilize personnel across your operating locations.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                Discuss Your Industry Requirements <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          #overview-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
          }
        }
        @media (min-width: 640px) {
          .analysis-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .analysis-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
