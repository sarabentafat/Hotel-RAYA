import React from "react";
import logo from "../assets/images/logo.svg";
import menu from  "../assets/images/menuraya.png"

function About() {
  return (
    <div className=" mt-32 mx-20 " id='about'>
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <img
              src={logo}
              alt="Logo de l'hôtel"
              className="w-32 mx-auto md:mx-0 mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">
              Bienvenue à l'Hôtel Raya
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              maximus tristique justo, eget sodales urna venenatis in.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={menu}
              alt="Photo de l'hôtel"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            maximus tristique justo, eget sodales urna venenatis in. Nam
            convallis, purus nec ullamcorper tincidunt, arcu eros auctor enim,
            nec sodales nisi velit a risus. Nunc semper placerat ligula, eu
            gravida lacus hendrerit ut. Etiam et consequat odio. In maximus
            metus eu enim convallis, ut pharetra nunc tincidunt. Praesent in
            semper libero. Quisque quis justo at orci eleifend malesuada. Nulla
            facilisi. Proin aliquet sem at eleifend tristique.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
