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
    <header className="app-header">
      <div className="test-container">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          {/* Brand with Logo */}
          <a href="#" className="header-brand" onClick={(e) => e.preventDefault()}>
  <div className="header-brand-icon" style={{ 
    width: '50px', 
    height: '50px', 
    background: 'transparent',
    padding: '4px'
  }}>
    <img 
      src={logo} 
      alt="Logo" 
      style={{ 
        width: '100px', 
        height: '130px', 
        objectFit: 'contain',
        display: 'block'
      }} 
    />
  </div>
</a>

          {/* Stats */}
          {showTimer && (
            <div className="header-stats">
              <div className="stat-item">
                <div className="stat-label">Time Left</div>
                <div className={`stat-value ${getTimeStatus()}`}>
                  <i className="bi bi-clock me-1"></i>
                  {formatTime(timeLeft)}
                </div>
              </div>
              <div className="stat-item d-none d-sm-block">
                <div className="stat-label">Progress</div>
                <div className="stat-value">
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