import SignupButton from "@/components/CommonLayouts/SignupButton";
import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import { Check } from "lucide-react";
import React from "react";
import CustomerReview from "./CustomerReview";
import Header from "./Header";

const Banner = () => {
  return (
    <section className="min-h-[70vh] md:min-h-[80vh] lg:min-h-[70vh] xl:min-h-screen bg-[#23969d] flex flex-col xl:block items-center md:items-start">
      <Header />
      <div className=" container">
        <div className=" space-y-10 mr-0 md:mr-3 lg:mr-4 py-0 lg:py-10 xl:py-14 ">
          <TitleWithDesc
            ParentClass={"text-left"}
            headerClass={
              " flex gap-y-0 md:gap-y-1 lg:gap-y-2 flex-col banner-title "
            }
            headingLevel="h1"
            titles={[
              {
                title: "Software Consulting and",
                className:
                  "!mb-0 md:!mb-2 text-white section-title banner-title",
                stacktitle: false,
              },
              {
                title: "Development ",
                className: "text-[#d1fe67]",
                stacktitle: true,
              },
            ]}
            desc={
              "Our Software Consulting Services and Software Development can help you succeed in a constantly evolving market. We help you stay ahead of industry trends and achieve market dominance."
            }
            descClass={
              "w-full sm:w-[70%]  lg:w-[40%] inline-block !text-white !font-normal mt-2 sm:mt-3 md:mt-4 lg:mt-5"
            }
          />
        </div>
        <div className=" w-full sm:w-[400px] xl:w-[450px] pt-4 md:pt-6 lg:pt-2">
          <SignupButton text={"Talk To Our Expert"} />
          <div className="flex items-center gap-x-2 pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8">
            <span className="bg-[#000] rounded-full p-1">
              <Check color="#bce858" size={12} strokeWidth="4px" />
            </span>
            <p className=" desc !text-[#d1fe67]">
              Meet our experts with free 30 minutes cousultation
            </p>
          </div>
        </div>
        <div className="pt-5 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12">
          <CustomerReview />
        </div>
      </div>
    </section>
  );
};

export default Banner;
