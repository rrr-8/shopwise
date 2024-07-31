import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styling from '../products/products.module.css'
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
      <section className={styling.container}>
        <div className={styling.productscontainer}>
          {
            <div className={styling.singleproductcard}>
              <div className={styling.image}>
                <img src={singleproduct.image} alt="" className={styling.content} />
              </div>
              <div className={styling.cardinfo}>
                <h4 className={styling.texttitle}>{singleproduct.title}</h4>
                <p className={styling.text}>{singleproduct.description}</p>
                <div className={styling.span}>
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
