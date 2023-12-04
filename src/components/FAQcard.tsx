import React from "react";
import { Images } from "@/constant/imageData";

export default function FAQcard({ data }: any) {
  //   console.log("data", data);
  return (
    <div>
      {data ? (
        <div className="grid grid-cols-1  xl:grid-cols-2 gap-[20px]">
          {data.map((card: any) => (
            <div className="flex justify-between items-center px-[30px] py-[20px] border-2 rounded-xl">
              <p className="text-[22px]">{card.question}</p>
              <img src={Images.dropdown.Link} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
