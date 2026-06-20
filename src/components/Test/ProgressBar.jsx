import React from 'react';
import { ProgressBar as BootstrapProgress } from 'react-bootstrap';

const ProgressBar = ({ progress }) => {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between mb-1">
        <span className="text-muted small">Progress</span>
        <span className="text-muted small">{Math.round(progress)}%</span>
      </div>
      <BootstrapProgress 
        now={progress} 
        className="progress-custom"
        style={{ height: '8px' }}
      />
    </div>
  );
};

export default ProgressBar;