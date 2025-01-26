import React from "react";
import { Typography } from "@mui/material";
import LandscapeImageList from "../components/Landscape3x3.jsx";

const Landscape = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
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
            Landscape
          </Typography>
        </div>

        {/* Right column: paragraph */}
        <div>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Playfair Display" }}
            className="text-gray-600 leading-relaxed"
          >
            This is where the project description goes. Give an overview or go
            in depth – what it’s all about, what inspired you, how you created
            it, or anything else you’d like visitors to know. To add Project
            descriptions, go to Manage Projects.
          </Typography>
        </div>
      </div>

      <LandscapeImageList />
    </div>
  );
};

export default Landscape;
