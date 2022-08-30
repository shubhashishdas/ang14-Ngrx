import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _activatedRoute: ActivatedRoute
  ) {
    super(_webSeriesService);
  }

  gotoDetailPage(id: string): void {
    this._router.navigate([id], { relativeTo: this._activatedRoute })
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
}
