"use client";
import clsx from "clsx";
import { MouseEvent, ReactNode } from "react";
import { FaHeart } from "react-icons/fa";

interface FavoriteButtonProps {
  className?: string;
  active?: boolean;
  icon?: ReactNode;
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export const FavoriteButton = ({
  className,
  active = false,
  icon = <FaHeart className="size-5" />,
  text,
  onClick = () => {},
}: FavoriteButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (onClick) onClick(event);
  };
  return (
    <button
      type="button"
      className={clsx(
        "bg-ghibli-blue  flex flex-row items-center gap-2 hover:bg-ghibli-sky mt-5  active:bg-red-700 font-extrabold py-3 px-4 rounded-lg transition-colors duration-200",
        active ? "text-red-600" : "text-white hover:text-yellow-400",
        className
      )}
      onClick={handleClick}
    >
      {icon}
      <span className="text-white">{text}</span>
    </button>
  );
};
