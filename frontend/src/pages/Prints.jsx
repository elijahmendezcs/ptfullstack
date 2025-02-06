import React from "react";
import { Typography } from "@mui/material";
import BW1 from "../components/Listings/BlackAndWhiteListings/BW7";
import BW2 from "../components/Listings/BlackAndWhiteListings/BW2";
import BW3 from "../components/Listings/BlackAndWhiteListings/BW3";
import BW4 from "../components/Listings/BlackAndWhiteListings/BW4";
import BW5 from "../components/Listings/BlackAndWhiteListings/BW1";
import BW6 from "../components/Listings/BlackAndWhiteListings/BW6";
import BW7 from "../components/Listings/BlackAndWhiteListings/BW5";
import BW8 from "../components/Listings/BlackAndWhiteListings/BW8";
import BW11 from "../components/Listings/BlackAndWhiteListings/BW11";
import BW12 from "../components/Listings/BlackAndWhiteListings/BW12";
import BW13 from "../components/Listings/BlackAndWhiteListings/BW13";
import BW14 from "../components/Listings/BlackAndWhiteListings/BW14";
import A1 from "../components/Listings/ArchListings/A1";
import A2 from "../components/Listings/ArchListings/A2";
import A3 from "../components/Listings/ArchListings/A3";
import A4 from "../components/Listings/ArchListings/A4";
import A5 from "../components/Listings/ArchListings/A5";
import A6 from "../components/Listings/ArchListings/A6";
import A7 from "../components/Listings/ArchListings/A7";
import A8 from "../components/Listings/ArchListings/A8";
import A9 from "../components/Listings/ArchListings/A9";

const Prints = () => {
  return (
    // TODO: Fix Buy Now button that shit is not centered.

    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Text section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Left column: heading */}
        <div>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Playfair Display",
              position: "relative",
              left: "16px",
            }}
            className="mb-2 text-gray-800 italic"
          >
            Prints
          </Typography>
        </div>

        {/* Right column: paragraph */}
        <div>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Playfair Display" }}
            className="text-gray-600 leading-relaxed"
          >
            Discover a curated collection of black-and-white photography, where
            each piece captures timeless beauty and emotion. Whether you're
            looking to add a touch of elegance to your space or searching for
            the perfect gift, explore our selection and bring these stunning
            visuals into your life. Each print is available for purchase, making
            it easy to transform your walls with art that inspires.
          </Typography>
        </div>
      </div>

      {/* Image listings */}
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
          <A1 />
        </div>
        <div className="flex justify-center items-center gap-10 row-style-3">
          <A2 />
          <A3 />
          <A4 />
        </div>
        <div className="flex justify-center items-center gap-10 row-style-3">
          <A5 />
          <A6 />
          <A7 />
        </div>
        <div className="flex justify-center items-center gap-10 row-style-3">
          <A8 />
          <A9 />
          <BW11 />
        </div>
        <div className="flex justify-center items-center gap-10 row-style-3">
          <BW12 />
          <BW13 />
          <BW14 />
        </div>
      </div>
    </div>
  );
};

export default Prints;
