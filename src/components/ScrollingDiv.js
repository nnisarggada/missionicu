import React from "react";

const ScrollingDiv = () => {
  const names = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    // Add more names as needed
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

export default ScrollingDiv;
