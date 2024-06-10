import React from "react";

const Navmobile = () => {
  const links = [
    {
      name: "pages",
    },

    { name: "products" },
    { name: "blog" },
    { name: "shop" },
    { name: "contact" },
  ];
  return links.map((el) => (
    <div>
      <div className="px-3 text-left md:cursor-pointer group ">
        <h1 className=" py-2 hover:text-red-400 transition ease-in-out duration-300">
          {el.name}
        </h1>
      </div>
    </div>
  ));
};

export default Navmobile;
