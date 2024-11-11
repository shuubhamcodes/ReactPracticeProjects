import React, { useState } from 'react';

const SimpleForm = () => {
  // State to track form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreeToTerms: false,
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    console.log('Form submitted:', formData);
    alert(`Form submitted with data:\nName: ${formData.name}\nEmail: ${formData.email}\nAgreed to terms: ${formData.agreeToTerms}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="agreeToTerms">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#6200ea', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
