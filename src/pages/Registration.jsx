import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import bg from "../assets/images/bg.png";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    beginning_day: "",
    email: "",
    end_day: "",
    password: "",
    family_name: "",
    name: "",
    nbr_adultes: 0,
    nbr_enfants: 0,
    phone_number: "",
    room_choice: "/room-choices/37su4QOJUAXxZlPyV0of",
    rooms: "",
    verified: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create user*
      console.table({email : formData.email, pass : formData.password})
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Step 2: Assign data to the user
      const reservationRef = doc(db, "NormalUsers", user.uid); // Use user's UID as document ID
      await setDoc(reservationRef, formData);

      console.log("Reservation added to Firestore!");
      // Optionally, reset the form after successful submission
      setFormData({
        beginning_day: "",
        email: "",
        end_day: "",
        password: "",
        family_name: "",
        name: "",
        nbr_adultes: 0,
        nbr_enfants: 0,
        phone_number: "",
        room_choice: "/room-choices/37su4QOJUAXxZlPyV0of",
        rooms: "",
        verified: false,
      });
    } catch (error) {
      console.error("Error adding reservation to Firestore: ", error);
    }
  };

  return (
    <div className="w-full md:flex md:justify-between">
      <div className="md:w-[50%] md:block hidden">
        <img src={bg} alt="" className="h-full" />
      </div>
      <form onSubmit={handleSubmit} className="md:w-[50%] p-4">
        <div>
          {" "}
          <label htmlFor="beginning_day">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="peer block py-2.5 px-1 w-full text-sm text-gray-600 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] border-gray-400"
          />
         
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="peer block py-2.5 px-1 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#BB6C2C] border-gray-300"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="beginning_day">Beginning Day:</label>
          <input
            type="text"
            id="beginning_day"
            name="beginning_day"
            value={formData.beginning_day}
            onChange={handleChange}
            className="peer block py-2.5 px-1 w-full text-sm text-gray-600 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] border-gray-400"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="end_day">End Day:</label>
          <input
            type="text"
            id="end_day"
            name="end_day"
            value={formData.end_day}
            onChange={handleChange}
            className="peer block py-2.5 px-1 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#BB6C2C] border-gray-300"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="family_name">Family Name:</label>
          <input
            type="text"
            id="family_name"
            name="family_name"
            value={formData.family_name}
            onChange={handleChange}
            className="peer block py-2.5 px-1 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#BB6C2C] border-gray-300"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="peer block py-2.5 px-1 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#BB6C2C] border-gray-300"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="nbr_adultes">Number of Adults:</label>
          <input
            type="number"
            id="nbr_adultes"
            name="nbr_adultes"
            value={formData.nbr_adultes}
            className="peer block py-2.5 px-1 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#BB6C2C] border-gray-300"
            onChange={handleChange}
          />
        </div>

        <div>
          {" "}
          <label htmlFor="nbr_enfants">Number of Children:</label>
          <input
            type="number"
            id="nbr_enfants"
            name="nbr_enfants"
            className="peer block py-2.5 px-1 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#BB6C2C] border-gray-300"
            value={formData.nbr_enfants}
            onChange={handleChange}
          />
        </div>

        <div>
          {" "}
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            className="peer block py-2.5 px-1 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#BB6C2C] border-gray-300"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>

        <div>
          {" "}
          <label htmlFor="rooms">Rooms:</label>
          <input
            type="text"
            id="rooms"
            name="rooms"
            className="peer block py-2.5 px-1 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#BB6C2C] border-gray-300"
            value={formData.rooms}
            onChange={handleChange}
          />
        </div>

        {/* You can add more fields as needed */}

        <button className="bg-[#BB6C2C] text-white p-3 rounded" type="submit">
          Reserver
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
