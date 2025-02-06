import React from "react";
import { Typography } from "@mui/material";
import ArchImageList from "../components/Arch3x3.jsx";

const Architecture = () => {
  return (
    <div className="w-full mx-auto px-4 py-10">
      {" "}
      {/* Removed max-w-4xl */}
      {/* 2-column layout on md+ */}
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
            Architecture
          </Typography>
        </div>

        {/* Right column: paragraph */}
        <div>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Playfair Display" }}
            className="text-gray-600 leading-relaxed"
          >
            Step into a world of black-and-white architectural photography,
            where timeless structures and intricate details come to life. From
            historic buildings to modern design elements, each piece showcases
            the artistry and craftsmanship of architecture. Perfect for
            enhancing your space with sophistication and style, these prints are
            available for purchase, offering you the chance to bring captivating
            architectural beauty into your home or office.
          </Typography>
        </div>
      </div>
      <ArchImageList />
    </div>
  );
};

export default Architecture;
