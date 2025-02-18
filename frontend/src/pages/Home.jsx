// src/pages/Home.jsx
import React from "react";
import HomePageImageList from "../components/HomePageImageList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: "30px",
          fontStyle: "italic",
          fontWeight: 400,
          marginTop: "20px",
        }}
      >
        Professional Photography
      </Typography>
      <HomePageImageList />
    </Box>
  );
};

export default Home;
