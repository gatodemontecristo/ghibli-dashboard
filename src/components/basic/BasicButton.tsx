"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface BasicButtonProps {
  text: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}
export const BasicButton = ({
  text,
  className,
  icon,
  onClick,
}: BasicButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "bg-ghibli-orange  flex flex-row items-center gap-2 hover:bg-[#ff722a] mt-5  active:bg-red-700 text-white font-extrabold py-3 px-4 rounded-lg transition-colors duration-200",
        className
      )}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};
