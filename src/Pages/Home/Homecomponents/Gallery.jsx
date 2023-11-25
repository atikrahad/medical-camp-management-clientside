import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from 'swiper/modules';
import img from "../../../assets/homepic/cdc-vt7iAyiwpf0-unsplash.jpg"

import "swiper/css";

import { Grid } from "@mui/material";

export default function Gallery() {
  
  

  return (
    <Grid sx={{
        background: `linear-gradient(to bottom, rgba(0, 25, 50, .8), rgba(0, 25, 50, .8)), url(${img})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "normal",
        
        
      }}>
      <br />
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper max-w-6xl my-20 mx-auto"
      >
        
          <SwiperSlide >
            <img src={img} className="w-32 rounded-md md:w-72 lg:w-80" alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img} className="w-32 rounded-md md:w-72 lg:w-80" alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img} className="w-32 rounded-md md:w-72 lg:w-80" alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img} className="w-32 rounded-md md:w-72 lg:w-80" alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img} className="w-32 rounded-md md:w-72 lg:w-80" alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img} className="w-32 rounded-md md:w-72 lg:w-80" alt="" />
          </SwiperSlide>
          
        
      </Swiper>
    </Grid>
  );
}
