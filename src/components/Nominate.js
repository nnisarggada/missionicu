import React from "react";
import Alert from "./Alert";

const Nominate = () => {
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
      <div className="w-full flex flex-col text-left">
        <label for={text} className="text-xl ml-2">
          {text}
          <span className="text-red-600">*</span>
        </label>
        <input
          name={text}
          type="text"
          placeholder={text}
          className="w-full border-solid border-2 border-brand-600 p-2 rounded-md mb-4"
          required
        />
      </div>
    );
  };

  const handleSubmit = (event) => {
    event.target.submit();
    document
      .getElementById("alert-nomination")
      .classList.remove("-bottom-full");
    document.getElementById("alert-nomination").classList.add("bottom-4");

    setTimeout(() => {
      document.getElementById("alert-nomination").classList.remove("bottom-4");
      document.getElementById("alert-nomination").classList.add("-bottom-full");
    }, 2000);
  };

  return (
    <div
      id="nominate"
      className="flex flex-col items-center justify-center gap-6 p-4 pt-28 text-center"
    >
      <h2 className="text-2xl text-red-600 font-medium">MAKE A DIFFERENCE</h2>
      <h1 className="text-2xl text-brand-700 font-extrabold">
        Nominate your local hospital
      </h1>
      <p className="text-xl font-medium">
        Nominating your taluka can help us know where change is needed and act
        on it with the help of the local government
      </p>
      <iframe
        title="dummyframe"
        name="dummyframe"
        id="dummyframe"
        className="hidden"
      ></iframe>
      <Alert id="nomination" text="Nomination Successful" />
      <form
        action="https://hooks.airtable.com/workflows/v1/genericWebhook/app7RDwaqUwyB3tmy/wfl1AzTGrTg7gTWvy/wtrPqhX2ygROnhSNP"
        method="POST"
        target="dummyframe"
        onSubmit={handleSubmit}
        className="taluka-form w-full text-xl flex flex-col items-center gap-4"
      >
        <TalukaInput text="Name" />
        <TalukaInput text="Email" />
        <TalukaInput text="Taluka" />
        <TalukaInput text="Hospital Name" />
        <input
          type="submit"
          value="Nominate"
          className="bg-brand-500 p-4 h-fit w-fit flex justify-center items-center rounded-lg text-xl text-white font-medium"
        />
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

export default Nominate;
