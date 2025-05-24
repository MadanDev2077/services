import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";
import officeImg from "../../../assets/Images/section/office.jpg";
import { Backpack } from "lucide-react";
import RoundedButton from "@/components/CommonLayouts/RoundedButton";

const LeftImageSection = () => {
  return (
    <section className=" container space-y-6 md:space-y-8 lg:space-y-12 xl:space-y-16">
      <TitleWithDesc
        ParentClass={"text-center"}
        // title={"Built for scale & efficiency"}
        titles={[{ title: "Software Development Company", className: "" }]}
        desc={
          <>
            At FixyAds, we're a leading software development company
            specializing in enterprise solutions. We go beyond development,
            offering visionary software solutions tailored to your unique
            business needs. Our team of skilled professionals transforms
            possibilities into realities, delivering innovative software that
            exceeds expectations. By embracing the latest trends and best
            practices, we empower our clients to gain a competitive edge in
            their respective markets.<br></br> Whether you need a simple
            single-page application or a complex system to manage your entire
            workflow, our developers have the experience and expertise to
            deliver tailored solutions that meet your unique requirements. We
            are your one-stop team for bringing your vision to reality
          </>
        }
        descClass={"w-full md:w-[95%] lg:w-[80%] xl:w-[90%] inline-block"}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-2 md:gap-x-4">
        <div className=" py-3 sm:py-5 md:py-10 space-y-3 md:space-y-5 lg:space-y-8 w-full lg:w-[80%] pl-0 lg:pl-16 xl:pl-20">
          <div className="flex gap-x-1 md:gap-x-3 xl:gap-x-4 items-baseline  border-b-gray-200 border-b-2 pb-10">
            <div className="h-[20px]">
              <Backpack color="#99dadf" />
            </div>
            <div className=" flex flex-col gap-y-1">
              <h2 className="text-base md:text-lg xl:text-[21px] font-semibold">
                Who Do We Help?
              </h2>
              <p className=" desc">
                FixyAds, our team of design, development, and strategy experts
                works with brands of all sizes to deliver a wide range of
                customized digital solutions.
              </p>
              <div className=" mt-2 md:mt-3 xl:mt-4">
                <RoundedButton
                  text="Learn More"
                  classes={"!py-2 !text-[13px]"}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-1 md:gap-x-3 xl:gap-x-4 items-baseline  border-b-gray-200 border-b-2 pb-10">
            <div className="h-[20px]">
              <Backpack color="#99dadf" />
            </div>
            <div className=" flex flex-col gap-y-1">
              <h2 className="text-base md:text-lg xl:text-[21px] font-semibold">
                Startups
              </h2>
              <p className=" desc">
                Our services offer startups and individuals an online presence,
                helping them turn their vision into reality.
              </p>
            </div>
          </div>
          <div className="flex gap-x-1 md:gap-x-3 xl:gap-x-4 items-baseline">
            <div className="h-[20px]">
              <Backpack color="#99dadf" />
            </div>
            <div className=" flex flex-col gap-y-1">
              <h2 className="text-base md:text-lg xl:text-[21px] font-semibold">
                SMEs
              </h2>
              <p className=" desc">
                Tailored promotional strategies for small and medium-sized
                enterprises aiming to reach new demographics, customer base, and
                drive sales.
              </p>
            </div>
          </div>
          <div className="flex gap-x-1 md:gap-x-3 xl:gap-x-4 items-baseline">
            <div className="h-[20px]">
              <Backpack color="#99dadf" />
            </div>
            <div className=" flex flex-col gap-y-1">
              <h2 className="text-base md:text-lg xl:text-[21px] font-semibold">
                Corporates
              </h2>
              <p className=" desc">
                Services for established enterprises looking to optimize and
                scale their operations, positioning themselves as industry
                leaders.
              </p>
            </div>
          </div>
        </div>
        <div class="main_image pt-[50%] ">
          <div
            className="bg_full rounded-2xl"
            style={{ backgroundImage: `url(${officeImg.src})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default LeftImageSection;
