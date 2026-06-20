import React from 'react';
import logo from '../../assets/logo.png';

const Header = ({ timeLeft, answeredCount, totalQuestions, showTimer = true }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getTimeStatus = () => {
    if (timeLeft <= 60) return 'danger';
    if (timeLeft <= 300) return 'warning';
    return '';
  };

  return (
    <header className="app-header" style={{ padding: '4px 0', minHeight: '48px' }}>
      <div className="test-container">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          {/* Brand with Logo */}
          <a 
            href="#" 
            className="header-brand" 
            onClick={(e) => e.preventDefault()}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              textDecoration: 'none'
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              style={{ 
                width: '100px', 
                height: '60px', 
                objectFit: 'contain',
                display: 'block'
              }} 
            />
   
          </a>

          {/* Stats */}
          {showTimer && (
            <div className="header-stats" style={{ gap: '12px' }}>
              <div className="stat-item">
                <div className="stat-label" style={{ fontSize: '0.5rem' }}>Time</div>
                <div className={`stat-value ${getTimeStatus()}`} style={{ fontSize: '0.8rem' }}>
                  <i className="bi bi-clock me-1"></i>
                  {formatTime(timeLeft)}
                </div>
              </div>
              <div className="stat-item d-none d-sm-block">
                <div className="stat-label" style={{ fontSize: '0.5rem' }}>Progress</div>
                <div className="stat-value" style={{ fontSize: '0.8rem' }}>
                  {answeredCount}/{totalQuestions}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
