import React from "react";
import HeroSectionComponent from "./HeroSectionComponent";
import AchivementCard from "./AchivementCard";
import TableBar from "./Tablebar";
import FeedBackComponent from "./FeedbackComponent";
import Comments from "./Comments";
import AdBanner from "./AdBannerComponent";
import TableTwo from "./TableTwo";
import { Images } from "@/constant/imageData";
import FAQsection from "./FAQsection";
import Newsletter from "./Newsletter";
import QuestionAndAnswer from "./QAcomponent";
import FeatureBar from "./FeatureBar";
import Ourpartner from "./Ourpartner";
import TrustPilot from "./TrustPilot";
import Details from "./DetailsComponent";
import Footer from "./footer/Footer";
import Header from "./header/Navbar";

export default function MainSection() {
  return (
    <>
    <Header/>
    <div className="sm:px-5 lg:py-[30px] lg:px-[100px] flex  flex-col gap-[20px]">
      <HeroSectionComponent
        content={{
          heading1: "11",
          heading2: "Maths Solved Past Papers",
          raiting: "4.9",
          sell1: "15,000+",
          sell2: "Packs Sold",
          cardData: [
            {
              image: Images.tick.Link,
              paragraph: "180 Past Papers With Detailed Solutions",
            },
            {
              image: Images.tick.Link,
              paragraph: "180 Past Papers With Detailed Solutions",
            },
            {
              image: Images.tick.Link,
              paragraph: "180 Past Papers With Detailed Solutions",
            },
          ],
        }}
      />

      <div className="hidden lg:block">
        <TableTwo
          content={{
            heading1: "Independent & Grammar School Past Exam Papers",
            heading2: "Question Paper",
            heading3: "FREE Detailed Answers",
            dataArray: [
              "Aldenham School – 13 Plus Maths Sample Paper 2017",
              "Aldenham School – 13 Plus Maths Sample Paper 2017",
              "Aldenham School – 13 Plus Maths Sample Paper 2017",
            ],
            span: "FREE",
          }}
        />
      </div>

      <TableBar />

      <QuestionAndAnswer
        content={[
          "11+ Maths Sample Paper 1",
          "11+ Maths Sample Paper 1",
          "11+ Maths Sample Paper 1",
        ]}
      />

      <FeatureBar
        content={{
          heading1: "180+",
          paragraph1: "Past Papers",
          heading2: "10K",
          paragraph2: "Solved Questions",
          heading3: "6K+",
          paragraph3: "Students & Teachers",
          heading4: "£59",
          paragraph4: "Per Year",
        }}
      />

      <TableTwo
        content={{
          heading1: "Independent & Grammar School Past Exam Papers",
          heading2: "Question Paper",
          heading3: "Detailed Answers",
          dataArray: [
            "Aldenham School – 13 Plus Maths Sample Paper 2017",
            "Aldenham School – 13 Plus Maths Sample Paper 2017",
            "Aldenham School – 13 Plus Maths Sample Paper 2017",
          ],
        }}
      />

      <AchivementCard />

      <FeedBackComponent
        content={{
          heading: "Loved by 1000+ familes",
          data: [
            {
              name: "Sharon, 11+ Parent",
              comment:
                " I am using PiAcademy for eight months, Simply Amazing website. I have a lot of experience with other 11+ resource experience with other 11+ resources",
            },
            {
              name: "Sharon, 11+ Parent",
              comment:
                " I am using PiAcademy for eight months, Simply Amazing website. I have a lot of experience with other 11+ resource experience with other 11+ resources",
            },
            {
              name: "Sharon, 11+ Parent",
              comment:
                " I am using PiAcademy for eight months, Simply Amazing website. I have a lot of experience with other 11+ resource experience with other 11+ resources",
            },
          ],
        }}
      />
      <Comments />

      <div className="hidden lg:block">
        <AdBanner />
      </div>
      <TrustPilot />
      <Newsletter />
      <FAQsection />
      <Ourpartner />
      <Footer />
    </div>
    </>
  );
}
