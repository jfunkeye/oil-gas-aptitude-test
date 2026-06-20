import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const InfoModal = ({ 
  show, 
  onHide, 
  title = 'Information',
  message = '',
  variant = 'info',
  icon = 'info-circle',
  buttonText = 'OK'
}) => {
  const getIconColor = () => {
    switch(variant) {
      case 'success': return 'text-success';
      case 'danger': return 'text-danger';
      case 'warning': return 'text-warning';
      case 'info': return 'text-info';
      default: return 'text-primary';
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      className="custom-modal"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold">
          <i className={`bi bi-${icon} me-2 ${getIconColor()}`}></i>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-3">
        <p className="mb-0" style={{ fontSize: '1.05rem' }}>{message}</p>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button 
          variant={variant} 
          onClick={onHide}
          className="px-4"
        >
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;