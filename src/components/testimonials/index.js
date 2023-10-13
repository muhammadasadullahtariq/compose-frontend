"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./testimonial";
import { Container } from "@mui/system";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./testimonials.css";
import getLatestTripsWithDetail from "@/apis/getTripsWithDetail";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getLatestTripsWithDetail();
      setTrips(response.data);
    })();
  }, []);

  return (
    <div className="testimonials">
      <Container sx={{}}>
        <h3>
          Latest <span>trips</span>
        </h3>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows
          showThumbs={false}
          dynamicHeight={false}
          showStatus={false}
        >
          {trips?.map((item, i) => (
            <Testimonial key={i} data={item} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;
