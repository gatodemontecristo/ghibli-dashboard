import Image from "next/image";
import React from "react";
import { CircleRating } from "./CircleRating";
import { formatMinutesToTime } from "@/src/utils";

export const FilmCard = () => {
  return (
    <div className="flex flex-col w-1/4 ">
      <Image
        src="/ghibli-help/poster.webp"
        alt="ghibli-icon"
        className="w-full object-cover"
        width={100}
        height={100}
      />
      <div className="flex flex-col  w-full text-center gap-3 bg-ghibli-blue p-2">
        <div className="flex flex-row justify-evenly items-center">
          <div className="text-left">
            <p className="text-md text-ghibli-white font-semibold">
              My Neighbor Totoro
            </p>
            <p className="text-sm text-ghibli-white italic font-light">
              となりのトトロ
            </p>
            <p className="text-sm text-ghibli-white font-bold">
              Tonari no Totoro
            </p>
          </div>
          <CircleRating score={88} size={70} strokeWidth={8} />
        </div>
        <div>
          <p className="text-xs text-ghibli-white ">
            {`Relase year: 1988 | Hours: ${formatMinutesToTime("86")}`}
          </p>
        </div>
      </div>
    </div>
  );
};
