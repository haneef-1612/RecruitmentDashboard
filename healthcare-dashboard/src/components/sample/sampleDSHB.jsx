import React from 'react';
import './Dashboard.css';
import OrganCard from '../OrganCard/OrganCard';
import ActivityGraph from '../ActivityGraph/ActivityGraph';

const DashboardMain = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="header-filter-btn">This Week </button>
      </div>

      <div className="dashboard-content">
        {/* Section with Body and Organ Cards side by side */}
        <div className="body-organ-section">
          {/* Body Image */}
          <div className="body-visual">
            <img
              src="/images/body.jpg"
              alt="Body"
              className="body-image"
            />
          </div>

          {/* Vertical Organ Cards */}
          <div className="organ-cards-column">
            
            <OrganCard icon="🫁" name="Lungs" status="60%" date="Last check: Sep 10" color="#f87171" />
            <OrganCard icon="🦷" name="Teeth" status="90%" date="Oct 02, 2024" color="#4ade80" />
            <OrganCard icon="🦴" name="Bone" status="70%" date="Last check: Aug 25" color="#fbbf24" />
            <button className="filter-btn">Details </button>
          </div>
        </div>
        
        {/* Activity Graph (Below both) */}
        <div className="activity-graph-container">
  <ActivityGraph />
</div>
      </div>
    </div>
  );
};

export default DashboardMain;
