import {Images} from "@/constant/imageData"
import { useState } from "react";

export default function FeedBackComponent(content:any) {
  console.log(content)
  const [data,setData] = useState(content.content)
  return (
    <div className="hidden bg-PiCards lg:flex flex-col gap-[100px] py-[50px]">
      <p className="text-[48px] font-[700] leading-[60px] text-center">
       <span>{data.heading1}</span> {data.heading}
      </p>
      <div className="items-center flex gap-[20px] ">
        <img src={Images.previous.Link} alt="" />
        {data.length==0?<></>:data.data.map((ele:any,title:any)=><div className="relative border border-PiGrey">
            <img src={Images.eclips.Link} className="absolute left-[42%] top-[-40px] w-[80px] h-[80px] rounded-[80px]"/>
            <div className="px-[20px] pt-[60px] pb-[30px] flex flex-col gap-[20px]  text-center">
          <p className="text-[24px] font-[400] leading-[40px]">{ele.name}</p>
          <p className="text-[22px] font-[400] leading-[40px]">
            {ele.comment}
          </p>
        </div>
        </div>)}
        
        
        <img src={Images.next.Link} alt="" />
      </div>
    </div>
  );
}
