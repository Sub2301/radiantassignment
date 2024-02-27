import React from "react";
import system from "../assets/builder.png";
import Rating from "./Rating";
import DownArrow from "../assets/downarrow.png";
import rectangle from "../assets/Rectangle.png";
import prize from "../assets/prize.png";
import diamond from "../assets/diamond.png";
import check from "../assets/check.png";

function BuilderCard({ data }) {
  const {
    slNumber,
    name,
    title,
    description,
    highlights,
    colors,
    isBestChoice,
    isBestValue,
    isDiscount,
    isFeature,
    rating,
  } = data;

  return (
    <div className="mt-4 relative border-sky-500 hover:ring-sky-500 hover:ring-2 lg:hover:border-sky-500 lg:hover:ring-sky-500 lg:hover:ring-2 md:hover:border-sky-500 md:hover:ring-sky-500 md:hover:ring-2 sm:hover:border-sky-500 sm:hover:ring-sky-500 sm:hover:ring-2 rounded-xl">
      {isBestChoice && (
        <div className="absolute top-[-14px] left-[-7px] ">
          <img src={rectangle} alt="" />
          <div className="flex items-center absolute top-1 px-2 gap-2">
            <img src={prize} alt="symbol" className="" />
            <p className="text-[#FFFFFF] text-[16px]">Best Choice</p>
          </div>
        </div>
      )}
      {isBestValue && (
        <div className="absolute top-[-14px] left-[-7px] ">
          <img src={rectangle} alt="" />
          <div className="flex items-center absolute top-1 px-2 gap-2">
            <img src={diamond} alt="symbol" className="" />
            <p className="text-[#FFFFFF] text-[16px]">Best Value</p>
          </div>
        </div>
      )}
      <div className="h-[44px] w-[44px] bg-[#FFFFFF] border-[#E1E4E6] text-[#626E79] rounded-full flex justify-center items-center absolute top-8 left-[-21px] ">
        {slNumber}
      </div>
      <div className="lg:w-[1024px] md:w-full  md:mx-auto sm:w-full rounded-[12px] bg-[#FFFFFF] ">
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col gap-12 px-8">
          <div className="lg:w-1/4 md:w-1/2 sm:w-full lg:py-16 lg:mb-0 md:py-12 md:mb-0 sm:py-6 sm:mb-4 flex flex-col items-center justify-center">
            <img src={system} alt="" className="h-[103px] w-[141px]" />
            <p className="text-[13px] text-[#626E79] py-2 px-11 text-center md:text-left">
              {name}
            </p>
          </div>

          <div className="lg:w-1/2 md:w-1/2 sm:w-full lg:py-4 md:py-4 sm:py-2">
            <p className="text-[16px] text-[#4B5665] leading-6">
              <span className="font-bold text-[#4B5665]">{title}</span>
              {description} {colors}
            </p>
            {isDiscount && (
              <div className="h-[26px] w-[61px] bg-[#F2F4F7] rounded-md p-1 mt-1 ">
                <p className="text-[#074786] text-[13px]">26% Off</p>
              </div>
            )}
            <h4 className="font-bold text-[#2C384A] text-[16px] pt-0.5">
              Main highlights
            </h4>
            {isFeature && (
              <div>
                <ul className="bg-[#FFF4ED] md:w-[400px] lg:w-[505px] rounded-xl ml-4 mt-2 text-[14px] md:text-[15px] lg:text-[16px] text-[#4B5665] p-5">
                  <li>
                    <span className="bg-[#FFFFFF] h-[28px] w-[40px] md:w-[32px] lg:w-[40px] mx-2 text-[16px] text-[#1B88F4]">
                      9.9
                    </span>
                    Building Responsive
                  </li>
                  <li>
                    <span className="bg-[#FFFFFF] h-[28px] w-[40px] md:w-[32px] lg:w-[40px] mx-2 text-[16px] text-[#1B88F4]">
                      8.9
                    </span>
                    Cool
                  </li>
                  <li>
                    <span className="bg-[#FFFFFF] h-[28px] w-[40px] md:w-[32px] lg:w-[40px] mx-2 text-[16px] text-[#1B88F4]">
                      8.9
                    </span>
                    Docs
                  </li>
                </ul>

                <p className="my-2 text-[16px] text-[#2C384A]">
                  Why we love it
                </p>
                <ul className="text-[#4B5665]">
                  <li className="flex items-center py-0.5 text-[15px]">
                    <img
                      src={check}
                      alt="check"
                      className="h-[24px] w-[24px]"
                    />
                    Documentation
                  </li>
                  <li className="flex items-center py-0.5 text-[15px]">
                    <img
                      src={check}
                      alt="check"
                      className="h-[24px] w-[24px]"
                    />
                    Easy Use
                  </li>
                  <li className="flex items-center py-0.5 text-[15px]">
                    <img
                      src={check}
                      alt="check"
                      className="h-[24px] w-[24px]"
                    />
                    Out of box
                  </li>
                </ul>
              </div>
            )}
            <p className="text-[16px] text-[#4B5665] pt-2">{highlights}</p>
            <div className="flex items-center mt-6">
              <p className="text-[16px] text-[#1B88F4]">Show more</p>
              <img
                src={DownArrow}
                alt="Down Arrow"
                className="h-[16px] w-[16px] ml-1"
              />
            </div>
          </div>
          <div className="  flex flex-col items-center gap-10">
            <Rating rating={rating} />
            <button className="h-[48px] w-[232px] text-[16px] text-[#FFFFFF] bg-[#1B88F4] rounded-[12px]   hover:scale-105">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuilderCard;
