import { createAction, props } from '@ngrx/store';

export const AUTH_ACTIONS = {
  LOGIN: '[Login] User login',
  LOGIN_SUCCESS: '[Login] User logged-in successfully',
  LOGIN_FAILURE: '[Login] User not logged-in ',
  REGISTER: '[Register] User register',
  REGISTER_SUCCESS: '[Register] User register successfully',
  REGISTER_FAILURE: '[Register] User register failure',
  SET_USER_DATA: '[Register] Ser User Data',
};

export const userLogin = createAction(
  AUTH_ACTIONS.LOGIN,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  AUTH_ACTIONS.LOGIN_SUCCESS,
  props<{
    username: string;
    email: string;
    password: string;
    bio?: string;
    image?: string;
    token?: string;
  }>()
);

export const registerUser = createAction(
  AUTH_ACTIONS.REGISTER,
  props<{ username: string; email: string; password: string }>()
);

export const registerSuccess = createAction(AUTH_ACTIONS.REGISTER_SUCCESS);
