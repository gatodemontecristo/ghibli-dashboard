import { GhibliFilms } from "@/src/types";

interface sortByFieldProps {
  array: GhibliFilms[];
  field: keyof GhibliFilms;
  ascending?: boolean;
}

export const sortByField = ({
  array,
  field,
  ascending = false,
}: sortByFieldProps) => {
  return [...array].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];

    if (typeof aVal === "string" && typeof bVal === "string") {
      return ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }

    if (typeof aVal === "number" && typeof bVal === "number") {
      return ascending ? aVal - bVal : bVal - aVal;
    }

    return 0;
  });
};
