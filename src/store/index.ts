import { configureStore } from "@reduxjs/toolkit";
import ghibliReducer from "./films/films";

export const store = configureStore({
  reducer: {
    ghibli: ghibliReducer,
  },
});

store.subscribe(() => {
  const { favorites } = store.getState().ghibli;
  localStorage.setItem("favorite-ghibli-films", JSON.stringify(favorites));
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
