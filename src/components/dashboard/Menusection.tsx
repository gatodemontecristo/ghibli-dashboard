"use client";
import { Sidebar } from "@/src/components";
import Image from "next/image";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

export const Menusection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-wrap ">
      <div className="flex flex-col gap-2">
        <button
          onClick={onClose}
          type="button"
          className="bg-ghibli-orange hover:bg-[#ff722a] text-2xl active:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          <FiAlignJustify />
        </button>
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
