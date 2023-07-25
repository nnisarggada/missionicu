import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { FaHandsHelping } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";

const Impact = () => {
  const InfoCard = ({ icon, text }) => {
    return (
      <div className="h-28 w-full border-4 border-solid border-brand-500 rounded-xl flex items-center text-brand-700 md:w-96">
        <div className="w-1/3 flex justify-center">
          <div className="h-20 aspect-square bg-brand-500 rounded-full flex justify-center items-center text-white text-4xl">
            {icon}
          </div>
        </div>
        <div className="w-2/3">
          <p className="text-xl font-medium">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        id="impact"
        className="flex flex-col justify-center gap-6 p-4 pt-28 md:p-6 md:pt-28 md:gap-10"
      >
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="text-2xl text-red-600 font-medium md:text-3xl">
            10 BEDS KIT
          </h2>
          <h1 className="text-2xl text-brand-700 font-extrabold md:text-4xl">
            Bridging the Rural-Urban gap
          </h1>
        </div>
        <p className="text-xl font-medium md:text-2xl">
          In any small town, the district hospitals bear 80% of the load during
          a pandemic like situation. Bolstering the capacity and infrastructure
          in these hospitals will help maximize the number of treated COVID
          instances.
        </p>
        <div className="w-full flex flex-col gap-4 justify-center items-center md:flex-row md:mb-10">
          <div className="w-full flex flex-col gap-4 items-center">
            <InfoCard icon=<SlMagnifier /> text="On Ground due-diligence" />
            <InfoCard icon=<FaHandsHelping /> text="Need Assessment" />
          </div>
          <div className="w-full flex flex-col gap-4 items-center">
            <InfoCard
              icon=<AiFillMedicineBox />
              text="Expanding Healthcare Network"
            />
            <InfoCard icon=<ImStatsBars /> text="Impact Measurement" />
          </div>
        </div>
      </div>
      <div className="bg-beds bg-no-repeat bg-cover h-[800px] p-10 flex flex-col justify-between items-center md:flex-row md:justify-evenly md:h-[500px]">
        <div className="h-80 aspect-square flex flex-col justify-evenly items-center bg-brand-100 rounded-3xl text-brand-700 text-3xl">
          <div className="flex flex-col justify-center gap-4 items-center">
            <h2 className="text-5xl font-bold md:text-7xl">09</h2>
            <h2 className="text-4xl md:text-5xl">States</h2>
          </div>
          <div className="h-0.5 w-5/6 bg-brand-700"></div>
          <h2 className="text-3xl md:text-4xl">Pan-India</h2>
        </div>
        <div className="h-80 aspect-square flex flex-col justify-evenly items-center bg-brand-100 rounded-3xl text-brand-700 text-3xl">
          <div className="flex flex-col justify-center gap-4 items-center">
            <h2 className="text-5xl font-bold md:text-7xl">20</h2>
            <h2 className="text-4xl md:text-5xl">Locations</h2>
          </div>
          <div className="h-0.5 w-5/6 bg-brand-700"></div>
          <h2 className="text-3xl md:text-4xl">And more to come</h2>
        </div>
      </div>
    </div>
  );
};

export default Impact;
