"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StackedCards } from "@/components/StackedCards";

// Data abstraction: cleaner, scalable structure
const serviceData = {
  "Software Development": {
    title: "Software Development",
    description:
      "We deliver reliable and future-focused software development services for businesses and startups. Use our technical skills to craft custom software that perfectly fits your business goals.",
    points: [
      {
        heading: "Custom Software Development",
        text: "Advance your digital journey with custom-built software designed to meet your specific needs and deliver the results you aim for.",
      },
      {
        heading: "Software Development Outsourcing",
        text: "Explore new opportunities by outsourcing your software projects to our skilled global team, accelerating delivery and overcoming complex challenges.",
      },
      {
        heading: "Enterprise Software Development",
        text: "Enterprise Boost your business performance and streamline operations with enterprise-grade software. From integrating APIs to modernizing old systems, we help you operate more securely, transparently, and successfully on the global stage.",
      },
      {
        heading: "Software Product Development",
        text: "Turn your product ideas into reality with our full-cycle development services. We use agile methods and the right tools to help you build innovative, market-ready software that sets you apart from the competition.",
      },
      {
        heading: "Software Consulting Services",
        text: "As a leading IT consulting company, we provide expert guidance to businesses of all sizes. Our cost-effective solutions help you achieve both short-term and long-term goals. Our dedicated team optimizes your business operations by strategically guiding your digital projects.",
      },
    ],
  },

  "IT Consulting": {
    title: "IT Consulting",
    description:
      "As a leading IT consulting company, we provide expert guidance to businesses of all sizes. Our cost-effective solutions help you achieve both short-term and long-term goals. Our dedicated team optimizes your business operations by strategically guiding your digital projects.",
    points: [
      {
        heading: "IT Strategy Consulting",
        text: "We help you make the most of your IT systems and stay ahead in the digital world with advice from our experienced tech experts.",
      },
      {
        heading: "IT Assessment",
        text: "We review and improve your IT setup to boost innovation, performance, and set your business up for success.",
      },
      {
        heading: "IT Project & Program Management",
        text: "We manage your IT projects from start to finish, ensuring they are completed quickly, efficiently, and with excellent results.",
      },
      {
        heading: "IT Infrastructure Management",
        text: "We take care of your IT systems to improve how your business runs and keep everything working at its best.",
      },
      {
        heading: "IT Outsourcing",
        text: "We provide expert IT services so you can focus on your core business, stay competitive, and increase efficiency.",
      },
    ],
  },

  "Web Development": {
    title: "Web Development",
    description:
      "FixyAds is a leading Web Development Company that provides full-cycle web development solutions for clients ranging from startups to enterprises across various industries including eCommerce, Retail, Transportation, Logistics, Healthcare, and Finance. We provide end-to-end web development services, from design to development and ongoing support.",
    points: [
      {
        heading: "Custom Web Development",
        text: "We build custom, responsive websites that improve your business operations and strengthen your online presence.",
      },
      {
        heading: "Web UI/UX Development",
        text: "We design websites that look great, are easy to use, and provide smooth, enjoyable experiences for your customers helping increase conversions.",
      },
      {
        heading: "Web App Development",
        text: "We create interactive, user-friendly web applications tailored to your needs, helping your business work better and succeed online.",
      },
      {
        heading: "CMS Development",
        text: "We set up content management systems (CMS) that let you easily update and manage your website, giving you full control over your online content.",
      },
      {
        heading: "E-commerce Web Development",
        text: "We design custom e-commerce websites that attract more customers and boost sales, combining smart technology with intuitive design.",
      },
      {
        heading: "Mobile App Development",
        text: "As a top mobile app development company, we use leading technologies like Flutter, Kotlin, Swift, and React Native to build high-quality, secure, and engaging mobile apps that meet your specific business needs. Whether you need a new app, customizations, or innovative enhancements, we have a talented team to deliver.",
      },
      {
        heading: "Android App",
        text: "We design high-quality Android apps that combine useful features with great design. Our Android apps help your brand connect with more users, improve customer engagement, and grow your business in today’s digital world.",
      },
      {
        heading: "iOS App",
        text: "We create iOS apps that are both innovative and reliable. By understanding your business goals, we deliver iOS solutions that make your brand stand out, improve customer satisfaction, and give you a strong presence in the competitive app market.",
      },
      {
        heading: "Native Mobile App",
        text: "We develop native mobile apps that run directly on Android or iOS platforms. These apps offer the best speed, performance, and access to device features, helping your business deliver top-quality service and expand to new markets.",
      },
      {
        heading: "Cross-Platform App",
        text: "We build cross-platform apps that work on both Android and iOS using a single codebase. This helps you save time and costs while reaching a wider audience. Our cross-platform solutions ensure your app runs smoothly on all devices and helps grow your business.",
      },
      {
        heading: "Desktop App Development",
        text: "At FixyAds, we develop custom desktop applications tailored to your business needs. With our experience and the latest tools, we deliver powerful and scalable desktop solutions that improve business operations, increase efficiency, and support long-term success.",
      },
    ],
  },

  "Mobile & Desktop Apps": {
    title: "Mobile & Desktop App Development",
    description:
      "As a top mobile app development company, we use leading technologies like Flutter, Kotlin, Swift, and React Native to build high-quality, secure, and engaging mobile apps that meet your specific business needs. Whether you need a new app, customizations, or innovative enhancements, we have a talented team to deliver.",
    points: [
      {
        heading: "Android App",
        text: "We design high-quality Android apps that combine useful features with great design. Our Android apps help your brand connect with more users, improve customer engagement, and grow your business in today’s digital world.",
      },
      {
        heading: "iOS App",
        text: "We create iOS apps that are both innovative and reliable. By understanding your business goals, we deliver iOS solutions that make your brand stand out, improve customer satisfaction, and give you a strong presence in the competitive app market.",
      },
      {
        heading: "Native Mobile App",
        text: "We develop native mobile apps that run directly on Android or iOS platforms. These apps offer the best speed, performance, and access to device features, helping your business deliver top-quality service and expand to new markets.",
      },
      {
        heading: "Cross-Platform App",
        text: "We build cross-platform apps that work on both Android and iOS using a single codebase. This helps you save time and costs while reaching a wider audience. Our cross-platform solutions ensure your app runs smoothly on all devices and helps grow your business.",
      },
      {
        heading: "Desktop App Development",
        text: "At FixyAds, we develop custom desktop applications tailored to your business needs. With our experience and the latest tools, we deliver powerful and scalable desktop solutions that improve business operations, increase efficiency, and support long-term success.",
      },
    ],
  },

  "Digital Marketing": {
    title: "Digital Marketing Services",
    description:
      "FixyAds helps you scale online visibility and conversions using data-driven digital marketing strategies.",
    points: [
      {
        heading: "Search Engine Optimization (SEO)",
        text: "Grow quickly by using SEO strategies that bring more leads and support your business growth.",
      },
      {
        heading: "Search Engine Marketing (SEM)",
        text: "Stay ahead in the competitive digital space with SEM campaigns that place your brand at the top of search results.",
      },
      {
        heading: "Pay Per Click (PPC)",
        text: "Boost your business and profits with PPC ads that target the right audience, raise brand awareness, and create new growth opportunities.",
      },
      {
        heading: "App Store Optimization (ASO)",
        text: "Make your mobile apps easier to find and fix any app store listing issues to attract more users.",
      },
      {
        heading: "Online Reputation Management (ORM)",
        text: "Strengthen your brand by managing your online reputation effectively and gaining useful business insights.",
      },
      {
        heading: "Email Marketing",
        text: "Connect directly with your audience through personalized email campaigns that build loyalty, promote your products, and drive sales.",
      },
    ],
  },

  "Blockchain Development ": {
    title: "Blockchain Development",
    description:
      "FixyAds is a leading blockchain development company with years of experience delivering innovative blockchain solutions to businesses across diverse industries. We partner with your business idea to address their challenges and unlock the potential of blockchain technology.",
    points: [
      {
        heading: "Cryptocurrency Exchange Development",
        text: "We at FixyAds help businesses develop robust cryptocurrency trading platforms that allow users to buy, sell, and trade various digital assets. Our services cover the entire development lifecycle, from design and development to successful launch. These platforms offer valuable investment opportunities within the expanding cryptocurrency market.",
      },
      {
        heading: "Smart Contract Development",
        text: "FixyAds is a leading smart contract development company specializing in creating custom solutions for your specific business needs. Our team of expert developers builds high-quality smart contracts with diverse functionalities on various blockchain platforms, including Ethereum, TRON, EOS, Tezos, Binance Smart Chain, and Hyperledger.",
      },
      {
        heading: "NFT Development",
        text: "Brand helps you to develop an NFT marketplace and presents a significant revenue-generating opportunity for entrepreneurs. This process involves a step-by-step approach to creating a custom nft marketplace platform, from design and development to final deployment.",
      },
      {
        heading: "Crypto Token Development",
        text: " We specialize in developing crypto tokens that are secure, scalable, and flexible for a variety of use cases. We provide end-to-end token development services on your preferred token standards. Likewise, we use blockchain technology to create your token and transform your business.",
      },
      {
        heading: "DeFi Development",
        text: "Our DeFi development services allow for the building of decentralized financial applications. We create secure and efficient protocols, smart contracts, and platforms that are superior to traditional finance. Transform the future of finance with our skilled DeFi solutions and blockchain integration.",
      },
      {
        heading: "Web3 Development",
        text: "We can develop decentralized, user-centric, and futuristic Web3 applications. Our solutions integrate blockchain, smart contracts, and decentralized storage to empower users. We help your business to step into the decentralized web and reveal the true potential of your digital products.",
      },
    ],
  },
  "AI Development": {
    title: "AI Development",
    description:
      "We offer cutting-edge AI solutions for automating processes and improving decision-making. Our team creates AI systems that are specifically adapted to your company's demands. With our experienced AI development services, you can utilize AI's potential and drive innovation.",
    points: [
      {
        heading: "AI Product Development",
        text: " At FixyAds, we deliver next-generation AI product development using the latest generative AI tools. Our solutions use advanced technology for outstanding performance.",
      },
      {
        heading: "AI Consulting Services",
        text: "Our AI experts at FixyAds provide strategic consulting to help you integrate AI into your business operations and develop the best AI solutions for you.",
      },
      {
        heading: "AI Model Fine-tuning",
        text: "We optimize AI models by fine-tuning parameters and neural networks using techniques like layer freezing, adjusting learning rates, data augmentation, and regularization to achieve optimal results.",
      },
      {
        heading: "AI Model Integration",
        text: " Our full AI integration services improve your business processes by applying the latest AI advancements and techniques for maximum effectiveness",
      },
      {
        heading: "Custom AI Solutions",
        text: " We create AI applications, including machine learning, natural language processing, and computer vision, designed to meet your specific business needs.",
      },
    ],
  },
};

const ServiceSection = () => {
  const [selected, setSelected] = useState("Software Development");

  return (
    <section className="max-w-[1700px] bg-gray mx-auto">
      <div className="flex flex-col lg:flex-row md:max-h-[700px] md:min-h-[700px]">
        {/* Left Menu */}
        <div className="w-full lg:w-[500px] xl:w-[600px] bg-[#f95700] p-10 overflow-y-auto">
          <h2 className="section-title font-bold mb-6">
            Discover Our FixyAds Services – We Build Anything You Imagine.
          </h2>
          <ul className="space-y-4">
            {Object.keys(serviceData).map((service) => (
              <li
                key={service}
                onClick={() => setSelected(service)}
                className={`cursor-pointer py-2 px-3 font-medium rounded ${
                  selected === service ? " bg-orange" : ""
                }`}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[60%] p-10 overflow-auto flex flex-col title-color">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col"
            >
              <h2 className="text-xl xl:text-2xl font-bold mb-4">
                {serviceData[selected].title}
              </h2>
              <p className="mb-6 desc title-color">
                {serviceData[selected].description}
              </p>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
              <StackedCards servicess={serviceData[selected]} />
              {/* {serviceData[selected].points.map((point, index) => (
                <div
                  key={index}
                  className={`border p-4 rounded shadow-sm ${
                    index % 3 === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <h3 className="font-semibold text-sm sm:text-base xl:text-lg mb-2">
                    {point.heading}
                  </h3>
                  <p className="desc">{point.text}</p>
                </div>
              ))} */}
              {/* </div> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
