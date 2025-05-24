import React from "react";

const TitleWithDesc = ({
  titles,
  desc,
  descClass,
  ParentClass,
  headerClass,
  headingLevel = "h3", // Default to h3 if not specified
}) => {
  const HeadingTag = headingLevel; // 'h1' or 'h3'

  return (
    <div className={`${ParentClass} space-y-4`}>
      <HeadingTag className={`section-title ${headerClass} `}>
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
      </HeadingTag>
      <description
        className={`${descClass} desc w-full !md:w-[80%] !lg:w-[60%] !xl:w-[40%]`}
      >
        {desc}
      </description>
    </div>
  );
};

export default TitleWithDesc;
