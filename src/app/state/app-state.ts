import { USER_STATE } from '../modules/auth/store/auth';
import { FavoriteMovieState } from '../modules/favorite/state/favorite.state';

export interface LOADING_STATE {
  isLoading: boolean;
}

export const LOADING_INITIAL_STATE: LOADING_STATE = {
  isLoading: true,
};

export interface APP_STATE {
  loading: LOADING_STATE;
  userData: USER_STATE;
  favorite: FavoriteMovieState
}
