import React from "react";
import BabyCard from "../components/BabyCard";
import FamCard from "../components/FamilyCard";
import PregCard from "../components/PregCard";

const Prints = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-24 mb-24">
      {/* First Row */}
      <div className="flex justify-center items-center gap-10 row-style-1">
        <FamCard />
        <PregCard />
        <BabyCard />
      </div>

      {/* Second Row */}
      <div className="flex justify-center items-center gap-10 row-style-2">
        <FamCard />
        <PregCard />
        <BabyCard />
      </div>

      {/* Third Row */}
      <div className="flex justify-center items-center gap-10 row-style-3">
        <FamCard />
        <PregCard />
        <BabyCard />
      </div>

      {/* Fourth Row */}
      <div className="flex justify-center items-center gap-10 row-style-4">
        <FamCard />
        <PregCard />
        <BabyCard />
      </div>

      {/* Fifth Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <FamCard />
        <PregCard />
        <BabyCard />
      </div>

      {/* Sixth Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <FamCard />
        <PregCard />
        <BabyCard />
      </div>

      {/* Seventh Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <FamCard />
      </div>
    </div>
  );
};

export default Prints;
