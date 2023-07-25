import React from "react";
import { MdClose } from "react-icons/md";
import Alert from "./Alert";

const Home = () => {
  const [showForm, setShowForm] = React.useState(false);
  const handleSubmit = (event) => {
    event.target.submit();
    document.getElementById("alert-donor").classList.remove("-bottom-full");
    document.getElementById("alert-donor").classList.add("bottom-4");

    setTimeout(() => {
      setShowForm(false);
    }, 500);

    setTimeout(() => {
      document.getElementById("alert-donor").classList.remove("bottom-4");
      document.getElementById("alert-donor").classList.add("-bottom-full");
    }, 2000);
  };

  const FormInput = ({
    labelText,
    placeholderText,
    type = "text",
    pattern,
  }) => {
    return (
      <div className="w-full flex flex-col">
        <label for={labelText} className="text-2xl ml-2">
          {labelText}
          <span className="text-red-600">*</span>
        </label>
        <input
          name={labelText}
          type={type}
          pattern={pattern}
          placeholder={placeholderText}
          className="border-solid border-2 border-brand-600 text-black text-xl p-2 rounded-md"
          required
        />
      </div>
    );
  };

  const DonorForm = () => {
    return (
      <div className="fixed top-0 left-0 z-40 h-screen w-screen bg-black bg-opacity-90 text-white font-medium p-10">
        <iframe
          title="dummyframe"
          name="dummyframe"
          id="dummyframe"
          className="hidden"
        ></iframe>
        <form
          action="https://hooks.airtable.com/workflows/v1/genericWebhook/app7RDwaqUwyB3tmy/wflcZlazUQWo5zJ5P/wtrls6Hjx8AyhKAKs"
          method="POST"
          target="dummyframe"
          onSubmit={handleSubmit}
          className="h-full"
        >
          <div className="flex h-1/6 justify-between text-4xl md:text-5xl">
            <h1>Get In Touch</h1>
            <MdClose onClick={() => setShowForm(false)} />
          </div>
          <div className="flex flex-col h-5/6 items-center justify-evenly md:w-2/3 md:mx-auto">
            <FormInput labelText="Name" placeholderText="Your Name" />
            <FormInput
              labelText="Email"
              type="email"
              placeholderText="Your Email"
            />
            <FormInput
              labelText="Phone Number"
              type="tel"
              pattern="\+?\d{0,3}\d{10}"
              placeholderText="Your Phone Number"
            />
            <FormInput
              labelText="Company"
              placeholderText="Your Company Name"
            />
            <button
              type="submit"
              className="bg-brand-500 px-6 py-4 mt-10 h-16 w-48 flex justify-center items-center rounded-lg text-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

  if (showForm) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    try {
      document.body.classList.remove("overflow-y-hidden");
    } catch {}
  }

  return (
    <div
      id="home"
      className="h-section bg-hero bg-no-repeat bg-cover px-4 flex flex-col justify-center gap-6 text-white md:px-6"
    >
      <h1 className="text-6xl font-bold md:text-7xl">Make A Difference</h1>
      <h2 className="text-2xl md:text-3xl">
        Transform lives through your donation to improve healthcare.
      </h2>
      <button
        onClick={() => setShowForm(true)}
        className="bg-brand-500 px-6 py-4 h-16 w-fit flex justify-center items-center rounded-lg text-2xl font-bold md:h-20 md:text-3xl"
      >
        DONATE NOW
      </button>
      <Alert id="donor" text="Submitted Successfully!" />
      {showForm && <DonorForm />}
    </div>
  );
};

export default Home;
