import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navlinks = () => {
  const links = [
    {
      name: "pages",
      submenu: true,
      sublink: [
        {
          head: "topwear",
          sublink: [
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
          ],
        },
        {
          head: "topwear",
          sublink: [
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
          ],
        },
        {
          head: "topwear",
          sublink: [
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
          ],
        },
        {
          head: "topwear",
          sublink: [
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
          ],
        },
      ],
    },

    { name: "products",
  submenu: true,
      sublink: [
        {
          head: "topwear",
          sublink: [
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
          ],
        },
        {
          head: "topwear",
          sublink: [
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
          ],
        },
        {
          head: "topwear",
          sublink: [
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
          ],
        },
        {
          head: "topwear",
          sublink: [
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
            { name: "t-shirt", link: "/" },
          ],
        },
      ], },
    { name: "blog" },
    { name: "shop" },
    { name: "contact" },
  ];
  return links.map((link) => (
    <div>
      <div className="px-3 text-left md:cursor-pointer group ">
        <h1 className=" py-2 hover:text-red-400 transition ease-in-out duration-300">{link.name}  </h1>
     {link.submenu &&(
      <div >
      <div className="absolute top-22 hidden group-hover:block hover:block z-50">
        <div className="py-3">
         <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div> 
        </div>
      <div className="bg-white p-5 grid grid-cols-3 gap-10 ">
        {
          link.sublink.map((mysublinks)=>(
            <div>
              <h1 className="text-lg font-semibold">{mysublinks.head}</h1>
              {mysublinks.sublink.map((slink)=>(
                <li className="text-sm text-gray-500 my-2.5">
                  {slink.name}
                </li>
              ))}
            </div>
          ))
        }
      </div>
      </div>
      </div>
     )}
      </div>
    </div>
  ));
};

export default Navlinks;
