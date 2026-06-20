import React from 'react';

const PerformanceLevel = ({ percentage }) => {
  let level = 'Needs Improvement';
  let className = 'performance-card poor';
  let description = 'Further preparation required to meet the standard.';

  if (percentage >= 80) {
    level = '🌟 Excellent — Strong Candidate';
    className = 'performance-card excellent';
    description = 'Outstanding performance! You demonstrate strong understanding across all sections.';
  } else if (percentage >= 67) {
    level = '👍 Good — Likely to Progress';
    className = 'performance-card good';
    description = 'Solid performance. You have a good grasp of the material and are likely to advance.';
  } else if (percentage >= 50) {
    level = '📊 Average — Borderline';
    className = 'performance-card average';
    description = 'Adequate performance. Focus on improving weaker areas to increase your chances.';
  }

  return (
    <div className={className}>
      <div className="level">{level}</div>
      <div className="desc">{description}</div>
    </div>
  );
};

export default PerformanceLevel;