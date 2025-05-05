import { TailwindFontSize } from "@/src/helpers";
import clsx from "clsx";
import React from "react";

interface CircleRatingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  fontsize?: TailwindFontSize;
}

export const CircleRating: React.FC<CircleRatingProps> = ({
  score,
  size = 100,
  strokeWidth = 10,
  fontsize = "text-lg",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = () => {
    // if (score >= 75) return "stroke-ghibli-white";
    // if (score >= 50) return "stroke-yellow-400";
    // return "stroke-red-500";
    return "stroke-ghibli-white";
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="stroke-transparent"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`transition-all duration-300 ${getColor()}`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={clsx("text-white font-bold", fontsize)}>{score}</span>
      </div>
    </div>
  );
};
