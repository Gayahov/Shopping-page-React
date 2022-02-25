import React, { Component } from "react";
import Slider from "react-slick";
import { carouselItems } from "../../constats/favorite.constants";
import FavoriteCard from "../shared/Cards/FavoriteCard/FavoriteCard";
// import SimpleSlider from "../shared/Cards/FavoriteCard/FavoriteCard";
import SampleNextArrow from "../shared/SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "../shared/SamplePrevArrow/SamplePrevArrow";

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow  className="test"/>,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          {carouselItems.map(({ id, images, header, title, price }) => { console.log(images, "aaaaa"); return(
            <div>
              <FavoriteCard key={id} images={images} title={title} header={header} price={price} />
            </div>)
          })}
        </Slider>
      </div>
    );
  }
}
