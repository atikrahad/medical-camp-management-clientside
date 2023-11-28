import { Outlet } from "react-router-dom";
import Sideber from "../Shared/Sideber";
import { Box, Grid, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

const Dashboard = () => {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));
  return (
    <div className="bg-slate-800 h-[100vh]">
      <Sideber></Sideber>
      
      <Box component="main" sx={{ flexGrow: 1,ml:"50px", p: 3 }}>
        <DrawerHeader />
        <Outlet></Outlet>
      </Box>
      
    </div>
  );
};

export default Dashboard;
