"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const titleRef = useRef(null);
  const slideRefs = useRef([]);
  const containerRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  useEffect(() => {
    if (!swiperReady) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ScrollTrigger.refresh(); // ✅ Force refresh when component re-enters view
          }
        });
      },
      { threshold: 0.3 } // Adjust if needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Title animation
        gsap.fromTo(
          titleRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "top 30%",
              // toggleActions: "play none none reverse",
              scrub: 1.2, // 💡 gives a parallax "scroll tied" feel
            },
          }
        );

        // Slides animation
        gsap.fromTo(
          slideRefs.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "top 30%",
              // toggleActions: "play none none reverse",
              scrub: 1.2, // 💡 gives a parallax "scroll tied" feel
            },
          }
        );
      }, containerRef);

      ScrollTrigger.refresh(); // ✅ Initial refresh

      return () => ctx.revert();
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [swiperReady]);

  return (
    <section ref={containerRef} className="container bg-orange">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 ref={titleRef} className="section-title">
          Transforming businesses
        </h2>
        <div className="flex justify-end gap-4">
          <button
            ref={prevRef}
            className="group cursor-pointer"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="w-6 h-6 text-black group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            ref={nextRef}
            className="group cursor-pointer"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
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
          {transformingData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                ref={(el) => {
                  if (el) slideRefs.current[index] = el;
                }}
                className="group overflow-hidden cursor-pointer rounded-lg relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Industries;
