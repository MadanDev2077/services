"use client"; // if using Next.js 13+ App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    title: "Scoping",
    desc: "We gather complete requirements, define an accurate scope, and prevent scope creep while safeguarding critical deliverables.",
  },
  {
    title: "Resource Planning",
    desc: "Our approach creates the right-sized team with the best-fit experts for each role, tailored to a fully outsourced cooperation model.",
  },
  {
    title: "Cost Estimation",
    desc: "With precise cost estimation principles, we optimize budgets and provide clear examples of calculations to help you plan confidently.",
  },
  {
    title: "Risk Management",
    desc: "By identifying potential risks early, we address challenges at every stage of the Software Development Life Cycle (SDLC).",
  },
  {
    title: "Management Request",
    desc: "Our structured process evaluates and implements feasible change requests, adapting without compromising project goals.",
  },
  {
    title: "Success Measurement",
    desc: "We use clear KPIs to measure cooperation health and assess joint success to align with your objectives.",
  },
  {
    title: "Project Reporting",
    desc: "Reports cover all stages of development, offering transparency and actionable insights.",
  },
  {
    title: "Collaboration",
    desc: "Communication is our priority. We use the best tools and practices to promote productive teamwork and smooth client interaction.",
  },
];

export default function Testimonials() {
  return (
    <div className="pb-2 sm:pb-3 md:pb-5 lg:pb-7 xl:pb-8 overflow-x-hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        // slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        className="mySwiper !pb-10 sm:!pb-14 md:!pb-16 lg:!pb-18 xl:!pb-20"
        breakpoints={{
          0: { slidesPerView: 1 },
          400: { slidesPerView: 2 },
          900: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
          1300: { slidesPerView: 7 },
        }}
      >
        {/* <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      ></Swiper> */}
        {testimonials.map((t, index) => (
          <SwiperSlide
            key={index}
            className="testimonial-slide select-none title-color"
          >
            <div className="testi_parent  transition-transform duration-300 ease-in-out bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center w-[85vw] max-w-[800px] mx-auto sm:w-[400px] md:w-[250px] lg:w-[300px]">
              <div className=" space-y-2 flex min-h-[90px] flex-col flex-1">
                <div className="space-y-2 flex-1">
                  <div className=" flex gap-x-2 items-center">
                    <h3 className=" font-semibold ">{t.title}</h3>
                  </div>
                  <p className="desc title-color mb-4">{t.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
