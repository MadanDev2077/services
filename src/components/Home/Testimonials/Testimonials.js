"use client"; // if using Next.js 13+ App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Gary Beasley1",
    role: "CEO & Co-Founder Roofstock",
    message:
      "As the leading experts in single-family rentals, Roofstock has combined some of the smartest people in the business with robust data science.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPBeoS9wBWs5EoT59r4xNpfTStpvt9A4DUd25KOcwDpW4DeVr",
    companyLogo:
      "https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg",
  },
  {
    name: "Jane Doe2",
    role: "CTO @ Fintech Co",
    message:
      "Data-driven transformation that speaks for itself. We scaled effortlessly.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPBeoS9wBWs5EoT59r4xNpfTStpvt9A4DUd25KOcwDpW4DeVr",
    companyLogo:
      "https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg",
  },
  {
    name: "Jane Doe3",
    role: "CTO @ Fintech Co",
    message:
      "Data-driven transformation that speaks for itself. We scaled effortlessly.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPBeoS9wBWs5EoT59r4xNpfTStpvt9A4DUd25KOcwDpW4DeVr",
    companyLogo:
      "https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg",
  },
  {
    name: "Jane Doe3",
    role: "CTO @ Fintech Co",
    message:
      "Data-driven transformation that speaks for itself. We scaled effortlessly.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPBeoS9wBWs5EoT59r4xNpfTStpvt9A4DUd25KOcwDpW4DeVr",
    companyLogo:
      "https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="py-12 overflow-x-hidden">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        // slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        className="mySwiper !pb-20"
        breakpoints={{
          0: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
          1300: { slidesPerView: 3 },
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
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testi_parent transition-transform duration-300 ease-in-out bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center w-[85vw] max-w-[800px] mx-auto sm:w-[600px] md:w-[450px] lg:w-[500px] xl:w-[500px]">
              <div>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-50 h-50 rounded-xl object-cover card_img"
                />
              </div>
              <div className=" space-y-2 flex h-[200px] flex-col flex-1">
                <div className="space-y-2 flex-1">
                  <div className=" flex gap-x-2 items-center">
                    <img
                      src={t.companyLogo}
                      alt="Company Logo"
                      className="h-6"
                    />
                    <h3 className=" font-semibold ">rootstock</h3>
                  </div>
                  <p className="desc mb-4">{t.message}</p>
                </div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className=" desc">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
