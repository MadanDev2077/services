"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"; // ✅ CORRECT for Vite, CRA, and Next.js

import game from "../assets/Images/section/game.webp";
import web3 from "../assets/Images/section/webe.webp";
import enterprise from "../assets/Images/section/blockchain.webp";
import ai from "../assets/Images/section/artificialintelligence.webp";
import metaverse from "../assets/Images/section/metaverce.webp";
import crypto from "../assets/Images/section/laptop.webp";
import RoundedButton from "./CommonLayouts/RoundedButton";

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 80%",
          end: "bottom 20%", // Ensures full section is scrolled through
          toggleActions: "play reverse play reverse", // 👈 auto-reverse
          // markers: true, // ✅ uncomment for debugging scroll positions
        },
      });

      tl.fromTo(
        ".crypto-left",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      ).fromTo(
        ".crypto-right",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.6"
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="min-h-screen container justify-center overflow-x-hidden flex flex-col gap-x-10 md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-[#f3f2ea]"
    >
      {/* LEFT */}
      <div className="crypto-left md:w-[40%] w-full text-center md:text-left space-y-6">
        <p className="font-semibold">Digital Transformation Company</p>
        <h1 className="banner-title font-bold text-slate-900 leading-tight text-4xl md:text-5xl">
          {bannerData[activeIndex].title}
        </h1>
        <p className="text-gray-700 text-lg">
          {bannerData[activeIndex].description}
        </p>
        <RoundedButton text={"Learn More"} />
      </div>

      {/* RIGHT */}
      <div className="crypto-right hidden md:inline-block md:w-[60%] w-full mt-10 md:mt-0 relative">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          mousewheel={{
            forceToAxis: true,
            thresholdDelta: 50,
            releaseOnEdges: true,
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          modules={[Autoplay, Pagination, Mousewheel]}
          grabCursor={true}
          className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden z-10"
        >
          {bannerData.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain rounded-lg shadow"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination-custom absolute !w-auto !left-full transform flex flex-col gap-3 z-0 justify-center" />
      </div>
    </section>
  );
}
