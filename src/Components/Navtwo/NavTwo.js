import React, { useState } from 'react'
import Logo from '../../images/logo_dark.png'
import Navlinks from './Navlinks'
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navmobile from './navmobile';





const NavTwo = () => {
 const [open, setopen] = useState(false)
  
 const cartproducts=(useSelector((state)=>state.product.items))
 return (

    <nav className='fixed w-full z-10  top-0 bg-white'>
       <Navbar/> 
     <div className='flex items-center font-medium justify-around'>
  <div className="z-50 p-5 min-[912px]:w-auto w-full flex justify-between">
 <img src={Logo} alt="logo" style={{ position:'relative',zIndex:"-4"}} /> 
 <div className='text-3xl min-[912px]:hidden ' onClick={()=>setopen(!open)}>
  {open?
    <IoMdClose />: <IoMdMenu/>
  }

  </div>
  </div>
<ul className='min-[912px]:flex hidden uppercase items-center gap-8 font-mono text-lg font-extrabold  hover:bg-#fb7f7f'>
  <li className='inline-block  hover:text-red-400'>
   <NavLink to='/' className='hover:text-red-700  block text-red-400'>Home</NavLink> 
  </li>
  <Navlinks className=' hover:text-red-400 z-40'/>
  <div className='flex gap-9 items-center justify-center'>
  <IoIosSearch className=" text-red-500 hover:text-red-800"/>
  <NavLink to="/cart" className="flex "><IoCartOutline className=" text-red-500 hover:text-red-800"/> {cartproducts.length>0?cartproducts.length:undefined}</NavLink>
  </div> 
  </ul>
{/* mobile nav */}
<ul className={` pb-0  min-[912px]:hidden absolute z-10 bg-white w-full top-5 h-fit  sm:text-xl bottom-0 py-26 pl-4 duration-500 ${open? "left-0":"left-[-100%]"}`}>
<li className='pt-36 px-1 inline-block hover:text-red-400 transition ease-in-out duration-300 '>
   <NavLink to="/" className={'ml-2 hover:text-red-400 '}>Home</NavLink> 
  </li>
  <Navmobile className='min-[912px]:hidden'/>
  <div className='ml-6  inline-block cursor-pointer '>
  <div className='py-2'>
  <IoIosSearch className=' text-red-500 hover:text-red-800' />
  </div>
 <div className='py-3'>
 <NavLink to="/cart" className="flex pt-2"><IoCartOutline className=" text-red-500 hover:text-red-800"/> {cartproducts.length>0?cartproducts.length:undefined}</NavLink>
  </div>
  </div>
</ul>
      </div> 
    </nav>

  )
}

export default NavTwo
