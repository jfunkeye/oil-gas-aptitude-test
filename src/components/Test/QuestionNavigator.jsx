import React from 'react';

const QuestionNavigator = ({ 
  questions, 
  currentIndex, 
  answers, 
  onQuestionSelect 
}) => {
  const getStatus = (index) => {
    const question = questions[index];
    const isAnswered = answers[question.id] !== undefined;
    const isCurrent = index === currentIndex;

    if (isCurrent) return 'current';
    if (isAnswered) return 'answered';
    return 'unanswered';
  };

  return (
    <div className="navigator">
      <div className="navigator-grid">
        {questions.map((q, index) => {
          const status = getStatus(index);
          return (
            <button
              key={q.id}
              onClick={() => onQuestionSelect(index)}
              className={`nav-dot ${status}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      
      <div className="nav-legend">
        <span className="legend-item">
          <span className="legend-dot answered"></span>
          Answered
        </span>
        <span className="legend-item">
          <span className="legend-dot current"></span>
          Current
        </span>
        <span className="legend-item">
          <span className="legend-dot unanswered"></span>
          Unanswered
        </span>
      </div>
    </div>
  );
};

export default QuestionNavigator;