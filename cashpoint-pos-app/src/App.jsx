// File: /src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import SalesPage from './pages/SalesPage'; // Importing Sales Page
import InventoryPage from './pages/InventoryPage'; // Importing Inventory Page
import CustomersPage from './pages/CustomersPage'; // Importing Customers Page
import ReportsPage from './pages/ReportsPage'; // Importing Reports Page

/**
 * App Component
 * Main application entry point with routing setup.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Route */}
        <Route path="/" element={<DashboardPage />} />

        {/* Products Management Route */}
        <Route path="/products" element={<ProductsPage />} />

        {/* Sales Route */}
        <Route path="/sales" element={<SalesPage />} />

        {/* Inventory Route */}
        <Route path="/inventory" element={<InventoryPage />} />

        {/* Customers Route */}
        <Route path="/customers" element={<CustomersPage />} />

        {/* Reports Route */}
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
