"use client";

import { sorterOptions } from "@/src/constants/general";
import React, { useState } from "react";

export const SorterFilter = () => {
  const [selected, setSelected] = useState<string>(sorterOptions[0].value);

  return (
    <div className="w-64">
      <label
        htmlFor="studio"
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        Selecciona un estudio
      </label>
      <select
        id="studio"
        name="studio"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        {sorterOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
