"use client";
import { useFetchGhibliFilms } from "@/src/hooks";
import { FilmCard } from "../card/FilmCard";
import { nanoid } from "nanoid";
import { useAppSelector } from "@/src/store/hooks";

export const FilmCollection = () => {
  const { collection } = useFetchGhibliFilms();
  const filters = useAppSelector((state) => state.filter.filterObject);
  const filtered = collection.filter((movie) => {
    const matchSearch =
      filters.search.length > 0
        ? movie.director.toLowerCase().includes(filters.search.toLowerCase())
        : true;
    const matchDirectors =
      filters.directors.length > 0
        ? filters.directors.some(
            (director) => director.check && director.director === movie.director
          )
        : true;

    return matchSearch && matchDirectors;
  });

  return (
    <div className="flex flex-row flex-wrap gap-4 px-10 pt-5 pb-15 w-full justify-center ">
      {filtered.map((film) => (
        <FilmCard key={nanoid()} film={film}></FilmCard>
      ))}
    </div>
  );
};
