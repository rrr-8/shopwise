import React from 'react'
import styling from "./footer.module.css"
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import visa from '../images/visa.png'
import paypal from '../images/paypal.png'
import amirican from '../images/amarican_express.png'
import master from '../images/master_card.png'
import discover from '../images/discover.png'
import { MdMarkEmailRead } from "react-icons/md";



const Footer = () => {
  return (
    <>
    <div className={styling.maindiv}>
    <div className={styling.contactinfo}>
     <h3>Contact Info</h3>
      <div className={styling.address}>
      <IoLocationOutline />
      <p>123 Street, Old Trafford, NewYork, USA</p> 
      
      </div>
      <div className={styling.name}>
      <FaRegEnvelope />
      <a href=' '> info@sitename.com</a>
      </div>
      <div className={styling.footericons}>
      <FaFacebook className={styling.facebook}/>
      <AiFillTwitterCircle className={styling.twitter}/>
      <FaGooglePlus className={styling.google}/>
      <FaYoutube className={styling.youtube} />
      <FaInstagram className={styling.instagram}/>
      </div>
    </div>
    <div>
    <h3>Useful Links</h3>
    <div className={styling.usefullinks}>
     <div> <Link href=" ">About Us</Link></div>
     <div> <Link href=" ">FAQ</Link></div>
     <div> <Link href=" ">Location</Link></div>
     <div> <Link href=" ">Affiliates</Link></div>

     <div> <Link href=" ">Contact</Link></div>
    </div>
    </div>
    <div>
    <h3>My Account</h3>
    <div className={styling.myaccount}>
   
      <div><Link href=" ">Discount</Link></div>
      <div><Link href=" ">Returns</Link></div>
      <div>    <Link href=" ">Orders History</Link></div>
      <div>    <Link href=" ">Order Tracking</Link></div>
    
    

      </div>
    </div>
    <div className={styling.subscribe}>
      <h3>Subscribe Our Newsletter</h3>
      <p>
      If you want to get an email from us every time we have a new special offer, sign up here!
      </p>
      <div className={styling.inputdiv}>
    <input type='email' placeholder='Enter Email Address'></input> <MdMarkEmailRead className={styling.mailicon} />
    </div>
    </div>
    </div>
    
    <div className={styling.lastsentence}>
      <div>
        <p>© 2020 All Rights Reserved by Bestwebcreator</p>
     
     
      </div>
    <div className={styling.visa}>
      <img src={visa} alt=''></img>
      <img src={paypal} alt=''></img>
      <img src={amirican} alt=''></img>
      <img src={master} alt=''></img>
      <img src={discover} alt=''></img>
    </div>
    
    </div>
    
  
    </>
  )
}

export default Footer