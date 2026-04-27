import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ApplyJob({ jobs = [], onApply }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobId = Number(id);
  const job = jobs.find((item) => item.id === jobId);
  const [form, setForm] = useState({ fullName: '', email: '', phone: '' });

  if (!job) {
    return (
      <div style={styles.fallback}>
        <h2>Job not found</h2>
        <p>The job you are looking for does not exist. Please return to the listing page.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onApply(job, form);
    if (!success) {
      alert('You have already applied for this position with the same email.');
      return;
    }

    alert('Application submitted successfully!');
    navigate('/applied-jobs');
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.details}>
          <h2>Apply for {job.title}</h2>
          <p style={styles.company}>{job.company}</p>
          <div style={styles.meta}>
            <span>{job.location}</span>
            <span>{job.type}</span>
            <span>{job.salary}</span>
          </div>
          <p>{job.description}</p>
        </div>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h3>Application Details</h3>
          <input
            style={styles.input}
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <button type="submit" style={styles.button}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: '32px', display: 'flex', justifyContent: 'center' },
  card: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '32px',
    maxWidth: '1000px',
    width: '100%',
    background: '#fff',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  details: { color: '#1d3557' },
  company: { color: '#457b9d', margin: '10px 0' },
  meta: { display: 'flex', gap: '12px', flexWrap: 'wrap', color: '#495057', marginBottom: '18px' },
  form: { display: 'flex', flexDirection: 'column', gap: '14px' },
  input: {
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #dcdcdc',
    fontSize: '15px',
  },
  button: {
    padding: '12px 18px',
    background: '#1d3557',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '6px',
  },
  fallback: { padding: '40px', maxWidth: '600px', margin: 'auto' },
};

export default ApplyJob;
