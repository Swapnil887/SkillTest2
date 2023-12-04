import React from "react";
import Button from "./Button";

export default function AdBanner(){
    return (
        <div className="p-[30px] bg-[#115DCE] flex justify-around items-center rounded-md">
            <div className="flex flex-col gap-[20px]">
                <p className="text-[36px] font-[700] leading-[50px]"> Instant access to 180 Past Solved Papers</p>
                <div className="flex gap-[3.125rem] ">
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="132"
                    height="24"
                    viewBox="0 0 132 24"
                    fill="none"
                  >
                    <rect width="24" height="24" fill="#00B67A" />
                    <path
                      d="M22.2004 9.50872H14.6395L12.304 2.40039L9.96132 9.50872L2.40039 9.50163L8.52364 13.8992L6.18073 21.0004L12.304 16.61L18.4198 21.0004L16.0843 13.8992L22.2004 9.50872Z"
                      fill="white"
                    />
                    <path
                      d="M16.7996 15.5801L16.1996 13.8008L12.5996 16.8008L16.7996 15.5801Z"
                      fill="#00B67A"
                    />
                    <rect x="27" width="24" height="24" fill="#00B67A" />
                    <path
                      d="M49.2004 9.50872H41.6395L39.304 2.40039L36.9613 9.50872L29.4004 9.50163L35.5236 13.8992L33.1807 21.0004L39.304 16.61L45.4198 21.0004L43.0843 13.8992L49.2004 9.50872Z"
                      fill="white"
                    />
                    <path
                      d="M43.7996 15.5801L43.1996 13.8008L39.5996 16.8008L43.7996 15.5801Z"
                      fill="#00B67A"
                    />
                    <rect x="54" width="24" height="24" fill="#00B67A" />
                    <path
                      d="M76.2004 9.50872H68.6395L66.304 2.40039L63.9613 9.50872L56.4004 9.50163L62.5236 13.8992L60.1807 21.0004L66.304 16.61L72.4198 21.0004L70.0843 13.8992L76.2004 9.50872Z"
                      fill="white"
                    />
                    <path
                      d="M70.7996 15.5801L70.1996 13.8008L66.5996 16.8008L70.7996 15.5801Z"
                      fill="#00B67A"
                    />
                    <rect x="81" width="24" height="24" fill="#00B67A" />
                    <path
                      d="M103.2 9.50872H95.6395L93.304 2.40039L90.9613 9.50872L83.4004 9.50163L89.5236 13.8992L87.1807 21.0004L93.304 16.61L99.4198 21.0004L97.0843 13.8992L103.2 9.50872Z"
                      fill="white"
                    />
                    <path
                      d="M97.7996 15.5801L97.1996 13.8008L93.5996 16.8008L97.7996 15.5801Z"
                      fill="#00B67A"
                    />
                    <rect x="108" width="24" height="24" fill="#E4F2EE" />
                    <rect x="108" width="12" height="24" fill="#00B67A" />
                    <path
                      d="M130.2 9.50872H122.639L120.304 2.40039L117.961 9.50872L110.4 9.50163L116.524 13.8992L114.181 21.0004L120.304 16.61L126.42 21.0004L124.084 13.8992L130.2 9.50872Z"
                      fill="white"
                    />
                    <path
                      d="M124.8 15.5801L124.2 13.8008L120.6 16.8008L124.8 15.5801Z"
                      fill="#F9F9F9"
                    />
                  </svg>
                  <p className="font-Poppins text-[16px] font-[600] leading-[20px]">
                  8000+ Packs Sold
                  </p>
                </div>
               
              </div>
              
            </div>
            </div>
            <Button content={"Buy Now"}/>
        </div>
    )
}