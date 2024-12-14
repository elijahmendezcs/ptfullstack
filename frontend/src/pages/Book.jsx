import React from "react";
import BabyCard from "../components/BabyCard";
import FamCard from "../components/FamilyCard";
import PregCard from "../components/PregCard";

const BookASession = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-24">
      <FamCard />
      <PregCard />
      <BabyCard />
    </div>
  );
};

export default BookASession;
