import { IconTextProps } from "@/src/types/interfaces";
import Image from "next/image";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

export const IconText = ({
  srcImg,
  altImg,
  type,
  title,
  subtitle,
}: IconTextProps) => {
  const getImg = () => {
    if (type === "img")
      return (
        <Image
          src={srcImg}
          alt={altImg}
          width={200}
          height={200}
          className="object-cover w-10 h-10"
        ></Image>
      );
    return srcImg === "year" ? (
      <FiCalendar className="md:w-10 w-8 md:h-10 h-8 text-white" />
    ) : (
      <FiClock className="md:w-10 w-8 md:h-10 h-8 text-white" />
    );
  };
  return (
    <div className="flex flex-row gap-2 items-center">
      {getImg()}
      <p className="md:text-xl text-lg  text-ghibli-white">
        <span className=" font-extrabold">{title}:</span> {subtitle}
      </p>
    </div>
  );
};
