import React, { useState, useEffect } from "react";
import "./products.css";
import axios from "axios";
import { FaCartPlus } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productSlice } from "../../Redux/poductslice";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
const Products = () => {
  const [products, setproducts] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
        console.log(res)
      })
      .catch((err) => console.log(err));
  });

  return (
    <section className="container">
      <h3>products</h3>

      <div className="productscontainer">
        {products?.map((el, idx) => (
          <div className="card" key={idx}>
            <div className="image">
              <img src={el.image} alt="" className="content" />
            </div>
            <div className="cardinfo">
              <p className="texttitle">{el.title}</p>
              <h4 className="category">{el.category}</h4>
              <div className="span">
                <div className="star ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <span>price:${el.price}</span>
              </div>
              <div className="icons">
                <button
                  onClick={() => dispatch(productSlice.actions.addToCart(el))}
                  className="btn"
                >
                  <FaCartPlus />
                  add to cart
                </button>

                <Link to={`/products/${el.id}`}>
                  <div>
                    <button className="btn">
                      <FaRegEye />
                      read more
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
