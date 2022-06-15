import { createAction, props } from '@ngrx/store';
import { REGISTER_STATE } from './register';

export const REGISTER_ACTIONS = {
  REGISTER: '[Register] User register',
  SET_USER_DATA: '[Register] Ser User Data',
};

export const registerUser = createAction(REGISTER_ACTIONS.REGISTER, props<{username: string, email:string, password: string}>);

export const setUserData = createAction(REGISTER_ACTIONS.SET_USER_DATA, props<REGISTER_STATE>);
