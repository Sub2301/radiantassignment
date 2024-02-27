import React from "react";
import search from "../assets/search_icon.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 h-[64px] w-full flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center py-12 sm:py-0 md:py-0 lg:py-0">
  <div className="flex flex-col items-center md:flex-row md:items-center md:mx-8 lg:mx-16">
    <div className="flex items-center ml-4 md:ml-8 lg:ml-16 ">
      <img src={search} alt="" className="absolute px-2 focus-within:text-blue-500" />
      <input
        type="search"
        className="h-[37px] w-[245px] md:w-[258px] lg:w-[258px] rounded-[8px] outline-none pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 pb-8 sm:pb-0 md:pb-0 lg:pb-0"
      />
    </div>
    <ul className="text-[#D1D6DA] font-[14px] flex flex-row space-x-4 md:flex-row space-y-2 md:space-y-0 md:space-x-8 lg:space-x-16 items-center md:items-center ml-12">
      <li className="mt-2 md:mt-0 hover:underline cursor-pointer hover:text-white">Categories</li>
      <li className="hover:underline cursor-pointer hover:text-white">Website Builders</li>
      <li className="hover:underline cursor-pointer hover:text-white">Today's deals</li>
    </ul>
  </div>
</nav>
  );
};

export default Navbar;