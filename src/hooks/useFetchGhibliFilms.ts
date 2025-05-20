"use client";
import { useEffect, useState } from "react";
import { getGhibliFilms } from "../helpers";
import { GhibliFilms } from "../types";
import { useAppSelector } from "../store/hooks";
import { sortByField } from "../utils";

export const useFetchGhibliFilms = () => {
  const [collection, setCollection] = useState<GhibliFilms[]>([]);

  const getFilms = async () => {
    const newGhibli = await getGhibliFilms();
    setCollection(newGhibli);
  };

  useEffect(() => {
    getFilms();
  }, []);
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
  return {
    collection,
    sortered,
  };
};
