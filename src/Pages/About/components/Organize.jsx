import { Container, Grid, Stack, Typography } from "@mui/material";
import img from "../../../assets/about/28698719_608489529499785_778988473233943968_o.jpg"
import Headline from "../../../Shared/Headline";

const Organize = () => {
  return (
    <div className="py-20">
      <Headline title={'Planner'}></Headline>
      <Container
        sx={{
          display: "flex",
          flexDirection: {xs:"column", md: "row"},
          justifyContent: "space-between",
          alignItems: "center",
          
          gap: "20px"
        }}
      >
        <Grid>
            <Typography sx={{fontWeight: "700", fontSize:{xs:'1.25rem', md:"2rem"}}}>Atik Rahad</Typography>
            <Typography sx={{fontWeight:'600',fontSize:{xs:'1rem', md:"1.75rem"}}}>MARN stack Web developer || Front end developer</Typography>
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
