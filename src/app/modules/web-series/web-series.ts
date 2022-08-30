import { Directive, OnDestroy, OnInit } from '@angular/core';
import { WebSeriesService } from './service/web-series.service';

@Directive()
export class WebSeries implements OnInit, OnDestroy {
  webSeriesData: any = [];

  constructor(
    private _webSeriesService: WebSeriesService
  ) {
    console.log('Movie Class Constructor');
  }

  ngOnInit(): void {
    this.getAllWebSeries();
  }

  ngOnDestroy(): void {
    console.log('Movie Class OnDestroy');
  }

  getAllWebSeries() {
    this._webSeriesService.getAllWebSeries().subscribe(webseries => {
      this.webSeriesData = webseries;
    });
  }
}
