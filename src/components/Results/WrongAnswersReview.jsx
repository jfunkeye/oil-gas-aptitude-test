import React, { useState } from 'react';

const WrongAnswersReview = ({ wrongQuestions }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="wrong-review">
      <h4 className="wrong-review-title">
        <i className="bi bi-x-circle"></i>
        Review Incorrect Answers
      </h4>
      <p className="wrong-review-sub">
        {wrongQuestions.length} questions need review
      </p>

      {wrongQuestions.map((q) => (
        <div key={q.id} className="wrong-item">
          <div 
            className="wrong-item-header"
            onClick={() => toggleExpand(q.id)}
          >
            <div>
              <span className="qid">Q{q.id}</span>
              <span className="qtext">
                {q.question.length > 80 ? q.question.substring(0, 80) + '...' : q.question}
              </span>
            </div>
            <i className={`bi bi-chevron-down chevron ${expanded[q.id] ? 'open' : ''}`}></i>
          </div>

          {expanded[q.id] && (
            <div className="wrong-item-body">
              <div className="answer-compare">
                <div className="answer-box wrong">
                  <div className="label">✗ Your Answer</div>
                  <div className="value">
                    {letters[q.userAnswer]}. {q.options[q.userAnswer]}
                  </div>
                </div>
                <div className="answer-box correct">
                  <div className="label">✓ Correct Answer</div>
                  <div className="value">
                    {letters[q.correct]}. {q.options[q.correct]}
                  </div>
                </div>
              </div>
              
              <div className="wrong-explanation">
                <i className="bi bi-lightbulb"></i>
                {q.explanation}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WrongAnswersReview;