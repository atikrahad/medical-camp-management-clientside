import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from 'swiper/modules';
import img from "../../../assets/Partnership/1.png"
import img1 from "../../../assets/Partnership/Minimalist Hospital and Medical Health Logo (1).png"
import img2 from "../../../assets/Partnership/Minimalist Hospital and Medical Health Logo (2).png"
import img3 from "../../../assets/Partnership/Minimalist Hospital and Medical Health Logo.png"
import img4 from "../../../assets/Partnership/2.png"

import "swiper/css";

import { Grid } from "@mui/material";

export default function Partnership() {
  
  

  return (
    <Grid >
      <br />
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
        modules={[Autoplay]}
        className="mySwiper max-w-xl mb-20 mx-auto"
      >
        
          <SwiperSlide >
            <img src={img} className="w-28 " alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img1} className="w-28 " alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img2} className="w-28 " alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img3} className="w-28 " alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={img4} className="w-28 " alt="" />
          </SwiperSlide>
      </Swiper>
    </Grid>
  );
}
