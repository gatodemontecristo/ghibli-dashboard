import { ItembarProps } from "@/src/types";
import Image from "next/image";
import React from "react";

export const Itembar = ({ img, title }: ItembarProps) => {
  return (
    <div className="flex flex-row gap-3 items-center cursor-pointer group">
      <Image
        src={img}
        alt={"ghibli-" + title}
        className="w-15 h-15  object-cover"
        width={100}
        height={100}
      />
      <h2 className="text-xl font-semibold text-gray-200 group-hover:text-ghibli-orange group-hover:translate-x-2 transition-all duration-200">
        {title}
      </h2>
    </div>
  );
};
