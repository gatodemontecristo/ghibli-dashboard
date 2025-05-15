"use client";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { setFavoriteGhibli } from "./films/films";
import { setFilters } from "./filters/filters";

export const ReduxHydration = () => {
  const dispatch = useAppDispatch();
  console.log("ReduxHydration");
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-ghibli-films") ?? "{}"
    );
    dispatch(setFavoriteGhibli(favorites));

    const localFilter = localStorage.getItem("filter-ghibli-films");
    if (localFilter) {
      const filters = JSON.parse(localFilter);
      dispatch(setFilters(filters));
    }
  }, [dispatch]);

  return null;
};
