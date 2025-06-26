"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SignupButton from "./SignupButton";

gsap.registerPlugin(ScrollTrigger);

const SignUpCard = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the entire container from top to bottom
      gsap.fromTo(
        containerRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: 2.5, // smooth and slow parallax feel
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="container !py-0 !-mt-40 sm:!-mt-50 md:!-mt-[170px] lg:!-mt-[220px] xl:!-mt-[230px] relative z-10"
    >
      <div className="bg-[#f95700] rounded-4xl py-5 sm:py-8 md:py-10 lg:py-14 px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row gap-y-5 md:gap-x-4 lg:gap-x-10">
        <div className="space-y-2 md:space-y-4 text-white font-bold text-3xl md:text-4xl xl:text-5xl w-full md:w-[50%]">
          <h2>Sign Up For</h2>
          <h2>Special Offer</h2>
        </div>
        <div className="space-y-2 md:space-y-4 flex-1 w-full md:w-[50%]">
          <p className="text-white text-sm md:text-[15px] lg:text-base">
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
