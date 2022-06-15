import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { RegisterService } from '../service/register.service';
import { REGISTER_ACTIONS } from './register.action';

@Injectable({ providedIn: 'root' })
export class RegisterEffects {
  constructor(
    private action$: Actions,
    private _registerService: RegisterService
  ) {}

  registerUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(REGISTER_ACTIONS.REGISTER)
      //   do((data:any) => { console.log(data); })
    )
  );
}
