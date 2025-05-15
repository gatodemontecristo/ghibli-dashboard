"use client";
import { Provider } from "react-redux";
import { store } from "./";
// import { useEffect } from "react";
// import { setFavoriteGhibli } from "./films/films";
// import { setFilters } from "./filters/filters";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  // useEffect(() => {
  //   const favorites = JSON.parse(
  //     localStorage.getItem("favorite-ghibli-films") ?? "{}"
  //   );
  //   store.dispatch(setFavoriteGhibli(favorites));
  //   const filters = JSON.parse(
  //     localStorage.getItem("filter-ghibli-films") ?? "{}"
  //   );
  //   console.log("filters", filters);
  //   store.dispatch(setFilters(filters));
  // }, []);

  return <Provider store={store}>{children}</Provider>;
};
