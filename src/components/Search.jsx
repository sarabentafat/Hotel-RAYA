import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Search = () => {
     const [selectedDate, setSelectedDate] = useState("");

     const handleDateChange = (event) => {
       setSelectedDate(event.target.value);
     };
  return (
    <div
      data-aos="fade-up"
      className="justify-center border border-1 border-[#BB6C2C] mt-[-100px] md:mt-[-250px] p-10 mx-20 bg-white rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-4text-sm text-black"
    >
      <div className="text-black m-2">
        <div className="flex items-center font-semibold mb-2">
          <GoHome className="font-semibold mr-2" />
          <div>Categorie</div>
        </div>
        <div>
          <select
            id="roomSelect"
            className="bg-gray-100 w-full text-gray-600 p-4 rounded"
          >
            <option value="standard">Chmabre Basique</option>
            <option value="deluxe">Chambre de luxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>
      </div>
      <div className="text-black m-2">
        <div className="flex items-center font-semibold mb-2">
          <IoPersonOutline className="font-semibold mr-2" />
          <div>Person</div>
        </div>
        <div>
          <select
            id="roomSelect"
            className="bg-gray-100 w-full text-gray-600 p-4 rounded"
          >
            <option value="standard">Chmabre Basique</option>
            <option value="deluxe">Chambre de luxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>
      </div>
      <div className="text-black m-2">
        <div className="flex items-center font-semibold mb-2">
          <FiCalendar className="mr-2" />
          <div>Check in</div>
        </div>
        <div>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full bg-gray-100 text-gray-600 p-4 rounded"
          />
        </div>
      </div>
      <div className="text-black m-2">
        <div className="flex items-center font-semibold mb-2">
          <FiCalendar className="mr-2" />
          <div>Check out</div>
        </div>
        <div>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full bg-gray-100 text-gray-600 p-4 rounded"
          />
        </div>
      </div>

      <div className="text-black m-2">
        <div className="flex items-center font-semibold mb-2 text-transparent">
          <FiCalendar className="mr-2" />
          <div>Check-out</div>
        </div>
        <div className="bg-black text-white p-4 rounded ">
          <Link to={"/reservation"}>Search</Link>
        </div>
      </div>
    </div>
  );
}

export default Search