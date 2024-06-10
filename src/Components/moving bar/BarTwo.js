import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "./bartwo.css"



const BarTwo = ({logoscroll}) => {
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
         
        }
      },
      {
        breakpoint:890,
        settings: {
          slidesToShow:4,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="Bartwo">
     
    <Slider {...settings}>
      {logoscroll.map((el, index) => (
        <div key={index}>
              <div className="image">
                <img src={el.image} alt="" className="card-image" />
              </div>            
            </div>
      ))}
    </Slider>
      </div>
 
      
  )};
export default BarTwo