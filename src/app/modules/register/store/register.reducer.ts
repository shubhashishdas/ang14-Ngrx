import { createReducer, on } from '@ngrx/store';
import { REGISTER_INITIAL_STATE } from './register';
import { registerUser, setUserData } from './register.action';

const _registerReducer = createReducer(
  REGISTER_INITIAL_STATE,
  on(registerUser, (state) => state),
  on(setUserData, (state, action) => {
    console.log(state);
    console.log(action);
    return { ...state };
  })
);

export function RegisterReducer(state: any, action: any) {
  return _registerReducer(state, action);
}
