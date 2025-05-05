import { MainCard } from "@/src/components";

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
        <div>
          <button
            type="button"
            className="bg-ghibli-orange w-[200px] hover:bg-[#ff722a] mt-5  active:bg-red-700 text-white font-extrabold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            {`Let's start!`}
          </button>
        </div>
      </MainCard>
      {/* <MainCard2
        title="Studio Ghibli Explorer"
        subtitle="ジブリ映画を探す旅"
        description="Discover the full catalog of Studio Ghibli films in one place."
        image={{ src: "/ghibli.png", alt: "Ghibli Logo" }}
      >
        <MainCard2.Image />
        <MainCard2.Title />
        <MainCard2.Subtitle />
        <MainCard2.Description />
      </MainCard2> */}

      {/*<MainCard
        title="Ghibli Dashboard"
        secondary="ジブリ映画を探す旅"
        intro="Discover the enchanting world of Ghibli movies, all in one place."
        description="Dive into a beautifully designed web experience where you can explore the full collection of Studio Ghibli films. Learn about each movie’s title, release date, director, and synopsis — all presented in a clean and user-friendly interface."
        image={{
          src: "/ghibli-help/main.png",
          alt: "Main Ghibli image",
        }}
      >
        <div></div>
        <MainCard.Title></MainCard.Title>
       <MainCard.Title></MainCard.Title>

    <div className="flex flex-col gap-2">
          <MainCard.Title></MainCard.Title>
          <MainCard.Secondary></MainCard.Secondary>
          <MainCard.Intro></MainCard.Intro>
          <MainCard.Description></MainCard.Description>
          <div>
            <button
              type="button"
              className="bg-ghibli-orange w-[200px] hover:bg-[#ff722a]  active:bg-red-700 text-white font-extrabold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              {`Let's start!`}
            </button>
          </div>
        </div> 
      </MainCard>*/}
    </div>
  );
}
