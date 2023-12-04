import { Images } from "@/constant/imageData";

export default function Details(){
    return(
        <div className="bg-PiFooter py-[30px] block lg:hidden">
    <div className="flex flex-col px-[20px] gap-[20px]  w-[93%] lg:w-[40%] ">
        <div className="flex gap-[15px]">
          <img src={Images.logo.Link}  />
          <img
            src={Images.pi.Link}
          />
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
      </div>
    )
}