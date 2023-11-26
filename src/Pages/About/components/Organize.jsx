import { Container, Grid, Stack, Typography } from "@mui/material";
import img from "../../../assets/about/28698719_608489529499785_778988473233943968_o.jpg"

const Organize = () => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: {xs:"column", md: "row"},
          justifyContent: "space-between",
          alignItems: "center",
          py: '100px',
          gap: "20px"
        }}
      >
        <Grid>
            <Typography sx={{fontWeight: "700"}} variant="h3">Atik Rahad</Typography>
            <Typography variant="h5">MARN stack Web developer || Front end developer</Typography>
            <Typography variant="subtitle1">Introduce the organizers and key individuals involved in planning and executing the medical camp. Include brief bios or profiles of these individuals, emphasizing their expertise in the medical field or their commitment to community service.</Typography>
        </Grid>
        <Stack>
            <img src={img} className="rounded-md" alt="" />
        </Stack>
      </Container>
    </div>
  );
};

export default Organize;
