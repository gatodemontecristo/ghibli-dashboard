import { GhibliFilms } from "../types";

export const getGhibliFilms = async (): Promise<GhibliFilms[]> => {
  try {
    const data: GhibliFilms[] = await fetch(
      `https://ghibliapi.vercel.app/films`
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.error("Error fetching Ghibli films:", error);
    return [];
  }
};
