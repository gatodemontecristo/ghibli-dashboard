"use client";
import Link from "next/link";
import React from "react";
import { BasicButton } from "../basic/BasicButton";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FavoriteButton } from "../basic/FavoriteButton";
import { FilmCardProps } from "@/src/types/interfaces";
import { useFavorite } from "@/src/hooks";

export const OptionDetail = ({ film }: FilmCardProps) => {
  const { onToggle, isFavorite } = useFavorite({ film });

  return (
    <div className="flex flex-row w-full items-center justify-center mb-5 gap-3">
      <Link href={"/dashboard/films"}>
        <BasicButton
          icon={
            <MdOutlineArrowBackIosNew className="size-5 font-extrabold"></MdOutlineArrowBackIosNew>
          }
          text="Go back"
        ></BasicButton>
      </Link>
      <FavoriteButton
        text={isFavorite ? "I dont like it" : "I like it"}
        active={isFavorite}
        onClick={onToggle}
      ></FavoriteButton>
    </div>
  );
};
