import React, { useState } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import ScoreCard from '../Results/ScoreCard';
import PerformanceLevel from '../Results/PerformanceLevel';
import WrongAnswersReview from '../Results/WrongAnswersReview';
import ConfirmModal from '../Common/ConfirmModal';

const ResultsScreen = ({ questions, answers, timeLeft, onRetake, onHome }) => {
  const [showRetakeModal, setShowRetakeModal] = useState(false);
  const [showHomeModal, setShowHomeModal] = useState(false);

  const totalQuestions = questions.length;
  const totalTime = 5400;
  const timeUsed = totalTime - timeLeft;

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  const wrongQuestions = [];

  questions.forEach((q) => {
    const userAnswer = answers[q.id];
    if (userAnswer === undefined) {
      unanswered++;
    } else if (userAnswer === q.correct) {
      correct++;
    } else {
      incorrect++;
      wrongQuestions.push({
        ...q,
        userAnswer: userAnswer
      });
    }
  });

  const percentage = Math.round((correct / totalQuestions) * 100);

  const handleRetakeClick = () => {
    setShowRetakeModal(true);
  };

  const handleConfirmRetake = () => {
    setShowRetakeModal(false);
    onRetake();
  };

  const handleCancelRetake = () => {
    setShowRetakeModal(false);
  };

  const handleHomeClick = () => {
    setShowHomeModal(true);
  };

  const handleConfirmHome = () => {
    setShowHomeModal(false);
    onHome();
  };

  const handleCancelHome = () => {
    setShowHomeModal(false);
  };

  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: '100vh', background: '#f8fafc' }}>
        <Header 
          timeLeft={timeLeft} 
          answeredCount={Object.keys(answers).length} 
          totalQuestions={totalQuestions}
          showTimer={true}
        />

        <main style={{ flex: 1 }}>
          <div className="results-container">
            <div className="results-card">
              <h2 className="results-title">
                <i className="bi bi-clipboard-check"></i>
                Test Results
              </h2>

              <ScoreCard 
                correct={correct} 
                incorrect={incorrect} 
                unanswered={unanswered} 
                total={totalQuestions}
                percentage={percentage}
                timeUsed={timeUsed}
              />

              <PerformanceLevel percentage={percentage} />
            </div>

            {wrongQuestions.length > 0 && (
              <WrongAnswersReview wrongQuestions={wrongQuestions} />
            )}

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button
                  className="btn-primary-blue"
                  onClick={handleRetakeClick}
                >
                  <i className="bi bi-arrow-repeat me-2"></i>
                  Retake Test
                </button>
                <button
                  className="btn-secondary-white"
                  onClick={handleHomeClick}
                  style={{
                    background: '#f1f5f9',
                    color: '#0f172a',
                    fontWeight: '700',
                    padding: '14px 40px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#e2e8f0';
                    e.target.style.borderColor = '#94a3b8';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#f1f5f9';
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                >
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <ConfirmModal
        show={showRetakeModal}
        onHide={handleCancelRetake}
        onConfirm={handleConfirmRetake}
        title="Retake Test"
        message="This will reset all your answers and start a new test session with fresh questions. Are you sure you want to continue?"
        confirmText="Retake Test"
        cancelText="Cancel"
        variant="warning"
      />

      <ConfirmModal
        show={showHomeModal}
        onHide={handleCancelHome}
        onConfirm={handleConfirmHome}
        title="Go to Home"
        message="Are you sure you want to return to the home screen? Your current test results will be saved."
        confirmText="Go Home"
        cancelText="Cancel"
        variant="primary"
      />
    </>
  );
};

export default ResultsScreen;