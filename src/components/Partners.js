import React from "react";

const Partners = () => {
  const ScrollingDiv = () => {
    const partners = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
    ];

    return (
      <div className="h-full overflow-x-hidden overflow-y-clip">
        <div className="h-full w-max flex items-center gap-10 animate-scrolling">
          {partners.map((name, index) => (
            <div key={index} className="w-full">
              <img
                src={require("../assets/images/partners/" + name + ".png")}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-20">
      <div className="h-80 bg-brand-500 rounded-3xl flex flex-col justify-evenly items-center px-4">
        <h1 className="text-white font-bold text-3xl">Our Partners</h1>
        <div className="w-full h-48 flex items-center">
          <ScrollingDiv />
        </div>
      </div>
    </div>
  );
};

export default Partners;
