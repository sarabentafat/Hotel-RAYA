import React from "react";
import bg from "../assets/images/bg.png"

// Import room image
import roomImage from "../assets/images/room.png";

// Define room data
const roomData = [
  {
    type: "Chambre basique",
    price: "5700 DA",
    available: true,
    image: roomImage, // Adding image path to room object
  },
  {
    type: "Chambre basique",
    price: "5700 DA",
    available: true,
    image: roomImage, // Adding image path to room object
  },
  {
    type: "Chambre basique",
    price: "5700 DA",
    available: true,
    image: roomImage, // Adding image path to room object
  },
  {
    type: "Chambre basique",
    price: "5700 DA",
    available: true,
    image: roomImage, // Adding image path to room object
  },

  // Add more room objects as needed
];

const Rooms = () => {
  return (
    <div>
      {" "}
      <div
        class="relative bg-cover my-10 bg-center text-white py-20"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="text-center my-20 mx-20">
        <div className="text-4xl font-bold my-4">Book your rooms</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-center">
          {" "}
          {roomData.map((room, index) => (
            <div
              data-aos="fade-up-right"
              key={index}
              className=" m-2 justify-center "
            >
              <img src={room.image} alt="" className="w-full" />
              <div className="flex justify-between mt-4">
                <div className="font-semibold">{room.type}</div>
                <button className="font-bold">{room.price}</button>
              </div>
              <div className="flex justify-between mt-2">
                <div>{room.available ? "Available" : "Not available"}</div>
                <button className="bg-brown-500 bg-[#BB6C2C] px-6 py-2 rounded-lg text-white ">
                  Reserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
