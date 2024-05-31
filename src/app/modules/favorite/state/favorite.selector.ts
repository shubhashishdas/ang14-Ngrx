import { createSelector } from "@ngrx/store";
import { APP_STATE } from "src/app/state/app-state";
import { FavoriteMovieState } from "./favorite.state";

export const selectFavorite = (state: APP_STATE) => state.favorite;

export const favoriteMovieSelector = createSelector(
  selectFavorite,
  (state: FavoriteMovieState) => state.movies
)