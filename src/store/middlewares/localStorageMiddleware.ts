import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";
import { toggleFavorite } from "../films/films";
import { setFilters } from "../filters/filters";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    if (typeof window === "undefined") return;

    if (toggleFavorite.match(action)) {
      const { ghibli } = state.getState() as RootState;
      localStorage.setItem(
        "favorite-ghibli-films",
        JSON.stringify(ghibli.favorites)
      );
      return;
    } else if (setFilters.match(action)) {
      const { filter } = state.getState() as RootState;

      localStorage.setItem(
        "filter-ghibli-films",
        JSON.stringify(filter.filterObject)
      );
      return;
    }
  };
};
