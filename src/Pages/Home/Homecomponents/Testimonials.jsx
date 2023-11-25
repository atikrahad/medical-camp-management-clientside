import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from 'swiper/modules';

import "swiper/css";
import { useEffect, useState } from "react";
import {
  
  CardContent,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

export default function Testimonials() {
  const [loadfeedback, setLoadfeedback] = useState([]);

  useEffect(() => {
    fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => setLoadfeedback(data));
  }, []);

  console.log(loadfeedback);

  return (
    <Grid sx={{py: "100px"}}>
      <br />
      <Swiper
        watchSlidesProgress={true}
        
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper max-w-3xl mx-auto"
      >
        {loadfeedback.map((data, index) => (
          <SwiperSlide key={index}>
            <Stack>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "space-between",
                  height: "350px",
                  background: 'lightgray',
                  borderRadius: "20px"
                }}
              >
                <Grid>
                <img
                  src={data.authpic}
                  className="w-20 h-20 rounded-full"
                  alt=""
                />
                <Typography>{data.date}</Typography>
                <Typography variant="h6" component="div">
                  {data.campName}
                </Typography>
                </Grid>
                <Grid>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data.feedback}
                </Typography>
                </Grid>
                <Rating name="read-only" value={data.rating} readOnly />
              </CardContent>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
}
