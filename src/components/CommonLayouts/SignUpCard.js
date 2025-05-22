import React from "react";
import RoundedButton from "./RoundedButton";

const SignUpCard = () => {
  return (
    <div className=" container !py-0  !-mt-40 sm:!-mt-50  md:!-mt-[170px] lg:!-mt-[220px] xl:!-mt-[230px] relative z-10 ">
      <div className="bg-[#24a3aa] rounded-4xl py-5 sm:py-8 md:py-10 lg:py-14 px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row gap-y-5 md:gap-x-4 lg:gap-x-10">
        <div className="space-y-2 md:space-y-4 text-white font-bold text-3xl md:text-4xl xl:text-5xl w-full md:w-[50%]">
          <h2>Sign Up For</h2>
          <h2>Special Offer</h2>
        </div>
        <div className="space-y-2 md:space-y-4 flex-1 w-full md:w-[50%]">
          <p className=" text-white text-sm md:text-[15px] lg:text-base">
            Mattis ante vel malesuada vestibulum sed. Ac velit eget dis nunc
            vulputate felis.
          </p>
          <div className=" border border-[#ffffff80] rounded-4xl px-2 relative py-4 md:py-5 bg-[#ffffff2b]">
            <input
              type="text"
              className=" outline-0 placeholder:text-[#ffffff80] text-white px-2 text-[15px] w-full "
              placeholder="Enter Your Email"
            />
            <div className=" absolute top-1/2 right-2 -translate-y-1/2 h-[85%]  ">
              <RoundedButton
                classes="!bg-[#d1fe67] focus:!text-white !text-black hover:!text-white !px-7 font-semibold h-full button-hover-black flex items-center justicy-center"
                text={"Get Started"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
