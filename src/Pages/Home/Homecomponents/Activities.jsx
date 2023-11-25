import { Container, Grid, Stack, Typography } from "@mui/material";

const Activities = () => {
  return (
    <Grid sx={{ background: "gray" }}>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", py: "50px" }}
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
          <Typography variant="h5">Our services in Bangladesh</Typography>
          <Typography variant="h3">8 States</Typography>
        </Stack>
      </Container>
    </Grid>
  );
};

export default Activities;
