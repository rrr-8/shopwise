import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import "./carousel.css";
import { useState } from "react";

const Carousel = ({ images }) => {
  const [current, setcurrent] = useState(0);
  const [autoplay, setautoplay] = useState(true);
  let timeout = true;
  useEffect(() => {
    timeout =
      autoplay &&
      setTimeout(() => {
        slideright();
      }, 3000);
  });
  const slideright = () => {
    setcurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideleft = () => {
    setcurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setautoplay(false);
        clearTimeout(timeout);
      }}
      onMouseLeave={() => {
        setautoplay(true);
      }}
    >
      <div className="carousel-wrapper">
        {images.map((el, index) => (
          <div
            key={index}
            className={
              index === current ? "carouselcard-active" : "carousel-card"
            }
          >
            <img src={el.image} alt="" className="card-image" />
            <div className="card-overlay">
              <h5>{el.title}</h5>
              <h2>{el.h2} <span className="collection">{el.h}</span></h2>
       
              <button className="button-48">
          <span className="text">SHOP NOW</span>
        </button>
            </div>
          </div>
        ))}
        <div className="carousel-arrow-left" onClick={slideleft}>
        
          <FaArrowLeft />
        </div>
        <div className="carousel-arrow-right" onClick={slideright}>
          <FaArrowRight />
        </div>
        <div className="carousel-pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "pagination-dot pagination-dot-active"
                  : "pagination-dot"
              }
              onClick={() => setcurrent(index)}
            ></div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Carousel;
