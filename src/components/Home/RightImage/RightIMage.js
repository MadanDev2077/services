import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";
import LeftSection from "./LeftSection";
import RoundedButton from "@/components/CommonLayouts/RoundedButton";
import officeImg from "../../../assets/Images/section/office.jpg";
import { Check } from "lucide-react";

const RightIMage = () => {
  return (
    <section className=" container">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        <div className=" space-y-10 mr-0 md:mr-3 lg:mr-4 py-0 lg:py-10 xl:py-14">
          <TitleWithDesc
            ParentClass={"text-left"}
            headerClass={" flex gap-y-0 md:gap-y-1 lg:gap-y-2 flex-col"}
            titles={[
              {
                title: "Powered By",
                className: "blue-font !mb-0 md:!mb-2",
                stacktitle: false,
              },
              {
                title: " Dedicated Expertise",
                className: "",
                stacktitle: true,
              },
            ]}
            desc={
              "Whether you're handling individual transactions or 1,000,simplicity is key. We've built a frictionless"
            }
            descClass={"w-full md:w-[60%] lg:w-[80%] xl:w-[70%] inline-block "}
          />
          <div className=" mt-10 border-t border-gray-300 pt-8 pb-4 md:pb-7 lg:pb-10 xl:pb-16">
            <div className=" space-y-2 md:space-y-3 lg:space-y-4">
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">
                  We partner with forward-thinking companies to scale
                </p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">
                  We partner with forward-thinking companies to scale
                </p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">
                  We partner with forward-thinking companies to scale
                </p>
              </div>
            </div>
            <div className=" mt-5 md:mt-7 lg:mt-8 xl:mt-10">
              <RoundedButton text={"Learn More"} classes={"!px-20"} />
            </div>
          </div>
        </div>
        <div class="main_image pt-[50%]">
          <div
            class="bg_full"
            style={{ backgroundImage: `url(${officeImg.src})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default RightIMage;
