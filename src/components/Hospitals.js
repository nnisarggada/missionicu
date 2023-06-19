import React from "react";
import Navbar from "./Navbar";

const Hospitals = () => {
  return (
    <div>
      <Navbar />
      <div
        id="home"
        className="h-section bg-hero bg-no-repeat bg-cover px-4 flex flex-col justify-center gap-6 text-white"
      >
        <h1 className="text-6xl font-bold">Reach Out</h1>
        <h2 className="text-2xl">
          To learn more about how we can assist your hospital, please get in
          touch with us. Together, let's make a difference in healthcare and
          create a brighter future for those in need.
        </h2>
        <button
          onClick={() => {
            window.location.href = "#hospitals";
          }}
          className="bg-brand-500 px-6 py-4 h-16 w-fit flex justify-center items-center rounded-lg text-2xl font-bold"
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Hospitals;
