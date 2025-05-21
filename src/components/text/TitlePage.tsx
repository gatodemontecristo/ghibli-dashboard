import clsx from "clsx";
import Image from "next/image";

interface TitlePageProps {
  colorText?: string;
  normalText?: string;
  className?: string;
  image: string;
  alt: string;
  classImg?: string;
}
export const TitlePage = ({
  colorText,
  normalText,
  className,
  image,
  alt,
  classImg = "w-10 h-10",
}: TitlePageProps) => {
  return (
    <div className="flex flex-row md:w-3/4 w-full justify-between items-center px-2">
      <p className={clsx("text-ghibli-black", className)}>
        <span className="font-bold text-ghibli-sky">{colorText}</span>{" "}
        {normalText}
      </p>
      <Image
        src={image}
        alt={alt}
        className={classImg}
        width={100}
        height={100}
      ></Image>
    </div>
  );
};
