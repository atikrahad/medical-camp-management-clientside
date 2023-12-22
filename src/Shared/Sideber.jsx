import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Grid } from "@mui/material";
import {
  AccountCircle,
  Beenhere,
  Bungalow,
  Home,
  JoinFull,
  LibraryAdd,
  ManageSearch,
  Settings,
} from "@mui/icons-material";

import Slidernav from "../Components/Slidernav";
import { NavLink } from "react-router-dom";
// import useUser from "../Hooks/useUser";
// import useAuth from "../Hooks/useAuth";
import { Authinfo } from "./Authprovider";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sideber() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [users] = useUser();
  const {user} = React.useContext(Authinfo)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ bgcolor: "#37474f" }} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Grid>
              <NavLink to="/">
                {" "}
                <Home></Home>
              </NavLink>
              <Settings sx={{ ml: "10px" }}></Settings>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ bgcolor: "#37474f" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ bgcolor: "#37474f" }} />
        <List sx={{ bgcolor: "#37474f" }}>
          <Slidernav
            name={"Profile"}
            icon={<AccountCircle></AccountCircle>}
            link={"/dashboard"}
          ></Slidernav>

          {user?.displayName == "organizers" && (
            <Slidernav
              name={"Organizer"}
              link={"/dashboard/organizer"}
              icon={<Bungalow></Bungalow>}
            ></Slidernav>
          )}
          {user?.displayName == "organizers" && (
            <Slidernav
            name={"Add Camp"}
            link={"/dashboard/addcamp"}
            icon={<LibraryAdd></LibraryAdd>}
          ></Slidernav>
          )}
          {user?.displayName == "organizers" && (
            <Slidernav
            name={"Manage Camp"}
            link={"/dashboard/managecamp"}
            icon={<ManageSearch></ManageSearch>}
          ></Slidernav>
          )}
          {user?.displayName == "participants" && (
            <Slidernav
            name={"Participent"}
            link={"/dashboard/participent"}
            icon={<JoinFull></JoinFull>}
          ></Slidernav>
          )}
          {user?.displayName == "participants" && (
            <Slidernav
            name={"My Registered"}
            link={"/dashboard/manageregistered"}
            icon={<Beenhere></Beenhere>}
          ></Slidernav>
          )}
          
            
        </List>
        <Divider sx={{ bgcolor: "#78909c" }} />
        <List sx={{ bgcolor: "#37474f", height: "100%" }}>
          <Slidernav
            name={"Setting"}
            icon={<Settings></Settings>}
            link={"/dashboard/setting"}
          ></Slidernav>
        </List>
      </Drawer>
    </Box>
  );
}
