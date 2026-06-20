import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmModal = ({ 
  show, 
  onHide, 
  onConfirm, 
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'primary'
}) => {
  const getVariantClass = () => {
    switch(variant) {
      case 'danger': return 'btn-danger';
      case 'warning': return 'btn-warning';
      case 'success': return 'btn-success';
      default: return 'btn-primary';
    }
  };

  const getIcon = () => {
    switch(variant) {
      case 'danger': return 'exclamation-triangle-fill';
      case 'warning': return 'exclamation-triangle-fill';
      case 'success': return 'check-circle-fill';
      default: return 'question-circle-fill';
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
      className="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <i className={`bi bi-${getIcon()} me-2`}></i>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-0" style={{ fontSize: '1.05rem' }}>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          variant="secondary" 
          onClick={onHide}
        >
          {cancelText}
        </Button>
        <Button 
          variant={variant === 'primary' ? 'primary' : variant} 
          onClick={onConfirm}
          className={variant === 'warning' ? 'btn-warning' : ''}
        >
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;