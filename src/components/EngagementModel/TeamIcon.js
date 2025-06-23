export const TeamIcon = () => {
  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central person */}
        <circle
          cx="32"
          cy="28"
          r="6"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M20 48 C20 40, 24 36, 32 36 C40 36, 44 40, 44 48"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
        />

        {/* Surrounding team members */}
        <circle
          cx="16"
          cy="20"
          r="4"
          stroke="#ef4444"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />
        <circle
          cx="48"
          cy="20"
          r="4"
          stroke="#ef4444"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.4s" }}
        />
        <circle
          cx="16"
          cy="44"
          r="4"
          stroke="#ef4444"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.6s" }}
        />
        <circle
          cx="48"
          cy="44"
          r="4"
          stroke="#ef4444"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Connecting lines */}
        <line
          x1="20"
          y1="22"
          x2="26"
          y2="26"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.4"
        />
        <line
          x1="44"
          y1="22"
          x2="38"
          y2="26"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.4"
        />
        <line
          x1="20"
          y1="42"
          x2="26"
          y2="38"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.4"
        />
        <line
          x1="44"
          y1="42"
          x2="38"
          y2="38"
          stroke="#ef4444"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Small connecting dots */}
        <circle cx="24" cy="24" r="1" fill="#ef4444" opacity="0.6" />
        <circle cx="40" cy="24" r="1" fill="#ef4444" opacity="0.6" />
        <circle cx="24" cy="40" r="1" fill="#ef4444" opacity="0.6" />
        <circle cx="40" cy="40" r="1" fill="#ef4444" opacity="0.6" />
      </svg>
    </div>
  );
};
