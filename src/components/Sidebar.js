import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isExpanded ? '<<' : '>>'}
      </button>
      <nav>
        <ul>
          <li><a href="#" className="active"><span className="nav-icon"></span><span className="nav-text">Dashboard</span></a></li>
          <li><a href="#"><span className="nav-icon"></span><span className="nav-text">Cards</span></a></li>
          <li><a href="#"><span className="nav-icon"></span><span className="nav-text">Transactions</span></a></li>
          <li><a href="#"><span className="nav-icon"></span><span className="nav-text">Drivers</span></a></li>
          <li><a href="#"><span className="nav-icon"></span><span className="nav-text">Vehicles</span></a></li>
          <li><a href="#"><span className="nav-icon"></span><span className="nav-text">Payroll</span></a></li>
          <li><a href="#"><span className="nav-icon"></span><span className="nav-text">Billing</span></a></li>
          <li><a href="#"><span className="nav-icon"></span><span className="nav-text">Telematics</span></a></li>
          <li><a href="#"><span className="nav-icon"></span><span className="nav-text">User</span></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
