"use client";

import { MainCardProps } from "@/src/types";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";

export const MainCard = ({
  title,
  secondary,
  intro,
  description,
  image,
  children,
}: MainCardProps) => {
  return (
    <div className="flex flex-col gap-2 md:w-1/2 w-2/3 justify-center items-center">
      <MainCardLogo image={image}></MainCardLogo>
      <MainCardTile title={title}></MainCardTile>
      <MainCardSecondary secondary={secondary}></MainCardSecondary>
      <MainCardIntro intro={intro}></MainCardIntro>
      <MainCardDescription description={description}></MainCardDescription>
      {children}
    </div>
  );
};

export const MainCardLogo = ({ image }: { image: ImageProps }) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      className="w-60 md:w-70 animate__bounceIn animate__animated "
      width={300}
      height={300}
    ></Image>
  );
};

export const MainCardTile = ({ title }: { title: string }) => {
  return (
    <h2
      className={clsx("text-xl md:text-2xl  font-extrabold text-ghibli-white ")}
    >
      {title}
    </h2>
  );
};
export const MainCardSecondary = ({ secondary }: { secondary: string }) => {
  return (
    <p
      className={clsx("text-lg md:text-xl font-light italic text-ghibli-white")}
    >
      {secondary}
    </p>
  );
};

export const MainCardIntro = ({ intro }: { intro: string }) => {
  return <h3 className={clsx("text-ghibli-white  font-bold")}>{intro}</h3>;
};
export const MainCardDescription = ({
  description,
}: {
  description: string;
}) => {
  return <p className={clsx("text-ghibli-white font-light")}>{description}</p>;
};
