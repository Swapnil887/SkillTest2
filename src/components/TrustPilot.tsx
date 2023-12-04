import { Images } from "@/constant/imageData";

export default function TrustPilot() {
  return (
    <div className="flex flex-col gap-[50px] py-[30px] lg:hidden">
      <div className="flex flex-col gap-[20px]">
        <p className="text-[24px] font-[700] leading-[40px] text-center">
          PiAcademy | Exam Papers & Expert Tuition
        </p>
        <p className="text-[22px] font-[400] leading-[40px] text-center">
          Reviews 34 • Excellent
        </p>
        <div className="flex justify-evenly">
          <div className="flex gap-[5px]">
            <img src={Images.group.Link} alt="" />
            <img src={Images.group.Link} alt="" />
            <img src={Images.group.Link} alt="" />
            <img src={Images.group.Link} alt="" />
            <img src={Images.half.Link} alt="" />
          </div>
          <p className="text-[24px] font-[700] leading-[40px]">4.5</p>
        </div>
        <div className="flex justify-evenly">
        <div className="bg-PiFooter flex gap-[10px]">
          <img src={Images.right.Link} alt="" />
          <p className="text-[15px] font-[600] leading-[30px] text-center">
            VERIFIED COMPANY
          </p>
        </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <img src={Images.statlor.Link} alt="" />
      </div>
      <div className="flex justify-evenly">
        <img src={Images.tatlor.Link} alt="" />
      </div>
    </div>
  );
}
