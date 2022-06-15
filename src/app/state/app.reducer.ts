import { createReducer, on } from '@ngrx/store';
import { LOADING_INITIAL_STATE } from './app-state';
import { setLoadingState } from './app.action';

const _appReducer = createReducer(
  LOADING_INITIAL_STATE,
  on(setLoadingState, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  })
);

export function AppReducer(state: any, action: any) {
  return _appReducer(state, action);
}
