import { directorItems } from "@/src/constants";
import { DirectorItemsType } from "@/src/types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterProps {
  search: string;
  sorter: string;
  directors: DirectorItemsType[];
}
interface FilterState {
  filterObject: FilterProps;
}

const initialState: FilterState = {
  filterObject: {
    search: "",
    sorter: "title",
    directors: directorItems,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<FilterProps>) {
      state.filterObject = action.payload;
    },
  },
});
export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
