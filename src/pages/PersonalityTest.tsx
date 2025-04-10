import { useState, FC } from "react";
import { GlobeAmericasIcon, FlagIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import PersonalityTestHeader from "../components/PersonalityHeader";

const PersonalityTest: FC = () => {
  const [, setSelectedLanguage] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 animate-[soft-pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center relative">
        <div className="max-w-4xl w-full text-center space-y-8">
          <PersonalityTestHeader />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button
              icon={GlobeAmericasIcon}
              onClick={() => setSelectedLanguage("Swahili")}
              text={"Swahili"}
              type={"blue"}
            />

            <div className="text-white/80 text-2xl font-bold animate-ping-slow">
              OR
            </div>

            <Button
              icon={FlagIcon}
              onClick={() => setSelectedLanguage("English")}
              text={"English"}
              type={"emerald"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
