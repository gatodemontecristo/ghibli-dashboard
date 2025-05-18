import clsx from "clsx";
import Image from "next/image";

interface TitlePageProps {
  colorText?: string;
  normalText?: string;
  className?: string;
}
export const TitlePage = ({
  colorText,
  normalText,
  className,
}: TitlePageProps) => {
  return (
    <div className="flex flex-row w-3/4 justify-between items-center px-2">
      <p className={clsx("text-ghibli-black", className)}>
        <span className="font-bold text-ghibli-sky">{colorText}</span>{" "}
        {normalText}
      </p>
      <Image
        src={"/ghibli-web/peanut.svg"}
        alt={"peanut"}
        className="w-8 h-8 "
        width={100}
        height={100}
      ></Image>
    </div>
  );
};
