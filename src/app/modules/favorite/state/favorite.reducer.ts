import { createReducer, on } from "@ngrx/store";
import { FavoriteMovieState } from "./favorite.state";
import { Add, Remove, Clear } from "./favorite.action";

export const initialFavoriteMovieState: FavoriteMovieState = {
  movies: []
}
export const favoriteMovieReducer = createReducer(
  initialFavoriteMovieState,
  on(Add, (state, action) => {
    return {...state, movies: [...state.movies, action.movie]}
  }),
  on(Remove, (state, {movie}) => ({
    ...state, movies: state.movies.filter((m) => m.id !== movie.id)
  })),
  on(Clear, state => initialFavoriteMovieState)
);