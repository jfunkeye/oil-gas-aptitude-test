import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import QuestionCard from '../Test/QuestionCard';
import QuestionNavigator from '../Test/QuestionNavigator';
import SubmitConfirmModal from '../common/SubmitConfirmModal';
import TimeUpModal from '../common/TimeUpModal';
import LeaveConfirmModal from '../common/LeaveConfirmModal';

const TestScreen = ({ questions, onTestComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(5400);
  const [isTestComplete, setIsTestComplete] = useState(false);
  
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);

  const totalQuestions = questions.length;

  // Timer effect
  useEffect(() => {
    if (isTestComplete) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowTimeUpModal(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTestComplete]);

  // Handle browser/tab close, refresh, back/forward navigation
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Only show if test is not complete
      if (!isTestComplete) {
        e.preventDefault();
        e.returnValue = 'You have an ongoing test. Are you sure you want to leave? Your progress will be lost.';
        return e.returnValue;
      }
    };

    const handlePopState = (e) => {
      // Only show if test is not complete
      if (!isTestComplete) {
        setPendingNavigation('back');
        setShowLeaveModal(true);
        // Push a new state to prevent immediate navigation
        window.history.pushState(null, '', window.location.href);
      }
    };

    // Push initial state to handle back button
    window.history.pushState(null, '', window.location.href);

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isTestComplete]);

  // Handle clicking on external links
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && !target.href.startsWith(window.location.origin) && !isTestComplete) {
        e.preventDefault();
        setPendingNavigation(target.href);
        setShowLeaveModal(true);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [isTestComplete]);

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const goToNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const handleSubmitClick = () => {
    setShowSubmitModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowSubmitModal(false);
    setShowTimeUpModal(false);
    setShowLeaveModal(false);
    setIsTestComplete(true);
    onTestComplete(answers, timeLeft);
  };

  const handleCancelSubmit = () => {
    setShowSubmitModal(false);
  };

  const handleLeaveCancel = () => {
    setShowLeaveModal(false);
    setPendingNavigation(null);
  };

  const handleLeaveConfirm = () => {
    setShowLeaveModal(false);
    // Auto-submit the test before leaving
    setIsTestComplete(true);
    onTestComplete(answers, timeLeft);
    
    // Navigate after a small delay to ensure state updates
    setTimeout(() => {
      if (pendingNavigation === 'back') {
        window.history.back();
      } else if (pendingNavigation) {
        window.location.href = pendingNavigation;
      } else {
        // Default - go back to home
        window.location.href = '/';
      }
    }, 100);
  };

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;
  const currentQ = questions[currentQuestion];

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Header 
        timeLeft={timeLeft} 
        answeredCount={answeredCount} 
        totalQuestions={totalQuestions}
      />

      <main style={{ flex: 1 }}>
        <div className="test-container">
          {/* Progress */}
          <div className="progress-wrap">
            <div className="progress-header">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Question */}
          <QuestionCard
            question={currentQ}
            currentIndex={currentQuestion}
            totalQuestions={totalQuestions}
            selectedAnswer={answers[currentQ.id]}
            onAnswerSelect={handleAnswerSelect}
            isTestComplete={false}
          />

          {/* Navigation */}
          <div className="test-nav">
            <div className="nav-group">
              <button
                className="btn-subtle"
                onClick={goToPrevious}
                disabled={currentQuestion === 0}
              >
                <i className="bi bi-chevron-left me-1"></i>
                Previous
              </button>
              <button
                className="btn-subtle"
                onClick={goToNext}
                disabled={currentQuestion === totalQuestions - 1}
              >
                Next
                <i className="bi bi-chevron-right ms-1"></i>
              </button>
            </div>

            <button
              className="btn-success"
              onClick={handleSubmitClick}
            >
              <i className="bi bi-check2-circle me-2"></i>
              Submit Test
            </button>
          </div>

          {/* Navigator */}
          <QuestionNavigator
            questions={questions}
            currentIndex={currentQuestion}
            answers={answers}
            onQuestionSelect={goToQuestion}
          />
        </div>
      </main>

      <Footer />

      {/* Submit Confirmation Modal */}
      <SubmitConfirmModal
        show={showSubmitModal}
        onHide={handleCancelSubmit}
        onConfirm={handleConfirmSubmit}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
      />

      {/* Time Up Modal */}
      <TimeUpModal
        show={showTimeUpModal}
        onConfirm={handleConfirmSubmit}
      />

      {/* Leave Confirmation Modal */}
      <LeaveConfirmModal
        show={showLeaveModal}
        onHide={handleLeaveCancel}
        onConfirm={handleLeaveConfirm}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
      />
    </div>
  );
};

export default TestScreen;
