import React, { useState,useEffect } from 'react'
import styling from '../Components/products/products.module.css'
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
    <section className={styling.container}>
   <h3 className={styling.carth3}>total cost :<span> {totalprice}</span></h3>

     <div className={styling.productscontainer}>
       {products?.map((el, idx) => (
      <div className={styling.card} key={idx}>
        <div className={styling.image}>
          <img src={el.image} alt="" className={styling.content} />
        </div>
        <div className={styling.cardinfo}>
          <h4 className={styling.texttitle}>{el.title}</h4>
          <p className={styling.category}>{el.category}</p>
          <div className={styling.star}><FaStar className='s' /><FaStar /><FaStar /><FaRegStar /></div>
          <div className={styling.span}>
            <span>price:${el.price}</span>
          </div>
          <div className={styling.icons}>
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