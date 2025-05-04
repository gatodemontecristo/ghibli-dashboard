import { Menusection } from "../../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row bg-slate-100  w-full h-screen text-slate-300">
      <div className="flex w-[12%] ">
        <Menusection />
      </div>
      <div className="flex flex-row w-full">{children}</div>
    </div>
  );
}
