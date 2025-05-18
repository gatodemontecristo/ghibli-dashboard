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
    <div className="flex flex-col flex-wrap p-5 items-center justify-start w-full bg-ghibli-pink h-screen">
      <div className="flex flex-col gap-2 h-full">
        <div>
          <button
            onClick={onClose}
            type="button"
            className="bg-ghibli-orange  hover:bg-[#ff722a] text-2xl active:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <FiAlignJustify />
          </button>
        </div>
        <Underlinedtitle
          className="h-full"
          title={getMainPage()}
          color="text-ghibli-orange"
          underline="bg-ghibli-orange"
        ></Underlinedtitle>

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
