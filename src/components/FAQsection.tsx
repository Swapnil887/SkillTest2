import React from "react";
import FAQcard from "./FAQcard";

export default function FAQsection() {
  return (
    <div className="hidden lg:block px-[7%] py-[3.5%] flex flex-col gap-[50px] font-poppins">
      <div>
        <h2 className=" text-[50px] font-bold pt-[15px] font-poppins text-center ">
          Frequently
          <span className=" text-PiGradentto justify-center"> Asked </span>
          Questions
        </h2>
      </div>
      <FAQcard
        data={[
          {
            question: "What is 11 Plus Past Paper subscription plan?",
          },
          {
            question: "What are subscription benefits?",
          },
          {
            question: "How do I purchase subscription plan?",
          },
          {
            question: "Can I cancel my subscription?",
          },
          {
            question: "How are subscription renewed ?",
          },
          {
            question: "What is subscription term ?",
          },
        ]}
      />
    </div>
  );
}
