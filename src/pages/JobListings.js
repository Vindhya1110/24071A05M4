import React from 'react';
import { useNavigate } from 'react-router-dom';

function JobListings({ jobs = [] }) {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2>Available Job Listings</h2>
        <p>Browse roles and choose the opportunity that fits your skills.</p>
      </header>
      <div style={styles.grid}>
        {jobs.map((job) => (
          <div key={job.id} style={styles.card}>
            <h3>{job.title}</h3>
            <p style={styles.company}>{job.company}</p>
            <div style={styles.meta}>
              <span>{job.location}</span>
              <span>{job.type}</span>
              <span>{job.salary}</span>
            </div>
            <p>{job.description}</p>
            <button
              style={styles.button}
              onClick={() => navigate(`/apply-job/${job.id}`)}
            >
              View & Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: { padding: '32px', maxWidth: '1100px', margin: '0 auto' },
  header: { marginBottom: '24px' },
  grid: { display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' },
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    minHeight: '220px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  company: { color: '#555', margin: '8px 0' },
  meta: { display: 'flex', gap: '10px', flexWrap: 'wrap', color: '#2f3c5b', fontSize: '13px', marginBottom: '16px' },
  button: {
    marginTop: '16px',
    padding: '10px 18px',
    background: '#457b9d',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
};

export default JobListings;
