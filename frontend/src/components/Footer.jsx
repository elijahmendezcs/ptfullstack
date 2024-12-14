import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2"
      sx={{ width: 500 }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: 0,
        }}
        elevation={0}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 0,
            width: "50%", // adjusts the gap inbetween the icons
          }}
          className="space-x-2" // Tailwind CSS for additional control
        >
          <BottomNavigationAction
            icon={<FacebookIcon sx={{ color: "black", fontSize: 20 }} />}
            sx={{ minWidth: "auto", padding: "0px" }}
          />
          <BottomNavigationAction
            icon={<InstagramIcon sx={{ color: "black", fontSize: 20 }} />}
            sx={{ minWidth: "auto", padding: "0px" }}
          />
          <BottomNavigationAction
            icon={<PinterestIcon sx={{ color: "black", fontSize: 20 }} />}
            sx={{ minWidth: "auto", padding: "0px" }}
          />
          <BottomNavigationAction
            icon={<TwitterIcon sx={{ color: "black", fontSize: 20 }} />}
            sx={{ minWidth: "auto", padding: "0px" }}
          />
        </Box>
      </BottomNavigation>
    </Box>
  );
}
