import React from "react";
import Typography from "@mui/material/Typography";
import BlackAndWhiteLightBox from "../components/BlackAndWhiteLightBox";
import HuesLightBox from "../components/HuesLightBox";

const Collections = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-[60px] space-y-10">
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Playfair Display, serif",
          textAlign: "center",
          fontStyle: "italic",
        }}
        className="text-4xl"
      >
        Collections
      </Typography>

      <div className="flex flex-wrap justify-center items-start gap-8 w-full max-w-[1800px] px-4">
        <div className="flex flex-col items-center w-full max-w-[800px]">
          <BlackAndWhiteLightBox />
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              textAlign: "center",
              fontStyle: "italic",
              fontSize: "18px",
              marginTop: "12px",
            }}
          >
            Black and Whites
          </Typography>
        </div>

        <div className="mb-[60px] flex flex-col items-center w-full max-w-[800px]">
          <HuesLightBox />
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              textAlign: "center",
              fontStyle: "italic",
              fontSize: "18px",
              marginTop: "12px",
            }}
          >
            Hues
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Collections;
