import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === "ghibli/toggleFavorite") {
      const { ghibli } = state.getState() as RootState;
      localStorage.setItem(
        "favorite-ghibli-films",
        JSON.stringify(ghibli.favorites)
      );
      return;
    } else if (action.type === "filters/setFilters") {
      const { filter } = state.getState() as RootState;
      console.log("action", filter);

      localStorage.setItem(
        "filter-ghibli-films",
        JSON.stringify(filter.filterObject)
      );
      return;
    }
  };
};
