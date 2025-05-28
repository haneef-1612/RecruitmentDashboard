import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
    <div className="header-middle">
      <div className="header-search">
        <label htmlFor="search" className="visually-hidden"></label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>
  
      <span className="notification-icon">🔔</span>
    </div>
  
    <div className="header-icons">
      <div className="user-profile">
        <img
          src="/images/avatar.png"
          alt="User Avatar"
          className="avatar"
        />
      </div>
      <button className="add-button">+</button>
    </div>
  </header>
  
  );
};

export default Header;
