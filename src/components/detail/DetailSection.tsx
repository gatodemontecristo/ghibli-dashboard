import clsx from "clsx";
import React from "react";
interface DetailSectionProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
}
export const DetailSection = ({
  className,
  children,
  src,
}: DetailSectionProps) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden  px-10 py-5 flex flex-col justify-center items-start gap-3",
        className
      )}
    >
      <div
        style={{
          backgroundImage: `url('${src}')`,
        }}
        className={clsx(
          "absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10 pointer-events-none"
        )}
        aria-hidden="true"
      ></div>
      {children}
    </div>
  );
};
