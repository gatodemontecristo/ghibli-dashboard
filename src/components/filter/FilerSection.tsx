"use client";
import { SearchInput } from "./SearchInput";
import { DirectorFilter } from "./DirectorFilter";
import { SorterFilter } from "./SorterFilter";
import Image from "next/image";
import { useFetchGhibliFilms, useSetFilter } from "@/src/hooks";

export const FilerSection = () => {
  const { sortered } = useFetchGhibliFilms();
  const { handleReset, handleResetAll } = useSetFilter();

  return (
    <div className="flex flex-col gap-2 px-15 py-10 w-full justify-center items-center">
      <div className="flex flex-row w-3/4 justify-between items-center px-2">
        <p className="text-ghibli-black">
          <span className="font-bold text-ghibli-sky">
            {sortered.length} Ghibli films
          </span>{" "}
          have been found
        </p>
        <Image
          src={"/ghibli-web/peanut.svg"}
          alt={"peanut"}
          className="w-8 h-8 "
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="flex flex-row w-3/4 justify-between items-center">
        <SearchInput></SearchInput>
        <button
          onClick={() => handleReset("search")}
          className="text-sm text-ghibli-sky hover:underline font-semibold"
        >
          Clear all
        </button>
      </div>
      <div className="flex flex-row w-3/4 justify-between items-center">
        <div className="flex flex-row gap-2 ">
          <DirectorFilter></DirectorFilter>
          <SorterFilter></SorterFilter>
        </div>
        <button
          onClick={() => handleResetAll()}
          className="text-sm text-ghibli-sky hover:underline font-semibold"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
};
