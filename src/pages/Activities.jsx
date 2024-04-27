import React from 'react'
import caf from "../assets/images/caf.png"
// import caf2 from "../assets/images/caf2.png";
import arrow from "../assets/icons/arrow.svg"
// import sona from "../assets/images/sona.jpg"

const Activities = () => {
  return (
    <div className="mx-20 my-10 text-center">
      <div className="text-4xl font-bold py-10">Explore our activities</div>

      <div className="flex gap-1 ">
        <div className="flex flex-col gap-1 w-full">
          {" "}
          <div
            data-aos="fade-down-right"
            class="p-5 font-bold  relative bg-cover bg-center text-white py-20"
            style={{ backgroundImage: `url(${caf})` }}
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
            style={{ backgroundImage: `url(${caf})` }}
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
        <div
          data-aos="fade-up-left"
          class="p-5 font-flex-[60%] bold  rounded relative bg-cover bg-center text-white py-20"
          style={{ backgroundImage: `url(${caf})` }}
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
  );
}

export default Activities