import React from "react";
import { Images } from "@/constant/imageData";
export default function AchivementCard() {
  return (
    <div className="hidden lg:flex flex-wrap justify-around  p-[20px] rounded-[12px] bg-[#E4F2EE]">
      <div className="flex flex-col gap-[10px]  ">
        <div className="flex justify-evenly">
          <img src={Images.success.Link} alt="" />
        </div>
        <div className="flex justify-evenly">
          <p className="text-[22px] font-[400] leading-[40px] font-Poppins">
            95% Success Rate
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={Images.line.Link} alt="" />
      </div>
      <div className="flex flex-col gap-[10px]   ">
        <div className="flex justify-evenly">
          <img src={Images.download.Link} alt="" />
        </div>
        <div className="flex justify-evenly">
          <p className="text-[22px] font-[400] leading-[40px] font-Poppins">
            Exam Planner
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={Images.line.Link} alt="" />
      </div>
      <div className="flex flex-col gap-[10px]  ">
        <div className="flex justify-evenly">
          <img src={Images.small.Link} alt="" />
        </div>
        <div className="flex justify-evenly">
          <p className="text-[22px] font-[400] leading-[40px] font-Poppins">
            Designed by 11+ Experts
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={Images.line.Link} alt="" />
      </div>

      <div className="flex flex-col gap-[10px]  ">
        <div className="flex justify-evenly">
          <img src={Images.paper.Link} alt="" />
        </div>
        <div className="flex justify-evenly">
          <p className="text-[22px] font-[400] leading-[40px] font-Poppins">
            95% Success Rate
          </p>
        </div>
      </div>
    </div>
  );
}
