import React from "react";

const Taluka = () => {
  const ScrollingDiv = () => {
    const names = [
      "Taluka",
      "Taluka",
      "Taluka",
      "Taluka",
      "Taluka",
      "Taluka",
      "Taluka",
    ];

    return (
      <div className="w-screen overflow-x-hidden">
        <div className="h-16 flex items-center space-x-4 animate-scrolling">
          {names.map((name, index) => (
            <div key={index} className="whitespace-nowrap flex-grow">
              {name}
            </div>
          ))}
          {names.map((name, index) => (
            <div key={index} className="whitespace-nowrap flex-grow">
              {name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const TalukaInput = ({ text }) => {
    return (
      <input
        type="text"
        placeholder={text}
        className="w-full border-solid border-2 border-brand-600 p-2 rounded-md"
      />
    );
  };

  return (
    <div className="h-section flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h2 className="text-2xl text-red-600 font-medium">MAKE A DIFFERENCE</h2>
      <h1 className="text-2xl text-brand-700 font-extrabold">
        Nominate your local hospital
      </h1>
      <p className="text-xl font-medium">
        Nominating your taluka can help us know where change is needed and act
        on it with the help of the local government
      </p>
      <form className="taluka-form w-full text-xl flex flex-col items-center gap-4">
        <TalukaInput text="Name" />
        <TalukaInput text="Email" />
        <TalukaInput text="Taluka" />
        <TalukaInput text="Hospital" />
        <button className="bg-brand-500 p-4 h-fit w-fit flex justify-center items-center rounded-lg text-xl text-white font-medium">
          NOMINATE
        </button>
      </form>
      <div>
        <h1 className="text-2xl text-brand-700 font-extrabold">
          Talukas Nominated -
        </h1>
        <div className="container mx-auto">
          <ScrollingDiv />
        </div>
      </div>
    </div>
  );
};

export default Taluka;
