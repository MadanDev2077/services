import TitleWithImage from "@/components/CommonLayouts/TitleWithImage";
import Banner from "@/components/Home/Banner/Banner";
import Cards from "@/components/Home/CardsWithTitle/Cards";
import DevelopermentProcess from "@/components/Home/DevelopmentProcess/DevelopermentProcess";
import Footer from "@/components/Home/Footer/Footer";
import ImageCarousal from "@/components/Home/ImageCarousal/ImageCarousal";
import Industries from "@/components/Home/Industries/Industries";
import LeftImageSection from "@/components/Home/LeftImageSection/LeftImageSection";
import RightIMage from "@/components/Home/RightImage/RightIMage";
import ServiceSection from "@/components/Home/Services/Services";
import TechStack from "@/components/Home/TechStack/TechStack";
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
      <ServiceSection />
      <TitleWithImage
        titles={[{ title: "Software Development Company", className: "" }]}
        desc={
          <>
            At FixyAds, we're a leading software development company
            specializing in enterprise solutions. We go beyond development,
            offering visionary software solutions tailored to your unique
            business needs. Our team of skilled professionals transforms
            possibilities into realities, delivering innovative software that
            exceeds expectations. By embracing the latest trends and best
            practices, we empower our clients to gain a competitive edge in
            their respective markets.<br></br>
            <br></br> Whether you need a simple single-page application or a
            complex system to manage your entire workflow, our developers have
            the experience and expertise to deliver tailored solutions that meet
            your unique requirements. We are your one-stop team for bringing
            your vision to reality
          </>
        }
      />
      <LeftImageSection />
      {/* <ImageWithTitle /> */}
      <RightIMage />
      <Industries />
      <ImageCarousal />
      <TechStack />
      <DevelopermentProcess />
      <Footer />
    </main>
  );
}
