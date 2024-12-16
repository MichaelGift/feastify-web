import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './service.css';

export default function ServiceSchedule() {
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { selectedDays, month } = location.state || { selectedDays: [], month: '' };
  const router = useNavigate();

  const handleDoneClick = () => {
    if (!selectedDays || selectedDays.length === 0) {
      setErrorMessage('No days selected. Please select at least one day.');
      setShowErrorModal(true); 
    } else {
      setShowConfirmModal(true); 
    }
  };

  const handleConfirm = () => {
    router('/service-quality', { state: { selectedDays, month } });
    setShowConfirmModal(false); 
  };

  const handleModalClose = () => {
    setShowErrorModal(false);
    setShowConfirmModal(false);
  };

  return (
    <div className="body-container">
      <div className="service-header">
        <h1>I am scheduling service for {month}</h1>
        <h5>Unlock the boxes you don't need</h5>
      </div>

      <div className="table-service">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {selectedDays.map((day) => (
              <tr key={day}>
                <td>{`${day}`}</td>
                <td>
                  <input
                    type="checkbox"
                    name={`breakfast-${day}`}
                    defaultChecked
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name={`lunch-${day}`}
                    defaultChecked
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name={`dinner-${day}`}
                    defaultChecked
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex space-x-4 mb-5 mt-5">
          <button
            onClick={handleDoneClick}
            className="calendar-btn bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Continue
          </button>
        </div>
      </div>

      <Modal show={showErrorModal} onHide={handleModalClose} centered className="border-0">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{errorMessage}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <p>Please select at least one day to continue.</p>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="primary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showConfirmModal} onHide={handleModalClose} centered className="border-0">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Confirm Your Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <p>Are you sure your selection is correct? Please confirm to proceed.</p>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
