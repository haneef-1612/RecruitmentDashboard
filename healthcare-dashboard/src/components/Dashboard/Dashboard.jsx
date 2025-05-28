import React from 'react';
import './Dashboard.css';
import OrganCard from '../OrganCard/OrganCard';
import ActivityGraph from '../ActivityGraph/ActivityGraph';
// import RightPanel from '../RightPanel/RightPanel';
// import RightLayer from '../RightLayer/RightLayer';
import RightPanel from '../RightPanel/RightPanel';


const DashboardMain = () => {
  return (<div className="dashboard-main">
    {/* Header */}
    <div className="dashboard-header">
      <h2>Dashboard</h2>
      <button className="header-filter-btn">This Week</button>
    </div>
  
  
    <div className="dashboard-body-wrapper">
      {/* LEFT SIDE */}
      <div className="dashboard-main-left">
        <div className="dashboard-content">
          <div className="body-organ-section">
            <div className="body-visual">
              <img src="/images/body.jpg" alt="Body" className="body-image" />
            </div>
  
            <div className="organ-cards-column">
              <OrganCard icon={<img src="/assets/lungs-icon.png" alt="Lungs" style={{ width: '24px', height: '24px' }} />} name="Lungs" status="60%" date="Last check: Sep 10" color="#f87171" />
              <OrganCard icon="🦷" name="Teeth" status="90%" date="Oct 02, 2024" color="#4ade80" />
              <OrganCard icon="🦴" name="Bone" status="70%" date="Last check: Aug 25" color="#fbbf24" />
              <button className="filter-btn">Details</button>
            </div>
          </div>
  
          <div className="activity-graph-container">
            <ActivityGraph />
          </div>
        </div>
      </div>
  
      {/* RIGHT SIDE */}
      <div className="right-panel">
        <RightPanel />
      </div>
    </div>
  </div>
  
  );
};

export default DashboardMain;