"use client";

import clsx from "clsx";
import { MouseEvent, ReactNode } from "react";
import { FaHeart } from "react-icons/fa";

interface InvisibleButtonProps {
  className?: string;
  active?: boolean;
  icon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export const InvisibleButton = ({
  className,
  active = false,
  icon = <FaHeart className="size-5" />,
  onClick = () => {},
}: InvisibleButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (onClick) onClick(event);
  };
  return (
    <button
      type="button"
      className={clsx(
        "bg-none  flex flex-row items-center gap-2 mt-5 font-extrabold py-3 px-4 transition-colors duration-200",
        active ? "text-red-600" : "text-white hover:text-yellow-400",
        className
      )}
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};
