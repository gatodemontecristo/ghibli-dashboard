"use client";
import { useFetchGhibliFilms } from "@/src/hooks";
import { FilmCard } from "../card/FilmCard";
import { nanoid } from "nanoid";
import { useAppSelector } from "@/src/store/hooks";
import { sortByField } from "@/utils";
import { GhibliFilms } from "@/src/types";

export const FilmCollection = () => {
  const { collection } = useFetchGhibliFilms();
  const filters = useAppSelector((state) => state.filter.filterObject);
  const filtered = collection.filter((movie) => {
    const searchTerm = filters.search.toLowerCase().trim();
    const matchSearch =
      searchTerm === "" ||
      [movie.title, movie.description].some((field) =>
        field.toLowerCase().includes(searchTerm)
      );
    const matchDirectors =
      filters.directors.length > 0
        ? filters.directors.some(
            (director) => director.check && director.director === movie.director
          )
        : true;

    return matchSearch && matchDirectors;
  });
  const sortered = sortByField({
    array: filtered,
    field: filters.sorter as keyof GhibliFilms,
  });
  return (
    <div className="flex flex-row flex-wrap gap-4 px-10 pt-5 pb-15 w-full justify-center ">
      {sortered.map((film) => (
        <FilmCard key={nanoid()} film={film}></FilmCard>
      ))}
    </div>
  );
};
