import { createSelector } from '@ngrx/store';
import { APP_STATE } from './app-state';

export const appSelector = createSelector(
  (state: APP_STATE) => state.loading,
  (state) => {
    return state.isLoading;
  }
);
