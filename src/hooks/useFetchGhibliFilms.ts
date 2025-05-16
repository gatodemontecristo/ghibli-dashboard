"use client";
import { useEffect, useState } from "react";
import { getGhibliFilms } from "../helpers";
import { GhibliFilms } from "../types";

export const useFetchGhibliFilms = () => {
  const [collection, setCollection] = useState<GhibliFilms[]>([]);

  const getDetails = async () => {
    const newGhibli = await getGhibliFilms();
    setCollection(newGhibli);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return {
    collection,
  };
};
