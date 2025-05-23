"use client";
import { Sidebar, SpeechBubble, Underlinedtitle } from "@/src/components";
import { useIsMobile } from "@/src/hooks";
import clsx from "clsx";
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
  const isDashboard = pathname === "/dashboard/main";
  const isMobile = useIsMobile();
  return (
    <div
      className={clsx(
        "flex md:flex-col flex-row flex-wrap p-5 items-center justify-start md:w-full w-screen md:bg-ghibli-black h-full z-50",
        isDashboard ? "bg-transparent" : "bg-ghibli-blue"
      )}
    >
      <div className="flex md:flex-col flex-row gap-2 md:h-full h-auto md:w-full w-screen md:items-baseline items-center">
        <div className="h-full md:gap-2 gap-3 flex md:flex-col flex-row w-full">
          <button
            onClick={onClose}
            type="button"
            className=" bg-ghibli-orange w-fit h-fit  hover:bg-[#ff722a] text-2xl active:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <FiAlignJustify />
          </button>

          <Underlinedtitle
            title={getMainPage()}
            color={`md:text-ghibli-white ${
              isDashboard ? "text-ghibli-white" : "text-ghibli-white"
            }`}
            underline={`md:bg-ghibli-white ${
              isDashboard ? "bg-ghibli-white" : "bg-ghibli-white"
            }`}
          ></Underlinedtitle>
        </div>

        <div
          className={clsx(
            "md:relative flex md:flex-col flex-row",
            isMobile && "fixed bottom-5 start-5 "
          )}
        >
          <SpeechBubble
            text="Give me a star if you liked my work!"
            href="https://github.com/gatodemontecristo/ghibli-dashboard"
            atext="Check my code"
            position="bottom"
            className=" shadow-xl w-[260px] -top-20"
          />
          <Image
            src="/ghibli-web/mei.png"
            alt="ghibli-title"
            className="md:w-15 w-12 md:h-20 h-16  object-cover"
            width={200}
            height={200}
          />
        </div>
      </div>

      <Sidebar {...{ onClose, isOpen }}></Sidebar>
    </div>
  );
};
