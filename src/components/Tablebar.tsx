import React from "react";


export default function TableBar(){
    return (
        <div className="hidden lg:flex flex-wrap justify-between items-center px-[50px] py-[20px] bg-[#F3EDFF] rounded-[12px]">
        <p className="text-[36px] font-[700] leading-[50px]">
        11+ Maths Solved Past Papers
        </p>
        <div className="px-[64px] py-[12px] bg-[#FE8551] rounded-[12px] items-center">
          <p className="text-center text-[24px] font-[700] leading-[40px]">
            Buy Now
          </p>
        </div>
      </div>
    )
}