import { Grid, Stack, Typography } from "@mui/material";
import img from "../../../assets/about/DSC_0140-450x300.jpg";

const Banner = () => {
  return (
    <Grid
      sx={{
        background: `linear-gradient(to bottom, rgba(0, 25, 50, .8), rgba(0, 25, 50, .8)), url(${img})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Stack spacing={2} sx={{maxWidth:"md", py: "180px", margin: 'auto'}} >
        <Typography color="#DACCCC" variant="h3">About HealTogether</Typography>
        <Typography color="#A49E9E" variant="subtitle2">Welcome to Healtogather, where health meets community in a celebration of well-being. We are more than just a medical camp; we are a collective effort to foster healthier lives and stronger communities. At Healtogather, our mission is simple yet profound: to provide accessible and compassionate healthcare to all. We believe in the power of community-driven initiatives to create positive and lasting impacts on individual well-being.</Typography>
      </Stack>
    </Grid>
  );
};

export default Banner;
