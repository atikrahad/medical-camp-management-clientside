import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";

import logo2 from "../assets/Logo/HealTogether__1_-removebg-preview.png";
import { Authinfo } from "./Authprovider";

function Navber() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, logOut } = React.useContext(Authinfo);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    console.log(page);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="bg-slate-900 z-10 fixed w-full">
      <Container>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={logo2}
              style={{ width: "100px", height: "100px" }}
              alt=""
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem sx={{}}>
                <NavLink to="/">Home</NavLink>
              </MenuItem>
              {user && (
                <MenuItem>
                  <NavLink to="/available">Available Camps</NavLink>
                </MenuItem>
              )}
              <MenuItem>
                <NavLink to="/about">About us</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/contact">Contact us</NavLink>
              </MenuItem>
              {!user && (
                <MenuItem>
                  <NavLink to="/register">Register</NavLink>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "red",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* Mediam device navlinks */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
            </NavLink>
            {user && (
              <NavLink to="/available">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Available Camps
                </Button>
              </NavLink>
            )}
            <NavLink to="/about">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                About us
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Contact us
              </Button>
            </NavLink>
            {!user && (
              <NavLink to="/register">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Register
                </Button>
              </NavLink>
            )}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/dashboard">Dashboard</Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Link>Logout</Link>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link to="/login">
              <Button color="primary" variant="contained">
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </div>
  );
}
export default Navber;
