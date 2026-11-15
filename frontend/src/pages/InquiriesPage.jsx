import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, RefreshCw, Mail, Phone, Calendar, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config/api';
import { fadeUp, transition, viewport } from '../utils/animations';

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [applications, setApplications] = useState([]);
  const [activeTab, setActiveTab] = useState('inquiries');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [resInq, resApp] = await Promise.all([
        fetch(`${API_BASE_URL}/inquiries`),
        fetch(`${API_BASE_URL}/applications`)
      ]);

      if (!resInq.ok || !resApp.ok) {
        throw new Error('Failed to retrieve records from the backend.');
      }

      const inqData = await resInq.json();
      const appData = await resApp.json();

      setInquiries(inqData);
      setApplications(appData);
    } catch (err) {
      console.error(err);
      setError('Could not connect to backend server or database.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/inquiries/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setInquiries(prev => prev.filter(item => item.id !== id));
      } else {
        alert('Failed to delete inquiry');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting inquiry');
    }
  };

  const handleClearAllInquiries = async () => {
    if (!window.confirm('Delete ALL client inquiries from the database?')) return;
    setDeleting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/inquiries`, { method: 'DELETE' });
      if (res.ok) {
        setInquiries([]);
      } else {
        alert('Failed to clear inquiries');
      }
    } catch (err) {
      console.error(err);
      alert('Error clearing inquiries');
    } finally {
      setDeleting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ paddingTop: '5.5rem', minHeight: '80vh' }}>
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 2rem', background: 'radial-gradient(ellipse at top, rgba(236,32,41,0.18), transparent 70%)', borderBottom: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', borderRadius: '50px', background: 'rgba(236,32,41,0.12)', border: '1px solid rgba(236,32,41,0.3)', marginBottom: '1rem' }}>
            <Database size={13} color="#ec2029" />
            <span style={{ color: '#ec2029', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>SQLite Database</span>
          </div>

          <h1 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Client Inquiries &amp; <span className="gradient-text">Candidate Records</span>
          </h1>
          <p className="section-sub" style={{ maxWidth: '40rem' }}>
            Real-time records stored in the SQLite database (`consultancy.db`), powered by Express MVC backend.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={activeTab === 'inquiries' ? 'btn-primary' : 'btn-outline'}
              style={{ fontSize: '13px', padding: '10px 24px' }}
            >
              Client Inquiries ({inquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={activeTab === 'applications' ? 'btn-primary' : 'btn-outline'}
              style={{ fontSize: '13px', padding: '10px 24px' }}
            >
              Candidate Applications ({applications.length})
            </button>
            <button
              onClick={fetchData}
              className="btn-outline"
              style={{ padding: '10px 14px' }}
              title="Refresh Data"
            >
              <RefreshCw size={16} />
            </button>
            {activeTab === 'inquiries' && inquiries.length > 0 && (
              <button
                onClick={handleClearAllInquiries}
                disabled={deleting}
                className="btn-outline"
                style={{ padding: '10px 16px', borderColor: 'rgba(236,32,41,0.5)', color: '#ec2029', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                title="Delete All Inquiries"
              >
                <Trash2 size={15} />
                <span>Clear All Inquiries</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Database Listing Content */}
      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'rgba(255,255,255,0.6)' }}>
              <RefreshCw className="animate-spin" size={32} color="#ec2029" style={{ margin: '0 auto 1rem' }} />
              <p>Querying SQLite database...</p>
            </div>
          ) : error ? (
            <div className="card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '36rem', margin: '0 auto', borderColor: 'rgba(236,32,41,0.4)' }}>
              <p style={{ color: '#ec2029', fontWeight: 700, marginBottom: '1rem' }}>{error}</p>
              <button onClick={fetchData} className="btn-primary" style={{ margin: '0 auto' }}>
                Retry Connection
              </button>
            </div>
          ) : activeTab === 'inquiries' ? (
            inquiries.length === 0 ? (
              <div className="card" style={{ padding: '4rem', textAlign: 'center', maxWidth: '36rem', margin: '0 auto' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>No client inquiries submitted yet.</p>
                <Link to="/contact" className="btn-primary" style={{ margin: '0 auto' }}>
                  Submit Test Inquiry
                </Link>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {inquiries.map((inq) => (
                  <motion.div
                    key={inq.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="card"
                    style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#ec2029', background: 'rgba(236,32,41,0.12)', padding: '2px 8px', borderRadius: '4px' }}>
                        #{inq.id} {inq.service || 'General Inquiry'}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={12} /> {new Date(inq.created_at).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => handleDeleteInquiry(inq.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'rgba(255,255,255,0.4)',
                            cursor: 'pointer',
                            padding: '4px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#ec2029'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                          title="Delete inquiry"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '18px', marginBottom: '2px' }}>{inq.name}</h3>
                      {inq.company && <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{inq.company}</p>}
                    </div>

                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.6, background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                      "{inq.message}"
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <a href={`mailto:${inq.email}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>
                        <Mail size={14} color="#ec2029" /> {inq.email}
                      </a>
                      {inq.phone && (
                        <a href={`tel:${inq.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>
                          <Phone size={14} color="#ec2029" /> {inq.phone}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          ) : (
            applications.length === 0 ? (
              <div className="card" style={{ padding: '4rem', textAlign: 'center', maxWidth: '36rem', margin: '0 auto' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>No candidate profiles submitted yet.</p>
                <Link to="/skills" className="btn-primary" style={{ margin: '0 auto' }}>
                  Register as Candidate
                </Link>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {applications.map((app) => (
                  <motion.div
                    key={app.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    className="card"
                    style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#ec2029', background: 'rgba(236,32,41,0.12)', padding: '2px 8px', borderRadius: '4px' }}>
                        #{app.id} {app.role_applied}
                      </span>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} /> {new Date(app.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    <div>
                      <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '16px' }}>{app.name}</h3>
                      <p style={{ color: '#ec2029', fontSize: '12px', fontWeight: 600 }}>Exp: {app.experience}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <a href={`mailto:${app.email}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>
                        <Mail size={14} color="#ec2029" /> {app.email}
                      </a>
                      <a href={`tel:${app.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }}>
                        <Phone size={14} color="#ec2029" /> {app.phone}
                      </a>
                    </div>

                    {app.skills && (
                      <div>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Skills:</span>
                        <p style={{ color: '#fff', fontSize: '12px', fontWeight: 600, marginTop: '2px' }}>{app.skills}</p>
                      </div>
                    )}

                    {app.resume_note && (
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: 1.5 }}>
                          {app.resume_note}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
