import { createAction, props } from "@ngrx/store";
import { Movie } from "../../../shared/model/movie";

export const Add = createAction('[FavoriteMovie] Add', props<{movie: Movie}>());
export const Remove = createAction('[FavoriteMovie] Remove', props<{movie: Movie}>());
export const Clear = createAction('[FavoriteMovie] Clear');