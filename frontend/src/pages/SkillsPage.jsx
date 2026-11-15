import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader, Award } from 'lucide-react';
import { API_BASE_URL } from '../config/api';
import Skills from '../components/Skills';

export default function SkillsPage() {
  const [appForm, setAppForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '1-3 Years',
    skills: '',
    roleApplied: 'Industrial Manufacturing & Operations',
    resumeNote: ''
  });
  const [status, setStatus] = useState('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!appForm.name || !appForm.email || !appForm.phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(`${API_BASE_URL}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appForm)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMsg(data.message || 'Application submitted successfully!');
      } else {
        setStatus('error');
        setMsg(data.error || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMsg('Server connection failed. Please ensure the backend is running.');
    }
  };

  return (
    <div style={{ paddingTop: '5.5rem' }}>
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 2rem', background: 'radial-gradient(ellipse at top, rgba(236,32,41,0.18), transparent 70%)', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container">
          <span className="eyebrow">Workforce Skill &amp; Apprenticeship</span>
          <h1 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Trade Competency &amp; <span className="gradient-text">Industrial Placement</span>
          </h1>
          <p className="section-sub" style={{ maxWidth: '40rem' }}>
            Explore industry-aligned training programs, NAPS/NATS government apprenticeship avenues, and register your profile for industrial and commercial openings.
          </p>
        </div>
      </section>

      {/* Main Skills Component */}
      <Skills />

      {/* Candidate Registration Section (Connected to SQLite backend) */}
      <section className="section" style={{ background: '#020101', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ maxWidth: '48rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">For Candidates</span>
            <h2 className="section-heading">Apply for <span className="gradient-text">Top Placements</span></h2>
            <p className="section-sub">
              Register your profile with Prime Staffing Services Private Limited. Our staffing team will evaluate your skill set for active openings.
            </p>
          </div>

          <div className="card" style={{ padding: '2.5rem' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle size={56} color="#ec2029" style={{ margin: '0 auto 1.5rem' }} />
                <h3 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>Application Submitted!</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '2rem' }}>{msg}</p>
                <button
                  onClick={() => { setStatus('idle'); setAppForm({ name: '', email: '', phone: '', experience: '1-3 Years', skills: '', roleApplied: 'Industrial Manufacturing & Operations', resumeNote: '' }); }}
                  className="btn-primary"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={appForm.name}
                      onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={appForm.email}
                      onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 99265 72625"
                      value={appForm.phone}
                      onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Total Experience</label>
                    <select
                      value={appForm.experience}
                      onChange={(e) => setAppForm({ ...appForm, experience: e.target.value })}
                      className="form-input"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5-8 Years">5-8 Years</option>
                      <option value="8+ Years (Senior/Lead)">8+ Years (Senior/Lead)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="form-label">Desired Domain / Trade</label>
                    <select
                      value={appForm.roleApplied}
                      onChange={(e) => setAppForm({ ...appForm, roleApplied: e.target.value })}
                      className="form-input"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="IT & Systems Support">IT Infrastructure &amp; Technical Support</option>
                      <option value="Industrial Manufacturing & Operations">Industrial Manufacturing &amp; Operations</option>
                      <option value="Machine Operator (CNC/VMC)">Machine Operator (CNC/VMC/Lathe)</option>
                      <option value="Fitter & Welder Trade">Mechanical Fitter &amp; Welder</option>
                      <option value="Industrial Electrician & Wireman">Industrial Electrician &amp; Wireman</option>
                      <option value="Warehouse & Logistics Manpower">Warehouse &amp; Logistics Manpower</option>
                      <option value="Quality Inspection & Assembly">Quality Inspection &amp; Assembly Line</option>
                      <option value="NAPS/NATS Apprentice Trainee">NAPS / NATS Apprentice Trainee</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Primary Trade / IT Skills</label>
                    <input
                      type="text"
                      placeholder="e.g. IT Support, Linux, CNC, Fitter, Electrician, Assembly"
                      value={appForm.skills}
                      onChange={(e) => setAppForm({ ...appForm, skills: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Trade / Technical Background &amp; Work Summary</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your trade/IT specialization, certifications (CCNA, AWS, ITI, Diploma, Degree), or prior industry experience..."
                    value={appForm.resumeNote}
                    onChange={(e) => setAppForm({ ...appForm, resumeNote: e.target.value })}
                    className="form-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                {status === 'error' && (
                  <p className="form-error" style={{ textAlign: 'center' }}>{msg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                >
                  {status === 'loading' ? (
                    <><Loader className="animate-spin" size={16} /> Submitting Profile...</>
                  ) : (
                    <><Send size={16} /> Submit Candidate Application</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

