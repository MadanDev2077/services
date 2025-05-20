import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";
import officeImg from "../../../assets/Images/section/office.jpg";
import { Backpack } from "lucide-react";
import RoundedButton from "@/components/CommonLayouts/RoundedButton";

const LeftImageSection = () => {
  return (
    <section className=" container space-y-6 md:space-y-8 lg:space-y-12 xl:space-y-16">
      <TitleWithDesc
        ParentClass={"text-center"}
        // title={"Built for scale & efficiency"}
        titles={[{ title: "Built for scale & effciency", className: "" }]}
        desc={
          "Whether you're handling individual transactions or 1,000,simplicity is key. We've built a frictionless"
        }
        descClass={"w-full md:w-[80%] lg:w-[60%] xl:w-[30%] inline-block"}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 md:gap-x-4">
        <div class="main_image pt-[50%] ">
          <div
            className="bg_full rounded-2xl"
            style={{ backgroundImage: `url(${officeImg.src})` }}
          ></div>
        </div>
        <div className=" py-3 sm:py-5 md:py-10 space-y-3 md:space-y-5 lg:space-y-8 w-full lg:w-[80%] pl-0 lg:pl-16 xl:pl-20">
          <div className="flex gap-x-1 md:gap-x-3 xl:gap-x-4 items-baseline  border-b-gray-200 border-b-2 pb-10">
            <div className="h-[20px]">
              <Backpack color="#99dadf" />
            </div>
            <div className=" flex flex-col gap-y-1">
              <h2 className="text-base md:text-lg xl:text-[21px] font-semibold">
                Investors
              </h2>
              <p className=" desc">
                Acquire properties nationwide with tech-driven efficiency. Scale
                into new markets with confidence.
              </p>
              <div className=" mt-2 md:mt-3 xl:mt-4">
                <RoundedButton
                  text="Learn More"
                  classes={"!py-2 !text-[13px]"}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-1 md:gap-x-3 xl:gap-x-4 items-baseline  border-b-gray-200 border-b-2 pb-10">
            <div className="h-[20px]">
              <Backpack color="#99dadf" />
            </div>
            <div className=" flex flex-col gap-y-1">
              <h2 className="text-base md:text-lg xl:text-[21px] font-semibold">
                Investors
              </h2>
              <p className=" desc">
                Acquire properties nationwide with tech-driven efficiency. Scale
                into new markets with confidence.
              </p>
            </div>
          </div>
          <div className="flex gap-x-1 md:gap-x-3 xl:gap-x-4 items-baseline">
            <div className="h-[20px]">
              <Backpack color="#99dadf" />
            </div>
            <div className=" flex flex-col gap-y-1">
              <h2 className="text-base md:text-lg xl:text-[21px] font-semibold">
                Investors
              </h2>
              <p className=" desc">
                Acquire properties nationwide with tech-driven efficiency. Scale
                into new markets with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSection;
