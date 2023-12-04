import React from "react";
import { Images } from "@/constant/imageData";
import TrustPilot from "../TrustPilot";
import Details from "../DetailsComponent";

export default function Footer() {
  return (
    <div>
      <Details/>
      <div className="bg-PiFooter text-PiGrey lg:bg-PiBullet px-[7%]  flex flex-col gap-[30px] font-poppins">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col gap-[20px] flex-wrap">
            <div>
              <div>
                <p className="text-PiBlack lg:text-PiWhiteBackground text-[18px] font-semibold">
                  Explore
                  
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Past Exam Papers
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Tuition
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px]  hover:text-PiGradentto">
                  Mock Exams
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Affiliate Program
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Consultancy
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto">
                  Free Assessments
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div>
              <div>
                <p className="text-PiBlack lg:text-PiWhiteBackground text-[18px] font-semibold">
                  Exam Papers
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Pre 11+
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  11+
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  13+
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Pre-Tests
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] ">GCSE</p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto">
                  SATs
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div>
              <div>
                <p className=" text-PiBlack lg:text-PiWhiteBackground text-[18px] font-semibold">
                  Members
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  My Account
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div>
                <p className=" text-PiGrey lg:text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] font-semibold">
                  Call us at:
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  +44 (0) 7823 744504
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Email us at:
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px]  hover:text-PiGradentto">
                  Support@piacademy.co.uk
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className=" text-PiGrey lg:text-PiWhiteBackground text-[18px] hover:text-PiGradentto ">
                  Follow us on:
                </p>
              </div>
            </div>
            <div>
              <div className="hidden lg:flex gap-12 block">
                <img src={Images.facebook.Link}/>
                <img src={Images.ig.Link} />
                <img src={Images.twitter.Link} />
                <img src={Images.linkedin.Link} />
              </div>
              <div className="block flex gap-12  lg:hidden">
                <img src={Images.facebook.Link} className="bg-PiBlack"/>
                <img src={Images.ig.Link} className="bg-PiBlack"/>
                <img src={Images.twitter.Link} className="bg-PiBlack"/>
                <img src={Images.linkedin.Link} className="bg-PiBlack"/>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] border-[1px]  m-auto"></div>
        <div className="hidden lg:flex justify-between px-[20px]  text-PiWhiteBackground flex-wrap  ">
        <div>
          <p>© 2014 - 2023 PiAcademy Limited, All Rights Reserved</p>
        </div>
        <div className=" flex gap-[50px] flex-wrap">
          <div>
            <p>Sitemap</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Cookie Policy</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
        
      </div>
      <div className=" bg-PiBlack flex justify-between px-[20px]  text-PiWhiteBackground flex-wrap block lg:hidden lg:bg-PiBullet">
        <div>
          <p>© 2014 - 2023 PiAcademy Limited, All Rights Reserved</p>
        </div>
        <div className=" flex gap-[50px] flex-wrap">
          <div>
            <p>Sitemap</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Cookie Policy</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
