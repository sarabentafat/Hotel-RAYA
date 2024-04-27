import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/bg.png";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../assets/icons/LogoWhite.svg";
const Navbar = () => {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "40px",
    color: "white", // Optional: Set text color to white for better visibility
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav style={containerStyle} className="text-md bg-[#BB6C2C]">
      <div className="mx-10 text-white px-4 sm:px-6 lg:px-8 hidden lg:block">
        <div className="md:flex items-center justify-between h-16 ">
          <div className="flex-1">
            <div className="flex gap-8 items-center ">
              <a
                href="#"
                className="hover:text-white z-0 font-bold px-3 py-2 rounded-md mr-20"
              >
                <Link to="/" onClick={closeNavbar}>
                  <img src={Logo} alt="" className="" />
                </Link>
              </a>
              <a
                href="#about"
                className="hover:text-white px-3 py-2 rounded-md font-medium"
              >
                <Link to={'/about'} onClick={closeNavbar}>About</Link>
              </a>
              <a
                // href="#reservation"
                className="hover:text-white px-3 py-2 rounded-md font-medium"
              >
                <Link to="/reservation" onClick={closeNavbar}>
                  Reservation
                </Link>
              </a>
              <a
                // href="#restauration"
                className="hover:text-white px-3 py-2 rounded-md font-medium"
              >
                <Link to="/restauration" onClick={closeNavbar}>
                  Restauration
                </Link>
              </a>
            </div>
          </div>
          <div>
            <Link
              to="/reservation"
              className="mr-4 text-sm border-white border-2 rounded-lg hover:text-white px-4 py-2 font-medium"
              onClick={closeNavbar}
            >
              Reserver
            </Link>
            <Link
              to="/login"
              className="border-white border-2 bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
              onClick={closeNavbar}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:hidden ">
        <a
          href="#"
          className="z-0 hover:text-white font-bold  py-2 rounded-md "
        >
          <Link to="/" onClick={closeNavbar}>
            <img src={Logo} alt="" className="ml-20" />
          </Link>
        </a>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hoverbg-[#BB6C2C] focus:outline-none focus:text-white"
        >
          <RiMenu3Fill
            size={34}
            className={`${isOpen ? "hidden" : "block"} h-6 mx-10 my-2 justify`}
          />
          <svg
            className={`${isOpen ? "block" : "hidden"} h-6 w-6 mx-10 my-2 `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 mt-[-60px] pb-28 z-50 bg-[#BB6C2C] sm:px-3 text-white">
          <a
            href="#"
            className="hover:text-white block px-3 py-2 rounded-md font-medium"
            onClick={closeNavbar}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeNavbar}
          >
            Events
          </a>
          <a
            href="#"
            className="hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeNavbar}
          >
            Reservation
          </a>
          <a
            href="#"
            className="hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeNavbar}
          >
            Restauration
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
