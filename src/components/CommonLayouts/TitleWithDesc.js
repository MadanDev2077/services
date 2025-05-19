import React from "react";

const TitleWithDesc = ({
  titles,
  desc,
  descClass,
  ParentClass,
  headerClass,
  headerSecClass,
}) => {
  return (
    <div className={`${ParentClass} space-y-4`}>
      <h3 className={`${headerClass} section-title`}>
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
      </h3>
      <description
        className={`${descClass} desc w-full !md:w-[80%] !lg:w-[60%] !xl:w-[40%]`}
      >
        {desc}
      </description>
    </div>
  );
};

export default TitleWithDesc;
