"use client";
import { SearchInput } from "./SearchInput";
import { DirectorFilter } from "./DirectorFilter";
import { SorterFilter } from "./SorterFilter";
import { useFetchGhibliFilms, useSetFilter } from "@/src/hooks";
import { TitlePage } from "../text/TitlePage";

export const FilerSection = () => {
  const { sortered } = useFetchGhibliFilms();
  const { handleReset, handleResetAll } = useSetFilter();

  return (
    <div className="flex flex-col gap-2 px-15 py-10 w-full justify-center items-center">
      <TitlePage
        colorText={`${sortered.length} Ghibli films`}
        normalText="have been found"
        image="/ghibli-web/peanut.svg"
        alt="peanut"
      ></TitlePage>

      <div className="flex flex-row w-3/4 justify-between items-center">
        <SearchInput></SearchInput>
        <button
          onClick={() => handleReset("search")}
          className="text-sm text-ghibli-sky hover:underline font-semibold cursor-pointer"
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
          className="text-sm text-ghibli-sky hover:underline font-semibold cursor-pointer"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
};
