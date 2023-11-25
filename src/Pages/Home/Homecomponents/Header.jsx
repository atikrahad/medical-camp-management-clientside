import { Grid, Stack, Typography } from "@mui/material";
import img from "../../../assets/homepic/cdc-vt7iAyiwpf0-unsplash.jpg";

const Header = () => {
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
        <Typography color="white" variant="h2">HealTogether </Typography>
        <Typography color="#DACCCC" variant="h3">Your Path to Wellness Begins Here</Typography>
        <Typography color="#A49E9E" variant="subtitle2">Join us at HealTogether, where health meets compassion! 🌈 Our medical camp is a beacon of hope, offering free medical services and expert consultations to empower your journey towards a healthier life. 🩺 Discover personalized care, community support, and a roadmap to well-being. Let's unite to heal together! 💙 #HealTogether #MedicalCamp #WellnessCommunity</Typography>
      </Stack>
    </Grid>
  );
};

export default Header;
