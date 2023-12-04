import { Images } from "@/Constants/ImageData";

export default function FeatureBar() {
  return (
    <div className="grid grid-cols-2 p-[20px] bg-PiFooter lg:hidden rounded-xl w-[90%] m-auto my-7">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[36px] flex justify-center items-center text-PiBlack font-[700] leading-[50px]">
          <img src={Images.SUCCESS_ICON.LINK} alt={Images.SUCCESS_ICON.ALT} />
        </p>
        <p className="text-[22px] font-[400] text-center text-PiGrey leading-[40px]">
          95% Success Rate
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[36px] flex justify-center items-center text-PiBlack font-[700] leading-[50px]">
          <img src={Images.DOWNLOAD_ICON.LINK} alt={Images.DOWNLOAD_ICON.ALT} />
        </p>
        <a className="text-[22px] font-[400] text-center text-PiGrey leading-[40px] underline underline-PiBullet">
          30,000+ Questions
        </a>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[36px] flex justify-center items-center text-PiBlack font-[700] leading-[50px]">
          <img
            src={Images.SMALLSIZE_ICON.LINK}
            alt={Images.SMALLSIZE_ICON.ALT}
          />
        </p>
        <p className="text-[22px] font-[400] text-center text-PiGrey leading-[40px]">
          Designed by 11+ Experts
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[36px] flex justify-center items-center text-PiBlack font-[700] leading-[50px]">
          <img
            src={Images.PASTPAPER_ICON.LINK}
            alt={Images.PASTPAPER_ICON.ALT}
          />
        </p>
        <p className="text-[22px] font-[400] text-center text-PiGrey leading-[40px]">
          180+ Past Papers
        </p>
      </div>
    </div>
  );
}
