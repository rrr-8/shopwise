import React from "react";
import Carousel from "../carousel/Carousel";
import { images } from "../carousel/Data";
import NavTwo from "../../Components/Navtwo/NavTwo";
import Des from "../../Components/description/Des";
import Products from "../../Components/products/Products";
import { furnitureData } from "../../trending items/Chairsdata";
import Fcarousel from "../../trending items/FurnitureCarousel"
import Mvbar from "../../Components/moving bar/BarOne"
import { image } from "../../Components/moving bar/movingitems";
import { logoscroll } from "../../Components/moving bar/movingbartwo";
import Bartwo from "../../Components/moving bar/BarTwo"
import Footer from "../../footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Homecomp = () => {
  return (
    <>
   
       <NavTwo /> 

       <Carousel images={images} />
      <Des/>
      <Products/>
       <Fcarousel furnitureData={furnitureData} /> 
       <Mvbar image={image} />
      <Bartwo logoscroll={logoscroll} />  
      <Footer/>     
      </>
      
   
  );
};

export default Homecomp;
