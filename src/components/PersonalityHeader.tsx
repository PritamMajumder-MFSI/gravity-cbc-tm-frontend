import { FC } from "react";
import { useNavigate } from "react-router-dom";

const PersonalityTestHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mb-12 animate-fadeIn">
      <img
        onClick={() => {
          navigate("/");
        }}
        src="/logo.png"
        alt="Gravity CVG Logo"
        className="w-44 cursor-pointer h-auto mb-8 animate-float transition-transform duration-300 hover:scale-105 hover:rotate-3"
      />
      <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_5px_35px_rgba(255,255,255,0.5)]">
        Personality Test
      </h1>
      <div className="relative w-64 h-1 mb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shine" />
      </div>
      <p className="text-white/90 text-xl font-light italic tracking-wide animate-pulse-slow">
        Discover your true self...
      </p>
    </div>
  );
};
export default PersonalityTestHeader;
