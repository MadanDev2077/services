import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";
import languageImage from "../../../assets/Images/section/languages.webp";
const TechStack = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden container">
      {/* Title Section */}
      <TitleWithDesc
        ParentClass={
          "text-center mb-0  z-20 relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh]"
        }
        headerClass={"flex md:gap-y-2 flex-col"}
        titles={[
          {
            title: "Our Technology Stack",
            className: "section-title !mb-0",
            stacktitle: false,
          },
        ]}
        descClass={
          "w-full md:w-[60%] lg:w-[40%] xl:w-[30%] inline-block text-center"
        }
        desc="We integrate a diverse range of industry-leading technologies to create applications that are unique and future-ready."
      />

      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full  bg-white p-2 flex items-center justify-center`}
      >
        <img
          src={languageImage.src}
          alt="tech-icon"
          className="w-full h-full object-contain"
        />
      </div>
      {/* <div class="main_image absolute w-full h-full top-0 left-0">
        <div
          className="bg_full rounded-2xl"
          style={{ backgroundImage: `url(${languageImage.src})` }}
        ></div>
      </div> */}
    </section>
  );
};

export default TechStack;
