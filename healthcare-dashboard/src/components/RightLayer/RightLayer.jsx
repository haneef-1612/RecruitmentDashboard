// import React from 'react';
// import './RightLayer.css';

// const RightLayer = () => {
//   return (
//     <div className="right-panel">
//       {/* Header */}
//       <div className="top-bar">
//         <h4>October 2025</h4>
//         <div className="top-icons">
//           <span className="arrow">←</span>
//           <span className="arrow">→</span>
//         </div>
//       </div>

//       {/* Calendar */}
//       <div className="calendar-grid">
//         {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
//           <div className="calendar-day" key={idx}>
//             <div className="day-name">{day}</div>
//             <div className="day-number">{25 + idx}</div>
//             <div className={time-slot ${day === 'Wed' ? 'selected' : ''}}>09:30</div>
//           </div>
//         ))}
//       </div>

//       {/* Appointments */}
//       <div className="appointment-cards">
//         <div className="appointment-card blue">
//           <strong>Dentist</strong><br />
//           09:00–11:00<br />
//           Dr. Cameron Williamson
//         </div>
//         <div className="appointment-card light">
//           <strong>Physiotherapy</strong><br />
//           11:10–12:40<br />
//           Dr. Kevin Brooks
//         </div>
//       </div>

//       {/* Upcoming Schedule */}
//       <div className="upcoming-title">The Upcoming Schedule</div>

//       <div className="day-label">On Thursday</div>
//       <div className="schedule-row">
//         <div className="schedule-card">Health checkup complete<br />11:00 AM</div>
//         <div className="schedule-card">Ophthalmologist<br />14:00 PM</div>
//       </div>

//       <div className="day-label">On Saturday</div>
//       <div className="schedule-row">
//         <div className="schedule-card">Cardiologist<br />12:00 AM</div>
//         <div className="schedule-card">Neurologist<br />16:00 PM</div>
//       </div>
//     </div>
//   );
// };

// export default RightLayer;