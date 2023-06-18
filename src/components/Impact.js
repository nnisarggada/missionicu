import React from "react";

const Impact = () => {
  const InfoCard = ({ icon, text }) => {
    return (
      <div className="h-28 w-full border-2 border-solid border-brand-500 rounded-md flex items-center text-brand-700">
        <div className="w-1/3 flex justify-center">
          <div className="h-20 aspect-square bg-brand-500 rounded-full"></div>
        </div>
        <div className="w-2/3">
          <p className="text-xl font-medium">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <div id="impact" className="flex flex-col justify-center gap-6 p-4 pt-28">
      <h2 className="text-2xl text-red-600 font-medium">10 BEDS KIT</h2>
      <h1 className="text-2xl text-brand-700 font-extrabold">
        Bridging the Rural-Urban gap
      </h1>
      <p className="text-xl font-medium">
        In any small town, the district hospitals bear 80% of the load during a
        pandemic like situation. Bolstering the capacity and infrastructure in
        these hospitals will help maximize the number of treated COVID
        instances.
      </p>
      <InfoCard icon="" text="Onground due-diligence" />
      <InfoCard icon="" text="Need Assessment" />
      <InfoCard icon="" text="Expanding Healthcare Network" />
      <InfoCard icon="" text="Impact Measurement" />
    </div>
  );
};

export default Impact;
