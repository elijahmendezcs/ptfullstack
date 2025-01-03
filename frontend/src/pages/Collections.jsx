import React from "react";
import Typography from "@mui/material/Typography";
import BlackAndWhiteCollection from "../components/BlackAndWhiteLightBox";

const Collections = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <BlackAndWhiteCollection />
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Playfair Display, serif",
          textAlign: "center",
          fontStyle: "italic",
          marginTop: "1rem",
        }}
      >
        Collections
      </Typography>
    </div>
  );
};

export default Collections;
