import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from ".."; // Asegúrate que esto apunta al archivo correcto

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    const result = next(action);
    console.log("Middleware action", action);
    if (action.type === "ghibli/toggleFavorite") {
      const ghibli = state.getState().ghibli as RootState;
      localStorage.setItem("favorite-ghibli", JSON.stringify(ghibli));
    }

    return result;
  };
};
