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
      <div className="flex md:flex-row flex-col w-full">
        <PosterSection
          className="md:w-1/2 w-full animate__animated animate__fadeInLeft"
          srcImage={film.movie_banner}
          altImage="Ghibli Banner"
        ></PosterSection>
        <DetailSection
          className="md:w-1/2 w-full bg-ghibli-blue animate__animated animate__fadeInRight"
          src="/ghibli-wallpaper/wallpaperbanner.webp"
        >
          <Underlinedtitle
            textSize="text-xl"
            title={film.title}
          ></Underlinedtitle>
          <p className="text-ghibli-white line-clamp-6">{film.description}</p>
        </DetailSection>
      </div>
      <div className="flex md:flex-row flex-col w-full">
        <DetailSection
          className="md:w-1/3 w-full bg-[#0987cb] animate__animated animate__fadeInLeft"
          src="/ghibli-wallpaper/wallpaper01.jpg"
        >
          <Underlinedtitle
            textSize="text-xl"
            title="Features"
          ></Underlinedtitle>

          {featureSection.map((item) => (
            <IconText key={nanoid()} {...item}></IconText>
          ))}
        </DetailSection>

        <PosterSection
          className="md:w-1/3 w-full animate__fadeInUp animate__animated"
          srcImage={film.image}
          altImage="Ghibli Poster"
        ></PosterSection>

        <DetailSection
          className="md:w-1/3 w-full bg-[#2cadf4] animate__animated animate__fadeInRight"
          src="/ghibli-wallpaper/wallpaper02.jpg"
        >
          <Underlinedtitle textSize="text-xl" title="Extras"></Underlinedtitle>

          {extraSection.map((item) => (
            <IconText key={nanoid()} {...item}></IconText>
          ))}
        </DetailSection>
      </div>
    </>
  );
};
