"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const transformingData = [
  {
    id: 1,
    title: "Fintech",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Education",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Ecommerce",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Insurance",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Supply Chain",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Logistics",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Social Network",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const Industries = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false); // Track when DOM is ready

  useEffect(() => {
    setSwiperReady(true); // Trigger after refs are mounted
  }, []);

  return (
    <section className="container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">Transforming businesses</h2>
          <div className="flex justify-end gap-4">
            <button
              ref={prevRef}
              className="flex items-center text-white hover:text-gray-300 transition-colors group cursor-pointer"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="h-5 w-5 md:w-6 md:h-6 lg:h-7 lg:w-7 xl:w-8 xl:h-8  transition-transform group-hover:-translate-x-1 text-black" />
            </button>
            <button
              ref={nextRef}
              className="flex items-center text-white hover:text-gray-300 transition-colors group cursor-pointer"
              aria-label="Next Slide"
            >
              <ArrowRight className="h-5 w-5 md:w-6 md:h-6 lg:h-7 lg:w-7 xl:w-8 xl:h-8 transition-transform group-hover:translate-x-1 text-black" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Attach DOM nodes directly
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            loop={true}
            className="relative"
          >
            {transformingData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-transparent border-none overflow-hidden group cursor-pointer rounded-lg relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 sm:h-52 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-base md:text-xl font-medium mb-0 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-4 text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Industries;
