import React from "react";

function Alert({ id, text }) {
  return (
    <div
      id={`alert-${id}`}
      className="fixed z-50 h-16 w-80 -bottom-full right-1/2 translate-x-1/2 bg-green-100 text-green-500 text-xl font-bold rounded-2xl flex justify-center items-center transition-all duration-300"
    >
      <h1>{text}</h1>
    </div>
  );
}

export default Alert;
