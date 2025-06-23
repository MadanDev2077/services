import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  EffectFade,
} from "swiper/modules";
import {
  ArrowRight,
  Star,
  Heart,
  Camera,
  Music,
  Palette,
  Code,
  Zap,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";

const ProcessFlowSwiper = ({ portfolioItems }) => {
  // const portfolioItems = [
  //   {
  //     id: 1,
  //     title: "Creative Design",
  //     subtitle: "Visual Identity",
  //     description:
  //       "Crafting beautiful visual experiences with modern aesthetics",
  //     icon: Palette,
  //     color: "text-purple-100",
  //   },
  //   {
  //     id: 2,
  //     title: "Web Development",
  //     subtitle: "Full Stack",
  //     description: "Building responsive and interactive web applications",
  //     icon: Code,
  //     color: "text-blue-100",
  //   },
  //   {
  //     id: 3,
  //     title: "Photography",
  //     subtitle: "Visual Story",
  //     description: "Capturing moments and telling stories through lens",
  //     icon: Camera,
  //     color: "text-green-100",
  //   },
  //   {
  //     id: 4,
  //     title: "Music Production",
  //     subtitle: "Audio Design",
  //     description: "Creating immersive soundscapes and memorable beats",
  //     icon: Music,
  //     color: "text-orange-100",
  //   },
  //   {
  //     id: 5,
  //     title: "Innovation",
  //     subtitle: "Tech Solutions",
  //     description: "Pushing boundaries with cutting-edge technology",
  //     icon: Zap,
  //     color: "text-yellow-100",
  //   },
  // ];

  return (
    <div className="sm:-mx-5 lg:-mx-9 xl:-mx-14">
      {/* Hero Section with Main Swiper */}
      <section className="relative  overflow-hidden mydev py-10">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div> */}

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="h-full hero-swiper"
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide
              ide
              key={index}
              className="max-w-sm md:max-w-md lg:max-w-lg select-none"
            >
              <div
                className={`relative h-full rounded-2xl shadow-2xl overflow-hidden group transition-all duration-500 border-[1px]`}
              >
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center rounded-2xl transition-all duration-500">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ">
                    {item.title}
                  </h3>

                  <p className=" desc mb-8 leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>

                {/* Animated background elements */}
                {/* <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div> */}
                {/* <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default ProcessFlowSwiper;
