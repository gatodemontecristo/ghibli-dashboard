import { GhibliFilms } from "../types";
import { notFound } from "next/navigation";
export const getGhibliDetail = async (id: string): Promise<GhibliFilms> => {
  try {
    const film: GhibliFilms = await fetch(
      `https://ghibliapi.vercel.app/films/${id}`,
      {
        next: {
          revalidate: 60 * 60 * 30 * 6,
        },
      }
    ).then((resp) => resp.json());
    return film;
  } catch (error) {
    console.log(error);
    notFound();
  }
};
