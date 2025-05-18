import { FavoriteCollection } from "@/src/components";

export const metadata = {
  title: "Ghibli Favorites",
  description: "Favorites Page",
};
export default function MainPage() {
  return (
    <div className="flex flex-col aling-top w-full">
      <FavoriteCollection></FavoriteCollection>
    </div>
  );
}
