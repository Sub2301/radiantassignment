import React from "react";
import mark from "../assets/mark.png";
import checkMark from "../assets/checkMark.png";
import arrow from "../assets/downarrowblack.png";
import rightArrow from "../assets/rightArrow.png";
import WebBuilder from "./WebBuilderCard";
import SignUp from "./SignUp";
import BuilderCardList from "./BuilderCardList";

function Body() {
  return (
    <div className="flex justify-center items-center bg-[#FBFCFD] p-4 md:p-0">
      <div className="w-full max-w-[1024px] text-[#4B5665] mt-3">
        <h3 className="text-[48px] md:text-48px text-[#2C384A] mt-7  ">
          Best Website builders in the US
        </h3>
        <div>
          <hr className="my-2 border-2" />
          <div className="py-2 flex flex-col md:flex-row items-center justify-between">
            <ul className="flex flex-col md:flex-row gap-4">
              <li className="flex items-center mb-2 md:mb-0">
                <img
                  src={checkMark}
                  alt="chech mark"
                  className="mr-1.5 h-[20px] w-[20px]"
                />
                Last Updated - February 22, 2020
              </li>
              <li className="flex items-center">
                <img src={mark} alt="" className="mr-1.5 h-[20px] w-[20px]" />
                Advertising Disclosure
              </li>
            </ul>
            <p className="flex items-center mt-2 md:mt-0">
              Top Relevant
              <img src={arrow} alt="" className="h-[24px] w-[24px] mx-2" />
            </p>
          </div>
          <hr className="my-2 border-2" />
        </div>

        <ul className="flex flex-wrap gap-4 px-1 py-2 tracking-wide">
          <li className="hover:underline hover:text-blue-500 cursor-pointer">
            Tools
          </li>
          <li className="hover:underline hover:text-blue-500 cursor-pointer">
            AWS Builder
          </li>
          <li className="hover:underline hover:text-blue-500 cursor-pointer">
            Start Build
          </li>
          <li className="hover:underline hover:text-blue-500 cursor-pointer">
            Build Supplies
          </li>
          <li className="hover:underline hover:text-blue-500 cursor-pointer">
            Tooling
          </li>
          <li className="hover:underline hover:text-blue-500 cursor-pointer">
            BlueHosting
          </li>
        </ul>
        <ul className="text-[14px] flex flex-wrap px-1 mt-1 mb-7 tracking-wide">
          <li className="text-[13px] flex items-center leading-loose mb-2">
            Home
            <img src={rightArrow} alt="" className="h-[8.25px] w-[10px] mx-4" />
          </li>
          <li className="flex items-center text-[14px] mb-2">
            Hosting for all
            <img src={rightArrow} alt="" className="h-[8.25px] w-[10px] mx-4" />
          </li>
          <li className="flex items-center text-[14px] mb-2">
            Hosting
            <img src={rightArrow} alt="" className="h-[8.25px] w-[10px] mx-4" />
          </li>
          <li className="flex items-center text-[14px] mb-2">
            Hosting6
            <img src={rightArrow} alt="" className="h-[8.25px] w-[10px] mx-4" />
          </li>
          <li className="text-[14px] mb-2">Hosting5</li>
        </ul>
        <BuilderCardList />

        <h4 className="mt-6 md:mt-12 text-[28px] md:text-32px text-[#2C384A] md:mx-32">
          Related deals you might like for
        </h4>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-4  my-5">
          <WebBuilder />
          <WebBuilder />
          <WebBuilder />
        </div>

        <SignUp />
      </div>
    </div>
  );
}

export default Body;
