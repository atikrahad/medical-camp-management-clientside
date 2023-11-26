import { FacebookOutlined, Twitter, YouTube } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      <Container
        sx={{
          display: "flex",
          alignItems:"baseline",
          justifyContent: "space-between",
          flexWrap: "wrap",
          py: "100px"
        }}
        
      >
        <Grid sx={{color: "white"}}>
          <Typography>hellow world</Typography>
        </Grid>
        <Grid sx={{color : "white"}}>
          <Typography>About us</Typography>
          <Typography>Contact us</Typography>
          <Typography>FAQ</Typography>
          <Typography>Services</Typography>
        </Grid>
        <Grid sx={{}}>
          <Typography color={'white'} variant="h5">Social media</Typography>
          <FacebookOutlined sx={{color: "white", fontSize: "40px"}}></FacebookOutlined>
          <Twitter sx={{color: "white", fontSize: "40px"}}></Twitter>
          <YouTube sx={{color: "white", fontSize: "40px"}}></YouTube>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
