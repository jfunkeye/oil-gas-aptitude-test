import React, { useState } from 'react';

const QuestionCard = ({ 
  question, 
  currentIndex, 
  totalQuestions, 
  selectedAnswer, 
  onAnswerSelect,
  isTestComplete 
}) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (index) => {
    if (!isTestComplete) {
      onAnswerSelect(question.id, index);
    }
  };

  const getOptionClass = (index) => {
    let classes = 'option-btn';
    const isSelected = selectedAnswer === index;
    
    if (isSelected) {
      classes += ' selected';
    }
    
    if (isTestComplete) {
      if (index === question.correct) {
        classes += ' correct';
      } else if (isSelected && index !== question.correct) {
        classes += ' incorrect';
      }
    }
    
    return classes;
  };

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="question-card">
      <div className="question-meta">
        <span className="question-badge badge-section">
          {question.section}
        </span>
        <span className="question-badge badge-category">
          {question.category}
        </span>
        <span className="question-number">
          Q{currentIndex + 1}/{totalQuestions}
        </span>
      </div>

      <div className="question-text">
        {question.question}
      </div>

      <div className="options-grid">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={getOptionClass(index)}
            disabled={isTestComplete}
          >
            <span className="letter">{letters[index]}</span>
            {option}
          </button>
        ))}
      </div>

      {selectedAnswer !== undefined && !isTestComplete && (
        <div>
          <button
            className="explanation-toggle"
            onClick={() => setShowExplanation(!showExplanation)}
          >
            <i className={`bi bi-${showExplanation ? 'eye-slash' : 'eye'}`}></i>
            {showExplanation ? 'Hide' : 'Show'} Explanation
          </button>
          {showExplanation && (
            <div className="explanation-box">
              <i className="bi bi-lightbulb"></i>
              {question.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;