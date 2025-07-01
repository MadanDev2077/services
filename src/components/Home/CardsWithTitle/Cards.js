"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TitlewithButton from "@/components/CommonLayouts/TitlewithButton";
import Card from "./Card";
import { Globe, Laptop } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top-to-bottom for title block
      gsap.fromTo(
        ".cards-title",
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      );

      // Bottom-to-top for the entire cards block
      gsap.fromTo(
        ".cards-grid",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 1.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-pink">
      <div ref={containerRef} className="container bg-pink">
        {/* Title Animation Block */}
        <div className="cards-title">
          <TitlewithButton
            text="Learn More"
            ParentClass="text-left"
            headerClass="flex flex-col w-full"
            descParentClass="!justify-start lg:!justify-end max-w-auto"
            titles={[
              {
                title: " We are Top",
                className: "blue-font !mb-0 md:!mb-2",
                stacktitle: false,
              },
              {
                title: " Software Development Company",
                className: "w-full md:w-[90%] lg:w-[90%] xl:w-[80%] ",
                stacktitle: true,
              },
            ]}
            desc="FixyAds, we don't just count numbers, we measure the impact of our client's success. We're proud to support businesses in the digital world, driven by a team of passionate individuals behind every achievement."
          />
        </div>

        {/* Grid Animation Block */}
        <div className="cards-grid pt-10 sm:pt-12 md:pt-14 lg:pt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 gap-x-10">
          <Card
            Icon={
              <Laptop
                size={32}
                className="text-[#38b7c5] group-hover:text-[#d1fe69]"
              />
            }
            name="Techy Dev"
            count={60}
          />
          <Card
            Icon={
              <Globe
                size={32}
                className="text-[#38b7c5] group-hover:text-[#d1fe69]"
              />
            }
            name="Our Passionate Teams"
            count={15}
          />
          <Card
            Icon={
              <Globe
                size={32}
                className="text-[#38b7c5] group-hover:text-[#d1fe69]"
              />
            }
            name="Countries"
            count={25}
          />
          <Card
            Icon={
              <Globe
                size={32}
                className="text-[#38b7c5] group-hover:text-[#d1fe69]"
              />
            }
            name="Happy Clients"
            count={60}
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
