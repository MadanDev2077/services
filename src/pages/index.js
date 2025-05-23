import SignUpCard from "@/components/CommonLayouts/SignUpCard";
import Banner from "@/components/Home/Banner/Banner";
import Cards from "@/components/Home/CardsWithTitle/Cards";
import Footer from "@/components/Home/Footer/Footer";
import ImageCarousal from "@/components/Home/ImageCarousal/ImageCarousal";
import ImageWithTitle from "@/components/Home/ImageWithTitle/ImageWithTitle";
import LeftImageSection from "@/components/Home/LeftImageSection/LeftImageSection";
import RightIMage from "@/components/Home/RightImage/RightIMage";
import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <main>
      <Banner />
      <Cards />
      <LeftImageSection />
      <ImageWithTitle />
      <RightIMage />
      <ImageCarousal />
      <Footer />
    </main>
  );
}
