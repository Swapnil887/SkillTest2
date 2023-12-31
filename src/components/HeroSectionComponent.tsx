import React from "react";
import AchivementCard from "./AchivementCard";
import Button from "./Button";
import { Images } from "@/constant/imageData";
import HeroSectionCard from "./HeroSectionCard";

export default function HeroSectionComponent(content: any) {
  const data = content.content;
  return (
    <div className="flex flex-col gap-[30px]  ">
      <p className="font-Poppins text-[48px] font-[700] leadind-[60px] text-center">
        <span className="text-PiGradentto">{data.heading1}</span>{" "}
        {data.heading2}
      </p>
      <div className=" lg:flex justify-between">
        <div className="  lg:flex flex-col justify-between">
          <div className="flex justify-evenly px-1 lg:block ">
            <HeroSectionCard content={data.cardData} />
          </div>
          <div className=" lg:flex gap-[3.125rem] ">
            <div className="flex justify-evenly lg:block">
              <div>
                <div className="flex gap-[10px] py-[10px] w-[50%]">
                  <img src={Images.starImage.Link} alt="" />
                  <p className="font-Poppins text-[16px] font-[600] leading-[20px]">
                    {data.raiting}
                  </p>
                </div>
                <p className="font-Poppins text-[18px] font-[600] leading-[30px]">
                  <span className="text-PiBullet">{data.sell1}</span>{" "}
                  {data.sell2}
                </p>
              </div>
            </div>
            <div className="hidden lg:flex justify-evenly lg:flex gap-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M63.572 25.887L60.035 32L63.5688 38.1129C63.7798 38.4772 63.9169 38.8795 63.9724 39.2969C64.0278 39.7142 64.0004 40.1383 63.8918 40.5451C63.7832 40.9518 63.5955 41.3332 63.3394 41.6673C63.0833 42.0015 62.7639 42.2819 62.3994 42.4926L56.2801 46.0296V53.0749C56.2801 53.9246 55.9425 54.7395 55.3417 55.3403C54.7408 55.9412 53.9259 56.2787 53.0762 56.2787H46.0309L42.4971 62.3981C42.0711 63.1327 41.3711 63.6684 40.5507 63.8876C39.7302 64.1069 38.8563 63.9917 38.1206 63.5675L32.0013 60.0304L25.8883 63.5675C25.395 63.8526 24.8407 64 24.2832 64C23.7215 63.9968 23.1703 63.8474 22.6838 63.5665C22.1973 63.2856 21.7923 62.883 21.5087 62.3981L17.9716 56.2787H10.9232C10.0735 56.2787 9.25855 55.9412 8.65771 55.3403C8.05687 54.7395 7.71932 53.9246 7.71932 53.0749V46.0296L1.59997 42.4926C0.866945 42.0642 0.332993 41.3634 0.114534 40.543C-0.103925 39.7226 0.0108266 38.8491 0.433771 38.1129L3.97082 32L0.433771 25.887C0.221928 25.5229 0.0841149 25.1206 0.0282472 24.7031C-0.0276204 24.2855 -0.000440818 23.8611 0.108225 23.4541C0.21689 23.0472 0.4049 22.6657 0.661451 22.3316C0.918003 21.9975 1.23804 21.7174 1.60318 21.5074L7.72253 17.9703V10.925C7.72253 10.0753 8.06008 9.26041 8.66091 8.65957C9.26175 8.05874 10.0767 7.72119 10.9264 7.72119H17.9716L21.5087 1.60184C21.9336 0.865999 22.6333 0.329071 23.4541 0.109166C24.2748 -0.110739 25.1493 0.00438982 25.8851 0.429228L32.0045 3.96948L38.1238 0.432432C38.4878 0.220778 38.8902 0.0834726 39.3076 0.0284761C39.725 -0.0265205 40.1492 0.00188512 40.5556 0.112047C41.3749 0.334731 42.0735 0.871091 42.5003 1.60504L46.0341 7.72119H53.0794C53.9291 7.72119 54.744 8.05874 55.3449 8.65957C55.9457 9.26041 56.2833 10.0753 56.2833 10.925V17.9735L62.4026 21.5106C63.1379 21.936 63.6742 22.636 63.8935 23.4567C64.1127 24.2774 63.9971 25.1515 63.572 25.887Z"
                  fill="#FFBD00"
                />
              </svg>
              <Button content={"Buy Now"} />
            </div>

            <div className="block flex justify-evenly my-3  lg:hidden">
              <Button content={"Buy Now"} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://s3-alpha-sig.figma.com/img/9297/b521/0b47f027d3e18277e95bb558286b272e?Expires=1702252800&Signature=YKM5CTEnFCk8P7nYs~SV2JDhU~4YlLQb997QOL7w8r~zeeCUHdzlkEeMJ1tD262E9qGa5tjHaxlVo8DpKnm2r4wAu3drYhaRYps8D8pwMMp16YQp7M8TTnJMvNG-q-ec752oFv-6TGxX5eFx4g48UvyuMyAYJ1a87AwBXmyjOfWqxRdUa0MBcughk8iBE4VG0oUmwbMv~Lq4vnznoOnjkKjFbaYNUHGw1CD3cvgPdpxXltnwvQUcQUHv-A1UTPzCh~I-Z-yMKjcAYNUIdazPz0f2jd8pfYf76E9GdvD9d6udnH3Gi9K6RHSW2tRUQT3Wa1ZJXMP0aJSisFjFMphHpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>

      <AchivementCard />
    </div>
  );
}
