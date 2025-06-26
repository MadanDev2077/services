import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";
import RoundedButton from "@/components/CommonLayouts/RoundedButton";
import Testimonials from "../Testimonials/Testimonials";

const ImageCarousal = () => {
  return (
    <section className=" bg-pink">
      <div className="container">
        <div className=" space-y-10">
          <TitleWithDesc
            ParentClass={"text-center"}
            headerClass={" flex  md:gap-y-2 flex-col"}
            titles={[
              {
                title: "Transforming Our IT Challenges into",
                className: "blue-font !mb-0",
                stacktitle: false,
              },
              {
                title: "Success Stories",
                className: "",
                stacktitle: true,
              },
            ]}
            descClass={"w-full md:w-[60%] lg:w-[40%] xl:w-[20%] inline-block "}
          />
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default ImageCarousal;
