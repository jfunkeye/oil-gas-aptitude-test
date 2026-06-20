import React, { useState } from 'react';
import ConfirmModal from '../common/ConfirmModal';
import logo from '../../assets/logo.png';

const HomeScreen = ({ onStartTest }) => {
  const [showStartModal, setShowStartModal] = useState(false);

  const handleStartClick = () => {
    setShowStartModal(true);
  };

  const handleConfirmStart = () => {
    setShowStartModal(false);
    onStartTest();
  };

  const handleCancelStart = () => {
    setShowStartModal(false);
  };

  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: '28px'
          }}>
            <img 
              src={logo} 
              alt="Oil & Gas Aptitude Test Logo" 
              style={{ 
                width: '200px', 
                height: '100px', 
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </div>

          <h1 className="home-title">
            Oil & Gas <span>Aptitude Test</span>
          </h1>
          <p className="home-subtitle">
            Technical Graduate Programme • Practice Assessment
          </p>

          <div className="home-features">
            <div className="feature-item">
              <i className="bi bi-question-circle"></i>
              <span><strong>60</strong> Questions</span>
            </div>
            <div className="feature-item">
              <i className="bi bi-clock"></i>
              <span><strong>90</strong> Minutes</span>
            </div>
            <div className="feature-item">
              <i className="bi bi-layers"></i>
              <span><strong>Multiple</strong> Practice Sets</span>
            </div>
            <div className="feature-item">
              <i className="bi bi-lightbulb"></i>
              <span><strong>Explanations</strong> Included</span>
            </div>
            <div className="feature-item">
              <i className="bi bi-check-circle"></i>
              <span><strong>Review</strong> Wrong Answers</span>
            </div>
            <div className="feature-item">
              <i className="bi bi-arrow-repeat"></i>
              <span><strong>Fresh</strong> Questions Each Time</span>
            </div>
          </div>

          <button className="btn-primary-blue" onClick={handleStartClick}>
            <i className="bi bi-play-circle me-2"></i>
            Start Practice Test
          </button>

          <p style={{
            color: '#94a3b8',
            fontSize: '0.7rem',
            marginTop: '16px'
          }}>
            ⚡ Timer starts immediately • Cannot be paused
          </p>
        </div>
      </div>

      <ConfirmModal
        show={showStartModal}
        onHide={handleCancelStart}
        onConfirm={handleConfirmStart}
        title="Start Practice Test"
        message="Are you ready to begin? The 90-minute timer will start immediately and cannot be paused."
        confirmText="Start Test"
        cancelText="Cancel"
        variant="primary"
      />
    </>
  );
};

export default HomeScreen;
