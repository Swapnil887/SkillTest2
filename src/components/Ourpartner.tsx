import React from "react";
import { Images } from "@/constant/imageData";

// export default function Ourpartner() {
//   return (
//     <div className="hidden lg:block px-[7%] py-[3.5%] flex justify-between flex-wrap font-poppins">
//       <div className="flex flex-col gap-[20px] w-[93%] lg:w-[40%] ">
//         <div className="flex gap-[15px]">
//           <img src={Images.logo.Link} />
//           <img src={Images.pi.Link} />
//         </div>
//         <h2 className=" text-[24px] font-bold pt-[15px] font-poppins ">
//           More than
//           <span className=" text-PiGradentto justify-center">
//             {" "}
//             20,000{" "}
//           </span>{" "}
//           Registered Members!
//         </h2>
//         <p className="text-[18px] font-poppins  ">
//           PiAcademy is the #1 site on the internet to prepare for the 7+, 8+,
//           9+, 10+, 11+, 13+, Pre-Tests, GCSEs, and other competitive exams in
//           the UK. Exam Past Papers, practice papers with detailed answers. Used
//           by parents tutors & schools all over the UK.
//         </p>
//         <div className="flex gap-[10px]">
//           <img src={Images.starImage.Link} alt="" />
//           <p>4.5</p>
//         </div>
//       </div>
//       <div className=" border-[1px] h-[17rem] hidden xl:block"></div>
//       <div className="flex flex-col justify-start items-center py-[30px]">
//         <h2 className=" text-[50px] font-bold mb-[50px] font-poppins  ">
//           Our
//           <span className=" text-PiGradentto "> Partners </span>{" "}
//         </h2>
//         <div className="flex flex-col gap-[30px] lg:gap-[70px]">
//           <div className="flex justify-evenly">
//             <img src={Images.statlor.Link} alt="" />
//           </div>
//           <div className="flex justify-evenly">
//             <img src={Images.tatlor.Link} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Ourpartner() {
  return (
    <div className="hidden lg:block">
    <div className=" px-[7%] py-[3.5%] flex justify-between flex-wrap font-poppins">
      <div className="flex flex-col gap-[20px] w-[93%] lg:w-[40%] ">
      <div className="flex gap-[15px]">
           <img src={Images.logo.Link} />
           <img src={Images.pi.Link} />
         </div>
        <h2 className=" text-[24px] font-bold pt-[15px] font-poppins ">
          More than
          <span className=" text-PiGradentto justify-center">
            {" "}
            20,000{" "}
          </span>{" "}
          Registered Members!
        </h2>
        <p className="text-[18px] font-poppins  ">
          PiAcademy is the #1 site on the internet to prepare for the 7+, 8+,
          9+, 10+, 11+, 13+, Pre-Tests, GCSEs, and other competitive exams in
          the UK. Exam Past Papers, practice papers with detailed answers. Used
          by parents tutors & schools all over the UK.
        </p>
        <div className="flex gap-[10px]">
        <img src={Images.starImage.Link} alt="" />
          <p>4.5</p>
        </div>
      </div>
      <div className=" border-[1px] h-[17rem] hidden xl:block"></div>
      <div className="flex flex-col justify-start items-center py-[30px]">
        <h2 className=" text-[50px] font-bold mb-[50px] font-poppins  ">
          Our
          <span className=" text-PiGradentto "> Partners </span>{" "}
        </h2>
        <div className="flex gap-[20px] lg:gap-[70px]">
        <div className="flex justify-evenly">
             <img src={Images.statlor.Link} alt="" />
           </div>
           <div className="flex justify-evenly">
             <img src={Images.tatlor.Link} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
