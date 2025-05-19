import React from "react";

const Card = () => {
  return (
    <div className="py-4 sm:py-6 lg:py-10 xl:py-12 px-5 sm:px-6 lg:px-9 xl:px-10 bg-white flex flex-col gap-y-5 rounded-4xl  hover:bg-gradient-to-b hover:from-[#29a7b1] hover:to-[#3bc2cb] hover:bg-clip-border hover:shadow-2xl  transition  duration-300 ease-in border border-gray-200 group ">
      <span>img</span>
      <h3 className="pl-2 font-semibold text-base xl:text-lg mt-5 group-hover:text-[#d1fe69] group-hover:before:bg-[#d1fe69] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:h-full before:w-[3px] before:bg-[#30b0b9] ">
        Closing Experience
      </h3>
      <description className=" desc ">
        <p className="group-hover:text-white">
          {" "}
          Schedule signing appointment View closing documents Send and receive
          closing funds
        </p>
      </description>
    </div>
  );
};

export default Card;
