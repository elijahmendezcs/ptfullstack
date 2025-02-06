import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function ResponsiveFooter() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      // Fixed at bottom, full width, and with a high z-index so it stays on top.
      className="fixed bottom-0 left-0 w-full"
      sx={{ zIndex: 1000 }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)", // semi-transparent white background
          boxShadow: "none",
          padding: "8px 0", // adjust vertical padding as needed
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Each action gets horizontal padding so they don't appear too cramped */}
        <BottomNavigationAction
          icon={<FacebookIcon sx={{ color: "black", fontSize: 20 }} />}
          sx={{ minWidth: "auto", padding: "0 8px" }}
        />
        <BottomNavigationAction
          icon={<InstagramIcon sx={{ color: "black", fontSize: 20 }} />}
          sx={{ minWidth: "auto", padding: "0 8px" }}
        />
      </BottomNavigation>
    </Box>
  );
}
