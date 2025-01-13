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

const Prints = () => {
  return (
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
        </div>
      </div>
    </div>
  );
};

export default Prints;
