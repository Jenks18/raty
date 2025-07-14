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
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Cards</a></li>
          <li><a href="#">Transactions</a></li>
          <li><a href="#">Drivers</a></li>
          <li><a href="#">Vehicles</a></li>
          <li><a href="#">Payroll</a></li>
          <li><a href="#">Billing</a></li>
          <li><a href="#">Telematics</a></li>
          <li><a href="#">User</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
