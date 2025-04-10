import { FC } from "react";

type ButtonType = "emerald" | "blue" | "purple" | "rose";

interface ButtonProps {
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  type: ButtonType;
}

const Button: FC<ButtonProps> = ({ text, icon: Icon, onClick, type }) => {
  const typeStyles = {
    emerald: {
      gradient: "from-emerald-500/60 to-cyan-500/60",
      border: "border-emerald-400/30 group-hover:border-emerald-400/60",
      shadow: "hover:shadow-emerald-500/30",
    },
    blue: {
      gradient: "from-blue-500/60 to-indigo-500/60",
      border: "border-blue-400/30 group-hover:border-blue-400/60",
      shadow: "hover:shadow-blue-500/30",
    },
    purple: {
      gradient: "from-purple-500/60 to-fuchsia-500/60",
      border: "border-purple-400/30 group-hover:border-purple-400/60",
      shadow: "hover:shadow-purple-500/30",
    },
    rose: {
      gradient: "from-rose-500/60 to-pink-500/60",
      border: "border-rose-400/30 group-hover:border-rose-400/60",
      shadow: "hover:shadow-rose-500/30",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center justify-center gap-3
        px-10 py-5 rounded-2xl 
        transition-all duration-500 
        hover:scale-110 hover:shadow-lg
        active:scale-95
        text-xl font-semibold
        group
        text-gray-200
        overflow-hidden
        ${typeStyles[type].shadow}
      `}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-black/40 rounded-2xl" />
      <div
        className={`absolute inset-0 rounded-2xl opacity-50 transition-opacity duration-500
          bg-gradient-to-br ${typeStyles[type].gradient}
        `}
      />

      {/* Animated shine effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine" />
      </div>

      {/* Border animation */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500
          ${typeStyles[type].border}
        `}
      />

      {/* Content */}
      <Icon className="w-8 h-8 z-10 transition-transform group-hover:scale-125 group-hover:-rotate-12" />
      <span className="z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        {text}
      </span>
    </button>
  );
};

export default Button;
