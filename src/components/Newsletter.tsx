import React from "react";

export default function Newsletter() {
  return (
    <div className=" bg-PiFooter px-[7%] py-[3.5%] flex flex-col gap-[30px] font-poppins ">
      <div className="flex flex-col gap-[20px]">
        <h2 className=" text-[50px] font-bold pt-[15px] font-poppins text-center ">
          Subscribe to
          <span className=" text-PiGradentto justify-center"> Newsletter </span>
        </h2>
        <p className="text-[22px] font-poppins text-center">
          Get <span className=" text-PiGradentto justify-center"> 10% OFF</span>{" "}
          coupon code on your first order, valid sitewide.
        </p>
      </div>
      <div className="flex justify-center items-center gap-[30px] flex-wrap">
        <input
          type="text"
          placeholder="Your Email"
          className="p-[20px] rounded-xl w-[450px] border-2"
        />
        <button className="px-[54px] py-[12px] text-[24px] text-PiWhiteBackground font-bold  rounded-xl bg-PiGradentto">
          Get Started
        </button>
      </div>
    </div>
  );
}
