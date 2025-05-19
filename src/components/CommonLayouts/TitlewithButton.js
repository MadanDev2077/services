import React from "react";
import RoundedButton from "./RoundedButton";

const TitlewithButton = ({ text, classes }) => {
  return (
    <div className=" flex   gap-x-2 flex-col md:flex-row justify-between gap-y-3 ">
      <h2 className="section-title">
        <div className="blue-font">End to end title</div>
        <div className="">& Colsing Services</div>
      </h2>
      <div className=" flex md:justify-center">
        <div className="desc w-full sm:w-[80%]  flex flex-col gap-3 lg:gap-4 xl:gap-5">
          <description className="desc w-full lg:w-[80%]">
            Spruce provides title insurance, coordination, escrow, and recording
            services.
          </description>
          <div>
            <RoundedButton text={text} classes={classes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlewithButton;
