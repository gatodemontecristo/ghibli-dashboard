import { configureStore, Middleware } from "@reduxjs/toolkit";
import ghibliReducer from "./films/films";
import { localStorageMiddleware } from "./middlewares/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    ghibli: ghibliReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
});

// getDefaultMiddleware({ serializableCheck: false }).concat(
//   localStorageMiddleware as Middleware
// ),
// store.subscribe(() => {
//   const { favorites } = store.getState().ghibli;
//   localStorage.setItem("favorite-ghibli-films", JSON.stringify(favorites));
// });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
