// src/components/BillingSystem.js
import React, { useState } from 'react';

const BillingSystem = () => {
  const [billingList, setBillingList] = useState([]);
  const [formData, setFormData] = useState({
    customer: '',
    product: '',
    totalAmount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBillingList([...billingList, formData]);
    setFormData({
      customer: '',
      product: '',
      totalAmount: ''
    });
  };

  return (
    <div className="container mx-auto p-4 mt-6">
      <h1 className="text-3xl font-bold mb-4">Billing System</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
        <div className="form-group mb-4">
          <label htmlFor="customer" className="block text-gray-700 text-sm font-bold mb-2">Customer:</label>
          <input type="text" id="customer" name="customer" value={formData.customer} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="product" className="block text-gray-700 text-sm font-bold mb-2">Product:</label>
          <input type="text" id="product" name="product" value={formData.product} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="totalAmount" className="block text-gray-700 text-sm font-bold mb-2">Total Amount:</label>
          <input type="number" id="totalAmount" name="totalAmount" value={formData.totalAmount} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </form>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {billingList.map((bill, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{bill.customer}</td>
              <td className="border px-4 py-2">{bill.product}</td>
              <td className="border px-4 py-2">{bill.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingSystem;