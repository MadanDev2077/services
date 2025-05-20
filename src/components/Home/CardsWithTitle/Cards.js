import TitlewithButton from "@/components/CommonLayouts/TitlewithButton";
import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <section className="container">
      <TitlewithButton
        text="Learn More"
        // classes={"!bg-[#c9f563] !text-black"}
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
            className: "",
            stacktitle: true,
          },
        ]}
        desc={
          "Whether you're handling individual transactions or 1,000,simplicity is key. We've built a frictionless"
        }
        // descClass={"w-full md:w-[60%] lg:w-[80%] xl:w-[70%] inline-block "}
      />{" "}
      <div className="py-10 sm:py-12 md:py-14 lg:py-16  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 gap-x-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Cards;
