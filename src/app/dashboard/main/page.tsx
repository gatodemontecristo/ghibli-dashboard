import { Sidebar } from "@/src/components";
import { FiAlignJustify } from "react-icons/fi";

export const metadata = {
  title: "Ghibli Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="flex flex-row p-5">
      <button className="bg-ghibli-orange hover:bg-[#ff722a] active:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
        <FiAlignJustify />
      </button>
      <Sidebar></Sidebar>
    </div>
  );
}
