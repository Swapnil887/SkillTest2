import { Images } from "@/constant/imageData";

export default function HeroSectionCard(content: any) {
  const data = content.content;
  return (
    <div className="flex flex-col gap-[20px] ">
      {data.length == 0 ? (
        <></>
      ) : (
        data.map((ele: any, id: any) => (
          <div key={id} className="flex gap-[0.9375rem]  items-center">
            <img src={ele.image} alt="" />
            <p className="font-Poppins text-[22px] font-[400] leading-[40px] mb-1 items-center">
              {ele.paragraph}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
