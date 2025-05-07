import { MainCard } from "@/src/components";
import Link from "next/link";

export const metadata = {
  title: "Ghibli Dashboard",
  description: "SEO Title",
};
export default function MainPage() {
  return (
    <div className="flex flex-row  justify-center items-center bg-ghibli-blue w-full h-full text-center">
      <MainCard
        title="Ghibli Dashboard"
        secondary="ジブリ映画を探す旅"
        intro="Discover the enchanting world of Ghibli movies, all in one place."
        description="Dive into a beautifully designed web experience where you can explore the full collection of Studio Ghibli films. Learn about each movie’s title, release date, director, and synopsis — all presented in a clean and user-friendly interface."
        image={{
          src: "/ghibli-help/main.png",
          alt: "Main Ghibli image",
        }}
      >
        <Link href={"/dashboard/films"}>
          <button
            type="button"
            className="bg-ghibli-orange w-[200px] hover:bg-[#ff722a] mt-5  active:bg-red-700 text-white font-extrabold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            {`Let's start!`}
          </button>
        </Link>
      </MainCard>
    </div>
  );
}
