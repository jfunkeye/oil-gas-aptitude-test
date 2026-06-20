import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TimeUpModal = ({ show, onConfirm }) => {
  return (
    <Modal
      show={show}
      centered
      backdrop="static"
      keyboard={false}
      className="custom-modal"
    >
      <Modal.Header closeButton className="bg-danger" style={{ borderBottom: 'none' }}>
        <Modal.Title style={{ color: 'white' }}>
          <i className="bi bi-stopwatch-fill me-2"></i>
          Time's Up!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <div className="text-center">
          <i className="bi bi-clock-alarm" style={{ fontSize: '3rem', color: '#dc2626' }}></i>
          <p className="mt-3 mb-0" style={{ fontSize: '1.1rem' }}>
            Your 90-minute time limit has expired.
            <br />
            Your test will be automatically submitted.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center">
        <Button 
          variant="danger" 
          onClick={onConfirm}
          className="px-5 py-2"
        >
          <i className="bi bi-check2-circle me-2"></i>
          Submit Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TimeUpModal;