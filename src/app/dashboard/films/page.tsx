import { FilmCard } from "@/src/components/card/FilmCard";

export const metadata = {
  title: "Ghibli Films",
  description: "Explore the enchanting world of Studio Ghibli films.",
};

export default function GhibliFilmsPage() {
  return (
    <div className="flex flex-col flex-wrap gap-4 p-10 w-full">
      <FilmCard></FilmCard>
    </div>
  );
}
