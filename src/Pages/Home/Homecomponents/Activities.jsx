import { Grid, Stack, Typography } from "@mui/material";

const Activities = () => {
  return (
    <Grid sx={{ background: "gray" }}>
      <div
        // sx={{ display: "flex", justifyContent: "space-between", py: "100px" }}
        className="max-w-6xl py-20 gap-4 mx-auto flex md:flex-row flex-col items-center justify-between"
      >
        <Stack sx={{display:"flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h5">Total Attempted</Typography>
          <Typography variant="h3">40</Typography>
        </Stack>
        <Stack sx={{display:"flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h5">Total Camps</Typography>
          <Typography variant="h3">10</Typography>
        </Stack>
        <Stack sx={{display:"flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant="h5">Our Services In Bangladesh</Typography>
          <Typography variant="h3">8 States</Typography>
        </Stack>
      </div>
    </Grid>
  );
};

export default Activities;
