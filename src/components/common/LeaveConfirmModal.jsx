import React from 'react';
import { Modal, Button, ProgressBar } from 'react-bootstrap';

const LeaveConfirmModal = ({ 
  show, 
  onHide, 
  onConfirm, 
  answeredCount, 
  totalQuestions 
}) => {
  const percentage = Math.round((answeredCount / totalQuestions) * 100);
  const unanswered = totalQuestions - answeredCount;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
      className="custom-modal"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>
          <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>
          Leave Test?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <i className="bi bi-box-arrow-right" style={{ fontSize: '3rem', color: '#f59e0b' }}></i>
          <p className="mt-3" style={{ fontSize: '1.05rem' }}>
            You are about to leave the test screen.
          </p>
        </div>

        <div className="bg-light p-3 rounded-3 mb-3">
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Progress:</span>
            <span className="fw-bold">{percentage}%</span>
          </div>
          <ProgressBar 
            now={percentage} 
            variant={percentage === 100 ? 'success' : 'warning'}
            style={{ height: '8px' }}
          />
          <div className="d-flex justify-content-between mt-2">
            <span className="text-muted small">Answered: {answeredCount}/{totalQuestions}</span>
            {unanswered > 0 && (
              <span className="text-warning small">
                <i className="bi bi-exclamation-circle me-1"></i>
                {unanswered} unanswered
              </span>
            )}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-danger bg-opacity-10 border border-danger rounded-3 p-3">
            <i className="bi bi-info-circle text-danger me-2"></i>
            <span className="text-danger fw-semibold">
              Your test will be automatically submitted if you leave.
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button 
          variant="secondary" 
          onClick={onHide}
          className="px-4"
        >
          <i className="bi bi-arrow-left me-1"></i>
          Stay & Continue
        </Button>
        <Button 
          variant="danger" 
          onClick={onConfirm}
          className="px-4"
        >
          <i className="bi bi-box-arrow-right me-1"></i>
          Leave & Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LeaveConfirmModal;