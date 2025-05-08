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
    <div className={className}>
      <Image
        src={srcImage}
        alt={altImage}
        width={200}
        height={200}
        className="object-cover w-full "
      ></Image>
    </div>
  );
};
