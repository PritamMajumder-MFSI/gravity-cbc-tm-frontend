import { FC } from "react";

const MainHeader: FC = () => {
  return (
    <div className="flex flex-col items-center mb-12 animate-fadeIn">
      <img
        src="/logo.png"
        alt="Gravity CVG Logo"
        className="w-48 h-auto mb-8 animate-float transition-transform duration-300 hover:scale-105 hover:rotate-3"
      />

      <div className="relative w-64 h-1 mb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shine" />
      </div>
      <p className="text-white/90 text-xl font-light italic tracking-wide animate-pulse-slow">
        What would you like to do?
      </p>
    </div>
  );
};
export default MainHeader;
