import { Images } from "@/constant/imageData";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="px-[60px] bg-PiFooter lg:flex justify-evenly py-[10px] bg-[#115DCE] px-[60px]">
        <div className="flex gap-[10px]">
          <div className="flex justify-between lg:flex gap-[10px] ">
            <img src={Images.success.Link} alt="" className="h-[24px] w-[24px]"/>
            <p className="text-[16px] font-[600] font-Poppins text-[#FFF]">
              FREE 6-Days Trial 11+ Exam Tuition. Book Now
            </p>
          </div>
          <div className="hidden lg:w-[1px] h-[24px] bg-[#FFF]"></div>
          <div className="hidden lg:flex gap-[10px] ">
            <img
              src={Images.flash.Link}
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="text-[16px] font-[600] font-Poppins text-[#FFF]">
              11+ Exam Revision Courses Filling Fast. Book Now
            </p>
          </div>
        </div>
      </div>

      
      <div className="px-2 lg:px-[50px] py-[10px] flex justify-between">
        <div className="flex gap-[10px]">
          <img src={Images.logo.Link} alt="" className="w-[52.727px] h-[30px]" />
          <img src={Images.pi.Link} alt="" className="w-[157.273px] h-[30px]" />
        </div>
        <div className="hidden lg:flex gap-[65px] ">
          <div className="h-[30px] flex flex-col ">
            <p className="font-Poppins text-[18px] font-[600]">Exam Papers</p>
            <div className="h-[2px] bg-[#FE8551]"></div>
          </div>
            <p>11 + Courses</p>
          
         
            <p>11 + Courses</p>
         
        
            <p>11 + Courses</p>
        
        
            <p>11 + Courses</p>
          
        </div>
        <div className="flex gap-[12px] lg:flex gap-[20px]">
          <img src={Images.phone.Link} alt="" className="w-[30px] h-[30px]" />
          <img src={Images.avatar.Link} alt="" className="w-[30px] h-[30px]" />
          <img src={Images.cart.Link} alt="" className="w-[30px] h-[30px]" />
        </div>
      </div>
      <div className="hidden lg:flex bg-[#FFEBE4] px-[50px] justify-between">
        <div className="flex justify-center gap-[10px] items-center ">
          <p className="text-[18px] font-[400] font-Poppins">11+ papers</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              d="M1.83398 1.5L6.83398 6.5L11.834 1.5"
              stroke="#2420FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-[10px] items-center ">
          <p className="text-[18px] font-[400] font-Poppins">11+ papers</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              d="M1.83398 1.5L6.83398 6.5L11.834 1.5"
              stroke="#2420FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-[10px] items-center ">
          <p className="text-[18px] font-[400] font-Poppins">11+ papers</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              d="M1.83398 1.5L6.83398 6.5L11.834 1.5"
              stroke="#2420FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-[10px] items-center ">
          <p className="text-[18px] font-[400] font-Poppins">11+ papers</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              d="M1.83398 1.5L6.83398 6.5L11.834 1.5"
              stroke="#2420FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-[10px] items-center ">
          <p className="text-[18px] font-[400] font-Poppins">11+ papers</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              d="M1.83398 1.5L6.83398 6.5L11.834 1.5"
              stroke="#2420FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      
    </>
  );
};

export default Header;
