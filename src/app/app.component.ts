import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FirstService } from './shared/service/first.service';
import { SecondService } from './shared/service/second.service';
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
    // @Inject(SecondService) private _secondService: SecondService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this._store.dispatch(setLoadingState({ isLoading: false }));
    }, 1000);

    this._store.select(appSelector).subscribe((loadingRes) => {
      this.isLoading = loadingRes;
    });

    console.log(this._sharedService.getServiceName());
    // console.log(this._secondService.getServiceName());
    // console.log(this._sharedService.showName());
  }
}
