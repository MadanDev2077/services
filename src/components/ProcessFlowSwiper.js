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

const ProcessFlowSwiper = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Creative Design",
      subtitle: "Visual Identity",
      description:
        "Crafting beautiful visual experiences with modern aesthetics",
      icon: Palette,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      color: "text-purple-100",
    },
    {
      id: 2,
      title: "Web Development",
      subtitle: "Full Stack",
      description: "Building responsive and interactive web applications",
      icon: Code,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      color: "text-blue-100",
    },
    {
      id: 3,
      title: "Photography",
      subtitle: "Visual Story",
      description: "Capturing moments and telling stories through lens",
      icon: Camera,
      gradient: "from-green-500 via-emerald-500 to-cyan-500",
      color: "text-green-100",
    },
    {
      id: 4,
      title: "Music Production",
      subtitle: "Audio Design",
      description: "Creating immersive soundscapes and memorable beats",
      icon: Music,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      color: "text-orange-100",
    },
    {
      id: 5,
      title: "Innovation",
      subtitle: "Tech Solutions",
      description: "Pushing boundaries with cutting-edge technology",
      icon: Zap,
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      color: "text-yellow-100",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      content:
        "Absolutely stunning work! The attention to detail and creative vision exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Tech Lead",
      content:
        "Professional, innovative, and delivered exactly what we needed. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Brand Manager",
      content:
        "The design perfectly captured our brand essence. Incredible talent and professionalism.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 container">
      {/* Hero Section with Main Swiper */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
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
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          className="h-full hero-swiper"
        >
          {portfolioItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <SwiperSlide
                key={item.id}
                className="max-w-sm md:max-w-md lg:max-w-lg"
              >
                <div
                  className={`relative h-full bg-gradient-to-br ${item.gradient} rounded-2xl shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                  <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent
                        className={`w-16 h-16 ${item.color} drop-shadow-lg`}
                      />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-lg text-white/80 mb-4 font-medium">
                      {item.subtitle}
                    </p>

                    <p className="text-white/70 mb-8 leading-relaxed max-w-xs">
                      {item.description}
                    </p>

                    <button className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 group">
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What People Say
            </h2>
            <p className="text-xl text-white/70">
              Trusted by creative professionals worldwide
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-white/90 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-white/70">Excellence in every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Passionate", desc: "We love what we do" },
              { icon: Zap, title: "Fast", desc: "Quick turnaround times" },
              { icon: Star, title: "Quality", desc: "Premium results always" },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessFlowSwiper;
