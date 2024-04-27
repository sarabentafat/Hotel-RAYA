import React from "react";
import restaurantImage from "../assets/images/restau.png";

function Restauration() {
  return (
    <div id="restauration" className="mx-2 md:mx-0 bg-gray-100 h-screen justify-center flex items-center  ">
      <div data-aos="fade-right" className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Restauration</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full md:w-1/2">
            <img
              src={restaurantImage}
              alt="Restaurant de l'hôtel"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Restaurant de l'hôtel</h2>
            <p className="text-gray-700 mb-4">
              Notre restaurant offre une expérience culinaire exceptionnelle
              avec une cuisine raffinée et des plats savoureux préparés par nos
              chefs talentueux.
            </p>
            <p className="text-gray-700 mb-4">
              Que ce soit pour le petit-déjeuner, le déjeuner ou le dîner, notre
              restaurant propose une variété de plats délicieux pour satisfaire
              tous les palais.
            </p>
            <p className="text-gray-700">
              Profitez d'une ambiance chaleureuse et d'un service impeccable
              lors de votre séjour à l'hôtel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restauration;
