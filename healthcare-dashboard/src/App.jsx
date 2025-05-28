
import React from 'react';
import Header from './components/Header/Header'; 
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
// import CalendarWeek from './components/CalendarWeek/CalendarWeek';
import './styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <Dashboard />
        {/* <CalendarWeek /> */}
      </div>
    </div>
  );
};

export default App;
