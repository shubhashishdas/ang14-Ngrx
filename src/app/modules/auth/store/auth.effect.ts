import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { setLoadingState } from 'src/app/state/app.action';
import { AuthService } from '../service/auth.service';
import {
  loginSuccess,
  registerSuccess,
  registerUser,
  userLogin,
} from './auth.action';

@Injectable({ providedIn: 'root' })
export class RegisterEffects {
  constructor(private action$: Actions, private _authService: AuthService) {}

  loginUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(userLogin),
      exhaustMap((action) => {
        let saveData = {
          user: {
            email: action.email,
            password: action.password,
          },
        };
        return this._authService.login(saveData).pipe(
          map((userData) => {
            setLoadingState({ isLoading: false });
            return loginSuccess(userData.user);
          }),
          catchError(() => {
            return of();
          })
        );
      })
    )
  );

  registerUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(registerUser),
      switchMap((action) => {
        let saveData = {
          user: {
            email: action.email,
            username: action.username,
            password: action.password,
          },
        };
        return this._authService.registerUser(saveData).pipe(
          map((currentUser) => {
            setLoadingState({ isLoading: false });
            return registerSuccess();
          }),
          catchError(() => {
            return of();
          })
        );
        return of();
      })
    )
  );
}
