import React from "react";
import Card from "../components/Card";

const Prints = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-24 mb-24">
      {/* First Row */}
      <div className="flex justify-center items-center gap-10 row-style-1">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Second Row */}
      <div className="flex justify-center items-center gap-10 row-style-2">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Third Row */}
      <div className="flex justify-center items-center gap-10 row-style-3">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Fourth Row */}
      <div className="flex justify-center items-center gap-10 row-style-4">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Fifth Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Sixth Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Seventh Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <Card />
      </div>
    </div>
  );
};

export default Prints;
