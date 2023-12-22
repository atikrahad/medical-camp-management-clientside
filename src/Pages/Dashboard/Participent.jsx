import { AssuredWorkload, AttachMoney, DoneAll } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const Participent = () => {
  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          color: "white",
          gap: "30px",
        }}
      >
        <Grid
          sx={{
            bgcolor: "#37474f",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            boxShadow: "2px 4px 8px black",
            borderRadius: "5px",
            p: "50px 20px",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "700", color: "#cccccc" }}
              variant="h2"
            >
              100
            </Typography>
            <Typography sx={{ fontWeight: "600" }} variant="h5">
              All Participent
            </Typography>
          </Grid>
          <DoneAll sx={{ fontSize: "3.75rem" }}></DoneAll>
        </Grid>
        <Grid
          sx={{
            bgcolor: "#37474f",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            boxShadow: "2px 4px 8px black",
            borderRadius: "5px",
            p: "50px 20px",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "700", color: "#cccccc" }}
              variant="h2"
            >
              100
            </Typography>
            <Typography sx={{ fontWeight: "600" }} variant="h5">
              Premium Participent
            </Typography>
          </Grid>
          <AssuredWorkload sx={{ fontSize: "3.75rem" }}></AssuredWorkload>
        </Grid>
        <Grid
          sx={{
            bgcolor: "#37474f",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            boxShadow: "2px 4px 8px black",
            borderRadius: "5px",
            p: "50px 20px",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "700", color: "#cccccc" }}
              variant="h2"
            >
              100
            </Typography>
            <Typography sx={{ fontWeight: "600" }} variant="h5">
              Balance
            </Typography>
          </Grid>
          <AttachMoney sx={{ fontSize: "3.75rem" }}></AttachMoney>
        </Grid>
      </Grid>
    </div>
  );
};

export default Participent;
