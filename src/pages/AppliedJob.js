import React from 'react';
import { Link } from 'react-router-dom';

function AppliedJob({ appliedJobs = [] }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2>Applied Jobs</h2>
        <p>Track the positions you have applied for and review your submissions.</p>
      </header>
      {appliedJobs.length === 0 ? (
        <div style={styles.empty}>
          <p>You haven't applied for any jobs yet.</p>
          <Link to="/job-listings" style={styles.linkButton}>
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div style={styles.list}>
          {appliedJobs.map((job) => (
            <div key={`${job.id}-${job.applicant.email}`} style={styles.card}>
              <div>
                <h3>{job.title}</h3>
                <p style={styles.company}>{job.company}</p>
                <p style={styles.meta}>{job.location} • {job.type}</p>
              </div>
              <div style={styles.info}>
                <p><strong>Applicant:</strong> {job.applicant.fullName}</p>
                <p><strong>Email:</strong> {job.applicant.email}</p>
                <p><strong>Applied:</strong> {job.appliedAt}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  page: { padding: '32px', maxWidth: '960px', margin: '0 auto' },
  header: { marginBottom: '24px' },
  empty: { padding: '32px', background: '#fff', borderRadius: '14px', textAlign: 'center' },
  linkButton: {
    display: 'inline-block',
    marginTop: '16px',
    padding: '10px 18px',
    background: '#457b9d',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
  },
  list: { display: 'grid', gap: '20px' },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '24px',
    background: '#fff',
    borderRadius: '14px',
    padding: '22px',
    boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
  },
  company: { margin: '8px 0', color: '#4a5568' },
  meta: { color: '#718096', fontSize: '14px' },
  info: { minWidth: '220px', textAlign: 'right', color: '#2d3748', fontSize: '14px' },
};

export default AppliedJob;
