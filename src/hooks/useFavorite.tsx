import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { toggleFavorite } from "@/src/store/films/films";
import { FilmCardProps } from "../types/interfaces";
export const useFavorite = ({ film }: FilmCardProps) => {
  const isFavorite = useAppSelector(
    (state) => !!state.ghibli.favorites[film.id]
  );
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch(toggleFavorite(film));
  };

  return { isFavorite, onToggle };
};
