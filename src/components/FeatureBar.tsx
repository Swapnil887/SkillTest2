export default function FeatureBar(content: any) {
  const data = content.content;
  return (
    <div className="grid grid-cols-2 p-[20px] bg-PiFooter rounded-lg m-2 lg:hidden ">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[36px] text-center text-PiBlack font-[700] leading-[50px]">
          {data.heading1}
        </p>
        <p className="text-[22px] font-[400] text-center text-PiGrey leading-[40px]">
          {data.paragraph1}
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[36px] text-center text-PiBlack font-[700] leading-[50px]">
          {data.heading2}
        </p>
        <p className="text-[22px] font-[400] text-center text-PiGrey leading-[40px]">
          {data.paragraph2}
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[36px] text-center text-PiBlack font-[700] leading-[50px]">
          {data.heading3}
        </p>
        <p className="text-[22px] font-[400] text-center text-PiGrey leading-[40px]">
          {data.paragraph3}
        </p>
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[36px] text-center text-PiBlack font-[700] leading-[50px]">
          {data.heading4}
        </p>
        <p className="text-[22px] font-[400] text-center text-PiGrey leading-[40px]">
          {data.paragraph4}
        </p>
      </div>
    </div>
  );
}
