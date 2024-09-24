import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/Dashboard';
import CustomerManagement from './components/CustomerManagement';
import InventoryManagement from './components/InventoryManagement';
import BillingSystem from './components/BillingSystem';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<CustomerManagement />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/billing" element={<BillingSystem />} />
      </Routes>
    </Router>
  );
}

export default App;