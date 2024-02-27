import React from "react";
import star from "../assets/star1.png";

function Rating({ rating }) {
  return (
    <div className="h-[118px] w-[135px] bg-[#F3F9FF] flex flex-col justify-center items-center rounded-b-xl mb-4 md:mb-0 lg:mb-0">
      <p className="text-[22px] md:text-[32px] lg:text-[36px] text-[#074786]">{rating.grade}</p>
      <p className="text-[10px] md:text-[14px] lg:text-[16px] text-[#074786] py-0.5">
        {rating.performance}
      </p>
      <img src={star} alt="" className="h-[11px] w-[66px] md:h-[14px] md:w-[80px] lg:h-[16px] lg:w-[96px]" />
    </div>
  );
}

export default Rating;
