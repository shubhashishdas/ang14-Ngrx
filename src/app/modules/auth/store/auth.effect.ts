import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { APP_STATE } from 'src/app/state/app-state';
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
  constructor(private action$: Actions, private _authService: AuthService, private _store: Store<APP_STATE>, private _router: Router) {}

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
          map((userData: any) => {
            this._router.navigate(['gallery']);
            this._store.dispatch(setLoadingState({ isLoading: false }));
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
