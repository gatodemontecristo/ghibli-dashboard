"use client";

import { sorterOptions } from "@/src/constants/general";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export const SorterFilter = () => {
  const [selected, setSelected] = useState<string>(sorterOptions[0].value);

  return (
    <div className="w-64 relative">
      <select
        id="studio"
        name="studio"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
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
