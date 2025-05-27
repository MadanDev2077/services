import React from "react";
import TitleWithDesc from "./TitleWithDesc";
import officeImg from "../../assets/Images/section/office.jpg";

const TitleWithImage = ({ titles, desc, img }) => {
  return (
    <section className=" container space-y-6 md:space-y-8 lg:space-y-12 xl:space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-2 md:gap-x-4">
        <div class="main_image pt-[50%] ">
          <div
            className="bg_full rounded-2xl"
            style={{ backgroundImage: `url(${officeImg.src})` }}
          ></div>
        </div>
        <div className=" py-3 sm:py-5 md:py-10 space-y-3 md:space-y-5 lg:space-y-8 w-full lg:w-[80%] pl-0 lg:pl-16 xl:pl-20">
          <TitleWithDesc
            ParentClass={""}
            titles={titles}
            desc={desc}
            descClass={"w-full md:w-[95%] lg:w-[80%] xl:w-[90%] inline-block"}
          />
        </div>
      </div>
    </section>
  );
};

export default TitleWithImage;
