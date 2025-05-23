import { BasicButton, MainCard } from "@/src/components";
import Link from "next/link";
import { LuReceiptJapaneseYen } from "react-icons/lu";

export const metadata = {
  title: "Ghibli Dashboard",
  description: "A beautiful dashboard of Studio Ghibli films",
  openGraph: {
    title: "Ghibli Dashboard",
    description: "A beautiful dashboard of Studio Ghibli films",
    url: "https://ghibli-dashboard.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://ghibli-dashboard.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview de la web",
      },
    ],
  },
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
          <BasicButton
            icon={
              <LuReceiptJapaneseYen className="size-5"></LuReceiptJapaneseYen>
            }
            text="Let's start!"
          ></BasicButton>
        </Link>
      </MainCard>
    </div>
  );
}
