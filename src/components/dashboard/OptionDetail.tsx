"use client";
import React from "react";
import { BasicButton } from "../basic/BasicButton";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FavoriteButton } from "../basic/FavoriteButton";
import { FilmCardProps } from "@/src/types/interfaces";
import { useFavorite } from "@/src/hooks";
import { useSearchParams, useRouter } from "next/navigation";

export const OptionDetail = ({ film }: FilmCardProps) => {
  const { onToggle, isFavorite } = useFavorite({ film });

  const searchParams = useSearchParams();
  const router = useRouter();

  const from = searchParams.get("from");

  const handleBack = () => {
    if (from?.includes("films")) {
      router.push("/dashboard/films");
    } else if (from?.includes("favorites")) {
      router.push("/dashboard/favorites");
    } else {
      router.push("/dashboard/main");
    }
  };

  return (
    <div className="flex flex-row w-full items-center justify-center mb-5 gap-3">
      <BasicButton
        icon={
          <MdOutlineArrowBackIosNew className="size-5 font-extrabold"></MdOutlineArrowBackIosNew>
        }
        text="Go back"
        onClick={handleBack}
      ></BasicButton>
      <FavoriteButton
        text={isFavorite ? "I dont like it" : "I like it"}
        active={isFavorite}
        onClick={onToggle}
      ></FavoriteButton>
    </div>
  );
};
