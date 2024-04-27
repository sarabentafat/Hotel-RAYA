import React from "react";
import eventa from "../assets/images/eventa.png";
import arrow from "../assets/icons/arrow.svg";
import amine from "../assets/images/amine.png";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import eventb from "../assets/images/eventb.png";

const Events = () => {
  return (
    <div className="mx-20 my-10">
      <div className="text-center mt-20">
        <h1 className="font-bold text-3xl">Nos événements réussis !</h1>
        <p className="text-lg my-4">
          Découvrez nos événements organisés avec succès, une expérience
          inoubliable vous attend.
        </p>
      </div>

      <div className="flex gap-1">
        <div
          data-aos="fade-up-left"
          className="p-5 font-flex-[60%] bold rounded relative bg-cover bg-center text-white py-20"
          style={{ backgroundImage: `url(${amine})` }}
        >
          <div className="absolute inset-0"></div>
          <p className="z-10 relative text-lg">
            Festival de l'Harmonie : Célébrons la diversité et l'unité
          </p>
         
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div
            data-aos="fade-down-right"
            className="p-5 font-bold relative bg-cover bg-center text-white py-20"
            style={{ backgroundImage: `url(${pic1})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <p className="z-10 relative text-lg">
              Festival de l'Harmonie : Célébrons la diversité et l'unité
            </p>
          
          </div>
          <div
            data-aos="fade-up-right"
            className="p-5 font-bold rounded relative bg-cover bg-center text-white py-20"
            style={{ backgroundImage: `url(${pic2})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <p className="z-10 relative text-lg">
              Festival de l'Harmonie : Célébrons la diversité et l'unité
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
