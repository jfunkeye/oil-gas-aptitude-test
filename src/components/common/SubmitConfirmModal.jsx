import React from 'react';
import { Modal, Button, ProgressBar } from 'react-bootstrap';

const SubmitConfirmModal = ({ 
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
      className="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="bi bi-check2-circle text-success me-2"></i>
          Submit Test
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#2563eb' }}>
            {answeredCount}/{totalQuestions}
          </div>
          <div className="text-muted">Questions Answered</div>
        </div>

        <ProgressBar 
          now={percentage} 
          label={`${percentage}%`}
          variant={percentage === 100 ? 'success' : 'warning'}
          style={{ height: '20px' }}
          className="mb-3"
        />

        {unanswered > 0 && (
          <div className="text-center text-warning">
            <i className="bi bi-exclamation-triangle-fill me-1"></i>
            <strong>{unanswered}</strong> question{unanswered > 1 ? 's' : ''} unanswered
          </div>
        )}

        {unanswered === 0 && (
          <div className="text-center text-success">
            <i className="bi bi-check-circle-fill me-1"></i>
            All questions answered!
          </div>
        )}

        <div className="text-center text-muted mt-2" style={{ fontSize: '0.85rem' }}>
          Are you sure you want to submit your test?
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={onHide}
        >
          <i className="bi bi-x-circle me-1"></i>
          Cancel
        </Button>
        <Button 
          variant="success" 
          onClick={onConfirm}
        >
          <i className="bi bi-check2-circle me-1"></i>
          Submit Test
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SubmitConfirmModal;