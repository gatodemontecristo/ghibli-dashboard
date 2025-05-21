"use client";
import { useFetchGhibliFilms } from "@/src/hooks";
import { FilmCard } from "../card/FilmCard";
import { nanoid } from "nanoid";
import { NotFound } from "../not-found/NotFound";

export const FilmCollection = () => {
  const { sortered } = useFetchGhibliFilms();

  return (
    <div className="flex flex-row flex-wrap md:gap-4 gap-2 md:px-10 px-0 md:pt-5 pt-0 pb-15 w-full justify-center ">
      {sortered.length === 0 || !sortered ? (
        <NotFound title="Ups!" description="No Ghibli movies found"></NotFound>
      ) : (
        sortered.map((film) => <FilmCard key={nanoid()} film={film}></FilmCard>)
      )}
    </div>
  );
};
