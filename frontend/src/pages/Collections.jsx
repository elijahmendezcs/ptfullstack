import React from "react";
import Typography from "@mui/material/Typography";
import BlackAndWhiteLightBox from "../components/BlackAndWhiteLightBox";
import HuesLightBox from "../components/HuesLightBox";

const Collections = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Playfair Display, serif",
          textAlign: "center",
          fontStyle: "italic",
        }}
        className="text-4xl mb-12"
      >
        Collections
      </Typography>

      <div className="flex justify-center items-start gap-8 w-full max-w-[1800px]">
        <div className="w-full max-w-[1600px]">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Black & White
          </h2>
          <BlackAndWhiteLightBox />
        </div>
        <div className="w-full max-w-[1600px]">
          <h2 className="text-2xl font-semibold text-center mb-4">Hues</h2>
          <HuesLightBox />
        </div>
      </div>
    </div>
  );
};

export default Collections;
