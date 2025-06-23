export const ServiceCard = (icon, title, description, delay = "0s") => {
  return (
    <div
      className="flex flex-col md:flex-row items-start gap-8 group animate-fade-in hover:scale-[1.02] transition-all duration-500"
      style={{ animationDelay: delay }}
    >
      {/* Icon Section */}
      <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
};
