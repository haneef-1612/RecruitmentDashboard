import React from 'react';
import './RightPanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel-wrapper">
      {/* Top Row: Month and Profile */}
      <div className="top-bar">
        <h3>October 2021</h3>
        <div className="top-icons">
          <span className="arrow">{'<'}</span>
          <span className="arrow">{'>'}</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {[
          ['Mon', 25], ['Tue', 26], ['Wed', 27], ['Thu', 28],
          ['Fri', 29], ['Sat', 30], ['Sun', 31]
        ].map(([day, date]) => (
          <div key={date} className="calendar-day">
            <div className="day-name">{day}</div>
            <div className="day-number">{date}</div>
            <div className="time-slot">10:00</div>
            <div className={`time-slot ${date === 26 || date === 31 ? 'selected' : ''}`}>
              {date === 26 ? '09:00' : date === 31 ? '09:00' : ''}
            </div>
            <div className="time-slot">
              {date === 28 ? '11:00' : date === 30 ? '12:00' : date === 29 ? '14:00' : ''}
            </div>
            <div className="time-slot">
              {date === 29 ? '16:00' : date === 30 ? '15:00' : date === 31 ? '11:00' : ''}
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="appointment-cards">
        <div className="appointment-card blue">
          <h4>Dentist</h4>
          <p>09:00 - 11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className="appointment-card light">
          <h4>Physiotherapy Appointment</h4>
          <p>11:00 - 12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>

      {/* Upcoming Schedule Title */}
      <h4 className="upcoming-title">The Upcoming Schedule</h4>

      {/* Thursday Schedule */}
      <p className="day-label">On Thursday</p>
      <div className="schedule-row">
        <div className="schedule-card">
          <h4>Health checkup complete 🩺</h4>
          <p>11:00 AM</p>
        </div>
        <div className="schedule-card">
          <h4>Ophthalmologist 👁️</h4>
          <p>14:00 PM</p>
        </div>
      </div>

      {/* Saturday Schedule */}
      <p className="day-label">On Saturday</p>
      <div className="schedule-row">
        <div className="schedule-card">
          <h4>Cardiologist ❤️</h4>
          <p>12:00 AM</p>
        </div>
        <div className="schedule-card">
          <h4>Neurologist 🧠</h4>
          <p>16:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
