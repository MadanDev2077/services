import TitlewithButton from "@/components/CommonLayouts/TitlewithButton";
import React from "react";

const ImageWithTitle = () => {
  return (
    <section className="container">
      <TitlewithButton
        text="Learn More"
        classes={"!bg-[#c9f563] !text-black"}
      />
    </section>
  );
};

export default ImageWithTitle;
