import { FilerSection, FilmCollection } from "@/src/components";

export const metadata = {
  title: "Ghibli Films",
  description: "Explore the enchanting world of Studio Ghibli films.",
};

export default function GhibliFilmsPage() {
  return (
    <div className="flex flex-col aling-top w-full">
      <FilerSection></FilerSection>
      <FilmCollection></FilmCollection>
    </div>
  );
}
