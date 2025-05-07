import { UnderlinedtitleProps } from "@/src/types/interfaces";
import clsx from "clsx";
import React from "react";

export const Underlinedtitle = ({
  title,
  className,
  color = "text-ghibli-white",
  underline = "bg-ghibli-white",
}: UnderlinedtitleProps) => {
  return (
    <div className={clsx("flex flex-col", className)}>
      <p className={clsx("text-xl font-bold", color)}>{title}</p>
      <div className={clsx(" w-[80px] h-[5px]", underline)}></div>
    </div>
  );
};
