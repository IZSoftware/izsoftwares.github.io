import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Typography } from "@mui/material";

import Image1 from "../../resources/images/HealthCare/Oakland Bay Bridge.jpg";
import Image2 from "../../resources/images/HealthCare/Bird.jpg";
import Image3 from "../../resources/images/HealthCare/Bali-Indonesia.jpg";
import Image4 from "../../resources/images/HealthCare/GočSerbia.jpg";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Image1,  // Use the imported image
  },
  {
    label: "Bird",
    imgPath: Image2,
  },
  {
    label: "Bali, Indonesia",
    imgPath: Image3,
  },
  {
    label: "Goč, Serbia",
    imgPath: Image4,
  },
];

function Healthcare() {
  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((step, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={step.imgPath}
              alt={step.label}
              sx={{
                width: "100%",
                height: 300,
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Typography align="center" sx={{ mt: 1, fontWeight: 600 }}>
              {step.label}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Healthcare;