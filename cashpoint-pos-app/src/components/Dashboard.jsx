import React from 'react';

const Dashboard = () => {
  return (
    <div className="px-10 py-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        {['Today\'s sales', 'Yesterday', 'This week', 'This month'].map((label, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow border">
            <h3 className="text-sm font-medium text-gray-600">{label}</h3>
            <p className="text-2xl font-bold text-gray-900">$1,200</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
