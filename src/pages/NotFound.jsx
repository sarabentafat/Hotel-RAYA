import React from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex  text-3xl justify-center items-center h-screen font-bold">
        SOrry .. ! page Not Found
      </div>
    </React.Fragment>
  );
};

export default NotFound;
