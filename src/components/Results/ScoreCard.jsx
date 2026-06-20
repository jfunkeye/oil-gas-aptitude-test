import React from 'react';

const ScoreCard = ({ correct, incorrect, unanswered, total, percentage, timeUsed }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div>
      <div className="score-grid">
        <div className="score-item correct">
          <div className="number">{correct}</div>
          <div className="label">Correct</div>
        </div>
        <div className="score-item incorrect">
          <div className="number">{incorrect}</div>
          <div className="label">Incorrect</div>
        </div>
        <div className="score-item unanswered">
          <div className="number">{unanswered}</div>
          <div className="label">Unanswered</div>
        </div>
        <div className="score-item percentage">
          <div className="number">{percentage}%</div>
          <div className="label">Score</div>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        color: '#64748b', 
        fontSize: '0.8rem' 
      }}>
        <i className="bi bi-clock me-1"></i>
        Time Used: {formatTime(timeUsed)} / 90m
      </div>
    </div>
  );
};

export default ScoreCard;