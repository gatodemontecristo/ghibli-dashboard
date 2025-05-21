import Image from "next/image";
import { BasicButton, Menusection } from "../components";
import Link from "next/link";
import { GiJapan } from "react-icons/gi";

export default function NotFound() {
  return (
    <div className="flex flex-row bg-ghibli-pink  w-full h-screen text-slate-300">
      <div className="flex w-[12%] ">
        <Menusection />
      </div>
      <div className="flex flex-row w-full flex-wrap">
        <div className="flex flex-row  justify-center items-center bg-ghibli-blue w-full h-full text-center">
          <div className="flex flex-col gap-2 w-1/3 justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-2">
              <p className="font-bold text-9xl text-ghibli-black">4</p>
              <Image
                src="/ghibli-help/totoro.png"
                alt="Totoro image not found"
                className="w-70 animate__bounceIn animate__animated"
                width={100}
                height={100}
              ></Image>
              <p className="font-bold text-9xl text-ghibli-black">4</p>
            </div>
            <h2 className="text-2xl font-extrabold text-ghibli-white">
              Page Not Found
            </h2>
            <p className="text-xl font-light italic text-ghibli-white">
              Sorry, we couldn&apos;t find what you&apos;re looking for.
            </p>
            <h3 className="text-ghibli-white  font-bold">
              The link might be broken, or the page may have been removed.
            </h3>
            <Link href={"/dashboard/main"}>
              <BasicButton
                icon={<GiJapan className="size-5"></GiJapan>}
                text="Go back to home"
              ></BasicButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
