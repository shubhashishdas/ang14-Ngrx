import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { APP_STATE } from 'src/app/state/app-state';
import { setLoadingState } from 'src/app/state/app.action';
import { WebSeriesService } from '../service/web-series.service';
import { WebSeries } from '../web-series';

@Component({
  selector: 'app-movie',
  templateUrl: './web-series.component.html',
  styleUrls: ['./web-series.component.scss']
})
export class WebSeriesComponent extends WebSeries implements OnInit {

  constructor(
    _webSeriesService: WebSeriesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _store: Store<APP_STATE>
  ) {
    super(_webSeriesService);
  }

  gotoDetailPage(id: string): void {
    this._router.navigate([id], { relativeTo: this._activatedRoute, queryParams: {webseries: true} })
    .then(nav => {
      this._store.dispatch(setLoadingState({isLoading: true}));
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
}
