import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedService } from './shared/service/shared.service';
import { APP_STATE } from './state/app-state';
import { setLoadingState } from './state/app.action';
import { appSelector } from './state/app.selector';

@Component({
  selector: 'mobile-root',
  templateUrl: './mobile.component.html'
})
export class MobileComponent {
  title = 'Angular 14';
  isLoading: any;

  constructor(
    private _store: Store<APP_STATE>,
    private _sharedService: SharedService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this._store.dispatch(setLoadingState({ isLoading: false }));
    }, 1000);

    this._store.select(appSelector).subscribe((loadingRes) => {
      this.isLoading = loadingRes;
    });

    console.log(this._sharedService.getServiceName());
    console.log("In Mobile component");
    // console.log(this._sharedService.showName());
  }
}
