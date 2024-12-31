import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const pages = [
  "Black and Whites",
  "Hues",
  "Urban",
  "Collections",
  "Prints",
  "About",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          <Box />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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

            <Box sx={{ display: "flex", gap: 6 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.replace(/\s/g, "").toLowerCase()}`} // Ensure path conversion is correct
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon
                  sx={{ mr: 0, color: "black", fontSize: 35 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center", color: "black" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
