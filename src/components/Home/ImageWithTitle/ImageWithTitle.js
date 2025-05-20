import TitlewithButton from "@/components/CommonLayouts/TitlewithButton";
import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";
import map from "../../../assets/Images/section/map.png";

const ImageWithTitle = () => {
  return (
    <section className="container bg-[#125a5f]">
      <TitlewithButton
        text="Learn More"
        classes={"!bg-[#c9f563] !text-black"}
        descClass={"!text-white"}
        ParentClass={"text-left"}
        headerClass={" flex gap-y-1 flex-col"}
        descchildClass={" ml-0 md:pl-[5%] lg:pl-[10%]"}
        titles={[
          {
            title: "Coast To coast",
            className: "blue-font",
            stacktitle: false,
          },
          {
            title: " Dedicated Expertise",
            className: "text-white",
            stacktitle: true,
          },
        ]}
        desc={
          "Whether you're handling individual transactions or 1,000,simplicity is key. We've built a frictionless"
        }
        // descClass={"w-full md:w-[60%] lg:w-[80%] xl:w-[70%] inline-block "}
      />
      <div class="main_image p-[25%] mt-6 md:mt-8 lg:mt-10 xl:mt-14">
        <div
          class="bg_full"
          style={{ backgroundImage: `url(${map.src})` }}
        ></div>
      </div>
    </section>
  );
};

export default ImageWithTitle;
