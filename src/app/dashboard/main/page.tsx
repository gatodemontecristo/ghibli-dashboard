import Image from "next/image";

export const metadata = {
  title: "Ghibli Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="flex flex-row  justify-center items-center bg-ghibli-blue w-full h-full text-center">
      <div className="flex flex-col gap-5 w-1/2 justify-center items-center">
        <Image
          src={"/ghibli-help/main.png"}
          alt="Main Ghibli image"
          className="w-70"
          width={100}
          height={100}
        ></Image>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-extrabold text-ghibli-white">
            Studio Ghibli Film Explorer
          </h2>
          <p className="text-xl font-light italic text-ghibli-white">
            ジブリ映画を探す旅
          </p>
          <h3 className="text-ghibli-white  font-bold">
            Discover the enchanting world of Ghibli movies, all in one place.
          </h3>
          <p className="text-ghibli-white font-light">
            Dive into a beautifully designed web experience where you can
            explore the full collection of Studio Ghibli films. Learn about each
            movie’s title, release date, director, and synopsis — all presented
            in a clean and user-friendly interface.
          </p>
          <div>
            <button
              type="button"
              className="bg-ghibli-orange w-[200px] hover:bg-[#ff722a]  active:bg-red-700 text-white font-extrabold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {`Let's start!`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
