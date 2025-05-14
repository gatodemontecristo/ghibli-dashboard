"use client";
import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavoriteGhibli } from "./films/films";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-ghibli-films") ?? "{}"
    );
    store.dispatch(setFavoriteGhibli(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
