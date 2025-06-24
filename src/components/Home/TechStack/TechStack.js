import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import languageImage from "../../../assets/Images/section/languages.webp";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Content: parallax from far left
      gsap.fromTo(
        leftContentRef.current,
        { x: 150, opacity: 0 },
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
        { x: 50, opacity: 0 },
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
      className="relative bg-white py-24 overflow-hidden container"
    >
      <div ref={rightImageRef} className="z-20 relative">
        {/* Title Section */}
        <TitleWithDesc
          ParentClass="text-center mb-0  z-20 relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh]"
          headerClass="flex md:gap-y-2 flex-col"
          titles={[
            {
              title: "Our Technology Stack",
              className: "section-title !mb-0",
              stacktitle: false,
            },
          ]}
          descClass="w-full md:w-[60%] lg:w-[40%] xl:w-[30%] inline-block text-center"
          desc="We integrate a diverse range of industry-leading technologies to create applications that are unique and future-ready."
        />
      </div>

      <div
        ref={leftContentRef}
        className="absolute inset-0 bg-white p-2 flex items-center justify-center"
      >
        <img
          src={languageImage.src}
          alt="tech-icon"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default TechStack;
