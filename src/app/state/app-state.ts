import { REGISTER_STATE } from '../modules/register/store/register';

export interface LOADING_STATE {
  isLoading: boolean;
}

export const LOADING_INITIAL_STATE: LOADING_STATE = {
  isLoading: true,
};

export interface APP_STATE {
  loading: LOADING_STATE;
  userData: REGISTER_STATE;
}
