
import React from 'react';
import './OrganCard.css';

const OrganCard = ({ icon, name, status, date, color }) => {
  return (
    <div className="organ-card">
      <div className="organ-info">
        <div className="organ-icon">{icon}</div>
        <div>
          <div className="organ-name">{name}</div>
          <div className="organ-date">{date}</div>
        </div>
      </div>
      <div className="organ-bar" style={{ width: status, backgroundColor: color }}></div>
    </div>
  );
};

export default OrganCard;