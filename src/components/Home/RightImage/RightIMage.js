import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React, { useEffect, useRef } from "react";
import LeftSection from "./LeftSection";
import RoundedButton from "@/components/CommonLayouts/RoundedButton";
import officeImg from "../../../assets/Images/section/office.jpg";
import { Check } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"; // ✅ CORRECT for Vite, CRA, and Next.js

gsap.registerPlugin(ScrollTrigger); // ✅ Register the plugin
const RightIMage = () => {
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Content: parallax from far left
      gsap.fromTo(
        leftContentRef.current,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 1.2, // 💡 gives a parallax "scroll tied" feel
          },
        }
      );

      // Right Image: parallax from far right
      gsap.fromTo(
        rightImageRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 1.5, // 💡 slightly different rate for layered depth
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      className=" container overflow-x-hidden bg-pink"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        <div class="main_image pt-[50%]" ref={rightImageRef}>
          <div
            class="bg_full"
            style={{ backgroundImage: `url(${officeImg.src})` }}
          ></div>
        </div>
        <div
          ref={leftContentRef}
          className="py-3 sm:py-5 md:py-10 space-y-3 md:space-y-5 lg:space-y-8 w-full lg:w-[80%] pl-0 lg:pl-16 xl:pl-20"
        >
          <TitleWithDesc
            ParentClass={"text-left"}
            headerClass={" flex gap-y-0 md:gap-y-1 lg:gap-y-2 flex-col"}
            titles={[
              {
                title: "We build solutions,",
                className: "blue-font !mb-0 md:!mb-2",
                stacktitle: false,
              },
              {
                title: "Not just code",
                className: "title-color",
                stacktitle: true,
              },
            ]}
            desc={
              "FixyAds specialize in delivering top-notch full-stack software solutions designed to captivate your users and drive business growth. "
            }
            descClass={"w-full md:w-[60%] lg:w-[80%] xl:w-[70%] inline-block "}
          />
          <div className=" mt-10 border-t border-gray-300 pt-8 pb-4 md:pb-7 lg:pb-10 xl:pb-16">
            <div className=" space-y-2 md:space-y-3 lg:space-y-4">
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">ERP Systems</p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">CRM Solutions </p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">Inventory Management</p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">Enterprise Applications</p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">Web Portals</p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">Ecommerce Platforms</p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">Elearning Software</p>
              </div>
              <div className=" flex gap-x-2 items-center">
                <span className="bg-[#bce858] rounded-full p-1">
                  <Check color="#000" size={16} />
                </span>
                <p className=" desc !text-black">Asset Management Software</p>
              </div>
            </div>
            <div className=" mt-5 md:mt-7 lg:mt-8 xl:mt-10">
              <RoundedButton text={"Learn More"} classes={"!px-20"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightIMage;
