import React, { useState, useEffect } from "react";
import Alert from "./Alert";

const ScrollingDiv = ({ talukas }) => {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="h-16 flex items-center space-x-4 animate-scrolling text-lg md:text-xl">
        {talukas.map((name, index) => (
          <div key={index} className="whitespace-nowrap flex-grow">
            {name}
          </div>
        ))}
        {talukas.map((name, index) => (
          <div key={index} className="whitespace-nowrap flex-grow">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

const Nominate = () => {
  const [tals, setTals] = useState([]);
  const defaultTals = [
    "Tumkur",
    "Chikmagalur",
    "Bellary",
    "Yadgir",
    "Gadag",
    "Dhule",
    "Buldhana",
    "Sangli",
    "Nanded",
    "Nabarangpur",
    "Tamenglong",
  ];

  const fetchTalukasData = async () => {
    try {
      const apiKey =
        "patRtpf9Qv1ozchAZ.4cde4d86cac69bbfd7ce9c94fb7d0b39519f3e7f2e0415f57e68349869f80790";
      const apiUrl =
        "https://api.airtable.com/v0/app7RDwaqUwyB3tmy/Talukas%20Nominated";

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const talukaValues = data.records.map((record) => record.fields.Taluka);

      // Filter out duplicates and add new Taluka values to the "tals" list
      const uniqueTalukas = [...new Set(talukaValues)];
      setTals([...defaultTals, ...uniqueTalukas]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTalukasData();
  }, []);

  const TalukaInput = ({ text, type = "text", pattern }) => {
    return (
      <div className="w-full flex flex-col text-left">
        <label htmlFor={text} className="text-xl ml-2 md:text-2xl">
          {text}
          <span className="text-red-600">*</span>
        </label>
        <input
          name={text}
          type={type}
          pattern={pattern}
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
      className="flex flex-col items-center justify-center gap-6 p-4 pt-28 text-center md:gap-10"
    >
      <h2 className="text-2xl text-red-600 font-medium md:text-3xl">
        MAKE A DIFFERENCE
      </h2>
      <h1 className="text-2xl text-brand-700 font-extrabold md:text-4xl">
        Nominate your local hospital
      </h1>
      <p className="text-xl font-medium md:text-2xl md:w-2/3">
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
        className="taluka-form w-full text-xl flex flex-col items-center gap-4 md:text-2xl md:w-2/3"
      >
        <TalukaInput text="Name" />
        <TalukaInput text="Email" type="email" />
        <TalukaInput
          text="Phone Number"
          type="tel"
          pattern="\+?\d{0,3}\d{10}"
        />
        <TalukaInput text="Taluka" />
        <TalukaInput text="Hospital Name" />
        <input
          type="submit"
          value="Nominate"
          className="bg-brand-500 p-4 h-fit w-fit flex justify-center items-center rounded-lg text-xl text-white font-medium md:text-2xl"
        />
      </form>
      <div>
        <h1 className="text-2xl text-brand-700 font-extrabold md:text-3xl">
          Talukas Nominated -
        </h1>
        <ScrollingDiv talukas={tals} />
      </div>
    </div>
  );
};

export default Nominate;
