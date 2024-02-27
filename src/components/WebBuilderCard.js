import React from "react";
import system from "../assets/builder.png";

const WebBuilder = () => {
  return (
    <div className="h-[425px] w-[333px] rounded-[12px] pt-8 bg-[#FFFFFF] hover:border-sky-500 hover:ring-sky-500 hover:ring-2">
      <div className="">
        <img
          src={system}
          alt="Web Builder"
          className="h-[103px] w-[141px] mx-24 my-1"
        />
        <ul className="flex text-[#074786] gap-1.5 mx-6 mt-16">
          <li className="h-[28px] w-[69px] bg-[#F2F4F7] rounded-[8px] text-[13px] px-2 py-1">
            20% Off
          </li>
          <li className="h-[28px] w-[107px] bg-[#F2F4F7] rounded-[8px] text-[14px] px-2 py-1">
            Limited Time
          </li>
        </ul>
        <h3 className="font-bold text-center text-[#626E79] my-1">
          Webbuilder 1
        </h3>
        <p className="text-[16px] mx-6 text-[#626E79]">
          Computer Modern classic with Wix support
        </p>
        <ul className="flex gap-3 mx-6 my-1">
          <li className="text-[20px] text-[#5C6874]">$39.96</li>
          <div className="flex items-end gap-3">
            <li className="text-[#9FA9B3] text-[14px]">$49.96</li>
            <li className="text-[#EF4C5D] text-[13px]">(20% Off)</li>
          </div>
        </ul>
        <div className="h-[48px] w-[292px] mx-5">
        
          <button className="bg-[#1B88F4] h-full w-full text-[#FFFFFF] rounded-[12px] hover:scale-105 ">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebBuilder;
