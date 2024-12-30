import React from "react";
import ImageList from "../components/VibrantImageList";
import { Typography } from "@mui/material";

const Vibrants = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* 2-column layout for heading & paragraph on md+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            Hues
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

      {/* Image list below */}
      <div className="mt-12">
        <ImageList />
      </div>
    </div>
  );
};

export default Vibrants;
