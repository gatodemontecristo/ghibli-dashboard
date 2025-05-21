"use client";
import { usePathname } from "next/navigation";
import { Menusection } from "../../components";
import clsx from "clsx";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const isDashboard = pathname === "/dashboard/main";
  return (
    <div className="flex flex-row bg-ghibli-pink  w-full h-screen text-slate-300">
      <div className="flex md:relative absolute w-[12%] ">
        <Menusection />
      </div>
      <div
        className={clsx(
          "flex flex-row w-full flex-wrap",
          isDashboard || "overflow-y-scroll"
        )}
      >
        {children}
      </div>
    </div>
  );
}
