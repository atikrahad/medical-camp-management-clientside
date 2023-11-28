import { Grid, Typography } from "@mui/material";
import img from "../../assets/Logo/HealTogether__1_-removebg-preview.png";

const Profile = () => {
  return (
    <div className="space-y-4">
      <Grid
        sx={{
          bgcolor: "#37474f",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          boxShadow: "2px 4px 8px ",
          p: "10px 20px",
        }}
      >
        <img src={img} className="w-20 h-20 rounded-full" alt="" />
        <Typography>Atik Rahad</Typography>
      </Grid>
      <Grid
      spacing={3}
        sx={{
          bgcolor: "#37474f",
          boxShadow: "2px 4px 8px ",
          p: "10px 20px",
          
        }}
      >
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Typography width={"20%"}>Name:</Typography>
          <Typography>Atik Rahad</Typography>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Typography width={"20%"}>Email:</Typography>
          <Typography>atikrahad2gmail.com</Typography>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Typography width={"20%"}>Number:</Typography>
          <Typography>+8801615406742</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
