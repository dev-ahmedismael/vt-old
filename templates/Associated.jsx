"use client";
import { register } from "swiper/element/bundle";
import React, { useEffect, useRef } from "react";
import Title from "@/templates/Title";
import { Box, Container, Grid, Typography } from "@mui/material";

register();

const Associated = ({ images }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      autoplay: false,
      loop: true,
      slidesPerView: 6,
      spaceBetween: 30,
      breakpoints: {
        100: { slidesPerView: 3 },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 6,
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <Box py={5}>
      <Container>
        <Box display={"flex"} justifyContent={"center"}>
          <Title>
            <Typography
              textAlign={"center"}
              variant="h3"
              color={"white"}
              mb={5}
            >
              Associated With
            </Typography>
          </Title>
        </Box>
        <Box>
          <swiper-container ref={swiperRef} init="false">
            {images.map((img, index) => (
              <swiper-slide key={index}>
                <Box>
                  <img src={img} alt="Company Logo" width={90} height={70} />
                </Box>
              </swiper-slide>
            ))}
          </swiper-container>
        </Box>
      </Container>
    </Box>
  );
};

export default Associated;
