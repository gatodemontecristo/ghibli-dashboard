"use client";

import { sorterOptions } from "@/src/constants/general";
import { useSetFilter } from "@/src/hooks";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const SorterFilter = () => {
  const { handleChange, filterObject } = useSetFilter();

  return (
    <div className="md:w-64 w-56 relative">
      <select
        id="studio"
        name="studio"
        value={filterObject.sorter}
        onChange={(e) => handleChange(e, "sorter")}
        className="w-full pl-4 pr-10 py-2  border rounded border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-ghibli-black truncate text-sm"
      >
        {sorterOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
    </div>
  );
};
