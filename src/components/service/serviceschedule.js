import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./service.css";

export default function ServiceSchedule() {
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState('');
  const { selectedDays, month } = location.state || { selectedDays: [], month: '' };
  const router = useNavigate();

  const handleDoneClick = () => {
    if (!selectedDays || selectedDays.length === 0) {
      setErrorMessage('No days selected. Please select at least one day.');
      window.alert('No days selected. Please select at least one day.');
    } else {
      const confirmed = window.confirm('Please confirm if your selection is correct!');
    //   console.log(confirmed)
      if (confirmed) {
        router('/service-quality', { state: { selectedDays, month } });
      }
    }
  };

  return (
    <div>
      <div className='service-header'>
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
        <div className="flex space-x-4 mt-5">
          <button
            onClick={handleDoneClick}
            className="calendar-btn bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Continue
          </button>
      </div>
      </div>
    </div>
  );
}
