export const ServiceCard = ({ heading, text, subtitle, items = [] }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-8 h-96 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2}`}
    >
      <div className="h-full flex flex-col">
        <h3 className="text-2xl font-bold title-color mb-4">{heading}</h3>

        {text && (
          <p className="text-gray-600 mb-6 text-sm leading-relaxed title-color">
            {text}
          </p>
        )}

        <div className="flex-1">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
