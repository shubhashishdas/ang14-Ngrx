import { createAction, props } from '@ngrx/store';

export const APP_ACTIONS = {
  isLoading: '[APP] set loading spinner',
};
export const setLoadingState = createAction(
  APP_ACTIONS.isLoading,
  props<{ isLoading: boolean }>()
);
