import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_STATE } from './state/app-state';
import { setLoadingState } from './state/app.action';
import { appSelector } from './state/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular 14';
  isLoading: any;

  constructor(private _store: Store<APP_STATE>) {}

  ngOnInit() {
    setTimeout(() => {
      this._store.dispatch(setLoadingState({ isLoading: false }));
    }, 2000);

    this._store.select(appSelector).subscribe((loadingRes) => {
      this.isLoading = loadingRes;
    });
  }
}
