import {
  DetailSection,
  PosterSection,
  Underlinedtitle,
} from "@/src/components";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";

export const metadata = {
  title: "Ghibli Films",
  description: "Explore the enchanting world of Studio Ghibli films.",
};

export default async function GhibliDetailPage() {
  return (
    <div className="flex flex-col flex-wrap  p-10 w-full justify-center ">
      <div className="flex flex-row w-full">
        <PosterSection
          className="w-1/2"
          srcImage="/ghibli-help/banner.webp"
          altImage="Ghibli Banner"
        ></PosterSection>
        <DetailSection
          className="w-1/2 bg-ghibli-blue"
          src="/ghibli-wallpaper/wallpaperbanner.webp"
        >
          <Underlinedtitle title="Castle in the Sky"></Underlinedtitle>
          <p className="text-ghibli-white ">
            The orphan Sheeta inherited a mysterious crystal that links her to
            the mythical sky-kingdom of Laputa. With the help of resourceful
            Pazu and a rollicking band of sky pirates, she makes her way to the
            ruins of the once-great civilization. Sheeta and Pazu must outwit
            the evil Muska, who plans to use Laputas science to make himself
            ruler of the world.
          </p>
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
          srcImage="/ghibli-help/poster.webp"
          altImage="Ghibli Banner"
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
