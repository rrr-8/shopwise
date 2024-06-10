import React from "react";
import Slider from "react-slick";
import Styling from "./scrolling.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BarOne = ({ image }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
     
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={Styling.Bar}>
      <div className={Styling.followbox}>
    
      </div>
      <Slider {...settings}>
        {image.map((el, index) => (
          <div key={index}>
            <div className={Styling.img}>
              <img src={el.image} alt="" className="card-image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BarOne;
