import { Images } from "@/constant/imageData"
import { useState } from "react"

export default function TableTwo(content:any){
    const [data,setData] = useState(content.content)
    console.log(data.heading3)
    
    return (
      <div className="flex flex-col shadow-md gap-[30px] py-[30px] px-2 lg:flex  flex-col gap-[30px] py-[30px]  ">
      <div>
        <div className="p-[20px] bg-PiCards rounded-md  flex gap-[30px] lg:px-[50px] bg-PiCards py-[20px] flex justify-between">
          <div className="flex gap-[15px] items-center">
            <img src={Images.list.Link} alt="" />
            {data.span==undefined?<p className="text-[18px] font-[600] leading-[30px]">
              {data.heading1}
            </p>:<p className="text-[18px] font-[600] leading-[30px]">
              <span className="text-PiGradentto">{data.span}</span> {data.heading1}
            </p>}
            
          </div>
          <div>
            <p className="hidden lg:block text-[18px] font-[600] leading-[30px]">
              {data.heading2}
            </p>
          </div>
          <div className="flex flex-col justify-evenly">
            <p className="text-[18px] font-[600] leading-[30px] ">
              {data.heading3}
            </p>
          </div>
        </div>

        {
          data.dataArray.length==0?<></>:data.dataArray.map((ele:any,id:any)=>{
            if((id+1)%2==0){
              return <div key={id} className="p-[20px] bg-PiGreyBackground flex gap-[30px] lg:px-[50px] py-[20px] flex justify-between">
              <div className="flex gap-[20px] items-center">
                <p className="text-[18px] font-[600] text-PiGrey leading-[30px]">{id+1}.</p>
                <p className="text-[18px] font-[400] leading-[30px] text-PiBlack">
                  {ele}
                </p>
              </div>
              <div>
                <div className="hidden lg:flex gap-[10px] items-center">
                  <img src={Images.downloadButton.Link} alt="" />
                  <p className="text-[18px] font-[400] leading-[30px] pb-1">
                    Download
                  </p>
                </div>
              </div>
              {data.span===undefined? <div className="w-[14%]  rounded-[12px] p-[15px]  flex justify-around">
                <img src={Images.lock.Link} alt="" className="hidden lg:block"/>
                <p className="text-[18px] font-[400] leading-[30px] text-PiGrey">
                  Answer
                </p>
              </div>:<div className="w-[16%]  rounded-[12px] p-[15px] border-[1px] bg-PiBullet flex justify-between">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.501 15C14.1578 15 15.501 13.6569 15.501 12C15.501 10.3431 14.1578 9 12.501 9C10.8441 9 9.50098 10.3431 9.50098 12C9.50098 13.6569 10.8441 15 12.501 15Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.82439 11.4467C3.31164 6.97571 7.52889 3.75 12.5015 3.75C17.4718 3.75 21.6874 6.97271 23.1765 11.4405C23.2969 11.8015 23.297 12.1922 23.1769 12.5533C21.6896 17.0243 17.4723 20.25 12.4997 20.25C7.52945 20.25 3.31381 17.0273 1.82472 12.5595C1.70437 12.1985 1.70426 11.8078 1.82439 11.4467ZM17.751 12C17.751 14.8995 15.4005 17.25 12.501 17.25C9.60148 17.25 7.25098 14.8995 7.25098 12C7.25098 9.1005 9.60148 6.75 12.501 6.75C15.4005 6.75 17.751 9.1005 17.751 12Z"
              fill="white"
            />
          </svg>
          <p className="text-[16px] font-[600] leading-[20px] text-PiWhiteBackground">
            View Solution
          </p>
        </div>}
             
            </div>
            }else{
              return <div key={id} className="p-[20px] flex gap-[30px] lg:px-[50px] py-[20px] flex justify-between">
              <div className="flex gap-[20px] items-center">
                <p className="text-[18px] font-[600] text-PiGrey leading-[30px]">{id+1}.</p>
                <p className="text-[18px] font-[400] leading-[30px] text-PiBlack">
                  {ele}
                </p>
              </div>
              <div>
                <div className="hidden lg:flex gap-[10px] items-center">
                  <img src={Images.downloadButton.Link} alt="" />
                  <p className="text-[18px] font-[400] leading-[30px] pb-1">
                    Download
                  </p>
                </div>
              </div>
              {data.span===undefined? <div className="w-[14%]  rounded-[12px] p-[15px]  flex justify-around">
                <img src={Images.lock.Link} alt="" className="hidden lg:block"/>
                <p className="text-[18px] font-[400] leading-[30px] text-PiGrey">
                  Answer
                </p>
              </div>:<div className="w-[16%]  rounded-[12px] p-[15px] border-[1px] bg-PiBullet flex justify-between">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.501 15C14.1578 15 15.501 13.6569 15.501 12C15.501 10.3431 14.1578 9 12.501 9C10.8441 9 9.50098 10.3431 9.50098 12C9.50098 13.6569 10.8441 15 12.501 15Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.82439 11.4467C3.31164 6.97571 7.52889 3.75 12.5015 3.75C17.4718 3.75 21.6874 6.97271 23.1765 11.4405C23.2969 11.8015 23.297 12.1922 23.1769 12.5533C21.6896 17.0243 17.4723 20.25 12.4997 20.25C7.52945 20.25 3.31381 17.0273 1.82472 12.5595C1.70437 12.1985 1.70426 11.8078 1.82439 11.4467ZM17.751 12C17.751 14.8995 15.4005 17.25 12.501 17.25C9.60148 17.25 7.25098 14.8995 7.25098 12C7.25098 9.1005 9.60148 6.75 12.501 6.75C15.4005 6.75 17.751 9.1005 17.751 12Z"
              fill="white"
            />
          </svg>
          <p className="text-[16px] font-[600] leading-[20px] text-PiWhiteBackground">
            View Solution
          </p>
        </div>}
            </div>
            }
              
          })
        }
        

      </div>
    </div>
    
    
    )
    
}