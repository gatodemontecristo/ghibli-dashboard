import { FilerSection, FilmCollection } from "@/src/components";

export const metadata = {
  title: "Ghibli Films",
  description: "Explore the enchanting world of Studio Ghibli films.",
};

export default function GhibliFilmsPage() {
  return (
    <>
      <FilerSection></FilerSection>
      <FilmCollection></FilmCollection>
    </>
  );
}
