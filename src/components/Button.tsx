

export default function Button(content:any){
    
    return(
        <div className="flex gap-[20px]  ">
        <div className="px-[64px] py-[12px] bg-[#FE8551] rounded-[12px] items-center">
          <p className="text-center text-[24px] font-[700] leading-[40px]">
          {content.content}
          </p>
        </div>
      </div>
    )
}