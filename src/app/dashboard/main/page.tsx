import { Menusection } from "@/src/components";

export const metadata = {
  title: "Ghibli Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="flex flex-row flex-wrap p-5">
      <Menusection></Menusection>
    </div>
  );
}
