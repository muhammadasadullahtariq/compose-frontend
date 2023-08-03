"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./testimonial";
import { Container } from "@mui/system";
import "./testimonials.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      img: "",
      name: "",
      feedback: "",
    },
    {
      img: "",
      name: "",
      feedback: "",
    },
  ];

  return (
    <div className="testimonials">
      <Container>
        <h3>
          User <span>Testimonials</span>
        </h3>
        <div>
          <Slider {...settings}>
            {data?.map((item, i) => (
              <Testimonial key={i} data={item} />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
