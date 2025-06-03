import TitleWithDesc from "@/components/CommonLayouts/TitleWithDesc";
import React from "react";

const DevelopermentProcess = () => {
  return (
    <section className="container">
      {/* Title and Description */}
      <TitleWithDesc
        ParentClass={
          "text-center mb-2 sm:mb-4 md:mb-8 lg:mb-10 lg:mb-14 xl:mb-18"
        }
        headerClass={"flex md:gap-y-2 flex-col"}
        titles={[
          {
            title: "Our Development Process",
            className: "section-title !mb-0",
            stacktitle: false,
          },
        ]}
      />

      {/* Stepper Arrows */}
      <div className="flex flex-col md:flex-row  flex-wrap gap-x-1 gap-y-3 sm:gap-y-6 md:gap-y-8 lg:gap-y-10 justify-around">
        {[
          {
            title: "Requirement Analysis",
            color: "bg-indigo-500",
            desc: "We begin by fully understanding your business needs and objectives. Through in-depth discussions and assessments, we gather all the essential requirements to align with your vision.",
          },
          {
            title: "Planning and Strategy",
            color: "bg-indigo-600",
            desc: "Based on the analysis, we develop a detailed plan and strategy, defining project scope, timelines, and resource allocation to facilitate a streamlined development process.",
          },
          {
            title: "Design and Prototyping",
            color: "bg-indigo-700",
            desc: "Our design team creates user-centered designs and prototypes that help visualize the final product. This stage focuses on user experience and interface design, making the product intuitive and visually appealing.",
          },
          {
            title: "Development",
            color: "bg-indigo-800",
            desc: "Our developers use the latest technologies and industry best practices to create robust and scalable solutions. We follow agile methodologies, allowing flexibility and progress throughout the development lifecycle.",
          },
          {
            title: "Testing and Quality Assurance",
            color: "bg-indigo-900",
            desc: "Thorough testing is conducted to identify and resolve any issues. Our QA team verifies the product meets high-quality standards and performs optimally across various conditions.",
          },
          {
            title: "Deployment",
            color: "bg-blue-900",
            desc: "Once the solution is tested and approved, we deploy it into your environment. The deployment process is handled with care to minimize disruptions to your operations.",
          },
          {
            title: "Maintenance and Support",
            color: "bg-blue-950",
            desc: "After deployment, we provide continuous maintenance and support, keeping the solution up-to-date and running efficiently. We address any issues promptly and implement necessary updates as your needs evolve.",
          },
        ].map((item, idx, arr) => (
          <div
            key={idx}
            className={`relative text-white space-y-2 md:space-y-3 ${item.color} px-6 py-6 rounded-md text-center w-full md:w-[40%] lg:w-[30%] xl:w-[18%] flex flex-col`}
            style={{
              clipPath:
                idx === arr.length - 1
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 15px 50%)"
                  : "polygon(0 0, 100% 0, 100% 50%, calc(100% - 15px) 50%, 100% 50%, 100% 100%, 0 100%, 15px 50%)",
            }}
          >
            <h3 className="text-base sm:text-lg md:text-xl mt-2 min-h-5 sm:min-h-10 md:min-h-20">
              {item.title}
            </h3>
            <p className=" desc !text-white ">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopermentProcess;
