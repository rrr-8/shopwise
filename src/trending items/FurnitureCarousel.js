import React from "react";
import Styling from "./furniture.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
;


const Carousel = ({ furnitureData }) => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:"palevioletred" ,borderRadius:"100%",cursor:"pointer",}}
        onClick={onClick}
      />
    );
  }
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint:890,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (<div className={Styling.r}>
    <div className={Styling.Wrapper}>
      <h2>Trending Items</h2>
    <Slider {...settings}>
      {furnitureData.map((el, index) => (
        <div  className={Styling.i}key={index}>
          <div className={Styling.furnitureCard}>
            <div className={Styling.card}>
              <div className={Styling.cartimagediv}>
                <img src={el.image} alt="" className={Styling.cardimage}/>
              </div>
              <div className={Styling.ftext}>
                <h4>
                 {el.h4} 
                </h4>
                <p> Price:{el.p}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
      </div>
      
      </div>
      
  );
};
export default Carousel;
