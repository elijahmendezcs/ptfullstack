import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

// Example pages array
const pages = ["Landscape", "Architecture", "Prints", "About"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Handlers for opening/closing the mobile menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      // Tailwind example: Add a blurred background
      className="backdrop-blur-sm"
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
          {/* ========== MOBILE: Hamburger + Brand ========== */}
          {/* This box only shows on small screens (xs) and hides on medium and up (md) */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            {/* Hamburger Icon */}
            <IconButton
              size="large"
              aria-label="navigation-menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Menu (opens when hamburger is clicked) */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: "1rem",
                    // any other custom styles:
                    // fontStyle: 'italic',
                    // fontWeight: 400,
                  }}
                >
                  <Link
                    to={`/${page.replace(/\s/g, "").toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Brand (visible on mobile inside the "flex" above, or you can put it outside if you want) */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", margin: "auto" }}>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
              >
                LUXE CREATIVE STUDIO
              </Typography>
            </Link>
          </Box>

          {/* ========== DESKTOP: Brand + Nav Links in Center ========== */}
          {/* This box is hidden on mobile (xs) and displayed on md and up */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              margin: "auto",
            }}
          >
            {/* Brand / Title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
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

            {/* Subheading */}
            <Box>
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

            {/* Desktop Nav Links */}
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

          {/* Just a right-side spacer or area for future icons if needed */}
          <Box sx={{ flexGrow: 0 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
