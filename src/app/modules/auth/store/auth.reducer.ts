import { createReducer, on } from '@ngrx/store';
import { USER_INITIAL_STATE } from './auth';
import { registerSuccess, loginSuccess } from './auth.action';

const _registerReducer = createReducer(
  USER_INITIAL_STATE,
  on(registerSuccess, (state) => {
    return { ...state };
  }),
  on(loginSuccess, (state, action) => {
    let data = {
      username: action.username,
      email: action.email,
      password: action.password,
      bio: action.bio,
      image: action.image,
      token: action.token,
    };
    return { ...state, ...data };
  })
);

export function RegisterReducer(state: any, action: any) {
  return _registerReducer(state, action);
}
