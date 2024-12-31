import React from "react";
import Typography from "@mui/material/Typography";

const Collections = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Playfair Display, serif",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Collections
      </Typography>
    </div>
  );
};

export default Collections;
