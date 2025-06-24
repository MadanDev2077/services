import { useEffect, useRef } from "react";
import img1 from "../../assets/Images/section/Frame-28.svg";
import img2 from "../../assets/Images/section/Frame-29.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"; //

gsap.registerPlugin(ScrollTrigger);

export default function EngagementModels() {
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Content: parallax from top
      gsap.fromTo(
        leftContentRef.current,
        { y: -150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "top 40%",
            scrub: 1.2, // Tied to scroll for parallax effect
          },
        }
      );

      // Right Image: parallax from bottom
      gsap.fromTo(
        rightImageRef.current,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: 1.5, // Slightly delayed for natural visual flow
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  const cards = [
    {
      icon: img1,
      title: "Who Do We Help?",
      description:
        "FixyAds, our team of design, development, and strategy experts works with brands of all sizes to deliver a wide range of customized digital solutions.",
    },
    {
      icon: img2,
      title: "Startups",
      description:
        "Our services offer startups and individuals an online presence, helping them turn their vision into reality.",
    },
    {
      icon: img1,
      title: "SMEs",
      description:
        "Tailored promotional strategies for small and medium-sized enterprises aiming to reach new demographics, customer base, and drive sales.",
    },
    {
      icon: img2,
      title: "Corporates",
      description:
        "Services for established enterprises looking to optimize and scale their operations, positioning themselves as industry leaders.",
    },
  ];

  return (
    <section ref={containerRef} className="bg-[#f7f7f9]  container">
      <div ref={leftContentRef} className="max-w-6xl mx-auto ">
        <h2 className="text-4xl md:text-6xl font-light text-[#1d1d1f] leading-tight">
          ENGAGEMENT
          <br /> MODELS
        </h2>
      </div>

      <div
        ref={rightImageRef}
        className="mt-5 sm:mt-8 md:mt-12 lg:mt-14 xl:mt-16 space-y-3 md:space-y-6 lg:space-y-8 xl:space-y-10 max-w-4xl mx-auto "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`grid grid-cols-[auto_1fr] gap-3 md:gap-x-4 lg:gap-x-6 xl:gap-x-7 }`}
          >
            <img
              src={card.icon.src}
              alt={card.title}
              className="w-12 h-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-17 lg:w-17 xl:h-18 xl:w-18"
            />
            <div className="flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 xl:gap-y-6">
              <h3 className="text-lg font-bold uppercase text-[#1d1d1f] mb-2 tracking-wide">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
