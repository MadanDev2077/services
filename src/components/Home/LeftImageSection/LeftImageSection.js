import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";

const LeftImageSection = () => {
  return (
    <section className=" container">
      <TitleWithDesc
        ParentClass={"text-center"}
        // title={"Built for scale & efficiency"}
        titles={[{ title: "Built for scale & effciency", className: "" }]}
        desc={
          "Whether you're handling individual transactions or 1,000,simplicity is key. We've built a frictionless"
        }
        descClass={"w-full md:w-[80%] lg:w-[60%] xl:w-[30%] inline-block"}
      />
    </section>
  );
};

export default LeftImageSection;
