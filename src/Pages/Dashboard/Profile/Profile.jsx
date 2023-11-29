import { Button, Grid, Typography } from "@mui/material";
import useUser from "../../../Hooks/useUser";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [users] = useUser();
  console.log(users);
  return (
    <div className="space-y-4">
      <Grid
        sx={{
          bgcolor: "#37474f",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          boxShadow: "2px 4px 8px black",
          borderRadius: "5px",
          p: "10px 20px",
        }}
      >
        <Grid sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {/* <img
            src={users.pic}
            className="md:w-20 w-10 h-10 md:h-20 rounded-full"
            alt=""
          /> */}

          <Typography
            sx={{ fontWeight: "700", fontSize: "1.5rem", color: "white" }}
          >
            {users.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        spacing={3}
        sx={{
          bgcolor: "#37474f",
          boxShadow: "2px 4px 8px black",
          borderRadius: "5px",
          p: "10px 20px",
          color: "#a6a6a6",
        }}
      >
        <Grid sx={{ fontSize: "2rem", fontWeight: "700", color: "white" }}>
          About me
        </Grid>
        <Grid sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography
            sx={{ fontWeight: "700", width: { md: "50%" }, color: "#cccccc" }}
          >
            Name:
          </Typography>
          <Typography>{users.name}</Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", width: { md: "50%" }, color: "#cccccc" }}
          >
            Email:
          </Typography>
          <Typography>{users.email}</Typography>
        </Grid>
        <Grid sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography
            sx={{ fontWeight: "700", width: { md: "50%" }, color: "#cccccc" }}
          >
            Number:
          </Typography>
          <Typography>{users.number ? users.number : "N/A"}</Typography>
        </Grid>
        <Grid sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography
            sx={{ fontWeight: "700", width: { md: "50%" }, color: "#cccccc" }}
          >
            Role:
          </Typography>
          <Typography>{users.feild}</Typography>
        </Grid>
      </Grid>

      <Grid
        spacing={3}
        sx={{
          bgcolor: "#37474f",
          boxShadow: "2px 4px 8px black",
          borderRadius: "5px",
          p: "10px 20px",
          color: "#a6a6a6",
        }}
      >
        <Grid sx={{ fontSize: "2rem", fontWeight: "700", color: "white" }}>
          Address
        </Grid>

        <Grid
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", width: { md: "50%" }, color: "#cccccc" }}
          >
            Country:
          </Typography>
          <Typography>{users.country ? users.country : "N/A"}</Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", width: { md: "50%" }, color: "#cccccc" }}
          >
            State:
          </Typography>
          <Typography>{users.state ? users.state : "N/A"}</Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", width: { md: "50%" }, color: "#cccccc" }}
          >
            City:
          </Typography>
          <Typography>{users.city ? users.city : "N/A"}</Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", width: { md: "50%" }, color: "#cccccc" }}
          >
            Local address:
          </Typography>
          <Typography>
            {users.localaddress ? users.localaddress : "N/A"}
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <NavLink to="/dashboard/updateprofile">
          <Button variant="contained" color="primary">
            Update
          </Button>
        </NavLink>
      </Grid>
    </div>
  );
};

export default Profile;
