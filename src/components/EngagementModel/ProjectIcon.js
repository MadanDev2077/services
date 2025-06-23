export const ProjectIcon = () => {
  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central gear */}
        <circle
          cx="32"
          cy="32"
          r="8"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
          className="animate-spin"
          style={{ animationDuration: "8s" }}
        />

        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
          <rect
            key={index}
            x="30"
            y="16"
            width="4"
            height="6"
            fill="#ef4444"
            transform={`rotate(${rotation} 32 32)`}
            className="animate-pulse"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}

        {/* Surrounding squares */}
        <rect
          x="12"
          y="12"
          width="8"
          height="8"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="44"
          y="12"
          width="8"
          height="8"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="12"
          y="44"
          width="8"
          height="8"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="44"
          y="44"
          width="8"
          height="8"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
        />

        {/* Connecting lines */}
        <line
          x1="20"
          y1="16"
          x2="24"
          y2="24"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="44"
          y1="20"
          x2="40"
          y2="24"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="20"
          y1="48"
          x2="24"
          y2="40"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="44"
          y1="48"
          x2="40"
          y2="40"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};
