"use client";
import { SidebarProps } from "@/src/types";
import clsx from "clsx";
import { Itembar } from "./Itembar";
import { nanoid } from "nanoid";
import { menuItems } from "@/src/constants";
import Image from "next/image";
import { Itemextra } from "./Itemextra";

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div>
      <div
        className={clsx(
          "fixed left-0 top-0 lg:w-1/4 md:w-1/2 w-4/6 h-full p-8 shadow-lg bg-ghibli-black  transform transition-transform duration-500 ease-in-out z-50",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-row gap-5 items-center mb-10">
            <Image
              src="/ghibli-icon.png"
              alt="ghibli-title"
              className="w-8 h-8  object-cover"
              width={150}
              height={150}
            />
            <div className="flex flex-col gap-1 w-full text-left">
              <p className="md:text-4xl text-3xl text-ghibli-white font-semibold">
                Studio Ghibli
              </p>
              <p className="md:text-2xl text-xl text-ghibli-white italic font-light">
                スタジオジブリ
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full gap-5">
            {menuItems.map((item) => (
              <Itembar key={nanoid()} {...item}></Itembar>
            ))}
          </div>
          <Itemextra
            img="/ghibli-web/icon_kinen.png"
            title="Github creator"
            secondary="Erick Dejo Vicente"
            onClick={() =>
              window.open(
                "https://github.com/gatodemontecristo/ghibli-dashboard",
                "_blank"
              )
            }
          ></Itemextra>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-0 z-40"
          onClick={onClose}
        ></div>
      )}
    </div>
  );
};
