import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SharedService } from './shared/service/shared.service';
import { APP_STATE } from './state/app-state';
import { setLoadingState } from './state/app.action';
import { appSelector } from './state/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 14';
  isLoading: any;

  constructor(
    private _store: Store<APP_STATE>,
    private _sharedService: SharedService,
    private _router: Router,
    // @Inject(SecondService) private _secondService: SecondService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this._store.dispatch(setLoadingState({ isLoading: false }));
    }, 1000);

    this._store.select(appSelector).subscribe((loadingRes) => {
      this.isLoading = loadingRes;
    });
  }
}
