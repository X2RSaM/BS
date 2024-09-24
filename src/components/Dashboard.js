import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>Total Sales</h3>
          <p>$5000</p>
        </div>
        <div className="stat-box">
          <h3>Total Revenue</h3>
          <p>$20000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;