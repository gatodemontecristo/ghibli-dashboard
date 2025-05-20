import Image from "next/image";
import React from "react";

interface NotFoundProps {
  title: string;
  description: string;
}
// This component is used to show a 404 page when the user tries to access a page that does not exist
// It is used in the dashboard and in the app
export const NotFound = ({ title, description }: NotFoundProps) => {
  return (
    <div className="flex flex-col flex-wrap gap-4 px-10 pt-5 pb-15 w-full justify-center text-center items-center">
      <Image
        src="/ghibli-help/kumiko.webp"
        alt="Kumiko upset"
        className="w-1/4 object-cover "
        width={100}
        height={100}
      ></Image>
      <div className="flex flex-col gap-1 w-2/5">
        <h1 className="text-3xl font-bold text-ghibli-sky">{title}</h1>
        <h2 className="text-xl font-semibold text-ghibli-sky">{description}</h2>
        <p className="text-lg text-ghibli-sky">
          <span className="text-2xl font-black">“</span> That&apos;s the most
          boring website I&apos;ve ever seen in my entire life!{" "}
          <span className="text-2xl font-black">”</span>
        </p>
        <div className="w-full flex justify-end text-ghibli-sky italic">
          <p>— Kumiko (Ponyo 2008)</p>
        </div>
      </div>
    </div>
  );
};
