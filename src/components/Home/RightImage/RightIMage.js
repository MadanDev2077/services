import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";
import LeftSection from "./LeftSection";
import RoundedButton from "@/components/CommonLayouts/RoundedButton";

const RightIMage = () => {
  return (
    <section className=" container">
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <div className=" space-y-10">
          <TitleWithDesc
            ParentClass={"text-left"}
            headerClass={" flex gap-y-2 flex-col"}
            titles={[
              {
                title: "Powered By",
                className: "blue-font",
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
          <div className=" mt-10 border-t border-gray-300 py-8">
            <RoundedButton text={"Learn More"} classes={"!px-20"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightIMage;
