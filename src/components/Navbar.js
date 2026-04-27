/* eslint-disable unicode-bom */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, handleLogout, appliedCount }) {
  const navigate = useNavigate();
  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>Job Portal</Link>
      <div style={styles.links}>
        <Link to="/job-listings" style={styles.link}>Job Listings</Link>
        <Link to="/applied-jobs" style={styles.link}>
          Applied Jobs{appliedCount ? ` (${appliedCount})` : ''}
        </Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/about" style={styles.link}>About</Link>
        {isLoggedIn ? (
          <button onClick={onLogout} style={styles.btn}>Logout</button>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 24px',
    background: '#1d3557',
    color: '#fff',
  },
  brand: {
    color: '#f1faee',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: '700',
  },
  links: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    color: '#f1faee',
    textDecoration: 'none',
    fontSize: '14px',
  },
  btn: {
    background: '#e63946',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Navbar;
