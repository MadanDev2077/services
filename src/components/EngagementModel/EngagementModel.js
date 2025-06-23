import img1 from "../../assets/Images/section/Frame-28.svg";
import img2 from "../../assets/Images/section/Frame-29.svg";

export default function EngagementModels() {
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
    <section className="bg-[#f7f7f9]  container">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl md:text-6xl font-light text-[#1d1d1f] leading-tight">
          ENGAGEMENT
          <br /> MODELS
        </h2>
      </div>

      <div className="mt-5 sm:mt-8 md:mt-12 lg:mt-14 xl:mt-16 space-y-3 md:space-y-6 lg:space-y-8 xl:space-y-10 max-w-4xl mx-auto ">
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
