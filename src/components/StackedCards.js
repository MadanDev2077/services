import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative, Autoplay } from "swiper/modules";
import { ServiceCard } from "./ServiceCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

export const StackedCards = ({ servicess }) => {
  console.log(servicess);

  const services = [
    {
      title: "Developer Tools",
      items: ["SDK", "API", "Online/offline IDE", "Plugins"],
    },
    {
      title: "Enterprise Solutions",
      subtitle:
        "Bring your company to the next level with innovative technologies and services.",
      items: [
        "Governance (voting) systems",
        "Blockchain based micropayment services",
        "Supply chains",
      ],
    },
    {
      title: "Blockchain Integration",
      subtitle:
        "Expand the possibilities of your business by integrating custom blockchain solutions.",
      items: [
        "Centralized exchange",
        "Blockchain-based micropayment services",
        "Decentralized marketplaces",
        "On-ramp blockchain integration",
      ],
    },
  ];

  let swiperInstance = null;

  const handleSwiperInit = (swiper) => {
    swiperInstance = swiper;
  };

  const stopAutoplay = () => {
    swiperInstance?.autoplay?.stop();
  };

  const startAutoplay = () => {
    swiperInstance?.autoplay?.start();
  };

  return (
    <div
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onFocus={stopAutoplay}
      onBlur={startAutoplay}
      className="relative max-w-full  sm:max-w-md mx-auto flex justify-center items-center flex-1 flex-col py-5 sm:py-10 md:py-0"
    >
      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom hidden sm:inline-block absolute -left-15 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-4 hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200">
        <ArrowLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button className="swiper-button-next-custom hidden sm:inline-block absolute -right-15 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-4 hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-200">
        <ArrowRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Swiper Container with Creative Stack Effect */}
      <Swiper
        modules={[Navigation, EffectCreative, Autoplay]}
        effect="creative"
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={handleSwiperInit}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -400],
            rotate: [0, 0, -10],
          },
          next: {
            shadow: true,
            translate: ["20%", 0, -400],
            rotate: [0, 0, 10],
          },
        }}
        className="w-full h-[450px]"
      >
        {servicess?.points?.map((service, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="w-full max-w-sm shadow-xl">
              <ServiceCard {...service} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Indicator Dots */}
      {/* <div className="flex justify-center mt-8 space-x-2">
        {services.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-500 transition-colors cursor-pointer"
          />
        ))}
      </div> */}
    </div>
  );
};
