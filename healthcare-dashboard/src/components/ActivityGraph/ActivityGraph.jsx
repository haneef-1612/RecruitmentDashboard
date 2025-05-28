import React from 'react';
import './ActivityGraph.css';

const activityData = [
  { day: 'Mon', level: 40 },
  { day: 'Tue', level: 80 },
  { day: 'Wed', level: 60 },
  { day: 'Thu', level: 100 },
  { day: 'Fri', level: 70 },
  { day: 'Sat', level: 50 },
  { day: 'Sun', level: 30 },
];

const ActivityGraph = () => {
  return (
    
    <div className="activity-section">
       
      <div className="activity-header">
      
        <h3>Activity</h3>
        <span className="sub-text">Appointments in this week</span>
      </div>
      <div className="graph-wrapper">
        {activityData.map((item, index) => (
          <div className="bar-item" key={index}>
            <div
              className="bar"
              style={{ height: `${item.level}px` }}
              title={`${item.level} units`}
            ></div>
            <span className="day-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGraph;
