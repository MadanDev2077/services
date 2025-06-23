import { useEffect } from "react";

export default function EngagementModels() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: "/icons/gear-cycle.svg",
      title: "Project-Based Model",
      description:
        "Get a custom platform design along with any other services you might need (expert consultations, product design, smart contract audits, etc.) at a fixed price.",
      delay: "delay-200",
    },
    {
      icon: "/icons/team-network.svg",
      title: "Dedicated Development Team",
      description:
        "Get a dedicated team of blockchain developers working on your project according to our flexible time and materials payment scheme.",
      delay: "delay-500",
    },
  ];

  return (
    <section className="bg-[#f7f7f9] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center fade-in-up opacity-0 transition-all duration-700">
        <p className="text-gray-600 text-lg mb-2">Our most common</p>
        <h2 className="text-4xl md:text-6xl font-semibold text-[#1d1d1f] leading-tight">
          ENGAGEMENT
          <br className="md:hidden" /> MODELS
        </h2>
      </div>

      <div className="mt-16 space-y-10 max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`grid grid-cols-[auto_1fr] gap-6 fade-in-up opacity-0 transition-all duration-700 ${card.delay}`}
          >
            <img src={card.icon} alt={card.title} className="w-12 h-12 mt-1" />
            <div>
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
