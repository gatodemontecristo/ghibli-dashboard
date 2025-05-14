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
    }
  };
};
