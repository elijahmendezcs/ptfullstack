import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ResponsiveFooter() {
  const [value, setValue] = React.useState(0);
  const currentYear = new Date().getFullYear();

  return (
    <Box
      // Fixed at bottom, full width, with a high z-index
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
          display: "flex",
          height: "40px", // Allow the content to dictate the height
          justifyContent: "center",
        }}
      >
        {/* Social icons with links */}
        <BottomNavigationAction
          component="a"
          href="https://www.instagram.com/luxe.creative.studio/"
          target="_blank"
          rel="noopener noreferrer"
          icon={<InstagramIcon sx={{ color: "black", fontSize: 20 }} />}
          sx={{ minWidth: "auto", padding: "0 8px" }}
        />
        <BottomNavigationAction
          component="a"
          href="https://www.facebook.com/luxecreativestudio1/"
          target="_blank"
          rel="noopener noreferrer"
          icon={<FacebookIcon sx={{ color: "black", fontSize: 20 }} />}
          sx={{ minWidth: "auto", padding: "0 8px" }}
        />
      </BottomNavigation>
      {/* Trademark statement */}
      <Typography
        sx={{
          fontFamily: '"Playfair Display", serif',
          textAlign: "center",
          fontSize: "0.75rem", // smaller font size
          color: "gray", // gray text
          padding: "2px 0", // Reduced vertical padding here as well
          backgroundColor: "rgba(255, 255, 255, 0.5)", // optional: match background
        }}
      >
        © {currentYear} Luxe Creative Studio™. All Rights Reserved.
      </Typography>
    </Box>
  );
}
