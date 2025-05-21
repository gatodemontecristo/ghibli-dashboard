"use client";
import { DirectorItemsType } from "@/src/types";
import React, { useState, useRef, useEffect } from "react";
import { GoCopy } from "react-icons/go";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import clsx from "clsx";
import { useSetFilter } from "@/src/hooks";

export const DirectorFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchDirector, setSearchDirector] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const { handleChange, filterObject } = useSetFilter();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { directors } = filterObject;
  const directorList: DirectorItemsType[] = directors;

  const handleChangeDirector = (director: string) => {
    handleChange(
      directorList.map((item) =>
        item.director === director ? { ...item, check: !item.check } : item
      ),
      "directors"
    );
  };

  const handleSelectAll = () => {
    handleChange(
      directorList.map((item) => {
        return { ...item, check: true };
      }),
      "directors"
    );
  };

  const selectedDirectors: DirectorItemsType[] = directorList.filter(
    (item) => item.check
  );
  const getPaddingLeft = () => {
    if (selectedDirectors.length === 0) {
      return "48px";
    }
    if (selectedDirectors.length === 1) {
      return "64px";
    }
    if (selectedDirectors.length >= 3) {
      return "96px";
    }
    return `${String(60 + selectedDirectors.length * 12)}px`;
  };

  return (
    <div className="relative md:w-72 w-[100%]" ref={containerRef}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <GoCopy />
      </span>
      <span className="absolute left-8 top-1/2 -translate-y-1/2 flex ">
        {selectedDirectors.slice(0, 3).map((item, index) => (
          <Image
            key={item.director}
            src={item.img}
            alt={item.director}
            className={clsx(
              `w-7 h-7 rounded-full border-1 border-white  z-${index}`,
              selectedDirectors.length > 1 && "-mr-3"
            )}
            width={100}
            height={100}
          ></Image>
        ))}
      </span>
      <input
        type="text"
        placeholder="Click here"
        onClick={() => setIsOpen(true)}
        value={selectedDirectors.map((item) => item.director).join(", ")}
        readOnly
        className={clsx(
          "w-full pr-10 py-2  border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-ghibli-black truncate text-sm"
        )}
        style={{ paddingLeft: getPaddingLeft() }}
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
        <GoCopy />
      </span>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white border rounded shadow-lg z-10 p-4 flex flex-col gap-2">
          <div className="px-1 flex flex-row items-center justify-between">
            <p className="text-ghibli-black">Directors</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleSelectAll()}
                className="text-sm text-blue-600 hover:underline"
              >
                All
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-blue-600 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              value={searchDirector}
              onChange={(e) => setSearchDirector(e.target.value)}
              className="w-full pl-4 pr-10 py-1 border text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
              <FaSearch />
            </span>
          </div>
          <div className="space-y-2 px-2">
            {directorList
              .filter((item) =>
                item.director
                  .toLowerCase()
                  .includes(searchDirector.toLowerCase())
              )
              .map(({ check, director, img }) => (
                <label key={director} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={check}
                    onChange={() => handleChangeDirector(director)}
                    className="h-4 w-4 text-ghibli-blue border-gray-300 rounded"
                  />
                  <Image
                    src={img}
                    alt={director}
                    className="w-7 h-7 rounded-full"
                    width={100}
                    height={100}
                  ></Image>
                  <span className="text-ghibli-black text-sm">{director}</span>
                </label>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
