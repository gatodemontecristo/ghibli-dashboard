"use client";

import React from "react";
import { OptionDetail } from "../dashboard/OptionDetail";
import { PosterSection } from "./PosterSection";
import { DetailSection } from "./DetailSection";
import { Underlinedtitle } from "../text/Underlinedtitle";
import { IconText } from "../text/IconText";
import { nanoid } from "nanoid";
import { GhibliFilms } from "@/src/types";
import { IconTextProps } from "@/src/types/interfaces";
import { formatMinutesToTime } from "@/src/utils";

export const CompleteSection = ({ film }: { film: GhibliFilms }) => {
  const featureSection: IconTextProps[] = [
    {
      srcImg: "/ghibli-web/kuro02.svg",
      altImg: "Kuro Icon",
      type: "img",
      title: "Japanese title",
      subtitle: film.original_title,
    },
    {
      srcImg: "/ghibli-web/kuro02.svg",
      altImg: "Kuro Icon",
      type: "img",
      title: "Original title",
      subtitle: film.original_title_romanised,
    },
    {
      srcImg: "/ghibli-web/kuro02.svg",
      altImg: "Kuro Icon",
      type: "img",
      title: "Director",
      subtitle: film.director,
    },
  ];

  const extraSection: IconTextProps[] = [
    {
      srcImg: "/ghibli-web/guy.png",
      altImg: "Producer Icon",
      type: "img",
      title: "Producer",
      subtitle: film.producer,
    },
    {
      srcImg: "year",
      altImg: "",
      type: "icon",
      title: "Realease year",
      subtitle: film.release_date,
    },
    {
      srcImg: "time",
      altImg: "",
      type: "icon",
      title: "Running time",
      subtitle: String(formatMinutesToTime(film.running_time)),
    },
  ];
  return (
    <>
      <OptionDetail film={film}></OptionDetail>
      <div className="flex flex-row w-full">
        <PosterSection
          className="w-1/2"
          srcImage={film.movie_banner}
          altImage="Ghibli Banner"
        ></PosterSection>
        <DetailSection
          className="w-1/2 bg-ghibli-blue "
          src="/ghibli-wallpaper/wallpaperbanner.webp"
        >
          <Underlinedtitle title={film.title}></Underlinedtitle>
          <p className="text-ghibli-white line-clamp-6">{film.description}</p>
        </DetailSection>
      </div>
      <div className="flex flex-row w-full">
        <DetailSection
          className="w-1/3 bg-[#0987cb]"
          src="/ghibli-wallpaper/wallpaper01.jpg"
        >
          <Underlinedtitle title="Features"></Underlinedtitle>

          {featureSection.map((item) => (
            <IconText key={nanoid()} {...item}></IconText>
          ))}
        </DetailSection>

        <PosterSection
          className="w-1/3"
          srcImage={film.image}
          altImage="Ghibli Poster"
        ></PosterSection>

        <DetailSection
          className="w-1/3 bg-[#2cadf4]"
          src="/ghibli-wallpaper/wallpaper02.jpg"
        >
          <Underlinedtitle title="Extras"></Underlinedtitle>

          {extraSection.map((item) => (
            <IconText key={nanoid()} {...item}></IconText>
          ))}
        </DetailSection>
      </div>
    </>
  );
};
