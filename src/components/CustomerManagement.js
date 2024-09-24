import React, { useState } from 'react';

const CustomerManagement = () => {
  const [customerList, setCustomerList] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomerList([...customerList, formData]);
    setFormData({ name: '', gender: '', contact: '', email: '' });
  };

  return (
    <div>
      <div className="form-container">
        <h2>Add Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <button type="submit" className="btn">Save</button>
        </form>
      </div>
      <div className="table-container">
        <h2>Customer List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.gender}</td>
                <td>{customer.contact}</td>
                <td>{customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerManagement;