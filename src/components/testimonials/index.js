'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from './testimonial';
import './testimonials.css'

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="testimonials">
            <h3>User <span>Testimonials</span></h3>
            <div>
                <Slider {...settings}>
                    <div>1</div>
                    <div>2</div>
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials