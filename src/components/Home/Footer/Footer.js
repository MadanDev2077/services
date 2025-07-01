import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SignUpCard from "@/components/CommonLayouts/SignUpCard";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 2.5, // Slow and smooth scroll-tied effect
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <footer className="bg-[#181818] ">
      <div
        ref={containerRef}
        className="container !mt-30 sm:!mt-40  md:!mt-[120px] lg:!mt-[160px] xl:!mt-[170px] "
      >
        <SignUpCard />
        <div className="flex flex-col md:flex-row gap-y-5 sm:gap-y-10 gap-x-2 items-baseline py-10 md:py-14 lg:py-16 xl:py-20">
          <div className="space-y-2 md:space-y-3 xl:space-y-4 md:w-[30%]">
            <h3 className=" text-white font-semibold logo-font">Urit</h3>
            <p className=" desc">
              Libero bibendum lorem vulputate vel faucibus sit pretium sed a.
              Sed purus eros pretium egestas fermentum vitae commodo egestas
              tellus.
            </p>
            <div className="flex gap-x-4 md:gap-x-6 lg:gap-x-8 pt-1 md:pt-2 lg:pt-3 desc">
              <Link
                href={""}
                className=" hover:text-white transition-all duration-200"
              >
                {" "}
                <Instagram />
              </Link>
              <Link
                href={""}
                className=" hover:text-white transition-all duration-200"
              >
                <Twitter />
              </Link>
              <Link
                href={""}
                className=" hover:text-white transition-all duration-200"
              >
                {" "}
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-x-0 md:gap-x-[15%] w-full flex-col sm:flex-row gap-y-6">
            <div className=" space-y-2 md:space-y-3 lg:space-y-4 flex flex-col flex-1 md:max-w-fit">
              <h4 className=" font-semibold text-white text-[17px]">Company</h4>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                About Us
              </Link>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                Careers
              </Link>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                Customer Careers
              </Link>
            </div>
            <div className=" space-y-2 md:space-y-3 lg:space-y-4 flex flex-col flex-1 md:max-w-fit">
              <h4 className=" font-semibold text-white text-[17px]">
                Who We Help
              </h4>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                Lenders
              </Link>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                Investors
              </Link>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                Proptech
              </Link>
            </div>
            <div className=" space-y-2 md:space-y-3 lg:space-y-4 flex flex-col flex-1 md:max-w-fit">
              <h4 className=" font-semibold text-white text-[17px]">
                Resources
              </h4>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                API
              </Link>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                Blog
              </Link>
              <Link
                href="/test"
                className="desc hover:!text-white transition-all duration-200"
              >
                Reports
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex gap-x-4 flex-col md:flex-row desc pt-4 md:pt-8 lg:pt-10 !text-[15px] md:!text-[16px] lg:!text-[18px] xl:!text-[19px] items-center justify-between border-t-[1px] gap-y-2 md:gap-y-4">
          <div className=" flex flex-col sm:flex-row text-center sm:text-left gap-y-2 gap-x-3 md:gap-x-4 lg:gap-x-8 xl:gap-x-9 flex-1 w-full justify-between md:justify-start md:w-auto">
            <Link
              href={""}
              className="hover:!text-white transition-all duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href={""}
              className="hover:!text-white transition-all duration-200"
            >
              Terms & conditions
            </Link>
          </div>
          <div>@2025 All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
