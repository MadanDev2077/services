"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import game from "../assets/Images/section/game.webp";
import web3 from "../assets/Images/section/webe.webp";
import enterprise from "../assets/Images/section/blockchain.webp";
import ai from "../assets/Images/section/artificialintelligence.webp";
import metaverse from "../assets/Images/section/metaverce.webp";
import crypto from "../assets/Images/section/laptop.webp";
import RoundedButton from "./CommonLayouts/RoundedButton";
import Header from "./Home/Banner/Header";

gsap.registerPlugin(ScrollTrigger);

const bannerData = [
  {
    title: "Game Development",
    description:
      "Get digitally transformed with Bitdeal. We modernize and automate industries, enterprises, and Businesses with modern digital transformation technology solutions like blockchain, AI, Metaverse, Crypto, NFT, and Web3.",
    image: game.src,
  },
  {
    title: "Web 3.0 Platforms",
    description:
      "Leverage our expertise to deploy high-performance decentralized exchanges (DEX) with smart contract security and scalable tokenomics.",
    image: web3.src,
  },
  {
    title: "Enterprice Solutions",
    description:
      "Launch fully customizable NFT platforms with integrated wallet, minting features, and cross-chain support.",
    image: enterprise.src,
  },
  {
    title: "AI Solutions",
    description:
      "Launch fully customizable NFT platforms with integrated wallet, minting features, and cross-chain support.",
    image: ai.src,
  },
  {
    title: "Metaverse Solutions",
    description:
      "Launch fully customizable NFT platforms with integrated wallet, minting features, and cross-chain support.",
    image: metaverse.src,
  },
  {
    title: "Crypto Exchange Solutions",
    description:
      "Launch fully customizable NFT platforms with integrated wallet, minting features, and cross-chain support.",
    image: crypto.src,
  },
];

export default function CryptoBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const resetToInitial = () => {
        gsap.set(".crypto-left", { x: -100, opacity: 0 });
        gsap.set(".crypto-right", { x: 100, opacity: 0 });
      };

      const animateIn = () => {
        gsap.to(".crypto-left", {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        });
        gsap.to(".crypto-right", {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        });
      };

      resetToInitial();

      ScrollTrigger.create({
        trigger: bannerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: animateIn,
        onEnterBack: animateIn,
        onLeave: resetToInitial,
        onLeaveBack: resetToInitial,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gray">
      <div
        ref={bannerRef}
        className="min-h-screen container !pt-0 justify-center md:justify-between overflow-x-hidden flex flex-col gap-x-10 md:flex-row items-center  px-6 md:px-16 py-12"
      >
        <Header />
        {/* LEFT */}
        <div className="crypto-left md:w-[40%] w-full text-center md:text-left space-y-6">
          <p className="font-semibold title-color">
            Digital Transformation Company
          </p>
          <h1 className=" font-bold title-color leading-tight text-4xl md:text-5xl">
            {bannerData[activeIndex].title}
          </h1>
          <p className="text-lg title-color">
            {bannerData[activeIndex].description}
          </p>
          <RoundedButton text={"Learn More"} />
        </div>

        {/* RIGHT */}
        <div className="crypto-right hidden md:flex md:flex-col md:w-[60%] w-full mt-10 md:mt-0 relative">
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            modules={[Autoplay, Pagination]}
            grabCursor={true}
            className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden z-10"
          >
            {bannerData.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots Below Swiper */}
          <div className="swiper-pagination-custom mt-4 self-center !w-auto flex gap-2 z-0 justify-center" />
        </div>
      </div>
    </section>
  );
}
