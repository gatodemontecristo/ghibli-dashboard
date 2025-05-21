"use client";
import { Sidebar, Underlinedtitle } from "@/src/components";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

export const Menusection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const getMainPage = () => {
    if (pathname.includes("main")) {
      return "Home";
    } else if (pathname.includes("films")) {
      return "Movies";
    } else if (pathname.includes("favorites")) {
      return "Favorites";
    } else {
      return "Detail";
    }
  };
  return (
    <div className="flex flex-col flex-wrap p-5 items-center justify-start w-full bg-transparent md:bg-ghibli-pink h-screen">
      <div className="flex flex-col gap-2 h-full">
        <div className="h-full md:gap-2 gap-3 flex md:flex-col flex-row">
          <button
            onClick={onClose}
            type="button"
            className="bg-ghibli-orange w-fit h-fit hover:bg-[#ff722a] text-2xl active:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <FiAlignJustify />
          </button>

          <Underlinedtitle
            title={getMainPage()}
            color="md:text-ghibli-orange text-ghibli-white"
            underline="md:bg-ghibli-orange bg-ghibli-white"
          ></Underlinedtitle>
        </div>
        <Image
          src="/ghibli-web/mei.png"
          alt="ghibli-title"
          className="w-15 h-20  object-cover"
          width={100}
          height={100}
        />
      </div>

      <Sidebar {...{ onClose, isOpen }}></Sidebar>
    </div>
  );
};
