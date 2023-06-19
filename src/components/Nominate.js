import React from "react";

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
      <input
        name={text}
        type="text"
        placeholder={text}
        className="w-full border-solid border-2 border-brand-600 p-2 rounded-md"
      />
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://hooks.airtable.com/workflows/v1/genericWebhook/app7RDwaqUwyB3tmy/wfl1AzTGrTg7gTWvy/wtrPqhX2ygROnhSNP",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Successful submission
        showPopup("Form submitted successfully!");
      } else {
        // Handle the submission error
        showPopup("An error occurred while submitting the form.");
      }
    } catch (error) {
      // Handle any other errors that occur during the submission
      showPopup("An error occurred while submitting the form.");
      console.error(error);
    }
  };

  const showPopup = (message) => {
    // Implement your desired popup display mechanism here (e.g., using a modal or alert)
    alert(message);
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
      <form
        onSubmit={handleSubmit}
        className="taluka-form w-full text-xl flex flex-col items-center gap-4"
      >
        <TalukaInput text="Name" />
        <TalukaInput text="Email" />
        <TalukaInput text="Taluka" />
        <TalukaInput text="Hospital" />
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
