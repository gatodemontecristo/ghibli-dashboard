import {
  DetailSection,
  PosterSection,
  Underlinedtitle,
} from "@/src/components";
import { GhibliFilms } from "@/src/types";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";

export const metadata = {
  title: "Ghibli Films",
  description: "Explore the enchanting world of Studio Ghibli films.",
};
interface Props {
  params: { id: string };
}

const getGhibliDetail = async (id: string): Promise<GhibliFilms> => {
  try {
    const film = await fetch(`https://ghibliapi.vercel.app/films/${id}`, {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then((resp) => resp.json());

    return film;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Ghibli film details");
  }
};
export default async function GhibliDetailPage({ params }: Props) {
  const film = await getGhibliDetail(params.id);

  return (
    <div className="flex flex-col flex-wrap  p-10 w-full justify-center ">
      <div className="flex flex-row w-full">
        <PosterSection
          className="w-1/2"
          srcImage={film.movie_banner}
          altImage="Ghibli Banner"
        ></PosterSection>
        <DetailSection
          className="w-1/2 bg-ghibli-blue"
          src="/ghibli-wallpaper/wallpaperbanner.webp"
        >
          <Underlinedtitle title={film.title}></Underlinedtitle>
          <p className="text-ghibli-white ">{film.description}</p>
        </DetailSection>
      </div>
      <div className="flex flex-row w-full">
        <DetailSection
          className="w-1/3 bg-[#0987cb]"
          src="/ghibli-wallpaper/wallpaper01.jpg"
        >
          <Underlinedtitle title="Features"></Underlinedtitle>

          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/ghibli-web/kuro02.svg"
              alt="Kuro Icon"
              width={200}
              height={200}
              className="object-cover w-10 h-10"
            ></Image>
            <p className="text-xl  text-ghibli-white">
              <span className=" font-extrabold">Japanese title:</span>{" "}
              天空の城ラピュタ
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/ghibli-web/kuro02.svg"
              alt="Kuro Icon"
              width={200}
              height={200}
              className="object-cover w-10 h-10"
            ></Image>
            <p className="text-xl  text-ghibli-white">
              <span className=" font-extrabold">Original title:</span> Tenkū no
              shiro Rapyuta
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/ghibli-web/kuro02.svg"
              alt="Kuro Icon"
              width={200}
              height={200}
              className="object-cover w-10 h-10"
            ></Image>
            <p className="text-xl  text-ghibli-white">
              <span className=" font-extrabold">a:</span> a
            </p>
          </div>
        </DetailSection>

        <PosterSection
          className="w-1/3"
          srcImage={film.image}
          altImage="Ghibli Poster"
        ></PosterSection>

        <DetailSection
          className="w-1/3 bg-[#2cadf4]"
          src="/ghibli-wallpaper/wallpaper02.jpg"
        >
          <Underlinedtitle title="Extras"></Underlinedtitle>

          <div className="flex flex-row gap-2 items-center">
            <FiAlignJustify className="w-10 h-10 text-white" />
            <p className="text-xl  text-ghibli-white">
              <span className=" font-extrabold">Japanese title:</span>{" "}
              天空の城ラピュタ
            </p>
          </div>
        </DetailSection>
      </div>
    </div>
  );
}
