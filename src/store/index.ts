import { configureStore, Tuple } from "@reduxjs/toolkit";
import ghibliReducer from "./films/films";
import { localStorageMiddleware } from "./middlewares/localstorage-middleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ghibli: ghibliReducer,
      middleware: () => new Tuple(localStorageMiddleware),
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
