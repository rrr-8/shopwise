import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../products/products.css'
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
const Singleproduct = () => {
  const {id} = useParams();
  const [singleproduct, setsingleproduct] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/${id}`).then(res =>
         setsingleproduct(res.data)
        )
      
      .catch(err=>console.log(err));
  });
  return (
    <>
    <ScrollToTop smooth color="#6f00ff" />
      <section className="container">
        <div className="productscontainer">
          {
            <div className="singleproduct-card">
              <div className="image">
                <img src={singleproduct.image} alt="" className="content" />
              </div>
              <div className="cardinfo">
                <h4 className="texttitle">{singleproduct.title}</h4>
                <p className="text">{singleproduct.description}</p>
                <div className="span">
                  <span>price:${singleproduct.price}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
  
};

export default Singleproduct;
