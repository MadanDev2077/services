import TitlewithButton from "@/components/CommonLayouts/TitlewithButton";
import React from "react";
import Card from "./Card";
import { Globe, Laptop } from "lucide-react";

const Cards = () => {
  return (
    <section className="container">
      <TitlewithButton
        text="Learn More"
        // classes={"!bg-[#c9f563] !text-black"}
        ParentClass={"text-left"}
        headerClass={" flex flex-col w-full"}
        descParentClass={"!justify-start lg:!justify-end  max-w-auto "}
        titles={[
          {
            title: " We are Top",
            className: "blue-font",
            stacktitle: false,
          },
          {
            title: " Software Development Company",
            className: "w-full md:w-[90%] lg:w-[90%] xl:w-[80%]",
            stacktitle: true,
          },
        ]}
        desc={
          "FixyAds, we don't just count numbers, we measure the impact of our client's success. We're proud to support businesses in the digital world, driven by a team of passionate individuals behind every achievement."
        }
        // descClass={"w-full md:w-[60%] lg:w-[80%] xl:w-[70%] inline-block "}
      />{" "}
      <div className="pt-10 sm:pt-12 md:pt-14 lg:pt-16  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 gap-x-10">
        <Card
          Icon={
            <Laptop
              size={32}
              className=" text-[#38b7c5] group-hover:text-[#d1fe69]"
            />
          }
          name={"Techy Dev"}
          count={60}
        />
        <Card
          Icon={
            <Globe
              size={32}
              className=" text-[#38b7c5] group-hover:text-[#d1fe69]"
            />
          }
          name={"Our Passionate Teams"}
          count={15}
        />
        <Card
          Icon={
            <Globe
              size={32}
              className=" text-[#38b7c5] group-hover:text-[#d1fe69]"
            />
          }
          name={"Countries"}
          count={25}
        />
        <Card
          Icon={
            <Globe
              size={32}
              className=" text-[#38b7c5] group-hover:text-[#d1fe69]"
            />
          }
          name={"Happy Clients"}
          count={60}
        />
      </div>
    </section>
  );
};

export default Cards;
