import React from "react";
import RoundedButton from "./RoundedButton";
import SignupButton from "./SignupButton";

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
          <SignupButton />
        </div>
      </div>
    </div>
  );
};

export default SignUpCard;
