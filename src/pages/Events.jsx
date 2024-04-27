import React from 'react'
//  import event  from "../assets/images/event.png"
//  import event2 from "../assets/images/event"
  import eventa from "../assets/images/eventa.png";
  import arrow from "../assets/icons/arrow.svg"
import amine from "../assets/images/amine.png"
  // import escalier from "../assets/images/escalier.JPG"
// import bg from "../assets/images/bg.png"
   import eventb from "../assets/images/eventb.png";
  //  import { IoIosArrowRoundForward } from "react-icons/io";
const Events = () => {
  return (
    <div className="mx-20  my-10">
      <div className="text-center   mt-20">
        <h1 className="font-bold text-3xl">Our succseful organized events!</h1>
        <p className="text-lg my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex gap-1 ">
        <div
          data-aos="fade-up-left"
          class="p-5 font-flex-[60%] bold  rounded relative bg-cover bg-center text-white py-20"
          style={{ backgroundImage: `url(${amine})` }}
        >
          <div class="absolute inset-0 "></div>
          <p class="z-10 relative text-lg">
            Harmony Festival: Celebrating Diversity and Unity
          </p>
          <div className="flex justify-end top-12">
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          {" "}
          <div
            data-aos="fade-down-right"
            class="p-5 font-bold  relative bg-cover bg-center text-white py-20"
            style={{ backgroundImage: `url(${eventb})` }}
          >
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <p class="z-10 relative text-lg">
              Harmony Festival: Celebrating Diversity and Unity
            </p>
            <div className="flex justify-end top-12">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div
            data-aos="fade-up-right"
            class="p-5 font-bold  rounded relative bg-cover bg-center text-white py-20"
            style={{ backgroundImage: `url(${event})` }}
          >
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <p class="z-10 relative text-lg">
              Harmony Festival: Celebrating Diversity and Unity
            </p>
            <div className="flex justify-end top-12">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Events