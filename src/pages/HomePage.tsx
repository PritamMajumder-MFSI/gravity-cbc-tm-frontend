import { FC } from "react";
import { BriefcaseIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import MainHeader from "../components/MainHeader";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const handleCareerGuidance = () => {
    window.parent.postMessage(
      {
        type: "TM_BUTTON_CLICKED",
        courseId: 144,
        lessonId: 180,
      },
      "*"
    );
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 ">
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
          <MainHeader />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button
              icon={BriefcaseIcon}
              onClick={handleCareerGuidance}
              text={"Career Guidance"}
              type={"blue"}
            />

            <div className="text-white/80 text-2xl font-bold animate-ping-slow">
              OR
            </div>

            <Button
              icon={SparklesIcon}
              onClick={() => {
                navigate("/personality-test");
              }}
              text={"Personality Test"}
              type={"emerald"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
