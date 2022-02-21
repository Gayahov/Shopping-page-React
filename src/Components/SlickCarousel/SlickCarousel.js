import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Carousel from "../Carousel/Carousel";
import "./SlickCarousel.css"
import SliderButton from "../shared/SliderButton/SliderButton";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SliderButton arrow=">" className="next"/>,
        prevArrow: <SliderButton arrow="<"  className="prev"/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
      <div className="slick_content">
        <Carousel></Carousel>
      </div>
      <div>
      <Carousel></Carousel>
      </div>
      <div>
      <Carousel></Carousel>
      </div>
      <div>
      <Carousel></Carousel>
      </div>
      <div>
      <Carousel></Carousel>
      </div>
      <div>
      <Carousel></Carousel>
      </div>
    </Slider>
  );
}