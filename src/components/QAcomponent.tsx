import { Images } from "@/constant/imageData"

export default function QuestionAndAnswer(content:any){
  const data = content.content;
  console.log(data)
    return(
        <div className="flex bg-[#F3EDFF] justify-evenly rounded-md m-2 lg:hidden">
        <div className="flex flex-col gap-[20px] px-[10px] py-[20px] ">
          <p className="text-[24px] font-[400] leading-[40px] text-center text-PiGrey">
           <span className="text-PiGradentto font-[700]">Free </span>11+ Math Paper with Answer
          </p>
          {data.length==0?<></>:data.map((ele:any)=><div className="flex flex-col gap-[20px]">
              <div className="flex height-[54px] p-[15px] gap-[10px] border  rounded-md bg-PiWhiteBackground">
            <img src={Images.downloadButton.Link} alt="" className="h-[25px] w-[25px]"/>
            <p className="text-[18px] font-[400] leading-[30px] text-PiGrey">
              {ele}
            </p>
          </div>
          <div className="flex height-[54px] p-[15px] justify-evenly border border-PiBlack rounded-md bg-[#FFF]">
            <p className="text-[18px] font-[600] text-PiGrey leading-[30px] text-center">
              View answer
            </p>
          </div>
            </div>
          )}
          
        </div>
      </div>
    )
}