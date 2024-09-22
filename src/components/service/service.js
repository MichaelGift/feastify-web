import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css';

export default function ServiceDay() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [month, setMonth] = useState('February');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useNavigate();

  const daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  const months = Object.keys(daysInMonth);
  const days = Array.from({ length: daysInMonth[month] }, (_, i) => i + 1);

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getFirstDayOfMonth = (month) => {
    const year = new Date().getFullYear();
    const firstDay = new Date(`${month} 1, ${year}`).getDay();
    return firstDay;
  };

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setSelectedDays([]);
  };

  const handleDoneClick = () => {
    if (selectedDays.length === 0) {
      setErrorMessage('Please select day(s)!');
      window.alert(errorMessage);
    } else {
      setErrorMessage('');
      router('/service-schedule', { state: { selectedDays, month } });
    }
  };

  const firstDayOfMonth = getFirstDayOfMonth(month);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4 mt-5">Select Service Days</h1>

      <div className="calendar">
        <div className="mb-4">
          <select
            id="month"
            value={month}
            onChange={handleMonthChange}
            className="selectmonth"
          >
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center mb-2 font-bold">
          {weekdays.map((weekday, index) => (
            <div key={index} className="days border-yellow-500 py-2">
              {weekday}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {Array(firstDayOfMonth)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="empty-cell px-4 py-2"></div>
            ))}

          {days.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`day-box py-2 ${
                selectedDays.includes(day) ? 'selected' : ''
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedDays([])}
            className="calendar-btn border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleDoneClick}
            className="calendar-btn bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
