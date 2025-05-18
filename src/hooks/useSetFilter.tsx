"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setFilters } from "../store/filters/filters";
import { DirectorItemsType } from "../types";
import { directorItems } from "../constants";

export const useSetFilter = () => {
  const dispatch = useAppDispatch();
  const filterObject = useAppSelector((state) => state.filter.filterObject);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
      | DirectorItemsType[],
    filter: string
  ) => {
    dispatch(
      setFilters({
        ...filterObject,
        [filter]: Array.isArray(e) ? e : e.target.value,
      })
    );
  };
  const getResetValue = (filter: string) => {
    switch (filter) {
      case "directors":
        return directorItems;
      case "sorter":
        return "title";
      case "search":
        return "";
      default:
        return "";
    }
  };
  const handleReset = (filter: string) => {
    dispatch(
      setFilters({
        ...filterObject,
        [filter]: getResetValue(filter),
      })
    );
  };

  const handleResetAll = () => {
    dispatch(
      setFilters({
        ...filterObject,
        sorter: getResetValue("sorter") as string,
        directors: getResetValue("directors") as DirectorItemsType[],
      })
    );
  };

  return { handleChange, handleReset, filterObject, handleResetAll };
};
