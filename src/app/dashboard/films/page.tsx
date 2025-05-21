import { FilerSection, FilmCollection } from "@/src/components";

export const metadata = {
  title: "Ghibli Films",
  description: "Explore the enchanting world of Studio Ghibli films.",
};

export default function GhibliFilmsPage() {
  return (
    <div className="flex flex-col aling-top w-full md:mt-0 mt-20">
      <FilerSection></FilerSection>
      <FilmCollection></FilmCollection>
    </div>
  );
}
