import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3 text-center border-top" style={{ 
      borderColor: '#e2e8f0',
      marginTop: 'auto',
      background: '#ffffff'
    }}>
      <div className="test-container">
        <p style={{
          color: '#64748b',
          fontSize: '0.75rem',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          © 2026 Oil & Gas Aptitude Test • 60 Questions • 90 Minutes
        </p>
      </div>
    </footer>
  );
};

export default Footer;