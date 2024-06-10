import React from 'react'
import './Des.css'
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdSecurity } from "react-icons/md";
const DES = () => {
  return (
    <>
    <div className='main'>    
<div className='one'>
<div className='icon'>
<TbTruckDelivery />
</div>
<div className='text'>
    <h6>Free Delivery</h6>
    <p>Worldwide</p>
</div>
</div>

<div className='one'>
<div className='icon'>
<GiReceiveMoney />
</div>
<div className='text'>
<h6>Money Returns</h6>
    <p>30 Days money return</p>
</div>
</div>

       
        <div className='one'>
<div className='icon'>
<TfiHeadphoneAlt />
</div>
<div className='text'>
<h6>27/4 Online Support</h6>
    <p>Customer Support</p>
</div>
</div>
<div className='one'>
<div className='icon'>
<MdSecurity />
</div>
<div className='text'>
<h6>Payment Security</h6>
    <p>Safe Payment</p>
</div>
</div>
        </div>
  
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default DES