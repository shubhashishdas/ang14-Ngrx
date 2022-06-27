import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { APP_STATE } from 'src/app/state/app-state';
import { appSelector } from 'src/app/state/app.selector';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  name : string = 'Shared service';

  constructor(private _store: Store<APP_STATE>) {
    console.log(`${this.name} Initialize`);
  }

  isLoggedIn(): Observable<boolean> {
    return this._store.select(appSelector).pipe(value => value);
  }

  getServiceName() {
    console.log(`${this.name} getServiceName() called`);
  }

  // showName() {
  //   console.log('First Service showName...');
  // }
}
