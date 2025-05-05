import Image from "next/image";
import React from "react";
import { CircleRating } from "./CircleRating";
import { formatMinutesToTime } from "@/src/utils";
import { GhibliFilms } from "@/src/types";

interface FilmCardProps {
  film: GhibliFilms;
}
export const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div className="flex flex-col w-1/4 group cursor-pointer transition-all duration-300 overflow-hidden">
      <Image
        src={film.image}
        alt={film.title}
        className="w-full object-cover transform transition-transform duration-300 group-hover:scale-105 "
        width={100}
        height={100}
      />
      <div className="flex flex-col z-30  w-full text-center gap-3 bg-ghibli-blue p-2 h-full  group-hover:bg-ghibli-sky transition-colors duration-300">
        <div className="flex flex-row justify-evenly items-center">
          <div className="text-left">
            <p className="text-md text-ghibli-white font-semibold">
              {film.title}
            </p>
            <p className="text-sm text-ghibli-white italic font-light">
              {film.original_title}
            </p>
            <p className="text-sm text-ghibli-white font-bold">
              {film.original_title_romanised}
            </p>
          </div>
          <CircleRating
            score={Number(film.rt_score)}
            size={70}
            strokeWidth={8}
          />
        </div>
        <p className="text-xs text-ghibli-white ">
          {`Relase year: ${film.release_date} | Hours: ${formatMinutesToTime(
            film.running_time
          )}`}
        </p>
      </div>
    </div>
  );
};
