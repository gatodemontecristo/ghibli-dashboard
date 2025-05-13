import { GhibliFilms } from "@/src/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GhibliState {
  favorites: { [key: string]: GhibliFilms };
}

const initialState: GhibliState = {
  favorites: {},
};

const ghibliSlice = createSlice({
  name: "ghibli",
  initialState,
  reducers: {
    setFavoriteGhibli(
      state,
      action: PayloadAction<{ [key: string]: GhibliFilms }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<GhibliFilms>) {
      const ghibli = action.payload;
      const { id } = ghibli;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = ghibli;
      }

      //TODO: No se debe de hacer en Redux
      //localStorage.setItem('favorite-pokemons', JSON.stringify( state.favorites ) );
    },
  },
});

export const { toggleFavorite, setFavoriteGhibli } = ghibliSlice.actions;

export default ghibliSlice.reducer;
