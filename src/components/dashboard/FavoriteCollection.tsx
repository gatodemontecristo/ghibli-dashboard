"use client";
import { useAppSelector } from "@/src/store/hooks";
import React from "react";
import { FilmCard } from "../card/FilmCard";
import { nanoid } from "nanoid";
import { TitlePage } from "../text/TitlePage";
import { NotFound } from "../not-found/NotFound";

export const FavoriteCollection = () => {
  const favorites = useAppSelector((state) => state.ghibli.favorites);

  return (
    <div className="flex flex-row flex-wrap gap-4 px-10 pt-5 pb-15 w-full justify-center ">
      <div className="flex flex-row flex-wrap gap-4 px-10 pt-5 pb-5 w-4/5 justify-center ">
        <TitlePage
          colorText={`${Object.values(favorites).length} Ghibli films`}
          normalText="are your favorites"
          className="text-2xl font-bold text-center"
          image="/ghibli-web/train.png"
          alt="train"
          classImg="w-20 h-20"
        ></TitlePage>
      </div>
      {Object.values(favorites).length === 0 || !favorites ? (
        <NotFound
          title="Ups!"
          description="No favorite Ghibli movies found"
        ></NotFound>
      ) : (
        Object.values(favorites).map((film) => (
          <FilmCard key={nanoid()} film={film}></FilmCard>
        ))
      )}
    </div>
  );
};
