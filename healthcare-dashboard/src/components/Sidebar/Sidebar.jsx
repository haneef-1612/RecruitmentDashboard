import React from 'react';
import './Sidebar.css';
import { navigationLinks } from '../../data/navigationLinks';

const Sidebar = () => {
  const generalLinks = navigationLinks.slice(0, 5); // Dashboard to Statistics
  const supportLinks = navigationLinks.slice(5, 7); // Chat, Support
  const settingLink = navigationLinks[7];           // Only the Setting item

  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-text">
          <span className="text-cyan">Health</span>
          <span className="text-black">care.</span>
        </span>
      </div>

      <h2 className="sidebar-title light">General</h2>

      <div className="nav-wrapper">
        <ul className="nav-links">
          {generalLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <img src={link.icon} alt={link.name} className="nav-icon" />
              <span>{link.name}</span>
            </li>
          ))}

          <h2 className="sidebar-title light">Tools</h2>

          {supportLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <img src={link.icon} alt={link.name} className="nav-icon" />
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Setting icon at the bottom */}
      <div className="setting-bottom">
        <li className="nav-item">
          <img src={settingLink.icon} alt={settingLink.name} className="nav-icon" />
          <span>{settingLink.name}</span>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;