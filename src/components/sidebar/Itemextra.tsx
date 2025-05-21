import { ItemextraProps } from "@/src/types";
import Image from "next/image";
import React from "react";

export const Itemextra = ({
  img,
  title,
  secondary,
  onClick,
}: ItemextraProps) => {
  return (
    <div
      className="flex flex-row gap-3 items-center cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={img}
        alt={"extra-" + title}
        className="w-15 h-15  object-cover"
        width={100}
        height={100}
      />
      <div className="flex flex-col">
        <h3 className="md:text-lg text-base font-semibold text-gray-200">
          {" "}
          {title}
        </h3>
        <h2 className="text-base font-normal text-gray-200 group-hover:text-ghibli-orange group-hover:translate-x-2 transition-all duration-200">
          {secondary}
        </h2>
      </div>
    </div>
  );
};
