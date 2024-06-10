import React, { useState,useEffect } from 'react'
import '../Components/products/products.css'
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";
import { productSlice } from '../Redux/poductslice';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";





const Cart = () => {
  
  const [products,setproducts]=useState();
const cartproducts=(useSelector((state)=>state.product.items))
const totalprice=(useSelector((state)=>state.product.total));
const dispatch=useDispatch();



useEffect(()=>{
dispatch(productSlice.actions.calctotal())
setproducts(cartproducts)

},[cartproducts,dispatch])
  return (
    <section className="container">
   <h3 className='cart-h3'>total cost :<span> {totalprice}</span></h3>

     <div className="productscontainer">
       {products?.map((el, idx) => (
      <div className="card" key={idx}>
        <div className="image">
          <img src={el.image} alt="" className="content" />
        </div>
        <div className="cardinfo">
          <h4 className="texttitle">{el.title}</h4>
          <p className="category">{el.category}</p>
          <div className='star'><FaStar className='s' /><FaStar /><FaStar /><FaRegStar /></div>
          <div className="span">
            <span>price:${el.price}</span>
          </div>
          <div className="icons">
          <button onClick={()=>dispatch(productSlice.actions.removefromcart(el))}><FaTrashAlt /></button>
      
          </div>
        </div>
         </div>
      ))}
     </div>
   </section>
  )
}

export default Cart