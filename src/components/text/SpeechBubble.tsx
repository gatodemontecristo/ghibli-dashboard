import React from "react";
import clsx from "clsx";
import { FaStar } from "react-icons/fa";

interface SpeechBubbleProps {
  text: string;
  href: string;
  atext: string;
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
}

export const SpeechBubble = ({
  text,
  href,
  atext,
  position = "bottom",
  className,
}: SpeechBubbleProps) => {
  const tailPosition = {
    bottom: "after:top-full after:left-10 after:border-t-ghibli-white",
    top: "after:bottom-full after:left-5 after:border-b-ghibli-white",
    left: "after:right-full after:top-5 after:border-r-ghibli-white",
    right: "after:left-full after:top-5 after:border-l-ghibli-white",
  };

  return (
    <div
      className={clsx(
        " bg-ghibli-white absolute text-center text-ghibli-black p-2 rounded-full border-dashed border-3 border-ghibli-orange",
        "after:content-[''] after:absolute after:w-0 after:h-0 after:border-[10px] after:border-transparent",
        tailPosition[position],
        className
      )}
    >
      <p className="flex justify-center items-center text-sm gap-x-1 gap-y-0  flex-wrap">
        {text}
        <FaStar className="text-amber-400 inline" />
        <a
          href={href}
          className="text-ghibli-orange underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {atext}
        </a>
      </p>
    </div>
  );
};
