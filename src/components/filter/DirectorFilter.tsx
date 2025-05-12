"use client";
import { directorItems } from "@/src/constants";
import { DirectorItemsType } from "@/src/types";
import React, { useState, useRef, useEffect } from "react";
import { GoCopy } from "react-icons/go";
import { nanoid } from "nanoid";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import clsx from "clsx";

export const DirectorFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchDirector, setSearchDirector] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

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

  const [directorList, setDirectorList] =
    useState<DirectorItemsType[]>(directorItems);

  const handleChange = (director: string) => {
    setDirectorList(
      directorList.map((item) =>
        item.director === director ? { ...item, check: !item.check } : item
      )
    );
  };

  const handleSelectAll = () => {
    setDirectorList(
      directorList.map((item) => {
        return { ...item, check: !item.check };
      })
    );
  };

  const selectedDirectors = directorList.filter((item) => item.check);

  return (
    <div className="relative w-72" ref={containerRef}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <GoCopy />
      </span>
      <span className="absolute left-8 top-1/2 -translate-y-1/2 flex ">
        {selectedDirectors.slice(0, 3).map((item, index) => (
          <Image
            key={nanoid()}
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
          "w-full pr-10 py-2  border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-ghibli-black truncate text-sm",
          selectedDirectors.length !== 1
            ? `pl-${10 + selectedDirectors.length * 5}`
            : "pl-16"
        )}
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
                <label key={nanoid()} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={check}
                    onChange={() => handleChange(director)}
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
