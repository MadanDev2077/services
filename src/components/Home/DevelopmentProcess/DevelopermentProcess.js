"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import ProcessFlowSwiper from "@/components/ProcessFlowSwiper";

gsap.registerPlugin(ScrollTrigger);

const DevelopermentProcess = () => {
  const containerRef = useRef(null);

  const Data = [
    {
      title: "Requirement Analysis",
      desc: "We begin by fully understanding your business needs and objectives. Through in-depth discussions and assessments, we gather all the essential requirements to align with your vision.",
    },
    {
      title: "Planning and Strategy",
      desc: "Based on the analysis, we develop a detailed plan and strategy, defining project scope, timelines, and resource allocation to facilitate a streamlined development process.",
    },
    {
      title: "Design and Prototyping",
      desc: "Our design team creates user-centered designs and prototypes that help visualize the final product. This stage focuses on user experience and interface design, making the product intuitive and visually appealing.",
    },
    {
      title: "Development",
      desc: "Our developers use the latest technologies and industry best practices to create robust and scalable solutions. We follow agile methodologies, allowing flexibility and progress throughout the development lifecycle.",
    },
    {
      title: "Testing and Quality Assurance",
      desc: "Thorough testing is conducted to identify and resolve any issues. Our QA team verifies the product meets high-quality standards and performs optimally across various conditions.",
    },
    {
      title: "Deployment",
      desc: "Once the solution is tested and approved, we deploy it into your environment. The deployment process is handled with care to minimize disruptions to your operations.",
    },
    {
      title: "Maintenance and Support",
      desc: "After deployment, we provide continuous maintenance and support, keeping the solution up-to-date and running efficiently. We address any issues promptly and implement necessary updates as your needs evolve.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".dev-title",
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%", // starts later
            end: "top 20%", // ends later
            scrub: 2.5, // slower scrub for parallax effect
          },
        }
      );

      gsap.fromTo(
        ".dev-swiper",
        { y: 140, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 15%",
            scrub: 2.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-pink">
      <div ref={containerRef} className="container  overflow-hidden">
        {/* Title and Description */}
        <div className="dev-title">
          <TitleWithDesc
            ParentClass="text-center mb-2 sm:mb-4 md:mb-8 lg:mb-10 lg:mb-14 xl:mb-18"
            headerClass="flex md:gap-y-2 flex-col"
            titles={[
              {
                title: "Our Development Process",
                className: " !mb-0",
                stacktitle: false,
              },
            ]}
          />
        </div>

        {/* Swiper Section */}
        <div className="dev-swiper">
          <ProcessFlowSwiper portfolioItems={Data} />
        </div>
      </div>
    </section>
  );
};

export default DevelopermentProcess;
