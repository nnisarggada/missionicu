import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="h-section bg-hero bg-no-repeat bg-cover px-4 flex flex-col justify-center gap-6 text-white"
    >
      <h1 className="text-6xl font-bold">Make A Difference</h1>
      <h2 className="text-2xl">
        Transform lives through your donation to improve healthcare.
      </h2>
      <button
        onClick={() => {
          window.location.href = "#donate";
        }}
        className="bg-brand-500 px-6 py-4 h-16 w-fit flex justify-center items-center rounded-lg text-2xl font-bold"
      >
        DONATE NOW
      </button>
    </div>
  );
};

export default Home;
