import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid, TextField } from "@mui/material";
import img from "../../assets/homepic/cdc-vt7iAyiwpf0-unsplash.jpg";
import Joinmodal from "../../Components/Joinmodal";
import { useForm } from "react-hook-form";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Details() {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = React.useState(2);
  const onSubmit = (data) => {
    console.log(data);
    console.log(value);
  };

  return (
    <Container maxWidth={"md"} sx={{ py: { xs: "100px", md: "120px" } }}>
      <img src={img} className="w-full rounded-md" alt="" />
      <CardContent>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>Date</Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>Date</Typography>
        </Grid>

        <Joinmodal></Joinmodal>

        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <form
        className="w-full md:w-1/2"
          style={{
            display: "flex",
            padding: "25px 0",
            gap: "30px",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Rate our services</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>

          <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={4}
            {...register("addres")}
          />

          <Button variant="contained" type="submit">
            Review
          </Button>
        </form>
      </CardContent>
    </Container>
  );
}
