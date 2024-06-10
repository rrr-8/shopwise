import React from "react";
import "./Navbar.css";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { IoMdPhonePortrait } from "react-icons/io";
import { TfiControlShuffle } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import Select from "react-select";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("");
  const options = [{ value:"USD" ,label: "USD" }, {value:"EUR",label: "EUR" }, {value:"GBR",label: "GBR" }];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <nav className="relative z-50">
      <div className="firstnav">
        <div className="firstpart">
        <div className="secondpart">
            <p className="phoneNum">
              <IoMdPhonePortrait />
              123-456-789
            </p>
          </div>
          <div>
          <Select className="selecttool"
          options={options}
          placeholder="USD"
          onChange={setSelectedOption}
          defaultValue={selectedOption}
          menuPortalTarget={document.body}
          styles={{menuPortal:base=>({...base,zIndex:999,fontSize:10,color:"gray"})}}
        />
        </div>
        <div >
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code) }
              countries={["US", "FR", "IT"]}
              customLabels={{ US: "US", FR: "FR", IT: "IT" }}
              optionsSize={12}
              placeholder="country"
              className="menu-flags  relative z-50 "
             
              
             
            />
          </div>
         
        </div>
        <div className="links">
          <div>
            <a href=" " className="flex justify-center items-center flex-col ">
             <TfiControlShuffle /> <span>Compare</span>
            </a>
          </div>
          <div>
            <a href=" " className="flex justify-center items-center flex-col">
              <FaHeart className="justify-self-center" />
              <span> Wishlist</span>
            </a>
          </div>
          <div>
            {" "}
            <Link to='/Login' className="flex justify-center items-center flex-col">
              <CiUser />
              <span> Login</span>
            </Link>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
