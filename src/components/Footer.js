import React from "react";
import Arrow from "../assets/downArrowGray.png";

function Footer() {
  return (
    <div className="bg-[#212731] min-h-[452px] flex text-[#B6BDC4] font-[14px] justify-center px-48 sm:pl-0">
      <div className="w-full max-w-[1024px] flex flex-wrap  mt-12 ml-0 md:ml-10">
        <ul className="w-full md:w-1/4 space-y-3 mb-8 md:mb-0 ">
          <li className="font-[16px] text-[#FFFFFF] ">CATEGORIES</li>
          <li className="cursor-pointer hover:text-blue-500">Web Builder</li>
          <li className="cursor-pointer hover:text-blue-500">Hosting</li>
          <li className="cursor-pointer hover:text-blue-500">Data Center</li>
          <li className="cursor-pointer hover:text-blue-500">Robotic-Automation</li>
        </ul>
        <ul className="w-full md:w-1/4 space-y-3 mb-8 md:mb-0 ml-0 md:ml-10">
          <li className="font-[16px] text-[#FFFFFF]">CONTACT</li>
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
          <li className="cursor-pointer hover:text-blue-500">Privacy Policy</li>
          <li className="cursor-pointer hover:text-blue-500">Terms Of Service</li>
          <li className="cursor-pointer hover:text-blue-500">Categories</li>
          <li>About</li>
        </ul>
        <div className="w-full md:w-1/4 font-[13px] mt-16 md:pt-0 ml-0 md:ml-10 cursor-pointer hover:text-blue-500">
          <p className="flex items-center justify-center ">
            United States
            <img src={Arrow} alt="" className="h-[9px] w-[15px] mx-4 " />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
