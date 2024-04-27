import React from "react";
import Home from "../sections/Home";
import Footer from "../sections/Footer";
import About from "../sections/About";
import Events from "./Events";
import Rooms from "./Rooms";
import Activities from "./Activities";
import Navbar from "../components/Navbar";
import Restauration from "../sections/Restauration";

const Landing = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <div>
        {" "}
        <About />
        {/* <iframe
          title="Google Map"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBDYX6nsE2ECQymiKN94dpfI19RyULwvfY&q=Space+Needle,Seattle+WA"
        ></iframe> */}
        <Events />
        <Rooms />
        <Restauration/>
        <Activities />
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.2576901712405!2d5.154646375624408!3d36.668304775123794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f2d1e24ee9c16d%3A0xa08dea29ee14f7c5!2sH%C3%B4tel%20Raya!5e0!3m2!1sen!2sdz!4v1714188006996!5m2!1sen!2sdz"
            className="px-20 aspect-[3/1] w-full rounded-3xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
