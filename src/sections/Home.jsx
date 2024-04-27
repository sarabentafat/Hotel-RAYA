import React from "react";
import bg from "../assets/images/bg.png";
import Search from "../components/Search";

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    marginTop: "-100px",
    display: "flex",

    alignItems: "center",
    color: "white", // Optional: Set text color to white for better visibility
    textAlign: "center",
  };
  return (
    <div>
      <div style={containerStyle}>
        {" "}
        <div data-aos="fade-down" className="mx-20 lg:text-left">
          {" "}
          <h1 className="text-5xl font-bold">Welcome to The Raya Hotel</h1>
          <div className="lg:w-[60%]">
            {" "}
            <p className="mt-5 text-lg ">
              Where Luxury Meets Serenity. Discover a haven of elegance and
              comfort in the heart of the city. Indulge in exquisite dining,
              rejuvenate at our spa, and experience unparalleled service. Your
              journey to relaxation begins here.
            </p>
          </div>
        </div>
      </div>
      <Search />

    </div>
  );
};

export default Home;
