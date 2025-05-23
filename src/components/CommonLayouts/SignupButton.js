import React from "react";
import RoundedButton from "./RoundedButton";

const SignupButton = () => {
  return (
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
  );
};

export default SignupButton;
