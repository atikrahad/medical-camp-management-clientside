import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid, TextField } from "@mui/material";
import Joinmodal from "../../Components/Joinmodal";
import { useForm } from "react-hook-form";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useLoaderData } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import axiosSecure from "../../Api/axiosSecure";
import Swal from "sweetalert2";

export default function Details() {
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = React.useState(2);
  const {data} = useLoaderData()
  const [users] = useUser()

  console.log(data)
  const onSubmit = (d) => {
    const userReview = {
      reviewersEmail: users.email,
      reviewersPic: users?.userImage,
      rating: value,
      comment: d.comment,
      campId: data._id
    }
    axiosSecure.post("/reviews", userReview)
    .then(res => {
      if(res.data){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thanks for review",
          showConfirmButton: false,
          timer: 1500
        });
        reset()
      }
    })
  };

  return (
    <Container maxWidth={"md"} sx={{ py: { xs: "100px", md: "120px" } }}>
      <img src={data.image} className="w-full rounded-md" alt="" />
      <CardContent>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {data.campName}
          </Typography>
          <Typography>{data.date}</Typography>
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
            {data.vanue}
          </Typography>
          <Typography>{data.audianceType}</Typography>
          <Typography>{data.vanueLocation}</Typography>
          <Typography>{data.fees}</Typography>
        </Grid>

        {
          !(users.feild == 'organizers') && <Joinmodal data={data}></Joinmodal>

        }
        <Typography variant="body2" color="text.secondary">
          {data.comprehensiveDescription}
        </Typography>
        {
          ( users.feild!== 'organizers') && <form
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
              {...register("comment")}
            />
  
            <Button variant="contained" type="submit">
              Review
            </Button>
          </form>
        }
        
      </CardContent>
    </Container>
  );
}
