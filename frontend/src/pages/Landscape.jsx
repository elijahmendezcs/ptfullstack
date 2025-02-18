// src/pages/Landscape.jsx
import React from "react";
import { Typography } from "@mui/material";
import LandscapeImageList from "../components/Landscape3x3.jsx";

const Landscape = () => {
  return (
    <div className="w-full mx-auto px-4 py-10">
      {/* Two-column layout on medium screens and above */}
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
            Landscape
          </Typography>
        </div>

        {/* Right column: descriptive paragraph */}
        <div>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Playfair Display" }}
            className="text-gray-600 leading-relaxed"
          >
            Explore a stunning collection of black-and-white landscape photography that
            captures the serene beauty of nature. From quiet rural scenes to timeless paths and
            bridges, each image tells a story of tranquility and nostalgia. Perfect for bringing a
            sense of calm and elegance to your home or office, these prints are available for
            purchase, allowing you to transform your space with art that inspires and soothes the
            soul.
          </Typography>
        </div>
      </div>
      <LandscapeImageList />
    </div>
  );
};

export default Landscape;
