import Image from "next/image";

export const metadata = {
  title: "Ghibli Films",
  description: "Explore the enchanting world of Studio Ghibli films.",
};

export default async function GhibliDetailPage() {
  return (
    <div className="flex flex-col flex-wrap  p-10 w-full justify-center ">
      <div className="flex flex-row w-full">
        <div className="w-1/2">
          <Image
            src="/ghibli-help/banner.webp"
            alt="Ghibli Banner"
            width={200}
            height={200}
            className="object-cover w-full "
          ></Image>
        </div>
        <div className="relative overflow-hidden w-1/2 bg-ghibli-blue px-10 py-5 flex flex-col justify-center items-center">
          <div
            className="absolute inset-0 bg-[url('/ghibli-wallpaper/wallpaperbanner.webp')] bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none"
            aria-hidden="true"
          />
          <h2 className="text-2xl font-extrabold text-ghibli-white">
            Castle in the Sky
          </h2>
          <p className="text-ghibli-white font-light">
            The orphan Sheeta inherited a mysterious crystal that links her to
            the mythical sky-kingdom of Laputa. With the help of resourceful
            Pazu and a rollicking band of sky pirates, she makes her way to the
            ruins of the once-great civilization. Sheeta and Pazu must outwit
            the evil Muska, who plans to use Laputas science to make himself
            ruler of the world.
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="relative overflow-hidden w-1/3 bg-[#0987cb] px-10 py-5 flex flex-col justify-center items-center">
          <div
            className="absolute inset-0 bg-[url('/ghibli-wallpaper/wallpaper01.jpg')] bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none"
            aria-hidden="true"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/ghibli-help/poster.webp"
            alt="Ghibli Banner"
            width={200}
            height={200}
            className="object-cover w-full "
          ></Image>
        </div>
        <div className="relative overflow-hidden w-1/3 bg-[#2cadf4] px-10 py-5 flex flex-col justify-center items-center">
          <div
            className="absolute inset-0 bg-[url('/ghibli-wallpaper/wallpaper02.jpg')] bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
