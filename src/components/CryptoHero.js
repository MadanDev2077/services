import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"; // ✅ CORRECT for Vite, CRA, and Next.js
import RoundedButton from "./CommonLayouts/RoundedButton";
import officeImg from "../assets/Images/section/office.jpg";

gsap.registerPlugin(ScrollTrigger); // ✅ Register the plugin

const CryptoHero = () => {
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Content: parallax from far left
      gsap.fromTo(
        leftContentRef.current,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 1.2, // 💡 gives a parallax "scroll tied" feel
          },
        }
      );

      // Right Image: parallax from far right
      gsap.fromTo(
        rightImageRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 1.5, // 💡 slightly different rate for layered depth
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-pink">
      <div ref={containerRef} className="container  relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-300 rounded-3xl transform rotate-12 opacity-20"></div>
          <div className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-30"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-green-300 to-teal-300 rounded-2xl transform -rotate-12 opacity-25"></div>
        </div>

        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div
              ref={leftContentRef}
              className="space-y-8 z-10 relative title-color"
            >
              <div className="space-y-6">
                <h1 className="section-title font-bold  leading-tight">
                  Software Development Company
                </h1>
                <p className="desc !title-color leading-relaxed">
                  At FixyAds, we're a leading software development company
                  specializing in enterprise solutions. We go beyond
                  development, offering visionary software solutions tailored to
                  your unique business needs. Our team of skilled professionals
                  transforms possibilities into realities, delivering innovative
                  software that exceeds expectations. By embracing the latest
                  trends and best practices, we empower our clients to gain a
                  competitive edge in their respective markets.
                  <br />
                  <br />
                  Whether you need a simple single-page application or a complex
                  system to manage your entire workflow, our developers have the
                  experience and expertise to deliver tailored solutions that
                  meet your unique requirements. We are your one-stop team for
                  bringing your vision to reality.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div
              ref={rightImageRef}
              className="relative flex justify-center lg:justify-end pb-10 md:pb-0"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-pink-400 rounded-full opacity-20 blur-3xl scale-110"></div>

                  <div className="relative bg-white rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="main_image pt-[50%] md:pt-[60%] lg:pt-[80%] xl:pt-[100%]">
                      <div
                        className="bg_full rounded-2xl"
                        style={{ backgroundImage: `url(${officeImg.src})` }}
                      ></div>
                    </div>
                  </div>

                  {/* Floating Bitcoin icon */}
                  <div className="absolute -bottom-4 left-0 md:-left-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">₿</span>
                  </div>

                  {/* Floating Ethereum-like icon */}
                  <div className="absolute -top-4 right-0 md:-right-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                    <span className="text-lg font-bold text-white">Ξ</span>
                  </div>

                  {/* Geometric shapes */}
                  <div className="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute bottom-1/4 -right-8 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg transform rotate-45 opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoHero;
