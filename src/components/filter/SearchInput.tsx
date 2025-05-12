"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export const SearchInput = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="w-[90%] relative">
      <input
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for Ghibli movies..."
        className="w-full pl-4 pr-10 py-2  border rounded border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 text-ghibli-black truncate text-sm"
      />
      <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
    </div>
  );
};
