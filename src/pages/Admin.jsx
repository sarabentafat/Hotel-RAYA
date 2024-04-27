import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ApproveReservation = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email_address: '',
    family_name: '',
    name: '',
    password: '',
    room_id: '',
    user_id: '',
    verified: false
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'NormalUsers'));
      const userData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUsers(userData);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'verified' ? value === 'true' : value
    });
  };

  const handleUserSelect = (userId) => {
    const selectedUser = users.find(user => user.id === userId);
    if (selectedUser) {
      setFormData({
        ...formData,
        email_address: selectedUser.email || '',
        family_name: selectedUser.family_name || '',
        name: selectedUser.name || '',
        password: selectedUser.room || '',
        user_id: userId,
        verified: selectedUser.verified || false
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const workerRef = doc(db, 'NormalUsers', formData.user_id);
      await setDoc(workerRef, formData);
      console.log('User data updated in Firestore!');
      setFormData({
        email_address: '',
        family_name: '',
        name: '',
        room_id: '',
        user_id: '',
        verified: false
      });
    } catch (error) {
      console.error('Error updating user data in Firestore: ', error);
    }
  };

  return (
    <div>
      <h2>Approve Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_id">Select User:</label>
        <select id="user_id" name="user_id" value={formData.user_id} onChange={(e) => handleUserSelect(e.target.value)}>
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>

        <label htmlFor="email_address">Email Address:</label>
        <input type="email" id="email_address" name="email_address" value={formData.email_address} onChange={handleChange} />

        <label htmlFor="family_name">Family Name:</label>
        <input type="text" id="family_name" name="family_name" value={formData.family_name} onChange={handleChange} />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="room_id">Room ID:</label>
        <input type="text" id="room_id" name="room_id" value={formData.room_id} onChange={handleChange} />

        <label htmlFor="verified">Verified:</label>
        <select id="verified" name="verified" value={formData.verified.toString()} onChange={handleChange}>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApproveReservation;
