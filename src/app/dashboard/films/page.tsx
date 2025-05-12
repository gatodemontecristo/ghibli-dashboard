import { FilerSection } from "@/src/components";
import { FilmCard } from "@/src/components/card/FilmCard";
import { GhibliFilms } from "@/src/types";
import { nanoid } from "nanoid";

export const metadata = {
  title: "Ghibli Films",
  description: "Explore the enchanting world of Studio Ghibli films.",
};

const getGhibliFilms = async (): Promise<GhibliFilms[]> => {
  const data: GhibliFilms[] = await fetch(
    `https://ghibliapi.vercel.app/films`
  ).then((res) => res.json());

  return data;
};

export default async function GhibliFilmsPage() {
  const collection = await getGhibliFilms();
  return (
    <>
      <FilerSection></FilerSection>
      <div className="flex flex-row flex-wrap gap-4 px-10 pt-5 pb-15 w-full justify-center ">
        {collection.map((film) => (
          <FilmCard key={nanoid()} film={film}></FilmCard>
        ))}
      </div>
    </>
  );
}
