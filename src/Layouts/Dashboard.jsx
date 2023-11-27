import { Outlet } from "react-router-dom";
import Sideber from "../Shared/Sideber";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Sideber></Sideber>
      <Grid sx={{pt:'100px', pl:'60px'}}>
        <Outlet></Outlet>
      </Grid>
    </div>
  );
};

export default Dashboard;
