// src/components/InventoryManagement.js
import React, { useState } from 'react';

const InventoryManagement = () => {
  const [productList, setProductList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    brand: '',
    supplier: '',
    oldStock: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList([...productList, formData]);
    setFormData({
      name: '',
      price: '',
      quantity: '',
      brand: '',
      supplier: '',
      oldStock: '',
      category: ''
    });
  };

  return (
    <div className="container mx-auto p-4 mt-6">
      <h1 className="text-3xl font-bold mb-4">Inventory Management</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Product Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Product Quantity:</label>
          <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">Product Brand:</label>
          <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="supplier" className="block text-gray-700 text-sm font-bold mb-2">Product Supplier:</label>
          <input type="text" id="supplier" name="supplier" value={formData.supplier} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="oldStock" className="block text-gray-700 text-sm font-bold mb-2">Old Stock:</label>
          <input type="number" id="oldStock" name="oldStock" value={formData.oldStock} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Product Category:</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </form>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Product Price</th>
            <th className="px-4 py-2">Product Quantity</th>
            <th className="px-4 py-2">Product Brand</th>
            <th className="px-4 py-2">Product Supplier</th>
            <th className="px-4 py-2">Old Stock</th>
            <th className="px-4 py-2">Product Category</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.quantity}</td>
              <td className="border px-4 py-2">{product.brand}</td>
              <td className="border px-4 py-2">{product.supplier}</td>
              <td className="border px-4 py-2">{product.oldStock}</td>
              <td className="border px-4 py-2">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;