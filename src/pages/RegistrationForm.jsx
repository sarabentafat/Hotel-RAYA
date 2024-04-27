import React, { useState } from 'react';
import { db } from '../firebase/firebase';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add other registration fields here
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to validate form data
    // Store registration data in Firestore
    db.collection('registrations').add(formData);
    // Add logic to handle room selection and payment mode
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      {/* Add other registration fields */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
