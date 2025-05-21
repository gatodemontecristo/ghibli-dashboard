import clsx from "clsx";
import Image from "next/image";
import React from "react";
interface PosterSectionProps {
  className?: string;
  srcImage: string;
  altImage: string;
}
export const PosterSection = ({
  className,
  srcImage,
  altImage,
}: PosterSectionProps) => {
  return (
    <div className={clsx("overflow-hidden", className)}>
      <Image
        src={srcImage}
        alt={altImage}
        width={300}
        height={300}
        className="w-full object-cover transform transition-transform duration-300 hover:scale-105 "
      ></Image>
    </div>
  );
};
