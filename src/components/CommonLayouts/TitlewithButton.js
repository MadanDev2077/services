import React from "react";
import RoundedButton from "./RoundedButton";

const TitlewithButton = ({
  headerClass,
  titles,
  text,
  classes,
  descClass,
  desc,
  descParentClass,
  descchildClass,
}) => {
  return (
    <div className=" flex   gap-x-2 flex-col lg:flex-row justify-between gap-y-3   ">
      <h2 className={`section-title flex-1 ${headerClass}`}>
        {titles?.map((item, index) => (
          <span
            key={index}
            className={`font-bold ${item?.className ?? ""} ${
              item?.stacktitle ? "block" : ""
            }`}
          >
            {item?.title}
          </span>
        ))}
      </h2>

      <div className={` flex md:justify-center flex-1 ${descParentClass}`}>
        <div
          className={`desc w-full sm:w-[80%]  flex flex-col gap-3 lg:gap-4 xl:gap-5 ${descchildClass}`}
        >
          <description className={`desc w-full lg:w-[80%] ${descClass}`}>
            {desc}
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
