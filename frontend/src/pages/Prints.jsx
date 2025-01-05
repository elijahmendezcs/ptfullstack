import React from "react";
import Card from "../components/Card";
import BW1 from "../components/Listings/BlackAndWhiteListings/BW1";
import BW2 from "../components/Listings/BlackAndWhiteListings/BW2";
import BW3 from "../components/Listings/BlackAndWhiteListings/BW3";
import BW4 from "../components/Listings/BlackAndWhiteListings/BW4";
import BW5 from "../components/Listings/BlackAndWhiteListings/BW5";
import BW6 from "../components/Listings/BlackAndWhiteListings/BW6";
import BW7 from "../components/Listings/BlackAndWhiteListings/BW7";
import BW8 from "../components/Listings/BlackAndWhiteListings/BW8";

import H1 from "../components/Listings/HuesListings/H1";
import H2 from "../components/Listings/HuesListings/H2";
import H3 from "../components/Listings/HuesListings/H3";
import H4 from "../components/Listings/HuesListings/H4";
import H5 from "../components/Listings/HuesListings/H5";
import H6 from "../components/Listings/HuesListings/H6";
import H7 from "../components/Listings/HuesListings/H7";
import H8 from "../components/Listings/HuesListings/H8";
import H9 from "../components/Listings/HuesListings/H9";
import H10 from "../components/Listings/HuesListings/H10";
import H11 from "../components/Listings/HuesListings/H11";
import H12 from "../components/Listings/HuesListings/H12";
import H13 from "../components/Listings/HuesListings/H13";
import H14 from "../components/Listings/HuesListings/H14";

const Prints = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-24 mb-24">
      {/* First Row */}
      <div className="flex justify-center items-center gap-10 row-style-1">
        <BW5 />
        <BW2 />
        <BW3 />
      </div>

      {/* Second Row */}
      <div className="flex justify-center items-center gap-10 row-style-2">
        <BW4 />
        <BW7 />
        <BW6 />
      </div>

      {/* Third Row */}
      <div className="flex justify-center items-center gap-10 row-style-3">
        <BW1 />
        <BW8 />
        <H1 />
      </div>

      {/* Fourth Row */}
      <div className="flex justify-center items-center gap-10 row-style-4">
        <H2 />
        <H3 />
        <H5 />
      </div>

      {/* Fifth Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <H4 />
        <H6 />
        <H7 />
      </div>

      {/* Sixth Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <H8 />
        <H9 />
        <H11 />
      </div>

      {/* Seventh Row */}
      <div className="flex justify-center items-center gap-10 row-style-5">
        <H14 />
        <H12 />
        <H13 />
      </div>
      <div className="flex justify-center items-center gap-10 row-style-5">
        <H10 />
      </div>
    </div>
  );
};

export default Prints;
