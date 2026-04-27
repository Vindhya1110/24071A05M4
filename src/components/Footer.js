import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>24071A05M4||VindhyaD@AllRightsReserved</p>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background: '#f5f5f5',
    borderTop: '1px solid #ddd',
    marginTop: 'auto',
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '12px',
    color: '#666',
  },
};

export default Footer;
