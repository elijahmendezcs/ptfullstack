import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = [
  "Black and Whites",
  "Hues",
  "Urban",
  "Prints",
  "About",
];

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(200, 200, 200, 0.15)",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left spacer or logo area if needed */}
          <Box />

          {/* Center brand and navigation links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Brand / Title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                mt: 2,
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 400,
                    fontSize: "2rem",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  LUXE CREATIVE STUDIO
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  fontSize: "1rem",
                  letterSpacing: "5px",
                  textDecoration: "none",
                  color: "black",
                  fontStyle: "bold",
                }}
              >
                PHOTOGRAPHY
              </Typography>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: "flex", gap: 6 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.replace(/\s/g, "").toLowerCase()}`}
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "1rem",
                    color: "black",
                    textTransform: "none",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
