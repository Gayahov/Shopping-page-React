import React, { Component } from "react";
import Slider from "react-slick";
import "./FavoriteCard.css";
import SampleNextArrow from "../../SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "../../SamplePrevArrow/SamplePrevArrow";
import ImageCard from "../ImageCard/ImageCard";
import { imageDescr } from "../../../../constats/favorite.constants";

export default class FavoriteCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow arrow=">" className="next" />,
      prevArrow: <SamplePrevArrow arrow="<" className="prev-single" />,
    };

    let images = this.props.images;
    // console.log(images, "bbbb");

    return (
      <div className="slider-img">
        <Slider {...settings}>
          {images.map((image, ) => (
            <>
            <ImageCard img={image}  />
            {/* {imageDescr.map((header, title, price)=>
            <>
             <p> {title}</p>
             <p> {header}</p>
             <p>{price}</p>
             </>
            )} */}
            </>
          ))}
        </Slider>
      </div>
    );
  }
}
