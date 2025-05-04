import Image from "next/image";
import React from "react";

export const FilmCard = () => {
  return (
    <div className="flex flex-col w-1/4 gap-2">
      <Image
        src="/ghibli-help/poster.webp"
        alt="ghibli-icon"
        className="w-8 object-cover"
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-1 w-full text-center bg-ghibli-blue">
        <p className="text-4xl text-ghibli-white font-semibold">
          Studio Ghibli
        </p>
        <p className="text-2xl text-ghibli-white italic font-light">
          スタジオジブリ
        </p>
      </div>
    </div>
  );
};
